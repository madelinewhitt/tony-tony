import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native';
import { playSoundFromURL, setVolumeForURL, stopSoundFromURL } from "expo-tone-synth";
import Slider from "@react-native-community/slider";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

const SoundLibrary = () => {
    const [rainOff, setRainOff] = useState(true);
    const [rainOnCanopyAmplitude, setrainOnCanopyAmplitude] = useState(0.5);
    const [fanOff, setFanOff] = useState(true);
    const [fanAmplitude, setfanAmplitude] = useState(0.25);
    const [thunderOff, setThunderOff] = useState(true);
    const [thunderAmplitude, setThunderAmplitude] = useState(0.25);
    const [ACOff, setACOff] = useState(true);
    const [ACAmplitude, setACAmplitude] = useState(0.25);
    const [wavesOff, setWavesOff] = useState(true);
    const [wavesAmplitude, setWAvesAmplitude] = useState(0.25);
    const [vacuumOff, setVacuumOff] = useState(true);
    const [vacuumAmplitude, setVacuumAmplitude] = useState(0.25);
    const [waterfallOff, setWaterfallOff] = useState(true);
    const [waterfallAmplitude, setWaterfallAmplitude] = useState(0.25);
    const [wetlandOff, setWetlandOff] = useState(true);
    const [wetlandAmplitude, setWetlandAmplitude] = useState(0.25);
    const [rainForestOff, setRainForestOff] = useState(true);
    const [rainForestAmplitude, setRainForestAmplitude] = useState(0.25);
    const [rustlingLeavesOff, setRustlingLeavesOff] = useState(true);
    const [rustlingLeavesAmplitude, setRustlingLeavesAmplitude] = useState(0.25);
    const [singingBirdsOff, setSingingBirdsOff] = useState(true);
    const [singingBirdAmplitude, setSingingBirdsAmplitude] = useState(0.25)

    const rainOnForestCanopy = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frain-on-a-forest-canopy.mp3');
        setRainOff(false);
        console.log('Playing rain on forest canopy');
    };

    const rainForestCanopyVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frain-on-a-forest-canopy.mp3', value);
        console.log('Volume set to ', value);
    }

    const stopRainOnForestCanopy = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frain-on-a-forest-canopy.mp3');
        setRainOff(true);
        console.log('Stopping rain on forest canopy');
    };

    const fan = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Ffan-noise.mp3');
        setFanOff(false)
        console.log('Playing fan');
    };

    const fanVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Ffan-noise.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopFan = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Ffan-noise.mp3');
        setFanOff(true);
        console.log('Stopping fan');
    };

    const lowThunder = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Flowthunder.mp3');
        setThunderOff(false);
        console.log('Playing low thunder');
    };

    const thunderVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Flowthunder.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopThunder = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Flowthunder.mp3');
        setThunderOff(true);
        console.log('Stopping thunder');
    };

    const AC = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2FAC.mp3');
        setACOff(false);
        console.log('Playing AC');
    };

    const ACVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2FAC.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopAC = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2FAC.mp3');
        setACOff(true);
        console.log('Stopping AC');
    };

    const waves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaves-60-min.mp3');
        setWavesOff(false);
        console.log('Playing waves');
    };

    const wavesVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaves-60-min.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopWaves = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaves-60-min.mp3');
        setWavesOff(true);
        console.log('Stopping waves');
    };

    const vacuum = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fvacuum.mp3');
        setVacuumOff(false);
        console.log('Playing vacuum');
    };

    const vacuumVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fvacuum.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopVacuum = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fvacuum.mp3');
        setVacuumOff(true);
        console.log('Stopping vacuum');
    };

    const waterfall = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaterfall.mp3');
        setWaterfallOff(false);
        console.log('Playing waterfall');
    };

    const waterfallVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaterfall.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopWaterfall = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaterfall.mp3');
        setWaterfallOff(true);
        console.log('Stopping waterfall');
    };

    const wetlandAmbiance = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fwetland-ambiance.mp3');
        setWetlandOff(false);
        console.log('Playing wetland ambiance');
    };

    const wetlandVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fwetland-ambiance.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopWetlandAmbiance = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fwetland-ambiance.mp3');
        setWetlandOff(true);
        console.log('Stopping wetland ambiance');
    };

    const rainForest = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frainforest.mp3');
        setRainForestOff(false);
        console.log('Playing rain forest');
    };

    const rainForestVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frainforest.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopRainForest = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frainforest.mp3');
        setRainForestOff(true);
        console.log('Stopping rain forest');
    };

    const rustlingLeaves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frustling-leaves.mp3');
        setRustlingLeavesOff(false);
        console.log('Playing rustling leaves');
    };

    const rustlingLeavesVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frainforest.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopRustlingLeaves = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frustling-leaves.mp3');
        setRustlingLeavesOff(true);
        console.log('Stopping rustling leaves');
    }

    const singingBirds = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fsinging-birds.mp3');
        setSingingBirdsOff(false);
        console.log('Playing singing birds');
    };

    const singingBirdsVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fsinging-birds.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopSingingBirds = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fsinging-birds.mp3');
        setSingingBirdsOff(true);
        console.log('Stopping singing birds');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {rainOff &&
                    <CustomButton
                        title="Rain on a Forest Canopy"
                        onPress={rainOnForestCanopy}
                    />}
                {!rainOff &&
                    <CustomButton2
                        sliderValue={rainOnCanopyAmplitude}
                        onSliderChange={rainForestCanopyVolume}
                        onPress={stopRainOnForestCanopy}
                    />}
                {fanOff &&
                    <CustomButton
                        title="Fan"
                        onPress={fan}
                    />}
                {!fanOff &&
                    <CustomButton2
                        sliderValue={fanAmplitude}
                        onSliderChange={fanVolume}
                        onPress={stopFan}
                    />
                }
                {thunderOff &&
                    <CustomButton
                        title="Low Thunder"
                        onPress={lowThunder}
                    />
                }
                {!thunderOff &&
                    <CustomButton2
                        sliderValue={thunderAmplitude}
                        onSliderChange={thunderVolume}
                        onPress={stopThunder}
                    />
                }
                {ACOff &&
                    <CustomButton
                        title="Air Conditioning"
                        onPress={AC}
                    />
                }
                {!ACOff &&
                    <CustomButton2
                        sliderValue={ACAmplitude}
                        onSliderChange={ACVolume}
                        onPress={stopAC}
                    />}
                {wavesOff &&
                    <CustomButton
                        title="Waves"
                        onPress={waves}
                    />}
                {!wavesOff &&
                    <CustomButton2
                        sliderValue={wavesAmplitude}
                        onSliderChange={wavesVolume}
                        onPress={stopWaves}
                    />}
                {vacuumOff &&
                    <CustomButton
                        title="Vacuum"
                        onPress={vacuum}
                    />
                }
                {!vacuumOff &&
                    <CustomButton2
                        sliderValue={vacuumAmplitude}
                        onSliderChange={vacuumVolume}
                        onPress={stopVacuum}
                    />}
                {waterfallOff &&
                    <CustomButton
                        title="Waterfall"
                        onPress={waterfall}
                    />}
                {!waterfallOff &&
                    <CustomButton2
                        sliderValue={waterfallAmplitude}
                        onSliderChange={waterfallVolume}
                        onPress={stopWaterfall}
                    />}
                {wetlandOff &&
                    <CustomButton
                        title="Wetland Ambiance"
                        onPress={wetlandAmbiance}
                    />}
                {!wetlandOff &&
                    <CustomButton2
                        sliderValue={wetlandAmbiance}
                        onSliderChange={wetlandVolume}
                        onPress={stopWetlandAmbiance}
                    />}
                {rainForestOff &&
                    <CustomButton
                        title="Rainforest"
                        onPress={rainForest}
                    />}
                {!rainForestOff &&
                    <CustomButton2
                        sliderValue={rainForestAmplitude}
                        onSliderChange={rainForestVolume}
                        onPress={stopRainForest}
                    />}
                {rustlingLeavesOff &&
                    <CustomButton
                        title="Rustling Leaves"
                        onPress={rustlingLeaves}
                    />}
                {!rustlingLeavesOff &&
                    <CustomButton2
                        sliderValue={rustlingLeavesAmplitude}
                        onSliderChange={rustlingLeavesVolume}
                        onPress={stopRustlingLeaves}
                    />}
                {singingBirdsOff &&
                    <CustomButton
                        title="Singing Birds"
                        onPress={singingBirds}
                    />}
                {!singingBirdsOff &&
                    <CustomButton2
                        sliderValue={singingBirdAmplitude}
                        onSliderChange={singingBirdsVolume}
                        onPress={stopSingingBirds}
                    />}
                <Link href="../(tabs)/mixer" asChild style={styles.backToMixer}>
                    <Pressable>
                        <Text style={styles.buttonText}>Back to Mixer</Text>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
    );
};

const CustomButton2 = ({ sliderValue, onSliderChange, onPress }) => {
    return (
        <View style={styles.customButton2Container}>
            <Slider
                value={sliderValue}
                onValueChange={onSliderChange}
                maximumValue={1}
                minimumValue={0}
                step={0.01}
                style={styles.slider}
            />
            <TouchableOpacity onPress={onPress} style={styles.trashButton}>
                <FontAwesome name="trash-o" size={24} color="#000" />
            </TouchableOpacity>
        </View>
    );
};


const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity style={styles.customButton} onPress={onPress}>
            <Text style={styles.buttonText}>{title}</Text>
            <Icon name="add" size={30} color="#fff" />
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20,
        alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    customButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        width: '90%',
    },
    backToMixer: {
        backgroundColor: '#007AFF',
        borderRadius: 50,
        padding: 10,
        color: '#fff',
        fontSize: 18,
    },
    customButton2Container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#007AFF',
        borderRadius: 5,
        padding: 15,
        marginTop: 20,
        width: '100%',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    slider: {
        flex: 1,
        height: 40,
    },
    trashButton: {
        paddingLeft: 10,
    },
});

export default SoundLibrary;
