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
import AboutApp from './screens/about/AboutAppScreen';
import AboutAuthor from './screens/about/AboutAuthorScreen';
import ObjectiveScreen from 'screens/about/ObjectiveScreen';
import SourcesScreen from 'screens/about/SourcesScreen';
import TakeTheQuizScreen from './components/module_5/TakeTheQuiz';
import TakeTheQuizResultScreen from './components/module_5/TakeTheQuizResult';
import BarangayQuizScreen from 'components/module_5/BarangayQuiz';
import BarangayResultScreen from 'components/module_5/BarangayQuizResult';
import GuessEraQuizScreen from 'components/module_5/GuessEraQuiz';
import GuessEraResultScreen from 'components/module_5/GuessEraQuizResult';
import BalilihanExplorerHome from './components/module_5/BalilihanExplorerHome';
import BalilihanExplorer_1 from './components/module_5/BalilihanExplorer_1';
import BalilihanExplorer_2 from './components/module_5/BalilihanExplorer_2';
import BalilihanExplorer_3 from './components/module_5/BalilihanExplorer_3';
import SampleLessonExemplar from 'components/module_5/SampleLessonExemplar';
import Module_5 from './screens/modules/Module_5';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Loading"
        screenOptions={{
          headerShown: false,
          animation: 'none', // Explicitly set no animation
        }}>
        <Stack.Screen name="Loading" component={LoadingScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* ABOUT SCREENS */}
        <Stack.Screen name="About" component={AboutScreen} options={{ headerShown: false }} />
        <Stack.Screen name="AboutApp" component={AboutApp} options={{ headerShown: false }} />
        <Stack.Screen name="AboutAuthor" component={AboutAuthor} options={{ headerShown: false }} />
        <Stack.Screen
          name="Objectives"
          component={ObjectiveScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Sources" component={SourcesScreen} options={{ headerShown: false }} />
        {/* MODULES */}
        <Stack.Screen name="Module_1" component={Module_1} options={{ headerShown: false }} />
        <Stack.Screen name="Module_2" component={Module_2} options={{ headerShown: false }} />
        <Stack.Screen name="Module_3" component={Module_3} options={{ headerShown: false }} />
        <Stack.Screen name="Module_4" component={Module_4} options={{ headerShown: false }} />
        <Stack.Screen name="Module_5" component={Module_5} options={{ headerShown: false }} />
        {/* Module 5 Screens */}
        <Stack.Screen
          name="TakeTheQuizScreen"
          component={TakeTheQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TakeTheQuizResultScreen"
          component={TakeTheQuizResultScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BarangayQuizScreen"
          component={BarangayQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BarangayResultScreen"
          component={BarangayResultScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="GuessEraQuizScreen"
          component={GuessEraQuizScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="GuessEraResultScreen"
          component={GuessEraResultScreen}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BalilihanExplorer_1"
          component={BalilihanExplorer_1}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalilihanExplorer_2"
          component={BalilihanExplorer_2}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BalilihanExplorer_3"
          component={BalilihanExplorer_3}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="BalilihanExplorerHome"
          component={BalilihanExplorerHome}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name="SampleLessonExemplar"
          component={SampleLessonExemplar}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
