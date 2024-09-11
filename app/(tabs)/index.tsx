// import { Text, StyleSheet, ScrollView, View, Pressable } from "react-native";
// import SaveToFavorites from "./saveToFavorites";
// import WhiteNoiseControls from "./WhiteNoiseControls";
// import { Link } from "expo-router";

// export default function Index() {
// 	return (
// 		<>
// 			<ScrollView>
// 				<View style={styles.container}>
// 					<Text style={styles.titleText}>White Noise Machine</Text>
// 				</View>
// 				<WhiteNoiseControls />
// 				<View style={styles.container}>
// 					<Link
// 						href="./SoundLibrary"
// 						asChild
// 					>
// 						<Pressable style={styles.Button}>
// 							<Text style={styles.buttonText}>
// 								Background Sounds
// 							</Text>
// 						</Pressable>
// 					</Link>
// 					<Link
// 						href="./favorites"
// 						asChild
// 					>
// 						<Pressable style={styles.Button}>
// 							<Text style={styles.buttonText}>
// 								Favorites
// 							</Text>
// 						</Pressable>
// 					</Link>
// 				</View>
// 				<SaveToFavorites />
// 			</ScrollView>
// 		</>
// 	);
// }

// const styles = StyleSheet.create({
// 	container: {
// 		flex: 1,
// 		justifyContent: "center",
// 		alignItems: "center",
// 		padding: 10,
// 	},
// 	titleText: {
// 		color: '#007AFF',
// 		fontSize: 22,
// 		fontFamily: "Inter_700Bold",
// 		padding: 7,
// 	},
// 	buttonText: {
// 		color: '#fff',
// 		fontSize: 18,
// 	},
// 	Button: {
// 		backgroundColor: '#007AFF',
// 		borderRadius: 50,
// 		padding: 10,
// 		color: '#fff',
// 		fontSize: 18,
// 	},
// });

import React from 'react';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import FFT from './FFT';

export default function App() {
	return (
		<ApplicationProvider {...eva} theme={eva.light}>
			<FFT />
		</ApplicationProvider>
	);
}
