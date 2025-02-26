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
        <View className="pt-64" style={{ alignItems: 'center', marginBottom: 5 }}>
          <Image
            source={logo}
            style={{ width: '100%', height: 100 }} // Adjusted size
            resizeMode="contain"
          />
        </View>
        <View style={{ width: '100%', alignItems: 'center' }}>
          {/* <View style={{ height: 5, width: '80%', borderRadius: 5, backgroundColor: '#333' }}>
            <Animated.View
              style={{
                width: animatedWidth.interpolate({
                  inputRange: [0, 100],
                  outputRange: ['0%', '100%'],
                }),
                height: '100%',
                backgroundColor: '#4CAF50',
                borderRadius: 5,
              }}
            />
          </View>
          <Text className="mt-2 py-2 font-inknut text-sm text-white">{progress}%</Text> */}
          <ActivityIndicator size="large" color="#fff" />
        </View>
      </Container>
      <Image
        className="absolute bottom-0 -mb-1 h-[350px] w-full border-white"
        source={towergrass}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
