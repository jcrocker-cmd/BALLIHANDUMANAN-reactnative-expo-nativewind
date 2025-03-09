import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from 'components/Container';
import logo from '../assets/logo-white.png';
import towergrass_small from '../assets/towergrass-small.png';
import IconButton from 'components/Button';

import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import { useFonts } from 'expo-font';
import { Dimensions } from 'react-native';
import AppLoading from 'expo-app-loading';

import icon from '../assets/bulb_icon_white.png';

const { width, height } = Dimensions.get('window');

export default function App() {
  const navigation = useNavigation();

  // Load local TTF font
  const [fontsLoaded] = useFonts({
    InknutRegular: require('../assets/fonts/InknutAntiqua-Regular.ttf'),
    InknutBold: require('../assets/fonts/InknutAntiqua-Bold.ttf'),
    InknutSemiBold: require('../assets/fonts/InknutAntiqua-SemiBold.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity className="mt-16 items-end" onPress={() => navigation.navigate('About')}>
          <Image source={icon} resizeMode="contain" style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        {/* Top Section (Title Image) */}
        <View style={{ alignItems: 'center' }}>
          <Image source={logo} style={{ width: '100%', height: 100 }} resizeMode="contain" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-72 flex gap-5 py-4">
            <IconButton
              icon="people-outline"
              text="Beginning: Town and its People"
              onPress={() => navigation.navigate('Module_1')}
            />

            <IconButton
              icon="people-outline"
              text="Balilihan’s Journey: Three
                  Periods of Colonial influence"
              onPress={() => navigation.navigate('Module_2')}
            />

            <IconButton
              icon="time-outline"
              text="Balilihan in the Postwar Era and Beyond"
              onPress={() => navigation.navigate('Module_3')}
            />

            <IconButton
              icon="heart-outline"
              text="Balilihan’s Cultural Heritage"
              onPress={() => navigation.navigate('Module_4')}
            />

            <IconButton
              icon="heart-outline"
              text="Assessment and Activities"
              onPress={() => navigation.navigate('Quiz')}
            />
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </Container>
    </SafeAreaView>
  );
}
