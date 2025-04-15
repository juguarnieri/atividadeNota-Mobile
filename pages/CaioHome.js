import React from 'react';
import { View,TouchableOpacity, Text, StyleSheet, TextInput,SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardFullCaio from "../components/CardFullCaio";

export default function CaioHome() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ padding: 20 }}>
      <Text style={styles.textPrincipal}>Bem-vindo à página do Caio!</Text>
      <Text style={styles.subText}>O mais DEV brasileiro!</Text>
      <View style={styles.cards}>
      <TouchableOpacity style={styles.card}>
         CIRCULO PRETO NA FOOTER VAI PARA DETALHES
      </TouchableOpacity>
      <TouchableOpacity style={styles.card}>
      </TouchableOpacity>
      </View>
      <Vie      w style={styles.inputs}>
      <TextInput style={styles.input}>
      </TextInput>
      <View style={styles.circle}>
      </View>
      </Vie>
      <CardFullCaio title="wooooo0000000000000000w" subTitle="WOOOOOW"image={require('../assets/perfilBernardo.jpg')} />
      <CardFullCaio title="wooooo6666666666666666w" subTitle="WOOOOOW"image={require('../assets/CaioLacerda.jpg')} />
      <CardFullCaio title="woooo7777777777777777ow" subTitle="WOOOOOW"image={require('../assets/image.png')} />
      <View style={styles.circles}>
      <View style={styles.circleFooter}>
      </View>
      <View style={styles.circleFooter}>
      </View>
      <View style={styles.circleFooter}>
      </View>
      <TouchableOpacity  style={styles.blackButton}
        onPress={() => navigation.navigate('CaioDetail')} //Botão para ir para detalhes do Caio
      />
      <View style={styles.circleFooter}>
      </View>
      </View>
    </SafeAreaView>
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
        flexDirection: "row",
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
        flexDirection: "row",
    },
    inputs: {
        display: "flex",
        gap: 30,
        marginBottom: 25,
        flexDirection: "row",
    },
    blackButton: {
        borderRadius: "50%",
        width: 32, 
        height: 32,
        backgroundColor: "black",
        border: "2px solid black",
    }
});