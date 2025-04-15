import React from 'react';
import { View, Button, Text, Image, StyleSheet, Scro } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CardShopKevin from "../components/ItemsKevin"
import TextKevin from "../components/TextKevin"
import CardKevin from "../components/CardKevin"
import { ScrollView } from 'react-native-web';

export default function KevinHome() {
    const navigation = useNavigation();

    return (
        <ScrollView>
        <View style={styles.container}>
            <View  style={styles.containerMain}>
                <View style={styles.perfil}>
                    <Text style={styles.seta}> ⭠ </Text>
                    <Image source={require('../assetsKevin/mario-luigi2.png')} style={styles.image} />
                </View>

                <View style={styles.banner}>
                    <View style={styles.card}>
                        <CardKevin
                        info="Texto aqui também"
                        />
                        <CardKevin
                        info="Texto aqui também"
                        />

                    </View>
                        <Text style={styles.setaRight}> ⭢ </Text>
                </View>

                <View style={styles.shop}>
                    <View style={styles.items}>
                        <CardShopKevin
                        info="Lorem Ipsum é simplesmente uma simulação de texto"
                        text="-"
                        text2="+"
                        text3="↩"
                        />

                        <TextKevin
                        info="Lorem Ipsum é simplesmente"
                        text="-"
                        text2="+"
                        text3="↩"
                        />

                        <TextKevin
                        info="Lorem Ipsum é simplesmente"
                        text="-"
                        text2="+"
                        text3="↩"
                        />

                        <CardShopKevin
                        info="Lorem Ipsum é simplesmente uma simulação"
                        text="-"
                        text2="+"
                        text3="↩"
                        />
                    </View>
                </View>

                <Button
                title="Ver Detalhes do Kevin"
                onPress={() => navigation.navigate('KevinDetail')}
                />
            </View>

            
        </View>
        </ScrollView>
        );
}

const styles = StyleSheet.create ({
    container: {
        padding: 20,
        justifyContent: "center",
        display: "flex",
        flexDirection: "column",
        width: 1200,
    },
    containerMain: {
        borderWidth: 3,
        width: "30%",
        height: 1000,
        borderRadius: 20,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    apresentacao: {
        fontSize: 24,
        marginBottom: 20,
    },
    perfil: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: 30,
        width: "90%",
    },
    seta: {
        fontSize: 30,
        borderWidth: 2,
        borderColor: "#000",
        borderRadius: "50%",
    },
    image: {
        width: 70,
        height: 70,
    },
    banner: {
        width: "90%",
        height: 200,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 3,
        backgroundColor: "gray",
        borderRadius: 20,
        marginTop: 30,
    },
    setaRight: {
        fontSize: 30,
    },
    items: {
        display:"flex",
        alignItems: "center",
        justifyContent: "center",
    }
})