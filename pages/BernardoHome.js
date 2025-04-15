import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
    Button,
    FlatList,
    SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Card from "../components/CardTextBernardo"


const data = [
    { id: '1', title: 'Card' },
    { id: '2', title: 'Card' },
    { id: '3', title: 'Card' },
    { id: '4', title: 'Card' },
    { id: '5', title: 'Card' },
    { id: '6', title: 'Card' },
    { id: '7', title: 'Card' },
    { id: '8', title: 'Card' },
    { id: '9', title: 'Card' },
    { id: '10', title: 'Card' },
  ];

export default function BernardoHome() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <div style={styles.container2}>
                <Image source={require("../assets/bernardo.png")} style={styles.perfil} />
                <Text> CLIQUE NO AZUL E VEJA MEU PERFIL </Text>
                <Button 
                title=""
                onPress={() => navigation.navigate('BernardoDetail')}
                />
            </div>
            <FlatList
        style={styles.horizontalList}
        data={data} 
        horizontal
        showsHorizontalScrollIndicator={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.horizontalItem}>{item.title}</Text>
        )}
      />
        <div style={styles.cards}>
        <Card 
        title="Essa é uma atividade avaliativa solicitada pelos docentes Marcelo e Thiago"
        />
        <Image source={require("../assets/dev.png")} style={styles.card} />
        <Card 
        title="Atividade super top que estou muito feliz em fazer, e serei bem avaliado,   i love teachers"
        />
        </div>
           </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        padding: "20",
        gap: 15
    },
    container2: {
        display: "flex",
        flexDirection: "row",
        gap: 15,
        alignItems: "center",
        marginTop: 15
    }, 
    perfil: {
    borderRadius: 50,
    width: 40,
    height: 40
    },
    horizontalList: {
        marginTop: 20,
        marginBottom: 20,
        paddingHorizontal: 10,
        maxHeight: 50, 
      },
      horizontalItem: {
        fontSize: 18,
        padding: 10,
        backgroundColor: 'white',
        border: "2px solid black",
        marginHorizontal: 5,
        borderRadius: 10,
        textAlign: 'center'
      },
    cards: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 20
    },
    card: {
        width: 300,
        height: 300,
        borderRadius: 20
    }
});
