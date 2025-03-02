import { NormalContainer } from '../../components/NormalContainer';
import Title from 'components/Title';
import { View, Text, TouchableOpacity, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import React from 'react';
import icon from '../../assets/bulb_icon.png';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
// import { EditScreenInfo } from 'components/EditScreenInfo';

export default function App() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NormalContainer>
        <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8 pt-10">
          <Ionicons name="arrow-back" size={30} color="#000" />
        </TouchableOpacity>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Title name="Beginning: Town and its People"></Title>

          <CollapsibleSubTitle name="Subtitle 1">
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, quae deserunt modi
              repellat delectus accusantium ratione, assumenda impedit eveniet voluptatum quaerat
              repudiandae molestias recusandae aliquam quos quam pariatur, neque ad.
            </Text>
          </CollapsibleSubTitle>
          <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

          <CollapsibleSubTitle name="Subtitle 2"></CollapsibleSubTitle>
          <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

          <CollapsibleSubTitle name="Subtitle 3">
            <Text>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga enim ullam quisquam
              itaque illum nam autem possimus aut, nesciunt magnam reiciendis accusamus, eum
              quibusdam. Reprehenderit in dolore a distinctio doloribus.
            </Text>
          </CollapsibleSubTitle>
          <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

          <CollapsibleSubTitle name="Subtitle 4"></CollapsibleSubTitle>
        </ScrollView>
      </NormalContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  text: {
    textTransform: 'uppercase',
    color: '#0E8341',
    //
  },
  icon: {
    width: 30,
    height: 30,
  },
});
