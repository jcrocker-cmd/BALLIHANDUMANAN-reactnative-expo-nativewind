import React, { useEffect, useState } from 'react';
import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Container } from '../components/Container';
import logo from '../assets/logo-loading.png';
import towergrass from '../assets/towergrass.png';
import * as SplashScreen from 'expo-splash-screen';
import { Dimensions } from 'react-native';
import { useFonts } from 'expo-font';

const { width, height } = Dimensions.get('window');

export default function LoadingScreen({ navigation }: { navigation: any }) {
  const [fontsLoaded] = useFonts({
    InknutRegular: require('../assets/fonts/InknutAntiqua-Regular.ttf'),
    InknutBold: require('../assets/fonts/InknutAntiqua-Bold.ttf'),
    InknutSemiBold: require('../assets/fonts/InknutAntiqua-SemiBold.ttf'),
  });

  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepareApp() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setAppReady(true);

        setTimeout(() => {
          navigation.replace('Home'); // Navigate after 4 seconds
        }, 4000);
      }
    }

    prepareApp();
  }, [fontsLoaded]);

  if (!appReady) {
    return null; // Prevent rendering until fonts are loaded
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" />

      <Container>
        <Text style={{ color: '#fff' }} className="py-2 pt-32 text-center font-inknut text-sm">
          Learn and Discover Balilihan:{'\n'}Splendor behind the Greens
        </Text>
        <View className="py-1" style={{ alignItems: 'center', marginBottom: 5 }}>
          <Image source={logo} style={{ width: '100%', height: 100 }} resizeMode="contain" />
        </View>
        <Text style={{ color: '#fff' }} className="py-2 text-center font-inknut text-base">
          A Learning Kit for Teaching{'\n'}Local History and Cultural Heritage
        </Text>
        <Text style={{ color: '#fff' }} className="py-2 text-center font-inknut text-sm">
          Municipality of Balilihan
        </Text>
        <View style={{ width: '100%', alignItems: 'center' }}>
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Container>

      <Image
        className="absolute bottom-0 -mb-4 w-full"
        source={towergrass}
        style={{
          width: width,
          height: height * 0.41,
        }}
        resizeMode="cover"
      />
    </SafeAreaView>
  );
}
