import React, { useState } from 'react';
import { Modal, View, TextInput, Button, Text, StyleSheet } from 'react-native';
import { saveSoundPreset, SoundPreset } from "expo-tone-synth";

const MyModalComponent = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [preset, setPreset] = useState<SoundPreset | null>(null);

    const handleSubmit = async () => {
        console.log('Submitted Input:', inputValue);
        setModalVisible(false);

        try {
            const savedPreset = await saveSoundPreset();  // Call saveSoundPreset to get the preset
            setPreset(savedPreset);  // Store the preset in state
            console.log('Success', savedPreset); // making sure that the states are properly being stored 

            // I believe this is where it needs to be saved to a database 

        } catch (error) {
            console.error('Error saving preset:', error);
        }

    };

    return (
        <View style={styles.container}>
            <Button title="Save Sound" onPress={() => setModalVisible(true)} />

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalBox}>
                        <Text style={styles.modalTitle}>Enter a Preset Name</Text>

                        <TextInput
                            style={styles.input}
                            placeholder="Enter text"
                            value={inputValue}
                            onChangeText={setInputValue}
                        />

                        <View style={styles.buttonContainer}>
                            <Button title="Cancel" onPress={() => setModalVisible(false)} />
                            <Button title="Submit" onPress={handleSubmit} />
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    modalTitle: {
        fontSize: 18,
        marginBottom: 10,
    }
});

export default MyModalComponent;
