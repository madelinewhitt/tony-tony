import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, TextInput, ScrollView, Pressable, Modal, TouchableOpacity } from "react-native";
import Slider from "@react-native-community/slider";
import { Inter_900Black, Inter_700Bold, Inter_100Thin, Inter_300Light, useFonts } from '@expo-google-fonts/inter';
import * as SplashScreen from 'expo-splash-screen';
import FFTChart from "./FFT";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Link } from "expo-router";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { stop, getIsPlaying, adjustFrequency, playWhiteNoise, adjustWhiteNoiseVolume, adjustMasterVolume, checkIfSoundLibraryIsPlaying, pause } from "expo-tone-synth";

SplashScreen.preventAutoHideAsync();

export default function WhiteNoiseTest() {
	const [isPlaying, setIsPlaying] = useState(false);
	const [frequency, setFrequency] = useState(0.5);
	const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0.5);
	const [masterVolume, setMasterVolume] = useState(0.5);
	const [fftData, setFftData] = useState([0, 0.1, 0.2, 0.3, 0.5, 0.3, 0.5, 0.2, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1, 0, 0]);
	const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values
	const [isAnySoundPlaying, setIsAnySoundPlaying] = useState(false);
	const [modalVisible, setModalVisible] = useState(false);
	const [inputValue, setInputValue] = useState('');

	const [loaded, error] = useFonts({
		Inter_700Bold,
	});

	useEffect(() => {
		if (loaded || error) {
			SplashScreen.hideAsync();
		}
	}, [loaded, error]);

	useEffect(() => {
		const checkIfPlaying = async () => {
			const playing = await getIsPlaying();
			const soundLibraryPlaying = await checkIfSoundLibraryIsPlaying();
			setIsAnySoundPlaying(playing || soundLibraryPlaying);
		};

		checkIfPlaying();
	}, []); // Empty dependency array ensures this runs on every mount

	if (!loaded && !error) {
		return null;
	}

	const whiteNoise = async () => {
		await playWhiteNoise();
		setIsPlaying(true);
	};

	const togglePlayPause = () => {
		if (isPlaying) {
			// Logic to stop the sound
			pause();
		} else {
			// Logic to play the sound
			playWhiteNoise();
		}
		setIsPlaying(!isPlaying); // Toggle the state
	};

	const handleFrequency = async () => {
		await adjustFrequency(frequency);
		console.log('Frequency adjusted to ', frequency);
	};

	const handleWhiteNoiseVolume = async () => {
		await adjustWhiteNoiseVolume(whiteNoiseVolume);
		console.log('White noise volume adjusted to ', whiteNoiseVolume);
	};

	const handleMasterVolume = async () => {
		await adjustMasterVolume(masterVolume);
		console.log('Master volume adjusted to ', masterVolume);
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
					step={0.001}
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
					step={0.001}
					style={styles.slider}
				/>
				<Pressable onPress={togglePlayPause}>
					{isPlaying ? (
						<AntDesign name="pausecircle" style={styles.playButton} size={50} color="orange" />
					) : (
						<AntDesign name="play" style={styles.playButton} size={50} color="orange" />
					)}
				</Pressable>
				<Link
					href="../(tabs)/SoundLibrary"
					asChild
					style={isPlaying ? styles.HomeButton : styles.Disabled}
					disabled={!isPlaying}
				>
					<Pressable>
						<Text style={isPlaying ? styles.buttonText : [styles.buttonText, { color: '#a9a9a9' }]}>
							Background Sounds
						</Text>
					</Pressable>
				</Link>
				<Link href="../(tabs)/Favorites" asChild style={styles.HomeButton}>
					<Pressable>
						<Text style={styles.buttonText}>Favorites</Text>
					</Pressable>
				</Link>
				<TouchableOpacity style={styles.HomeButton} onPress={() => setModalVisible(true)}>
					<Text style={styles.buttonText}>Save Preset</Text>
				</TouchableOpacity>
				{/* Modal */}
				<Modal
					animationType="slide"
					transparent={true}
					visible={modalVisible}
					onRequestClose={() => setModalVisible(false)}
				>
					<View style={styles.modalBackground}>
						<View style={styles.modalBox}>
							<TextInput
								style={styles.input}
								placeholder="Enter text"
								value={inputValue}
								onChangeText={setInputValue}
							/>
							<View style={styles.buttonContainer}>
								<Button title="Cancel" onPress={() => setModalVisible(false)} />
								<Button title="Submit" onPress={() => {
									// Handle submit action here
									console.log(inputValue);
									setModalVisible(false);
								}} />
							</View>
						</View>
					</View>
				</Modal>
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
	playButton: {
		padding: 20,
	},
	HomeButton: {
		backgroundColor: '#007AFF',
		borderRadius: 50,
		padding: 10,
		color: '#fff',
		fontSize: 18,
	},
	Disabled: {
		backgroundColor: '#d3d3d3', // Lighter color for disabled state
		borderRadius: 50,
		padding: 10,
		color: '#a9a9a9', // Grey color for text when disabled
		fontSize: 18,
	},
	buttonText: {
		color: '#fff',
		fontSize: 18,
	},
	modalBackground: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'rgba(0, 0, 0, 0.5)',
	},
	modalBox: {
		width: 300,
		padding: 20,
		backgroundColor: 'white',
		borderRadius: 10,
	},
	input: {
		height: 40,
		borderColor: 'gray',
		borderWidth: 1,
		marginBottom: 20,
		paddingHorizontal: 10,
	},
	buttonContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
});
