import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native';
import { playSoundFromURL, setVolumeForURL, stopSoundFromURL } from "expo-tone-synth";
import Slider from "@react-native-community/slider";
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from '@expo/vector-icons/AntDesign';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from "expo-router";

const SoundLibrary = () => {
    const [birdsOff, setBirdsOff] = useState(true);
    const [birdsChirpingAmplitude, setBirdsChirpingAmplitude] = useState(0.5);
    const [fanOff, setFanOff] = useState(true);
    const [fanAmplitude, setfanAmplitude] = useState(0.5);
    const [fieldOff, setFieldOff] = useState(true);
    const [fieldAmplitude, setFieldAmplitude] = useState(0.5);
    const [forestOff, setForestOff] = useState(true);
    const [forestAmplitude, setForestAmplitude] = useState(0.5);
    const [thunderOff, setThunderOff] = useState(true);
    const [thunderAmplitude, setThunderAmplitude] = useState(0.5);
    const [mangrovesOff, setMangrovesOff] = useState(true);
    const [mangrovesAmplitude, setMangrovesAmplitude] = useState(0.5);
    const [nightSwampOff, setNightSwampOff] = useState(true);
    const [nightSwampAmplitude, setNightSwampAmplitude] = useState(0.5);
    const [rainOff, setRainOff] = useState(true);
    const [rainOnCanopyAmplitude, setrainOnCanopyAmplitude] = useState(0.5);
    const [rainForestOff, setRainForestOff] = useState(true);
    const [rainForestAmplitude, setRainForestAmplitude] = useState(0.5);
    const [riverOff, setRiverOff] = useState(true);
    const [riverAmplitude, setRiverAmplitude] = useState(0.5);
    const [rustlingLeavesOff, setRustlingLeavesOff] = useState(true);
    const [rustlingLeavesAmplitude, setRustlingLeavesAmplitude] = useState(0.5);
    const [singingBirdsOff, setSingingBirdsOff] = useState(true);
    const [singingBirdAmplitude, setSingingBirdsAmplitude] = useState(0.5)
    const [wetlandOff, setWetlandOff] = useState(true);
    const [wetlandAmplitude, setWetlandAmplitude] = useState(0.5);
    const [windOff, setWindOff] = useState(true);
    const [windAmplitude, setWindAmplitude] = useState(0.5);

    const birdsChirping = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/birds-chirping.mp3');
        setBirdsOff(false);
        console.log('Playing birds chirping');
    };

    const birdsChirpingVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/birds-chirping.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopBirdsChirping = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/birds-chirping.mp3');
        setBirdsOff(true);
        console.log('Stopping birds chirping');
    };

    const fan = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/fan-sound.mp3');
        setFanOff(false)
        console.log('Playing fan');
    };

    const fanVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/fan-sound.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopFan = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/fan-sound.mp3');
        setFanOff(true);
        console.log('Stopping fan')
    };

    const field = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/field-ambiance.mp3');
        setFieldOff(false);
        console.log('Playing field ambiance');
    };

    const fieldVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/field-ambiance.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopField = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/field-ambiance.mp3');
        setFieldOff(true);
        console.log('Stopping field');
    };

    const forest = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/forest-ambiance.mp3');
        setForestOff(false);
        console.log('Playing forest ambiance');
    };

    const forestVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/forest-ambiance.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopForest = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/forest-ambiance.mp3');
        setForestOff(true);
        console.log('Stopping forest ambiance');
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

    const mangroves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/mangroves.mp3');
        setMangrovesOff(false);
        console.log('Playing mangroves');
    };

    const mangrovesVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/mangroves.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopMangroves = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/mangroves.mp3');
        setMangrovesOff(true);
        console.log('Stopping mangroves');
    };

    const nightSwamp = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/night-swamp-ambiance.mp3');
        setNightSwampOff(false);
        console.log('Playing night swamp ambiance');
    };

    const nightSwampVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/night-swamp-ambiance.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopNightSwamp = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/night-swamp-ambiance.mp3');
        setNightSwampOff(true);
        console.log('Stopping night swamp ambiance')
    };

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

    const rainForest = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/rainforest.mp3');
        setRainForestOff(false);
        console.log('Playing rain forest');
    };

    const rainForestVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/rainforest.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopRainForest = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/rainforest.mp3');
        setRainForestOff(true);
        console.log('Stopping rain forest');
    };

    const river = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/river.mp3');
        setRiverOff(false);
        console.log('Playing river');
    };

    const riverVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/river.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopRiver = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/river.mp3');
        setRiverOff(true);
        console.log('Stopping river');
    };


    const rustlingLeaves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frustling-leaves.mp3');
        setRustlingLeavesOff(false);
        console.log('Playing rustling leaves');
    };

    const rustlingLeavesVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frustling-leaves.mp3', value);
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
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fwetland-ambiance.mp3');
        setWetlandOff(true);
        console.log('Stopping wetland ambiance');
    };

    const wind = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/windthroughtrees.mp3');
        setWindOff(false);
        console.log('Playing wind through trees');
    };

    const windVolume = async (value) => {
        await setVolumeForURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/windthroughtrees.mp3', value);
        console.log('Volume set to ', value);
    };

    const stopWind = async () => {
        await stopSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai/windthroughtrees.mp3');
        setWindOff(true);
        console.log('Stopping wind');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <Link href="/" asChild>
                <Pressable>
                    <AntDesign name="back" size={24} color="black" style={styles.backButton} />
                </Pressable>
            </Link>
            <View style={styles.container}>
                {birdsOff &&
                    <CustomButton
                        title="Chirping Birds"
                        onPress={birdsChirping}
                    />}
                {!birdsOff &&
                    <CustomButton2
                        sliderValue={birdsChirpingAmplitude}
                        onSliderChange={birdsChirpingVolume}
                        onPress={stopBirdsChirping}
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
                {fieldOff &&
                    <CustomButton
                        title="Field Ambiance"
                        onPress={field}
                    />}
                {!fieldOff &&
                    <CustomButton2
                        sliderValue={fieldAmplitude}
                        onSliderChange={fieldVolume}
                        onPress={stopField}
                    />}
                {forestOff &&
                    <CustomButton
                        title="Forest Ambiance"
                        onPress={forest}
                    />}
                {!forestOff &&
                    <CustomButton2
                        sliderValue={forestAmplitude}
                        onSliderChange={forestVolume}
                        onPress={stopForest}
                    />}
                {thunderOff &&
                    <CustomButton
                        title="Low Thunder"
                        onPress={lowThunder}
                    />}
                {!thunderOff &&
                    <CustomButton2
                        sliderValue={thunderAmplitude}
                        onSliderChange={thunderVolume}
                        onPress={stopThunder}
                    />}
                {mangrovesOff &&
                    <CustomButton
                        title="Mangrove Ambiance"
                        onPress={mangroves}
                    />}
                {!mangrovesOff &&
                    <CustomButton2
                        sliderValue={mangrovesAmplitude}
                        onSliderChange={mangrovesVolume}
                        onPress={stopMangroves}
                    />}
                {nightSwampOff &&
                    <CustomButton
                        title="Swamp at Night Ambiance"
                        onPress={nightSwamp}
                    />}
                {!nightSwampOff &&
                    <CustomButton2
                        sliderValue={nightSwampAmplitude}
                        onSliderChange={nightSwampVolume}
                        onPress={stopNightSwamp}
                    />}
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
                {rainForestOff &&
                    <CustomButton
                        title="Rainforest Ambiance"
                        onPress={rainForest}
                    />}
                {!rainForestOff &&
                    <CustomButton2
                        sliderValue={rainForestAmplitude}
                        onSliderChange={rainForestVolume}
                        onPress={stopRainForest}
                    />}
                {riverOff &&
                    <CustomButton
                        title="River Ambiance"
                        onPress={river}
                    />}
                {!riverOff &&
                    <CustomButton2
                        sliderValue={riverAmplitude}
                        onSliderChange={riverVolume}
                        onPress={stopRiver}
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
                {wetlandOff &&
                    <CustomButton
                        title="Wetland Ambiance"
                        onPress={wetlandAmbiance}
                    />}
                {!wetlandOff &&
                    <CustomButton2
                        sliderValue={wetlandAmplitude}
                        onSliderChange={wetlandVolume}
                        onPress={stopWetlandAmbiance}
                    />}
                {windOff &&
                    <CustomButton
                        title="Wind through trees"
                        onPress={wind}
                    />}
                {!windOff &&
                    <CustomButton2
                        sliderValue={windAmplitude}
                        onSliderChange={windVolume}
                        onPress={stopWind}
                    />}
                <Link href="/" asChild style={styles.HomeButton}>
                    <Pressable>
                        <Text style={styles.buttonText}>Home</Text>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
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

const styles = StyleSheet.create({
    scrollContainer: {
        paddingVertical: 20,
        // alignItems: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
    },
    backButton: {
        flex: 1,
        paddingLeft: 20,
    },
    customButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#00a6ff',
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
        backgroundColor: '#00a6ff',
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
    HomeButton: {
        backgroundColor: '#007AFF',
        borderRadius: 50,
        padding: 10,
        color: '#fff',
        fontSize: 18,
    },
});

export default SoundLibrary;
