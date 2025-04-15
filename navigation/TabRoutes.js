import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import JuliaHome from '../pages/JuliaHome'; // Importa a página inicial de Julia
import CaioHome from '../pages/CaioHome'; // Importa a página inicial de Caio
import KevinHome from '../pages/KevinHome'; // Importa a página inicial de Kevin
import LuizaHome from '../pages/LuizaHome'; // Importa a página inicial de Luiza
import BernardoHome from '../pages/BernardoHome'; // Importa a página inicial de Bernardo
import { Ionicons } from '@expo/vector-icons'; // Importa os ícones

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          // Define o ícone de acordo com o nome da rota
          if (route.name === 'Julia') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Caio') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Kevin') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Luiza') {
            iconName = 'person-circle-outline';
          } else if (route.name === 'Bernardo') {
            iconName = 'person-circle-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'blue', // Cor do ícone quando a aba está ativa
        tabBarInactiveTintColor: 'gray', // Cor do ícone quando a aba está inativa
        headerTitleAlign: 'center', // Centraliza o título do cabeçalho
      })}
    >
      {/* Definindo as abas com os nomes de cada pessoa e suas respectivas páginas */}
      <Tab.Screen name="Julia" component={JuliaHome} />
      <Tab.Screen name="Caio" component={CaioHome} />
      <Tab.Screen name="Kevin" component={KevinHome} />
      <Tab.Screen name="Luiza" component={LuizaHome} />
      <Tab.Screen name="Bernardo" component={BernardoHome} />
    </Tab.Navigator>
  );
}