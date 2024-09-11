import React, { useState, useEffect } from "react";
import { StyleSheet, View, Button, Text, ScrollView, FlatList, TouchableOpacity } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { loadSoundPreset } from "expo-tone-synth";

export default function Favorites() {
    const [favorites, setFavorites] = useState([]);

    // load sound preset functionality will go here somehow

    return (
        <ScrollView>
            <View style={styles.container}>
                {/* This is where favorites will go */}
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
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
    },
});
