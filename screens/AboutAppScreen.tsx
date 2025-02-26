import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
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

          <TouchableOpacity>
            <View className="flex items-center justify-center">
              <Text className="-mt-4 py-1 text-justify font-inknut text-lg text-white">
                About the App
              </Text>
              <Image source={appIcon} className="m-7 h-[140px] w-[140px]" />
            </View>
          </TouchableOpacity>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="py-5 text-justify font-inknut text-[12px] text-white">
              Balilihandumanan is a digital resource mobile application designed to teach the local
              history and cultural heritage of the municipality of Balilihan.  It uses a
              multifaceted approach, incorporating guided discussions, engaging activities such as
              quizzes and educational games, and map navigation to facilitate a comprehensive
              understanding and appreciation.  This valuable tool is for educators, students, and
              community members. The name Balilihandumanan combines the municipality's name with the
              local term handumanan, meaning "commemoration" or "treasured memories."   The Author
              (button) Kristian Nikko Chatto Geangan is a licensed professional teacher and cultural
              advocate from Balilihan, Bohol. He holds a Master of Arts in Education - Cultural
              Education from Holy Name University (2025) and a Bachelor of Secondary
              Education - Social Studies from Bohol Island State University–Main
              Campus (2017) in Tagbilaran City. He teaches Araling Panlipunan to junior high school
              students at Hanopol National High School, Balilihan, and previously served as a
              teacher and senior high school coordinator at Carmel Academy, Balilihan for five
              years. He is dedicated to raising awareness and highlighting the significance of
              acknowledging and preserving unique cultural assets in local communities, particularly
              in Bohol and Balilihan.  He is a member of the Samahan
              ng mga Alagad ng Kulturang Dapat Pagyamanin (SAKDAP) – Bohol Chapter, actively
              promoting and preserving cultural heritage. His dedication earned him first place in
              the first-ever Bohol Sandugo Kulturo Competition in 2024.  Beyond teaching, Kristian
              Nikko is a freelance event and choral singer and adviser to the HNHS Supreme Secondary
              Learner Government and Choir.
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
          className="absolute bottom-0 -mb-1 h-[350px] w-full border-white"
          source={towergrass}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
