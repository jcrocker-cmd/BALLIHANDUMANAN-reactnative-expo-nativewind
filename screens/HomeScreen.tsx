import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from 'components/Container';
import logo from '../assets/logo-white.png';
import towergrass from '../assets/towergrass.png';
import IconButton from 'components/Button';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { InknutAntiqua_400Regular, InknutAntiqua_700Bold } from '@expo-google-fonts/inknut-antiqua';

export default function App() {
  const navigation = useNavigation();
  const [fontsLoaded] = useFonts({
    InknutRegular: InknutAntiqua_400Regular,
    InknutBold: InknutAntiqua_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <TouchableOpacity className="mt-16 items-end" onPress={() => navigation.navigate('About')}>
          <Ionicons name="bulb-outline" size={30} color="#fff" />
        </TouchableOpacity>

        {/* Top Section (Title Image) */}
        <View style={{ alignItems: 'center' }}>
          <Image
            source={logo}
            style={{ width: '100%', height: 100 }} // Adjusted size
            resizeMode="contain"
          />
        </View>

        <ScrollView>
          <View className="flex gap-5 py-4">
            <IconButton
              icon="people-outline"
              text="Beginning: Town and its People"
              onPress={() => navigation.navigate('Module_1')}
            />

            <IconButton
              icon="people-outline"
              text="Balilihan’s Journey: Three
                  Periods of Colonial influence"
              onPress={() => alert('Button Pressed!')}
            />

            <IconButton
              icon="time-outline"
              text="Balilihan in the Postwar Era and Beyond"
              onPress={() => alert('Button Pressed!')}
            />

            <IconButton
              icon="heart-outline"
              text="Balilihan’s Cultural Heritage"
              onPress={() => alert('Button Pressed!')}
            />

            <IconButton
              icon="heart-outline"
              text="Assessment and Activities"
              onPress={() => alert('Button Pressed!')}
            />
          </View>
        </ScrollView>

        {/* Bottom Section (Tower Image) */}
        {/* <View className="relative h-[200px] w-full overflow-auto">
          <Image
            source={towergrass} // Replace with actual image path
            style={{ width: '100%', height: 500 }} // Explicitly set size
            resizeMode="contain" // Try "contain" if "cover" cuts off parts of the image
          />
        </View> */}

        <StatusBar style="auto" />
      </Container>

      {/* <Image
        className="absolute bottom-0 -mb-1 h-[350px] w-full border-white"
        source={towergrass}
        resizeMode="contain"
      /> */}
    </SafeAreaView>
  );
}
