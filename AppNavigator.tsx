import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LoadingScreen from './screens/LoadingScreen';
import Button1 from './screens/Button1';
import AboutApp from './screens/AboutAppScreen';
import AboutAuthor from './screens/AboutAuthorScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutApp" component={AboutApp} options={{ headerShown: false }} />
        <Stack.Screen name="AboutAuthor" component={AboutAuthor} options={{ headerShown: false }} />
        <Stack.Screen name="Button1" component={Button1} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
