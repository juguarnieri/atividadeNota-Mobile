import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardFullCaio from "../components/CardFullCaio";

export default function CaioHome() {
  const navigation = useNavigation();

  return (
    <View style={{ padding: 20 }}>
      <Text style={styles.textPrincipal}>Bem-vindo à página do Caio!</Text>
      <Text style={styles.subText}>O mais DEV brasileiro!</Text>
      <div style={styles.cards}>
      <div style={styles.card}>
         CIRCULO PRETO NA FOOTER VAI PARA DETALHES
      </div>
      <div style={styles.card}>
      </div>
      </div>
      <div style={styles.inputs}>
      <TextInput style={styles.input}>
      </TextInput>
      <div style={styles.circle}>
      </div>
      </div>
      <CardFullCaio title="wooooow" subTitle="WOOOOOW"image={require('../assets/image.png')} />
      <CardFullCaio title="wooooow" subTitle="WOOOOOW"image={require('../assets/image.png')} />
      <CardFullCaio title="wooooow" subTitle="WOOOOOW"image={require('../assets/image.png')} />
      <div style={styles.circles}>
      <div style={styles.circleFooter}>
      </div>
      <div style={styles.circleFooter}>
      </div>
      <div style={styles.circleFooter}>
      </div>
      <TouchableOpacity  style={styles.blackButton}
        onPress={() => navigation.navigate('CaioDetail')} //Botão para ir para detalhes do Caio
      />
      <div style={styles.circleFooter}>
      </div>

      </div>
    </View>
  );
}

const styles = StyleSheet.create({
    textPrincipal: {
        fontSize: 15,
    },
    subText: {
        fontSize: 10,
        marginBottom:40,
    },
    card: { 
        fontSize: 15,  
        width: 180, 
        height: 180,
        borderRadius: "10%",
        border: "2px solid black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    cards: {
        gap:40,
        display: "flex",
        marginBottom: 30,
    },
    input: {
        borderRadius: "20%",
        width: 300, 
        height: 50,
        border: "2px solid black",
    },
    circle: {
        borderRadius: "50%",
        width: 40, 
        height: 40,
        border: "2px solid black",
    },
    circleFooter: {
        borderRadius: "50%",
        width: 30, 
        height: 30,
        border: "2px solid black",
    },
    circles: {
        display: "flex",
        gap: 50,
        alignItems: "center",
        justifyContent: "center",
    },
    inputs: {
        display: "flex",
        gap: 30,
        marginBottom: 25,
    },
    blackButton: {
        borderRadius: "50%",
        width: 32, 
        height: 32,
        backgroundColor: "black",
        border: "2px solid black",
    }
});