import React from 'react';
import { View, Text, TouchableOpacity, Button, StyleSheet, Pressable } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Link } from "expo-router";

const Mixer = () => {
    return (
        <View style={styles.container}>
            <Link href="../(tabs)/sound-library" asChild style={styles.plusButton}>
                <Pressable>
                    <Icon name="add" size={30} color="#fff" />
                </Pressable>
            </Link>
            <Pressable style={styles.HomeButton} onPress={() => alert('Sound saved to your library')}>
                <Text style={styles.buttonText}>Save Sound</Text>
            </Pressable>
            <Link href="/" asChild style={styles.HomeButton}>
                <Pressable>
                    <Text style={styles.buttonText}>Home</Text>
                </Pressable>
            </Link>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    plusButton: {
        position: 'absolute',
        top: 20,
        right: 20,
        backgroundColor: '#007AFF',
        borderRadius: 50,
        padding: 10,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
    },
    HomeButton: {
        bottom: 20,
        backgroundColor: '#007AFF',
        borderRadius: 50,
        padding: 10,
        color: '#fff',
        fontSize: 18,
    },
});

export default Mixer;
