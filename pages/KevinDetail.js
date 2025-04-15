import React from 'react';
import { View, Text, Image } from 'react-native';

export default function KevinDetail() {
    return (
        <View style={{ padding: 20 }}>
            <Image style={{ borderRadius: "50%" }} source={require('../assetsKevin/perfilKeviin.png')} />
            <Text style={{ fontSize: 24 }}>Kevin Lima</Text>
        </View>
    );
}