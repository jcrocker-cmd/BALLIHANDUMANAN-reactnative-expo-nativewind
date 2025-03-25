import React, { useMemo } from 'react';
import { ImageBackground, SafeAreaView, StyleSheet } from 'react-native';

export const Container = ({ children }: { children: React.ReactNode }) => {
  const images = useMemo(
    () => ({
      bg: require('../assets/bg.png'),
    }),
    []
  );

  return (
    <ImageBackground source={images.bg} style={styles.background} resizeMode="cover">
      <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: '100%',
  },
  safeArea: {
    flex: 1,
    padding: 8,
  },
});
