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
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';

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
      Module_3_bg: require('../assets/button/Module 3.png'),
      Module_4_bg: require('../assets/button/Module 4.png'),
      Module_5_bg: require('../assets/button/Module 5.png'),
      towergrass_small: require('../assets/towergrass-small.png'),
    }),
    []
  );

  // ✅ Preload images for instant loading
  useEffect(() => {
    Object.values(images).forEach((image) => {
      Image.prefetch(Image.resolveAssetSource(image).uri);
    });
  }, []);

  const navigation = useNavigation();
  const navigateToModule = useCallback(
    (module: string) => () => navigation.navigate(module),
    [navigation]
  );

  const [fontsLoaded] = useFonts({
    InknutRegular: require('../assets/fonts/InknutAntiqua-Regular.ttf'),
    InknutBold: require('../assets/fonts/InknutAntiqua-Bold.ttf'),
    InknutSemiBold: require('../assets/fonts/InknutAntiqua-SemiBold.ttf'),
  });

  const [appReady, setAppReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
        setAppReady(true);
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!appReady) {
    return null; // Prevent rendering until app is ready
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity className="mt-10 items-end" onPress={() => navigation.navigate('About')}>
          <Image source={images.bulbIcon} resizeMode="contain" style={{ width: 30, height: 30 }} />
        </TouchableOpacity>

        <View style={{ alignItems: 'center' }}>
          <Image source={images.logo} style={{ width: '95%', height: 80 }} resizeMode="contain" />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex gap-2 py-2">
            <IconButton source={images.Module_1_bg} onPress={navigateToModule('Module_1')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Beginning: Town and its People
              </Text>
            </IconButton>
            <IconButton source={images.Module_2_bg} onPress={navigateToModule('Module_2')}>
              <Text className="-mb-8 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan’s Journey: Three{'\n'}Periods of Colonial influence
              </Text>
            </IconButton>
            <IconButton source={images.Module_3_bg} onPress={navigateToModule('Module_3')}>
              <Text className="-mb-8 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan in the{'\n'}Postwar Era and Beyond
              </Text>
            </IconButton>
            <IconButton source={images.Module_4_bg} onPress={navigateToModule('Module_4')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Balilihan’s Cultural Heritage
              </Text>
            </IconButton>

            <IconButton source={images.Module_5_bg} onPress={navigateToModule('Module_5')}>
              <Text className="-mb-14 py-2 text-left font-inknut text-[13px] leading-[16px] text-white">
                Assessment and Activities
              </Text>
            </IconButton>
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </Container>

      {/* Towergrass Image */}
      <Image
        className="absolute bottom-0 -mb-2 w-full"
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
