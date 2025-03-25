import { View, Text } from 'react-native';
import { Container } from '../../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import React from 'react';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const AboutScreen = () => {
  const images = useMemo(
    () => ({
      appIcon: require('../../assets/app-icon.png'),
      towergrass_small: require('../../assets/towergrass-small.png'),
    }),
    []
  );
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4 pt-5">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center">
            <Text className="-mt-2 py-1 text-justify font-inknut text-[16px] text-white">
              About the App
            </Text>
            <Image
              source={images.appIcon}
              className="mb-7 mt-5 h-[140px] w-[140px] max-xs:h-[110px] max-xs:w-[110px]"
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="px-5 py-5 text-justify font-inknut text-[12px] text-white">
              Balilihandumanan is a digital resource mobile application designed to teach the local
              history and cultural heritage of the municipality of Balilihan. It uses a multifaceted
              approach, incorporating guided discussions, engaging activities such as quizzes and
              educational games, and map navigation to facilitate a comprehensive understanding and
              appreciation. This valuable tool is for educators, students, and community members.
              The name Balilihandumanan combines the municipality's name with the local term
              handumanan, meaning "commemoration" or "treasured memories." The Author (button)
              Kristian Nikko Chatto Geangan is a licensed professional teacher and cultural advocate
              from Balilihan, Bohol. He holds a Master of Arts in Education - Cultural Education
              from Holy Name University (2025) and a Bachelor of Secondary Education - Social
              Studies from Bohol Island State University–Main Campus (2017) in Tagbilaran City. He
              teaches Araling Panlipunan to junior high school students at Hanopol National High
              School, Balilihan, and previously served as a teacher and senior high school
              coordinator at Carmel Academy, Balilihan for five years. He is dedicated to raising
              awareness and highlighting the significance of acknowledging and preserving unique
              cultural assets in local communities, particularly in Bohol and Balilihan. He is a
              member of the Samahan ng mga Alagad ng Kulturang Dapat Pagyamanin (SAKDAP) – Bohol
              Chapter, actively promoting and preserving cultural heritage. His dedication earned
              him first place in the first-ever Bohol Sandugo Kulturo Competition in 2024. Beyond
              teaching, Kristian Nikko is a freelance event and choral singer and adviser to the
              HNHS Supreme Secondary Learner Government and Choir.
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </Container>
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
    </>
  );
};

export default AboutScreen;
