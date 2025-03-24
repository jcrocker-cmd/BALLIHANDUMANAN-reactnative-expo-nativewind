import React from 'react';
import {
  View,
  Image,
  SafeAreaView,
  StatusBar,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import banner from '../../assets/module_5/banner.jpg';
import { AssesmentContainer } from 'components/AssesmentContainer';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  BarangayQuizScreen: undefined;
  BalilihanExplorerHome: undefined;
  GuessEraQuizScreen: undefined;
  UncoverTreasuresScreen: undefined;
  TakeTheQuizScreen: undefined;
  SampleLessonExemplar: undefined;
  AnswerKeysScreen: undefined;
  BalilihanTreasureQuizScreen: undefined;
  Home: undefined;
};

const Module_5 = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Banner  */}
      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 py-1 font-inknut text-[14px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Assessment and Activities
        </Text>
      </View>

      {/* Gradient Background & Buttons */}
      <AssesmentContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="flex-1 items-center gap-4">
            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('BarangayQuizScreen')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Guess That Barangay!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('BalilihanExplorerHome')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Balilihan, The Explorer!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('GuessEraQuizScreen')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Guess That Era!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('BalilihanTreasureQuizScreen')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Uncover Balilihan's Treasures
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('TakeTheQuizScreen')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Take the Quiz!
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('SampleLessonExemplar')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Sample Lesson Exemplar
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              className="w-[100%] rounded-lg bg-white px-6 py-3"
              onPress={() => navigation.navigate('AnswerKeysScreen')}>
              <Text className="py-1 text-center font-inknut text-[13px] text-green-800">
                Answer Keys
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </AssesmentContainer>
    </SafeAreaView>
  );
};

export default Module_5;
