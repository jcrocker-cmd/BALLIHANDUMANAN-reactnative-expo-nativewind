import React, { useEffect, useState } from 'react';
import { View, Text, Animated, SafeAreaView, Image, ActivityIndicator } from 'react-native';
import { Container } from '../components/Container';
import logo from '../assets/logo-white.png';
import towergrass from '../assets/towergrass.png';

export default function LoadingScreen({ navigation }: { navigation: any }) {
  const [progress, setProgress] = useState(0);
  const animatedWidth = new Animated.Value(0); // Animated width state

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     setProgress((prev) => {
  //       if (prev >= 100) {
  //         clearInterval(interval);
  //         navigation.replace('Home'); // Navigate when progress reaches 100%
  //         return 100;
  //       }

  //       // Animate progress bar width smoothly
  //       Animated.timing(animatedWidth, {
  //         toValue: prev + 2, // Match progress state
  //         duration: 100, // Smooth transition
  //         useNativeDriver: false,
  //       }).start();

  //       return prev + 2; // Increase progress by 2%
  //     });
  //   }, 60);

  //   return () => clearInterval(interval); // Clean up interval on unmount
  // }, []);

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
        <Text style={{ color: '#fff' }} className="py-2 pt-40 text-center font-inknut text-sm">
          Learn and Discover Balilihan:{'\n'}Splendor behind the Greens
        </Text>
        <View
          className=""
          style={{ alignItems: 'center', marginBottom: 5, borderColor: 'white', borderWidth: 1 }}>
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
        className="absolute bottom-0 -mb-1 h-[350px] w-full border-white max-xs:-mb-8"
        source={towergrass}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
