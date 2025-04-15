import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import Card from "../components/CardDetails"

export default function LuizaDetail() {
  return (
    <View style={styles.container}>
      <Card
    Title="Luiza Schettini"
    Image={require("../assets/fotoLuiza.png")}
    description="Olá meu nome é Luiza Schettini, sou aluna do Senai e do Sesi Valinhos, atualmente cursando o ensino médio e o curso de desenvolvimento de sistema, tenho 17 anos, moro em valinhos, e minha matéria preferida é história"
      />
    </View>
  );
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    }
})