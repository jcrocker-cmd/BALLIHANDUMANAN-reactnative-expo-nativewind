import { View, Text, Linking } from 'react-native';
import { Container } from '../../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useMemo } from 'react';
import React from 'react';

import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const SourcesScreen = () => {
  const images = useMemo(
    () => ({
      sourcesIcon: require('../../assets/about/Sources Icon.png'),
      towergrass_small: require('../../assets/towergrass-small.png'),
    }),
    []
  );
  const navigation = useNavigation();

  const openURL = (url) => {
    Linking.openURL(url).catch((err) => console.error('Failed to open URL:', err));
  };
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center">
            <Text className="-mt-4 py-1 text-justify font-inknut text-lg text-white">Sources</Text>
            <Image
              source={images.sourcesIcon}
              className="mb-7 mt-5 h-[140px] w-[140px] max-xs:h-[110px] max-xs:w-[110px]"
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="px-5 py-5 text-justify font-inknut text-[12px] text-white">
              <Text className="font-inknutBold text-[16px]">Book References:{'\n'}</Text>
              {'\n'}
              Akpedonu, E., & Saloma, C. (2011). Casa Boholana: Vintage houses of Bohol. Ateneo de
              Manila University Press.{'\n'}
              {'\n'}
              Añasco, C. (1980). Bohol: The Capsulized History. (Publication details unknown).{'\n'}
              {'\n'}
              Apalisok, S. M. (1992). Bohol without tears: Bohol’s 47 towns and one city. Surigao BB
              Press.{'\n'}
              {'\n'}
              <Text className="font-inknutBold text-[16px]">Website Source:{'\n'}</Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/2uuuytce')}>
                Provincial Government of Bohol: Balilihan
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://balilihan.gov.ph/')}>
                Municipality of Balilihan
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/2s48wcp6')}>
                Balilihan, Bohol Profile
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/ub6nmm3p')}>
                PDDO: Base Map - Municipality of Balilihan
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.bohol-philippines.com/balilihan.html')}>
                Balilihan Town - Bohol - Philippines.com
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/rkfmunms')}>
                Balilihan: The Town of Grass
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/ckwddhac')}>
                BISU breaks ground for Tourism, Sports Institute in Balilihan
              </Text>
              {'\n'}
              {'\n'}
              <Text className="font-inknutBold text-[16px]">Video Source:{'\n'}</Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=j6-BLVbnlw4')}>
                Old Balilihan. Video by Carth Ads
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=fO_u70isy5c')}>
                Discover Balilihan: Splendor behind the Greens
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=-3_v3vI6fus&t=204s')}>
                Sumad sa Balilihan, Bohol
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=IV-FWholGaU')}>
                Balilihan Bohol PH
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=gF8AwsLsO7Y')}>
                Balilihan History
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=zgApN1jv4vs')}>
                Balilihan – Splendor Behind the Greens
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://www.youtube.com/watch?v=Mo-xlvY8Kts')}>
                Balilihan Hymn
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() =>
                  openURL('https://www.facebook.com/oldbohol/videos/2131414777175960')
                }>
                Boholano-American War by Prof. Jose Marianito Luspo
              </Text>
              {'\n'}
              {'\n'}
              <Text className="font-inknutBold text-[16px]">Image Source:{'\n'}</Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/46arb5ty')}>
                Cebu and Bohol Islands Map
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/24st62rx')}>
                Spanish Colonial Era
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/mv36jssy')}>
                American Colonial Era
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/mr6d827p')}>
                Japanese Colonial Era
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/hj5xb9bd')}>
                Spanish Garrison in the Philippines
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/muaa5c4b')}>
                Spanish punishment
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/3atpxu32')}>
                The Brutality of Philippines
              </Text>
              {'\n'}◆{' '}
              <Text
                className="underline"
                onPress={() => openURL('https://martialartsnewyork.org/tag/philippines/')}>
                Bolo Battalion
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/pytnn435')}>
                Women’s Auxiliary Service
              </Text>
              {'\n'}◆{' '}
              <Text className="underline" onPress={() => openURL('https://tinyurl.com/mtb5epaj')}>
                The Battle of Manila, WWII
              </Text>
              {'\n'}
              {'\n'}
              <Text className="font-inknutBold text-[16px]">Declaration of AI Use:{'\n'}</Text>
              Balilihandumanan utilizes AI-assisted writing tools to enhance content. While
              AI-generated images and writing refinements are included, human oversight ensures
              historical accuracy and engaging storytelling.{'\n'}
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
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
              {'\n'}
            </Text>
          </ScrollView>
        </Container>

        <Image
          className="absolute bottom-0 -mb-2 w-full"
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

export default SourcesScreen;
