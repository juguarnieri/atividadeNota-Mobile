import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabRoutes from './TabRoutes';
import JuliaHome from '../pages/JuliaHome';
import CaioHome from '../pages/CaioHome';
import KevinHome from '../pages/KevinHome';
import LuizaHome from '../pages/LuizaHome';
import BernardoHome from '../pages/BernardoHome';
import JuliaDetail from '../pages/JuliaDetail';
import CaioDetail from '../pages/CaioDetail';
import KevinDetail from '../pages/KevinDetail';
import LuizaDetail from '../pages/LuizaDetail';
import BernardoDetail from '../pages/BernardoDetail';

const Stack = createNativeStackNavigator();

export default function StackRoutes() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Tabs"
        component={TabRoutes}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="JuliaHome"
        component={JuliaHome}
        options={{ title: 'Página da Julia' }}
      />
      <Stack.Screen
        name="CaioHome"
        component={CaioHome}
        options={{ title: 'Página do Caio' }}
      />
      <Stack.Screen
        name="KevinHome"
        component={KevinHome}
        options={{ title: 'Página do Kevin' }}
      />
      <Stack.Screen
        name="LuizaHome"
        component={LuizaHome}
        options={{ title: 'Página da Luiza' }}
      />
      <Stack.Screen
        name="BernardoHome"
        component={BernardoHome}
        options={{ title: 'Página do Bernardo' }}
      />
      <Stack.Screen
        name="JuliaDetail"
        component={JuliaDetail}
        options={{ title: 'Detalhes da Julia' }}
      />
      <Stack.Screen
        name="CaioDetail"
        component={CaioDetail}
        options={{ title: 'Detalhes do Caio' }}
      />
      <Stack.Screen
        name="KevinDetail"
        component={KevinDetail}
        options={{ title: 'Detalhes do Kevin' }}
      />
      <Stack.Screen
        name="LuizaDetail"
        component={LuizaDetail}
        options={{ title: 'Detalhes da Luiza' }}
      />
      <Stack.Screen
        name="BernardoDetail"
        component={BernardoDetail}
        options={{ title: 'Detalhes do Bernardo' }}
      />
    </Stack.Navigator>
  );
}