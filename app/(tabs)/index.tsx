import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, Pressable, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { Link } from "expo-router";
import { play, stop, getIsPlaying, playWhiteNoise, setWhiteNoisePitch, playBrownNoise, playPinkNoise, setWhiteNoiseAmplitude } from "expo-tone-synth";

export default function HomeScreen() {
	const [frequency, setFrequencyValue] = useState(440);
	const [isPlaying, setIsPlaying] = useState(false);
	const [amplitude, setAmplitude] = useState(0.5);
	const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values

	useEffect(() => {
		const checkIfPlaying = async () => {
			const playing = await getIsPlaying();
			setIsPlaying(playing);
		};

		checkIfPlaying();
	}, []);

	const handleWhiteNoise = async () => {
		await playWhiteNoise();
		setIsPlaying(true);
		console.log('Playing white noise');
	};

	const handleBrownNoise = async () => {
		await playBrownNoise();
		setIsPlaying(true);
		console.log('Playing brown noise');
	};

	const handlePinkNoise = async () => {
		await playPinkNoise();
		setIsPlaying(true);
		console.log('Playing pink noise');
	};

	const handleStop = async () => {
		await stop();
		setIsPlaying(false);
	};

	const handleSetFrequency = async (newFrequency) => {
		setWhiteNoisePitch(newFrequency);
		if (isPlaying) {
			await playWhiteNoise();
		}
	};

	const adjustAmplitude = async (value) => {
		if (isPlaying) {
			await setWhiteNoiseAmplitude(value)
		}
	};

	return (
		<View style={styles.container}>
			{/* <Text>Frequency: {frequency} Hz</Text>
			<Slider
				style={styles.slider}
				minimumValue={20}
				maximumValue={150}
				value={frequency}
				onValueChange={setFrequencyValue}
				onSlidingComplete={handleSetFrequency}
			/> */}
			<Text>Amplitude</Text>
			<Slider
				value={amplitude}
				onValueChange={adjustAmplitude}
				maximumValue={1}
				minimumValue={0}
				step={0.01}
				style={styles.slider}
			/>
			<Button title="Play White Noise" onPress={handleWhiteNoise} disabled={isPlaying} />
			<Button title="Play Pink Noise" onPress={handlePinkNoise} disabled={isPlaying} />
			<Button title="Play Brown Noise" onPress={handleBrownNoise} disabled={isPlaying} />
			<Button title="Stop Tone" onPress={handleStop} disabled={!isPlaying} />
			<Link href="../(tabs)/mixer" asChild style={styles.HomeButton}>
				<Pressable>
					<Text style={styles.buttonText}>Mixer</Text>
				</Pressable>
			</Link>
			<Link href="../(tabs)/mixer" asChild style={styles.HomeButton}>
				<Pressable>
					<Text style={styles.buttonText}>My Sounds</Text>
				</Pressable>
			</Link>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	noteButtonsContainer: {
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		marginBottom: 20,
	},
	noteButton: {
		width: 40,
		height: 40,
		margin: 5,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#1E90FF",
		borderRadius: 5,
	},
	noteButtonText: {
		color: "white",
		fontSize: 16,
	},
	sliderContainer: {
		width: "80%",
		marginTop: 10,
	},
	slider: {
		width: "100%",
		height: 40,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
	HomeButton: {
		backgroundColor: '#007AFF',
		borderRadius: 50,
		padding: 10,
		color: '#fff',
		fontSize: 18,
	},
});
