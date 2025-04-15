import React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function LuizaHome() {
    const navigation = useNavigation();

    return (
    <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 24, marginBottom: 20 }}>Bem-vindo à página da Luiza!</Text>
        <Button
        title="Ver Detalhes da Luiza"
        onPress={() => navigation.navigate('LuizaDetail')}
        />
    </View>
  );
}
