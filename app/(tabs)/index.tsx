import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import Slider from "@react-native-community/slider";
import { play, stop, getIsPlaying } from "expo-tone-generator";

export default function HomeScreen() {
	const [frequency, setFrequencyValue] = useState(440);
	const [isPlaying, setIsPlaying] = useState(false);
	const [amplitudes, setAmplitudes] = useState([1.0, 0.5, 0.25]);
	const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values

	useEffect(() => {
		const checkIfPlaying = async () => {
			const playing = await getIsPlaying();
			setIsPlaying(playing);
		};

		checkIfPlaying();
	}, []);

	const handlePlay = async () => {
		console.log("Playing with frequency:", frequency);
		console.log("Playing with amplitudes:", amplitudes);
		await play(frequency, amplitudes, adsr);
		setIsPlaying(true);
	};

	const handleStop = async () => {
		await stop();
		setIsPlaying(false);
	};

	const handleSetFrequency = async (newFrequency) => {
		setFrequencyValue(newFrequency);
		if (isPlaying) {
			await play(newFrequency, amplitudes, adsr);
		}
	};

	const handleSetAmplitude = async (index, value) => {
		const newAmplitudes = [...amplitudes];
		newAmplitudes[index] = value;
		setAmplitudes(newAmplitudes);
		console.log("Updated amplitudes:", newAmplitudes);
		if (isPlaying) {
			await play(frequency, newAmplitudes, adsr);
		}
	};

	return (
		<View style={styles.container}>
			<Text>Frequency: {frequency} Hz</Text>
			<Slider
				style={styles.slider}
				minimumValue={20}
				maximumValue={2000}
				value={frequency}
				onValueChange={setFrequencyValue}
				onSlidingComplete={handleSetFrequency}
			/>
			<Button title="Play Tone" onPress={handlePlay} disabled={isPlaying} />
			<Button title="Stop Tone" onPress={handleStop} disabled={!isPlaying} />
			<Text>Amplitudes</Text>
			{amplitudes.map((amplitude, index) => (
				<View key={index} style={styles.sliderContainer}>
					<Text>
						Amplitude {index + 1}: {amplitude}
					</Text>
					<Slider
						style={styles.slider}
						minimumValue={0}
						maximumValue={1}
						value={amplitude}
						onValueChange={(value) => handleSetAmplitude(index, value)}
					/>
				</View>
			))}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
	},
	sliderContainer: {
		width: "80%",
		marginTop: 20,
	},
	slider: {
		width: 200,
		height: 40,
	},
});
