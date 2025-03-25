import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import FastImage from 'expo-fast-image';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);

  const images = useMemo(
    () => [
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741514/1.Old_Photo_Belfry_2_nghf3d.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741516/1.Old_Photo_Belfry_1_dh6ff6.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741515/2._Photo_Belfry_c2xf7y.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741514/3._Old_Photo_Belfry_1987_ckhaoz.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741516/4.Rehabilitation_of_the_Belfry_eqaqgi.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741515/4.Destruction_of_the_Belfry_after_the_2013_Bohol_Earthquake_hsd9bo.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741515/4.Putting_back_of_the_Balilihan_Belfry_Marker_during_the_restoration_x3v9wo.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741515/5.b_Turnover_and_Acceptance_Ceremonies_in_2017_xymeki.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742557985/5.a_Turnover_and_Acceptance_Ceremonies_in_2017_kh83qy.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741516/6.a._The_Restored_Balilihan_Belfry_skabyf.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741516/6.b._Inside_the_Restored_Balilihan_Belfry_as5qtv.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742741516/6.c_The_Restored_Balilihan_Belfry_zuwyib.jpg',
      },
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN BELFRY________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN BELFRY">
        <View className="mb-5 mt-2 flex w-full flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(0)}>
            <FastImage source={images[0]} className="h-full w-full object-contain" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(1)}>
            <FastImage source={images[1]} className="h-full w-full object-contain" />
          </TouchableOpacity>
        </View>
        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          <Text style={{ color: '#0E8341' }}>The Balilihan Belfry</Text>, a significant historical
          structure in Poblacion, Balilihan, was erected between 1835 and 1844. Built under the
          supervision of
          <Text style={{ color: '#0E8341' }}> Friar Manuel Plaza de San Benito</Text> and
          <Text style={{ color: '#0E8341' }}> Capitan Placido Andoy</Text>, and inaugurated in 1844
          by <Text style={{ color: '#0E8341' }}>Friar Antonio Cortes de San Ramon </Text>
          and <Text style={{ color: '#0E8341' }}>Capitan Gabriel Terec Racho</Text>, it served as a
          watchtower during the Spanish colonial period.
        </Text>

        <View className="mb-1 mt-2 flex w-full flex-row items-start">
          <TouchableOpacity className="h-[250px] w-[45%] overflow-hidden" onPress={handlePress(2)}>
            <FastImage source={images[2]} className="h-full w-full object-contain" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[11px] leading-[20px]">
            This quadrilateral tower made of cut coral stone, transported from Baclayon by foot, is
            one of seven Spanish-era watchtowers in Bohol and served as a vital lookout against
            pirates and invaders, commanding a view of the Abatan River. Its unusual inland location
            in Balilihan suggests a strategic purpose beyond river monitoring—maintaining vigilance
            over potential unrest.
          </Text>
        </View>

        <View className="mb-5 flex w-full flex-row items-start">
          <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[11px] leading-[20px]">
            While some sources suggest its bell also called the faithful to mass across the hilly
            terrain, its primary function was likely for defense.{'\n'}
            It withstood numerous typhoons until the devastating 7.2 magnitude earthquake of October
            15, 2013, caused its collapse.
          </Text>
          <TouchableOpacity className="h-[200px] w-[45%] overflow-hidden" onPress={handlePress(3)}>
            <FastImage source={images[3]} className="h-full w-full object-contain" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[240px] w-[40%] overflow-hidden" onPress={handlePress(4)}>
            <FastImage source={images[4]} className="h-full w-full object-contain" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(5)}>
              <FastImage source={images[5]} className="h-full w-full object-contain" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(6)}>
              <FastImage source={images[6]} className="h-full w-full object-contain" />
            </TouchableOpacity>
          </View>
        </View>

        <View>
          <Text className="py-1 text-justify font-inknut text-[11px] leading-[22px]">
            Thanks to over ₱6.8 million in funding from the National Museum of the Philippines
            (NMP), this important historic structure, located on
            <Text style={{ color: '#0E8341' }}> Mt. Carmel Hill </Text>(locally known as Van DeLeon
            Hill), is rehabilitated.
          </Text>
        </View>

        <View className="mb-4 mt-2">
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(7)}>
            <FastImage source={images[7]} className="h-full w-full object-contain" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(8)}>
            <FastImage source={images[8]} className="h-full w-full object-contain" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The turnover and acceptance of the restored Balilihan Belfry from National Museum of the
          Philippines to LGU Balilihan.
        </Text>

        <Text className="py-2 text-justify font-inknut text-[11px] leading-[22px]">
          Its restoration preserves a significant example of Bohol's Spanish colonial defenses,
          similar to those found in Panglao, Maribojoc, and Pamilacan. Additionally, they were
          collectively declared by the NMP as National Cultural Treasures on August 29, 2011. These
          events, along with the belfry's history, highlight the resilience of Balilihan and its
          people.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[260px] w-[40%] overflow-hidden" onPress={handlePress(9)}>
            <FastImage source={images[9]} className="h-full w-full object-contain" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity
              className="h-[130px] w-full overflow-hidden"
              onPress={handlePress(10)}>
              <FastImage source={images[10]} className="h-full w-full object-contain" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[130px] w-full items-start overflow-hidden"
              onPress={handlePress(11)}>
              <FastImage source={images[11]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_4;
