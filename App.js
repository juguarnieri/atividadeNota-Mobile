import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import StackRoutes from './navigation/StackRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <StackRoutes />
    </NavigationContainer>
  );
}