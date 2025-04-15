import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function CardShopKevin({ info, text, text2, text3 }) {
    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.botao}>
            </TouchableOpacity>

            <Text>{info}</Text>

            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text}>{text2}</Text>
            <Text style={styles.text}>{text3}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 10,
        display: "flex",
        flexDirection: "row",
        marginVertical: 10,
        width: 300,
        alignItems: "center",
        gap: 20,
    },
    botao: {
        height: 30,
        width: 30,
        backgroundColor: "#3455",
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: 10,
    },
    text: {
        borderWidth: 3,
        borderColor: "#000",
        width: 40,
        fontWeight: "bold",
        fontSize: 20,
        height: 30,
        borderRadius: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
});