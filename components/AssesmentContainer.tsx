import { ImageBackground, SafeAreaView } from 'react-native';
import bg from '../assets/bg-gradial-yellow.png';

export const AssesmentContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <ImageBackground source={bg} className="h-screen flex-1" resizeMode="cover">
      <SafeAreaView className="flex-1 p-8">{children}</SafeAreaView>
    </ImageBackground>
  );
};
