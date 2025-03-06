import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';
import { Container } from 'components/Container';
import logo from '../assets/logo-white.png';
import towergrass_small from '../assets/towergrass-small.png';
import IconButton from 'components/Button';

import { useNavigation } from '@react-navigation/native';

import { Ionicons } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { InknutAntiqua_400Regular, InknutAntiqua_700Bold } from '@expo-google-fonts/inknut-antiqua';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

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

        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-72 flex gap-5 py-4">
            <IconButton
              icon="people-outline"
              text="Beginning: Town and its People"
              onPress={() => navigation.navigate('Module_1')}
            />

            <IconButton
              icon="people-outline"
              text="Balilihan’s Journey: Three
                  Periods of Colonial influence"
              onPress={() => navigation.navigate('Module_2')}
            />

            <IconButton
              icon="time-outline"
              text="Balilihan in the Postwar Era and Beyond"
              onPress={() => navigation.navigate('Module_3')}
            />

            <IconButton
              icon="heart-outline"
              text="Balilihan’s Cultural Heritage"
              onPress={() => navigation.navigate('Loading')}
            />

            <IconButton
              icon="heart-outline"
              text="Assessment and Activities"
              onPress={() => alert('Button Pressed!')}
            />
          </View>
        </ScrollView>
        <StatusBar style="auto" />
      </Container>

      {/* <Image
        className="absolute bottom-0 w-full"
        source={towergrass_small}
        style={{
          width: width, // Full width
          height: height * 0.5, // 50% of screen height (adjust as needed)
        }}
        resizeMode="cover" // Ensures it fully covers width & height
      /> */}
    </SafeAreaView>
  );
}
