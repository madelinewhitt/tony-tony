import React, { useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Pressable, StyleSheet } from 'react-native';
import { playSoundFromURL } from "expo-tone-synth";
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from "expo-router";

const SoundLibrary = () => {
    const [sound, setSound] = useState();
    const [israinOnCanopyVisible, setrainOnCanopyVisible] = useState(true);


    const rainOnForestCanopy = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frain-on-a-forest-canopy.mp3');
        setrainOnCanopyVisible(false);
        console.log('Playing rain on forest canopy');
    };

    const fan = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Ffan-noise.mp3');
        console.log('Playing fan');
    };

    const lowThunder = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Flowthunder.mp3');
        console.log('Playing low thunder');
    };

    const AC = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2FAC.mp3');
        console.log('Playing AC');
    };

    const waves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fwaves-60-min.mp3');
        console.log('Playing waves');
    };

    const vacuum = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fvacuum.mp3');
        console.log('Playing vacuum');
    };

    const waterfall = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/may-or-may-not-use%2Fvacuum.mp3');
        console.log('Playing waterfall');
    };

    const wetlandAmbiance = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fwetland-ambiance.mp3');
        console.log('Playing wetland ambiance');
    };

    const rainForest = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frainforest.mp3');
        console.log('Playing rain forest');
    };

    const rustlingLeaves = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Frustling-leaves.mp3');
        console.log('Playing rustling leaves');
    };

    const singingBirds = async () => {
        await playSoundFromURL('https://pub-aa8746cea6d14e08ad052f51cb88797d.r2.dev/stability-ai%2Fsinging-birds.mp3');
        console.log('Playing singing birds');
    };

    return (
        <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.container}>
                {israinOnCanopyVisible &&
                    <CustomButton
                        title="Rain on a Forest Canopy"
                        onPress={rainOnForestCanopy}
                    />}
                <CustomButton
                    title="Fan"
                    onPress={fan}
                />
                <CustomButton
                    title="Low Thunder"
                    onPress={lowThunder}
                />
                <CustomButton
                    title="Air Conditioning"
                    onPress={AC}
                />
                <CustomButton
                    title="Waves"
                    onPress={waves}
                />
                <CustomButton
                    title="Vacuum"
                    onPress={vacuum}
                />
                <CustomButton
                    title="Waterfall"
                    onPress={waterfall}
                />
                <CustomButton
                    title="Wetland Ambiance"
                    onPress={wetlandAmbiance}
                />
                <CustomButton
                    title="Rainforest"
                    onPress={rainForest}
                />
                <CustomButton
                    title="Rustling Leaves"
                    onPress={rustlingLeaves}
                />
                <CustomButton
                    title="Singing Birds"
                    onPress={singingBirds}
                />
                <Link href="../(tabs)/mixer" asChild style={styles.backToMixer}>
                    <Pressable>
                        <Text style={styles.buttonText}>Back to Mixer</Text>
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
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
});

export default SoundLibrary;
