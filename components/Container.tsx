import { ImageBackground, SafeAreaView } from 'react-native';
import bg from '../assets/bg.png';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={bg} className="h-screen flex-1" resizeMode="cover">
      <SafeAreaView className="flex-1 p-8">{children}</SafeAreaView>
    </ImageBackground>
  );
};
