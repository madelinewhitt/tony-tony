import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";
import Slider from "@react-native-community/slider";
import AntDesign from '@expo/vector-icons/AntDesign';
import { adjustFrequency, playWhiteNoise, adjustWhiteNoiseVolume, adjustMasterVolume, pause } from "expo-tone-synth";

export default function WhiteNoiseControls() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [frequency, setFrequency] = useState(0.5);
    const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0.5);
    const [masterVolume, setMasterVolume] = useState(0.5);
    const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values

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
        <View style={styles.container}>
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
                    handleMasterVolume();
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
        </View>
    );
}

const styles = StyleSheet.create({
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
});
