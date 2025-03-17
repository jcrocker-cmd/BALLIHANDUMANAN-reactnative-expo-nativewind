import { View, Image, SafeAreaView, ScrollView, StatusBar } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState } from 'react';
import React from 'react';
import Title from 'components/Title';
import banner from '../../assets/module_2/banner.png';
import Section_1 from 'components/module_2/Section_1';
import Section_2 from 'components/module_2/Section_2';
import Section_3 from 'components/module_2/Section_3';
import Section_4 from 'components/module_2/Section_4';
import Section_5 from 'components/module_2/Section_5';
import Section_6 from 'components/module_2/Section_6';
import Section_7 from 'components/module_2/Section_7';
import Section_8 from 'components/module_2/Section_8';
import Section_9 from 'components/module_2/Section_9';

const Module_2 = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-4 h-[130px] w-full overflow-hidden">
            <Image source={banner} className="h-full w-full" resizeMode="cover" />
          </View>
          <NormalContainer>
            <Title>Balilihan’s Journey: Three{'\n'}Periods of Colonial Influence</Title>
            <Section_1 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_2 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_3 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_4 />
            <View className="mb-4 mt-4 h-[1px] w-full bg-[#0E8341]" />
            <Section_5 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_6 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_7 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_8 />
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />
            <Section_9 />
          </NormalContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Module_2;
