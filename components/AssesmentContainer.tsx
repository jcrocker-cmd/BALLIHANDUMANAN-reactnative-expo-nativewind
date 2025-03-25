import React, { useMemo } from 'react';
import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export const AssesmentContainer = ({ children }: { children: React.ReactNode }) => {
  const images = useMemo(
    () => ({
      bg: require('../assets/bg-gradial-yellow.png'),
    }),
    []
  );

  return (
    <ImageBackground source={images.bg} className="h-screen flex-1" resizeMode="cover">
      <SafeAreaView className="flex-1 p-8">{children}</SafeAreaView>
    </ImageBackground>
  );
};
