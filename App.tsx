import React from 'react';
import { SafeAreaView } from 'react-native';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';
import './global.css';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <AppNavigator />
    </SafeAreaView>
  );
}
