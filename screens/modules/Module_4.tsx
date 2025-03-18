import { View, SafeAreaView, FlatList, Image, StatusBar } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import React from 'react';
import Title from 'components/Title';
import banner from '../../assets/module_4/banner.png';
import Section_1 from 'components/module_4/Section_1';
import Section_2 from 'components/module_4/Section_2';
import Section_3 from 'components/module_4/Section_3';
import Section_4 from 'components/module_4/Section_4';
import Section_5 from 'components/module_4/Section_5';
import Section_6 from 'components/module_4/Section_6';
import Section_7 from 'components/module_4/Section_7';
import Section_8 from 'components/module_4/Section_8';
import Section_9 from 'components/module_4/Section_9';
import Section_10 from 'components/module_4/Section_10';
import Section_11 from 'components/module_4/Section_11';

const sections = [
  Section_1,
  Section_2,
  Section_3,
  Section_4,
  Section_5,
  Section_6,
  Section_7,
  Section_8,
  Section_9,
  Section_10,
  Section_11,
];

const ItemSeparator = () => <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />;

const Module_4 = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" />

        <View className="mb-4 h-[130px] w-full overflow-hidden">
          <Image source={banner} className="h-full w-full" />
        </View>
        <NormalContainer>
          <Title>Balilihan’s Cultural Heritage</Title>
          <FlatList
            data={sections}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item: SectionComponent }) => <SectionComponent />}
            ItemSeparatorComponent={ItemSeparator}
            showsVerticalScrollIndicator={false}
          />
        </NormalContainer>
      </SafeAreaView>
    </>
  );
};

export default Module_4;
