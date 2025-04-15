import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function TextKevin({ text, text2, text3 }) {
    return (
        <View style={styles.card}>
            <Text>Lorem Ipsum é simplesmente uma simulação de texto</Text>

            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>{text2}</Text>
            <Text style={styles.text}>{text3}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "white",
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        width: 300,
        alignItems: "center",
        gap: 20,
    },
    text: {
        borderWidth: 2,
        borderColor: "#000",
        width: 40,
        height: 30,
        borderRadius: 20,
    }
});