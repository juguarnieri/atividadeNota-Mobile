import React from 'react';
import { View, Button, Text, ScrollView, StyleSheet  } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import CardImageLuiza from "../components/CardImageLuiza";

export default function LuizaHome() {
    const navigation = useNavigation();
    return (
    <View style={{ padding: 20 }}>
  
        <View style={styles.sectionCard}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/58/45/7a/58457a49b9167aa55575b78befa6ba4c.jpg"
          />
          <CardImageLuiza 
          image="https://i.pinimg.com/736x/de/73/5e/de735e2d90acab3e3dfe7702a118dcf5.jpg"
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
            
          </Text>

        </View>

        <Button
        title="Ver Detalhes da Luiza"
        onPress={() => navigation.navigate('LuizaDetail')}
        />
    </View>
  );
}

const styles = StyleSheet.create({ 
  sectionCard: {
    display: "flex",
  }
});