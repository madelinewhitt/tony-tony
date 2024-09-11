import React, { useState } from "react";
import { StyleSheet, View, Text, Pressable, ScrollView } from "react-native";
import { Layout } from "@ui-kitten/components";
import {
    cancelAnimation,
    Extrapolate,
    interpolate,
    runOnUI,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";
import { cfft } from "../math/fft";
import {
    convWidthForNumBins,
    getBinWidth,
    ithBinToFreq,
    makeOptimalQuadraticBinsForSamples,
} from "../math/convolution";
import { makeInvLogFn } from "../math/invLog";
import AudioSpectrum from "./AudioSpectrum";
import Slider from "@react-native-community/slider";
import AntDesign from '@expo/vector-icons/AntDesign';
// Import the methods from your native Swift module
import { adjustFrequency, playWhiteNoise, adjustWhiteNoiseVolume, adjustMasterVolume, pause, performFFT } from "expo-tone-synth";

const FFT_SIZE = 2048;
const SAMPLING_RATE = 44100;
const N_SAMPLES_TO_PROCESS = 256;
const NUM_BINS = 10;
const LOG_COEFF = 20;
const BIN_WIDTH = getBinWidth(SAMPLING_RATE, FFT_SIZE);

const DISPLAY_BIN_WIDTH = convWidthForNumBins(NUM_BINS, N_SAMPLES_TO_PROCESS) * BIN_WIDTH;
const invLog = makeInvLogFn(LOG_COEFF, N_SAMPLES_TO_PROCESS);
const FIRST_BIN_FREQ = ithBinToFreq(BIN_WIDTH)(invLog(20));
const MAX_BIN_FREQ = BIN_WIDTH * N_SAMPLES_TO_PROCESS;

const calculateBins = makeOptimalQuadraticBinsForSamples(
    NUM_BINS,
    N_SAMPLES_TO_PROCESS,
    LOG_COEFF
);

export default function FFT() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [frequency, setFrequency] = useState(0.5);
    const [whiteNoiseVolume, setWhiteNoiseVolume] = useState(0.5);
    const [masterVolume, setMasterVolume] = useState(0.5);
    const [adsr] = useState([0.1, 0.1, 0.7, 0.1]); // Default ADSR values

    const bins = [...new Array(NUM_BINS)].map(() => useSharedValue(1));

    const updateBinHeights = (values: number[]) => {
        "worklet";
        for (let i = 0; i < NUM_BINS; i++) {
            bins[i].value = interpolate(
                values[i],
                [0, 90, 200, 900],
                [1, 60, 90, 100],
                Extrapolate.CLAMP
            );
        }
    };

    const fadeBinsDown = () => {
        "worklet";
        for (let i = 0; i < NUM_BINS; i++) {
            cancelAnimation(bins[i]);
            bins[i].value = withTiming(1, { duration: 500 });
        }
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            // Logic to stop the sound
            pause();

            // runOnUI(fadeBinsDown)();
        } else {
            // Logic to play the sound
            playWhiteNoise();

            // Set up a repeating interval to fetch FFT data and update the bins
            // const intervalId = setInterval(fetchAndProcessFFT, 150);
            // Clear the interval when sound is stopped
            // return () => clearInterval(intervalId);
        }
        setIsPlaying(!isPlaying); // Toggle the state
    };

    // Assuming performFFT returns an array of frequency magnitudes
    const fetchAndProcessFFT = async () => {
        const fftData = await performFFT();
        const binValues = calculateBins(fftData);
        runOnUI(updateBinHeights)(binValues);
    };

    async function turnOnFFT() {
        console.log("Playing Sound");
        // Call your Swift method to play white noise
        setIsPlaying(true);

        // Set up a repeating interval to fetch FFT data and update the bins
        const intervalId = setInterval(fetchAndProcessFFT, 150);
        // Clear the interval when sound is stopped
        return () => clearInterval(intervalId);
    }

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
            <Layout level="2">
                <View style={styles.container}>
                    <Text style={styles.titleText}>White Noise Machine</Text>
                </View>
                <View style={styles.container}>
                    <Text style={styles.miscText}>Frequency</Text>
                    <Slider
                        value={frequency}
                        onValueChange={(value) => {
                            setFrequency(value);
                            handleFrequency(); // Call the function to adjust frequency in real-time
                        }}
                        maximumValue={8000}
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
                    <View>
                        <AudioSpectrum
                            height={200}
                            bins={bins}
                            frequencyRange={[FIRST_BIN_FREQ, MAX_BIN_FREQ]}
                        />
                    </View>
                </View>
            </Layout>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
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
    slider: {
        width: "100%",
        height: 40,
    },
    playButton: {
        padding: 20,
    },
});
