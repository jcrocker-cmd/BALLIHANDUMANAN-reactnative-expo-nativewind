import { View, Text, Dimensions } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { useMemo } from 'react';

const { width, height } = Dimensions.get('window');

// Calculate dynamic icon sizes
const ICON_SIZE = width * 0.27; // 30% of screen width
const TEXT_SIZE = width * 0.03; // 4% of screen width

const AboutScreen = () => {
  const navigation = useNavigation();

  // 🖼️ Memoized Images (Prevents reloading on re-renders)
  const images = useMemo(
    () => ({
      appIcon: require('../assets/about/app-icon.png'),
      authorIcon: require('../assets/about/Sir Nikko New 2.png'),
      objectivesIcon: require('../assets/about/Objective Icon.png'),
      sourcesIcon: require('../assets/about/Sources Icon.png'),
      towergrass: require('../assets/towergrass.png'),
    }),
    []
  );

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center gap-4">
            <View className="mb-3 flex flex-row gap-12">
              <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
                <View className="flex items-center justify-center">
                  <Image source={images.appIcon} style={{ width: ICON_SIZE, height: ICON_SIZE }} />
                  <Text
                    style={{ fontSize: TEXT_SIZE }}
                    className="py-2 text-center font-inknut text-white">
                    About the App
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('AboutAuthor')}>
                <View className="flex items-center justify-center">
                  <Image
                    source={images.authorIcon}
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  />
                  <Text
                    style={{ fontSize: TEXT_SIZE }}
                    className=" py-2 text-center font-inknut text-white">
                    The Author
                  </Text>
                </View>
              </TouchableOpacity>
            </View>

            <View className="flex flex-row gap-12">
              <TouchableOpacity onPress={() => navigation.navigate('Objectives')}>
                <View className="flex items-center justify-center">
                  <Image
                    source={images.objectivesIcon}
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  />
                  <Text
                    style={{ fontSize: TEXT_SIZE }}
                    className="py-2 text-center font-inknut text-white">
                    Objectives
                  </Text>
                </View>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => navigation.navigate('Sources')}>
                <View className="flex items-center justify-center">
                  <Image
                    source={images.sourcesIcon}
                    style={{ width: ICON_SIZE, height: ICON_SIZE }}
                  />
                  <Text
                    style={{ fontSize: TEXT_SIZE }}
                    className="py-2 text-center font-inknut text-white">
                    Acknowledgment
                  </Text>
                  <Text
                    style={{ fontSize: TEXT_SIZE }}
                    className="-mt-5 text-center font-inknut text-white">
                    and Sources
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Container>

        {/* Towergrass Image */}
        <Image
          className="absolute bottom-0 -mb-2 w-full"
          source={images.towergrass}
          style={{
            width: width,
            height: height * 0.41, // 41% of screen height
          }}
          resizeMode="cover"
        />
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
