import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import CardImageTopJulia from "../components/CardImageTopJulia";
import CardSquareJulia from "../components/CardSquareJulia";

import { useNavigation } from "@react-navigation/native";

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.blackButton}
            activeOpacity={0.7}
            onPress={() => navigation.navigate("JuliaDetail")}
          />
          <View style={styles.circleImages}>
            <Image
              source={require("../assets/perfil.png")}
              style={styles.circleImage}
            />
            <Image
              source={require("../assets/perfil2.png")}
              style={styles.circleImage}
            />
          </View>
        </View>

        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <FlatList
            data={[
              { id: 9, image: require("../assets/princesaGeral.png") },
              { id: 10, image: require("../assets/princesaGeral2.png") },
            ]}
            renderItem={({ item }) => <CardSquareJulia image={item.image} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            scrollEnabled={false} 
            columnWrapperStyle={{ justifyContent: "space-between" }}
            contentContainerStyle={{ gap: 16, marginBottom: 20 }}
          />

         <CardImageTopJulia
            title="Ariel"
            image={require("../assets/ariel.png")}
            description="Descrição do Card 1."
          />
          <CardImageTopJulia
            title="Branca de Neve"
            image={require("../assets/brancaNeve.png")}
            description="Descrição do Card 2."
          />
          <CardImageTopJulia
            title="Cinderela"
            image={require("../assets/cinderela.png")}
            description="Descrição do Card 3."
          />
          <CardImageTopJulia
            title="Pocahontas"
            image={require("../assets/pocahontas.png")}
            description="Descrição do Card 4."
          />
          <CardImageTopJulia
            title="Frozen"
            image={require("../assets/frozen.png")}
            description="Descrição do Card 5."
          />
          <CardImageTopJulia
            title="Bela"
            image={require("../assets/bela.png")}
            description="Descrição do Card 6."
          />

        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  blackButton: {
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: "#000",
    opacity: 0.8,
  },
  circleImages: {
    flexDirection: "row",
    gap: 10,
  },
  circleImage: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: "#000",
  },
  scrollContainer: {
    paddingHorizontal: 20,
    paddingBottom: 40,
    gap: 20,
  },
});


