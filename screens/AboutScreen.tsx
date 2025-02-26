import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import appIcon from '../assets/app-icon.png';
import author from '../assets/author.png';
import towergrass from '../assets/towergrass.png';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AboutApp')}>
            <View className="flex items-center justify-center">
              <Image source={appIcon} className="h-[120px] w-[120px]" />
              <Text className="mt-5 py-2 text-justify font-inknut text-lg text-white">
                About the App
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('AboutAuthor')}>
            <View className="mt-4 flex items-center justify-center">
              <View className="h-[120px] w-[120px] overflow-hidden rounded-full">
                <Image source={author} className="h-full w-full" />
              </View>

              <Text className="mt-5 py-2 text-justify font-inknut text-lg text-white">
                The Author
              </Text>
            </View>
          </TouchableOpacity>
        </Container>

        <Image
          className="absolute bottom-0 -mb-1 h-[350px] w-full border-white"
          source={towergrass}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
