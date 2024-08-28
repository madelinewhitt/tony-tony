import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, ScrollView, Pressable, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { Inter_900Black, Inter_700Bold, Inter_100Thin, Inter_300Light, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import FFTChart from "./FFT";
import { Link } from "expo-router";
import { stop, getIsPlaying, adjustFrequency, playWhiteNoise, adjustWhiteNoiseVolume, adjustMasterVolume } from "expo-tone-synth";

SplashScreen.preventAutoHideAsync();

export default function WhiteNoiseTest() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [frequency, setFrequency] = useState(0.5);
	const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0.5);
	const [masterVolume, setMasterVolume] = useState(0.5);
	const [fftData, setFftData] = useState([0, 0.1, 0.2, 0.3, 0.5, 0.3, 0.5, 0.2, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0, 0]);
	const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values

	const [loaded, error] = useFonts({
		Inter_700Bold,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
		const checkIfPlaying = async () => {
			const playing = await getIsPlaying();
			setIsPlaying(playing);
		};

		checkIfPlaying();
	}, [loaded, error]);

	if (!loaded && !error) {
		return null;
	}

	const whiteNoise = async () => {
		await playWhiteNoise();
		setIsPlaying(true);
	}

	const handleFrequency = async () => {
		await adjustFrequency(frequency);
		console.log('Frequency adjusted to ', frequency);
	}

	const handleWhiteNoiseVolume = async () => {
		await adjustWhiteNoiseVolume(whiteNoiseVolume);
		console.log('White noise volume adjusted to ', whiteNoiseVolume);
	}

	const handleMasterVolume = async () => {
		await adjustMasterVolume(masterVolume);
		console.log('Master volume adjusted to ', masterVolume);
	}

	const handleStop = async () => {
		await stop();
		setIsPlaying(false);
		setFftData([]);
	};

	return (
		<ScrollView>
			<View style={styles.container}>
				<Text style={styles.titleText}>Custom Noise Machine</Text>
				<Text style={styles.miscText}>Frequency</Text>
				<Slider
					value={frequency}
					onValueChange={(value) => {
						setFrequency(value);
						handleFrequency(); // Call the function to adjust frequency in real-time
					}}
					maximumValue={10000}
					minimumValue={20}
					step={1}
					style={styles.slider}
				/>
				<Text style={styles.miscText}>Volume</Text>
				<Slider
					value={whiteNoiseVolume}
					onValueChange={(value) => {
						setWhiteNoiseVolume(value);
						handleWhiteNoiseVolume();
					}}
					maximumValue={1}
					minimumValue={0}
					step={0.01}
					style={styles.slider}
				/>
				<Text style={styles.miscText}>Master Volume</Text>
				<Slider
					value={masterVolume}
					onValueChange={(value) => {
						setMasterVolume(value);
						handleMasterVolume(); // Call the function to adjust frequency in real-time
					}}
					maximumValue={1}
					minimumValue={0}
					step={0.01}
					style={styles.slider}
				/>
				{/* make this a play pause button instead */}
				<Button title="Play White Noise" onPress={whiteNoise} disabled={isPlaying} />
				<Button title="Stop" onPress={handleStop} disabled={!isPlaying} />
				<Link href="../(tabs)/SoundLibrary" asChild style={styles.HomeButton}>
					<Pressable>
						<Text style={styles.buttonText}>Background Sounds</Text>
					</Pressable>
				</Link>
				<Link href="../(tabs)/SoundLibrary" asChild style={styles.HomeButton}>
					<Pressable>
						<Text style={styles.buttonText}>Favorites</Text>
					</Pressable>
				</Link>
				<Link href="../(tabs)/SoundLibrary" asChild style={styles.HomeButton}>
					<Pressable>
						<Text style={styles.buttonText}>Save Preset</Text>
					</Pressable>
				</Link>
				{/* <FFTChart data={fftData} /> */}
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	titleText: {
		color: '#007AFF',
		fontSize: 22,
		fontFamily: "Inter_700Bold",
		padding: 7,
	},
	miscText: {
		color: '#007AFF',
		fontSize: 18,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	slider: {
		width: "100%",
		height: 40,
	},
	HomeButton: {
		backgroundColor: '#007AFF',
		borderRadius: 50,
		padding: 10,
		color: '#fff',
		fontSize: 18,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
});