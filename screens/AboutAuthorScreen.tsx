import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

import author from '../assets/author.png';
import towergrass_small from '../assets/towergrass-small.png';

const AboutScreen = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center">
            <Text className="-mt-4 py-1 text-justify font-inknut text-lg text-white">
              The Author
            </Text>
            <View className="max-xs:h-[110px] max-xs:w-[110px] mb-7 mt-5 h-[140px] w-[140px] overflow-hidden rounded-full">
              <Image source={author} className="h-full w-full" />
            </View>
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="max-xs:text-[11px] py-5 text-justify font-inknut text-[12px] text-white">
              Kristian Nikko Chatto Geangan is a licensed professional teacher and cultural advocate
              from Balilihan, Bohol. He holds a Master of Arts in Education - Cultural Education
              from Holy Name University (2025) and a Bachelor of Secondary Education - Social
              Studies from Bohol Island State University–Main Campus (2017) in Tagbilaran City. He
              teaches Araling Panlipunan to junior high school students at Hanopol National High
              School, Balilihan, and previously served as a teacher and senior high school
              coordinator at Carmel Academy, Balilihan for five years. He is dedicated to raising
              awareness and highlighting the significance of acknowledging and preserving unique
              cultural assets in local communities, particularly in Bohol and Balilihan.  He is a
              member of the Samahan ng mga Alagad ng Kulturang Dapat Pagyamanin (SAKDAP) – Bohol
              Chapter, actively promoting and preserving cultural heritage. His dedication earned
              him first place in the first-ever Bohol Sandugo Kulturo Competition in 2024.  Beyond
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
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </Container>

        <Image
          className="max-xs:-mb-9 absolute bottom-0 -mb-1 h-[420px] w-full border-white"
          source={towergrass_small}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
