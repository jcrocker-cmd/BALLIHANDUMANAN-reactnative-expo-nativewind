import { ImageBackground } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useMemo } from 'react';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const images = useMemo(
    () => ({
      bg: require('../assets/bg.png'),
    }),
    []
  );

  return (
    <ImageBackground source={images.bg} className="h-screen flex-1" resizeMode="cover">
      <SafeAreaView className="flex-1 p-8">{children}</SafeAreaView>
    </ImageBackground>
  );
};