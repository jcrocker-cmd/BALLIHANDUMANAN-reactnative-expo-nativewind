import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { Container } from '../components/Container';
import logo from '../assets/logo-loading.png';
import towergrass from '../assets/towergrass.png';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

export default function LoadingScreen({ navigation }: { navigation: any }) {
  useEffect(() => {
    // Simulate loading delay before navigating
    const timeout = setTimeout(() => {
      navigation.replace('Home');
    }, 2000); // Adjust time as needed

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Text style={{ color: '#fff' }} className="py-2 pt-32 text-center font-inknut text-sm">
          Learn and Discover Balilihan:{'\n'}Splendor behind the Greens
        </Text>
        <View className="py-1" style={{ alignItems: 'center', marginBottom: 5 }}>
          <Image
            source={logo}
            style={{ width: '100%', height: 100 }} // Adjusted size
            resizeMode="contain"
          />
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
        source={towergrass} // Your logo
        style={{
          width: width, // Full width
          height: height * 0.41, // 41% of screen height (adjust as needed)
        }}
        resizeMode="cover" // Ensures it scales properly
      />
    </SafeAreaView>
  );
}
