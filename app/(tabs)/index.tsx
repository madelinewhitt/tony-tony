import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { play, stop, getIsPlaying } from "expo-tone-synth";

const notes = [
	{ name: "C", frequency: 261.63 },
	{ name: "C#", frequency: 277.18 },
	{ name: "D", frequency: 293.66 },
	{ name: "D#", frequency: 311.13 },
	{ name: "E", frequency: 329.63 },
	{ name: "F", frequency: 349.23 },
	{ name: "F#", frequency: 369.99 },
	{ name: "G", frequency: 392.0 },
	{ name: "G#", frequency: 415.3 },
	{ name: "A", frequency: 440.0 },
	{ name: "A#", frequency: 466.16 },
	{ name: "B", frequency: 493.88 },
];

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
			<View style={styles.noteButtonsContainer}>
				{notes.map((note) => (
					<TouchableOpacity
						key={note.name}
						style={styles.noteButton}
						onPress={() => handleSetFrequency(note.frequency)}
					>
						<Text style={styles.noteButtonText}>{note.name}</Text>
					</TouchableOpacity>
				))}
			</View>
			<Text>Frequency: {frequency} Hz</Text>
			<Slider
				style={styles.slider}
				minimumValue={20}
				maximumValue={9000}
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
						Amplitude {index + 1}: {amplitude.toFixed(2)}
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
});
