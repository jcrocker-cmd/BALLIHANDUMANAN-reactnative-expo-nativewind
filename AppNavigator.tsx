import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import AboutScreen from './screens/AboutScreen';
import LoadingScreen from './screens/LoadingScreen';
import Module_1 from './screens/modules/Module_1';
import Module_2 from './screens/modules/Module_2';
import Module_3 from './screens/modules/Module_3';
import Module_4 from './screens/modules/Module_4';
import AboutApp from './screens/AboutAppScreen';
import AboutAuthor from './screens/AboutAuthorScreen';
import QuizScreen from './components/module_5/Quiz';
import ResultScreen from './components/module_5/Result';
import Barangay from './components/module_5/Barangay';
import Module_5 from './screens/modules/Module_5';

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
        <Stack.Screen name="Module_1" component={Module_1} options={{ headerShown: false }} />
        <Stack.Screen name="Module_2" component={Module_2} options={{ headerShown: false }} />
        <Stack.Screen name="Module_3" component={Module_3} options={{ headerShown: false }} />
        <Stack.Screen name="Module_4" component={Module_4} options={{ headerShown: false }} />
        <Stack.Screen name="Module_5" component={Module_5} options={{ headerShown: false }} />
        <Stack.Screen name="Quiz" component={QuizScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="Result" component={ResultScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Barangay" component={Barangay} options={{ headerShown: false }} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
