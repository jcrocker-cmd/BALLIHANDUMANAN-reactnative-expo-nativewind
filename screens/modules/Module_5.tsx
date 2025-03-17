import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import { Container } from '../../components/Container';
import { useState } from 'react';
import React from 'react';
import banner from '../../assets/module_3/banner.png';
import QuizScreen from 'components/module_5/Quiz';

const Module_5 = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="h-[130px] w-full overflow-hidden">
            <Image source={banner} className="h-full w-full" />
          </View>
          <QuizScreen></QuizScreen>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Module_5;
