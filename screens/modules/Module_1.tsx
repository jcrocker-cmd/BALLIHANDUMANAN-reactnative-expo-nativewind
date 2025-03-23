import { View, Image, SafeAreaView, StatusBar, FlatList, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { NormalContainer } from '../../components/NormalContainer';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import Title from 'components/Title';
import Section_1 from 'components/module_1/Section_1';
import Section_2 from 'components/module_1/Section_2';
import Section_3 from 'components/module_1/Section_3';
import Section_4 from 'components/module_1/Section_4';
import Section_5 from 'components/module_1/Section_5';
import Section_6 from 'components/module_1/Section_6';
import Section_7 from 'components/module_1/Section_7';

const sections = [Section_1, Section_2, Section_3, Section_4, Section_5, Section_6, Section_7];

const ItemSeparator = () => <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />;

const Module_1 = () => {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={require('../../assets/module_1/banner.png')} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
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
