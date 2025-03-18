import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { Container } from '../components/Container';
import logo from '../assets/logo-loading.png';
import towergrass from '../assets/towergrass.png';
import * as SplashScreen from 'expo-splash-screen'; // Import SplashScreen
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default function LoadingScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    async function prepareApp() {
      await SplashScreen.hideAsync(); // Hide splash screen
      timeoutId = setTimeout(() => {
        navigation.replace('Home'); // Navigate after 4 seconds
      }, 4000);
    }

    prepareApp();

    return () => clearTimeout(timeoutId); // Cleanup timeout when component unmounts
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
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
        className="absolute bottom-0 -mb-1 w-full"
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
