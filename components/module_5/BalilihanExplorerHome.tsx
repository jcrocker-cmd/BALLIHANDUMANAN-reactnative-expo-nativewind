import React from 'react';
import { View, Image, SafeAreaView, StatusBar, Text, TouchableOpacity } from 'react-native';
import banner from '../../assets/module_4/banner.png';
import { AssesmentContainer } from 'components/AssesmentContainer';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
  BalilihanExplorer_1: undefined;
  BalilihanExplorer_2: undefined;
  BalilihanExplorer_3: undefined;
  Module_5: undefined;
};

const Module_5 = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Banner  */}
      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.navigate('Module_5')}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 py-1 font-inknut text-[16px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Balilihan, The Explorer!
        </Text>
      </View>

      {/* Gradient Background & Buttons */}
      <AssesmentContainer>
        <View className="flex-1 items-center gap-4">
          <Text className="w-[95%] py-1 text-center font-inknut text-base text-black">
            Welcome to "Balilihan, The Explorer"! You'll be using your knowledge of Balilihan's
            barangays and map skills to pinpoint their locations on a blank map. Remember, Balilihan
            has 31 barangays in total. Get ready to explore!
          </Text>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => navigation.navigate('BalilihanExplorer_1')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">Level 1</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => navigation.navigate('BalilihanExplorer_2')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">Level 2</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => navigation.navigate('BalilihanExplorer_3')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">Level 3</Text>
          </TouchableOpacity>
        </View>
      </AssesmentContainer>
    </SafeAreaView>
  );
};

export default Module_5;
