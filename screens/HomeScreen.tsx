import { StatusBar } from 'expo-status-bar';
import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Text,
} from 'react-native';
import { Container } from 'components/Container';
import IconButton from 'components/Button';
import { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';
import { StackNavigationProp } from '@react-navigation/stack';
type RootStackParamList = {
  Module_1: undefined;
  Module_2: undefined;
  Module_3: undefined;
  Module_4: undefined;
  Module_5: undefined;
  About: undefined;
};

const { width, height } = Dimensions.get('window');

SplashScreen.preventAutoHideAsync();

export default function App() {
  // 🖼️ Memoized Images (Prevents reloading on re-renders)
  const images = useMemo(
    () => ({
      logo: require('../assets/logo-white.png'),
      bulbIcon: require('../assets/bulb_icon_white.png'),
      Module_1_bg: require('../assets/button/Module 1.png'),
      Module_2_bg: require('../assets/button/Module 2.png'),
      Module_3_bg: require('../assets/button/Module 3.jpg'),
      Module_4_bg: require('../assets/button/Module 4.png'),
      Module_5_bg: require('../assets/button/Module 5.jpg'),
      towergrass_small: require('../assets/towergrass-small.png'),
    }),
    []
  );

  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity className="mt-10 items-end" onPress={() => navigation.navigate('About')}>
          <Image source={images.bulbIcon} resizeMode="contain" style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image source={images.logo} style={{ width: '95%', height: 80 }} resizeMode="contain" />
        </View>

        {/* Ensure ScrollView has flexGrow: 1 */}
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
          <View className="flex gap-2 py-2">
            <IconButton source={images.Module_1_bg} onPress={() => navigation.navigate('Module_1')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Beginning: Town and its People
              </Text>
            </IconButton>
            <IconButton source={images.Module_2_bg} onPress={() => navigation.navigate('Module_2')}>
              <Text className="-mb-8 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan’s Journey: Three{'\n'}Periods of Colonial influence
              </Text>
            </IconButton>
            <IconButton source={images.Module_3_bg} onPress={() => navigation.navigate('Module_3')}>
              <Text className="-mb-8 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan in the{'\n'}Postwar Era and Beyond
              </Text>
            </IconButton>
            <IconButton source={images.Module_4_bg} onPress={() => navigation.navigate('Module_4')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan’s Cultural Heritage
              </Text>
            </IconButton>

            <IconButton source={images.Module_5_bg} onPress={() => navigation.navigate('Module_5')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Assessment and Activities
              </Text>
            </IconButton>
          </View>
          <Text>{'\n'.repeat(25)}</Text>
        </ScrollView>

        <StatusBar style="auto" />
      </Container>

      {/* Towergrass Image */}
      <Image
        className="absolute bottom-0 -mb-4 w-full"
        source={images.towergrass_small}
        style={{
          width: width,
          height: height * 0.33,
        }}
        resizeMode="contain"
      />
    </SafeAreaView>
  );
}
