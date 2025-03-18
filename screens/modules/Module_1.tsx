import { View, Image, SafeAreaView, StatusBar, FlatList } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import React from 'react';
import Title from 'components/Title';
import banner from '../../assets/module_1/banner.png';
import Section_1 from 'components/module_1/Section_1';
import Section_2 from 'components/module_1/Section_2';
import Section_3 from 'components/module_1/Section_3';
import Section_4 from 'components/module_1/Section_4';
import Section_5 from 'components/module_1/Section_5';
import Section_6 from 'components/module_1/Section_6';

const sections = [Section_1, Section_2, Section_3, Section_4, Section_5, Section_6];

const ItemSeparator = () => <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />;

const Module_1 = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Banner Outside NormalContainer */}
      <View className="mb-4 h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
      </View>

      <NormalContainer>
        <Title>Beginning: Town and its People</Title>
        <FlatList
          data={sections}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item: SectionComponent }) => <SectionComponent />}
          ItemSeparatorComponent={ItemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </NormalContainer>
    </SafeAreaView>
  );
};

export default Module_1;
