import { View, Text } from 'react-native';
import { Container } from '../../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import React from 'react';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const ObjectiveScreen = () => {
  const images = useMemo(
    () => ({
      objectiveIcon: require('../../assets/about/Objective Icon.png'),
      towergrass_small: require('../../assets/towergrass-small.png'),
    }),
    []
  );
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4 pt-5">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center">
            <Text className="-mt-4 py-1 text-justify font-inknut text-[16px] text-white">
              Objectives
            </Text>
            <Image
              source={images.objectiveIcon}
              className="mb-7 mt-5 h-[140px] w-[140px] max-xs:h-[110px] max-xs:w-[110px]"
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="px-5 py-5 text-justify font-inknut text-[12px] text-white max-xs:text-[11px]">
              Balilihanduman uses insights from Balilihan's local history and heritage to develop
              learners' understanding, appreciation, and pride in the municipality's historical
              journey. This journey encompasses Balilihan's origins, three colonial periods,
              post-war recovery and development, and rich cultural heritage.{'\n'}
              {'\n'}
              The following objectives will be developed through this learning kit:{'\n'}
              {'\n'}◉ Beginning: Town and its People{'\n'}
              {'\n'}◆ Identify the various stories surrounding the origin of the town and its
              barrios/barangays, and the first inhabitants, and understand when and how Balilihan
              was formally established as a town, as well as its relationship with Baclayon.{'\n'}◆
              Create a timeline of key events related to Balilihan’s establishment, territorial
              changes, and annexations.{'\n'}◆ Demonstrate an increased appreciation for the rich
              history of Balilihan with a sense of pride and curiosity through reflection.{'\n'}◆
              Develop a sense of responsibility for preserving and protecting Balilihan’s history
              and heritage for future generations.{'\n'}
              {'\n'}◉ Balilihan's Journey: Three Periods of Colonial Influence{'\n'}
              {'\n'}◆ Identify the significant events during the Spanish, American, and Japanese
              occupations in Balilihan.{'\n'}◆ Present and dramatize significant events from the
              occupation periods in Balilihan through role-playing.{'\n'}◆ Demonstrate empathy
              towards the people of Balilihan who lived through the occupation periods, considering
              their experiences and perspectives.{'\n'}◆ Establish respect for Balilinhon’s
              resilience and perseverance in the face of colonization.{'\n'}
              {'\n'}◉ Balilihan in the Postwar Era and Beyond{'\n'}
              {'\n'}◆ Understand and identify significant events shaping the municipality and
              explain the meaning of its official municipal flag, logo, hymn, and symbols.{'\n'}◆
              Create a visual representation of their aspirations for Balilihan’s future through a
              poster.{'\n'}◆ Recognize the social, economic, and political development of
              Balilihan's community and the symbolism of its official municipal representations and
              community projects to demonstrate an appreciation for its resilience and progress.
              {'\n'}◆ Develop a sense of pride and responsibility towards the continued development
              and betterment of Balilihan.{'\n'}
              {'\n'}◉ Balilihan’s Cultural Heritage{'\n'}
              {'\n'}◆ Describe examples of Balilihan’s cultural heritage, classify them into
              appropriate categories (natural, built, movable, or intangible), and explain their
              significance to the community’s identity.{'\n'}◆ Promote Balilihan cultural heritage
              through a short and informative presentation incorporating visual aids/PowerPoint
              presentations.{'\n'}◆ Demonstrate an increased appreciation for the value and
              importance of preserving Balilihan’s cultural heritage.{'\n'}◆ Establish a commitment
              to responsible stewardship of Balilihan’s cultural heritage in recognizing its
              significance for future generations and their role in its preservation.{'\n'}
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
          className="absolute bottom-0 -mb-4 w-full"
          source={images.towergrass_small}
          style={{
            width: width,
            height: height * 0.33,
          }}
          resizeMode="contain"
        />
      </SafeAreaView>
    </>
  );
};

export default ObjectiveScreen;
