import React from 'react';
import { View, TouchableOpacity, Text, ScrollView, StyleSheet, Image  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardImageLuiza from "../components/CardImageLuiza";

export default function LuizaHome() {
    const navigation = useNavigation();
    return (
    <View style={{ padding: 20 }}>
  
        <View style={styles.sectionCard}>
          <View style={styles.header}>
            <Text style={styles.arrow}> ⇽ </Text>
            <Image source={require('../assets/girspower.png')} style={styles.image} />
          </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/de/73/5e/de735e2d90acab3e3dfe7702a118dcf5.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/a0/e7/1d/a0e71d27c7c28f1e83523e7d1e7dfb5d.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/f9/97/89/f997894c7435fbd99e734524d83ff670.jpg"
          />
          </ScrollView>
        </View>

        <View style={styles.container}>
          <Text style={styles.title}>
            As Meninas SuperPoderosas
            {"\n\n"}
          </Text>
          <Text style={styles.text}>
          Conta a história de três garotas com super poderes: Florzinha, Lindinha e Docinho. Elas foram criadas pelo Professor Utônio, que acidentalmente deixou derrubar o Elemento X na poção da "Garotinha Perfeita" (uma mistura de açúcar, tempero e tudo o que há de bom). Sendo assim, o Elemento X deu a elas super poderes.
          </Text>
        </View>

        <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("LuizaDetail")}
          >
          <Text style={styles.buttonText}>Ver Detalhes da Luiza</Text>
          </TouchableOpacity>

        <View style={styles.footer}>
        <Text style={styles.textt}>© 2025 - Seu App</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({ 
  sectionCard: {
    display: "flex",
    gap: 30,
  },
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "purplewhite",
        padding: 20,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      gap: 100,
  },
  arrow: {
      fontSize: 25,
      borderWidth: 1,
      borderColor: "#000",
      borderRadius: "50%",
  },
  image: {
      width: 40,
      height: 40,
      borderRadius: "50%",
  },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#f182a6",
        textAlign: "center",
    },
    text: {
        fontSize: 16,
        color: "black",
        textAlign: "justify",
        fontStyle: "italic",
        paddingHorizontal: 10,
        width: "120%"
    },
    button: {
      backgroundColor: "#f182a6",
      padding: 5,
      borderRadius: 20,
      borderWidth: 0.5,
      
  },
  buttonText: {
      color: "#fff",
      fontSize: 17,
      textAlign: "center",
  },
  footer: {
    backgroundColor: '#f2f2f2',
    paddingVertical: 45,
    alignItems: 'center',
  },
  textt: {
    color: '#888',
    fontSize: 12,
  },
});