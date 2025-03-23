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
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-4 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <View className="flex items-center justify-center">
            <Text className="-mt-4 py-1 text-justify font-inknut text-[16px] text-white">
              Acknowledgment and Sources
            </Text>
            <Image
              source={images.sourcesIcon}
              className="mb-7 mt-5 h-[140px] w-[140px] max-xs:h-[110px] max-xs:w-[110px]"
            />
          </View>

          <ScrollView showsVerticalScrollIndicator={false}>
            <Text className="px-5 py-5 text-justify font-inknut text-[12px] text-white">
              <Text className="font-inknutBold text-[15px]">Acknowledgment :{'\n'}</Text>
              <Text>
                Balilihandumanan's development results from a collaborative effort, and I express
                our sincere appreciation to all who contributed. The permission of the Local
                Government Unit of Balilihan was crucial to the project's initiation. The Balilihan
                community's generous funding and unwavering support were essential to its
                completion. I am deeply indebted to the cultural mappers and experts who shared
                their invaluable data and stories, bringing the rich history and heritage of
                Balilihan to life. Furthermore, I thank those who graciously allowed me to use their
                images and videos, enhancing the app's visual appeal. {'\n'}
                {'\n'}
                This project is deeply indebted to the legacy of the late Parto T. Clarin and the
                Balilihan public school teachers who compiled the 1953 historical data for Balilihan
                and its barrios. Their work, along with the insightful research of Nimia Lungay and
                Crisolito Geangan, and the teachers who continued this work in 1990, provided
                essential information and inspiration for this project. Finally, I thank Evelyn
                Racho-Lomantas for sharing the stories behind the Balilihan hymn, and Holy Name
                University for the motivation and support provided during my thesis research, which
                made this project possible.{'\n'}
                {'\n'}
              </Text>
              <Text className="font-inknutBold text-[15px]">Book References:{'\n'}</Text>
              <Text>
                Akpedonu, E., & Saloma, C. (2011). Casa Boholana: Vintage houses of Bohol. Ateneo de
                Manila University Press.{'\n'}
                {'\n'}
                Añasco, C. (1980). Bohol: The Capsulized History. (Publication details unknown).
                {'\n'}
                {'\n'}
                Apalisok, S. M. (1992). Bohol without tears: Bohol’s 47 towns and one city. Surigao
                BB Press.{'\n'}
                {'\n'}
                Bersales, J. E. (2014). Pagsulay: Churches of Bohol before and after the 2013
                earthquake. University of San Carlos Press{'\n'}
                {'\n'}
                Clarin, P. T. & Public School Teachers (1953). History and Cultural Life of the Town
                and Barrios of Balilihan. National Library of the Philippines Local Government Unit
                of Balilihan. (2003). Balilihan at 175. (Publication details unknown). {'\n'}
                {'\n'}
                Municipal Government of Balilihan & DECS Administrators, Master Teachers & Teachers
                in Balilihan District. (1990). Balilihan: Historical data and facts. (Publication
                details unknown).{'\n'}
                {'\n'}
                Putong, C. (1965). Bohol and its people. Manila, Philippines.{'\n'}
                {'\n'}
                Tirol, J. B. (1998). Bohol from Spanish yoke to American harness. University of
                Bohol Research Center.{'\n'}
                {'\n'}
              </Text>
              <Text className="font-inknutBold text-[15px]">Website Source:{'\n'}</Text>◆{' '}
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
              <Text className="font-inknutBold text-[15px]">Video Source:{'\n'}</Text>
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
              <Text className="font-inknutBold text-[15px]">Image Source:{'\n'}</Text>
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
              <Text>
                Other images featured in Balilihandumanan were sourced from various Facebook
                accounts, and used with the respective owners' permission. We extend our gratitude
                to the following individuals and pages for allowing the use of their photographs:
                Balilihan sa Kahangturan, Genealogy of Balilihan, Balilihan Tourism, Bohol
                Provincial Library, Old Bohol, National Museum of the Philippines - Bohol, Carmel
                Academy 2.0, Bishop Abet – Diocese of Tagbilaran, Pureza Veloso Chatto, Edgar M.
                Chatto, Mayan Chatto, Seh Sil (Cecille Fegi), Dodong Toledo Libatona, Sering Ugpo
                Yamyamin, Marcelyn Fetalvero, Geneva Rose Mangubat Ontong, Jenepil B. Reyes, Sylva
                Marie Tumanda Ibarra, Simung Iti, and Okeyshun. Their contributions significantly
                enhanced the app's visual appeal and helped to bring the history of Balilihan to
                life. Additionally, several photographs featured in the app were taken by the
                author.
                {'\n'}
                {'\n'}
              </Text>
              <Text className="font-inknutBold text-[15px]">Declaration of AI Use:{'\n'}</Text>
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
