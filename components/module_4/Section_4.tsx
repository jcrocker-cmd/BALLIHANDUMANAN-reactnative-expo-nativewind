import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_4/1. Belfry/1.Old Photo Belfry 2.jpg'),
      require('../../assets/module_4/1. Belfry/1.Old Photo Belfry 1.jpg'),
      require('../../assets/module_4/1. Belfry/2. Photo Belfry.jpg'),
      require('../../assets/module_4/1. Belfry/3. Old Photo Belfry (1987).jpg'),
      require('../../assets/module_4/1. Belfry/4.Rehabilitation of the Belfry.jpg'),
      require('../../assets/module_4/1. Belfry/4.Destruction of the Belfry after the 2013 Bohol Earthquake.jpg'),
      require('../../assets/module_4/1. Belfry/4.Putting back of the Balilihan Belfry Marker during the restoration.jpg'),
      require('../../assets/module_4/1. Belfry/5.b Turnover and Acceptance Ceremonies in 2017.jpg'),
      require('../../assets/module_4/1. Belfry/5.a Turnover and Acceptance Ceremonies in 2017.jpg'),
      require('../../assets/module_4/1. Belfry/6.a. The Restored Balilihan Belfry.jpeg'),
      require('../../assets/module_4/1. Belfry/6.b. Inside the Restored Balilihan Belfry.jpg'),
      require('../../assets/module_4/1. Belfry/6.c The Restored Balilihan Belfry.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN BELFRY________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN BELFRY">
        <View className="mb-5 mt-2 flex w-full flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(0)}>
            <Image source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          <Text style={{ color: '#0E8341' }}>The Balilihan Belfry</Text>, a significant historical
          structure in Poblacion, Balilihan, was erected between 1835 and 1846. Built under the
          supervision of 
          <Text style={{ color: '#0E8341' }}>Friar Manuel Plaza de San Benito</Text> and 
          <Text style={{ color: '#0E8341' }}>Capitan Placido Andoy</Text>, and inaugurated in 1846
          by <Text style={{ color: '#0E8341' }}>Friar Antonio Cortes de San Ramon</Text>
           and <Text style={{ color: '#0E8341' }}>Capitan Gabriel Terec Racho</Text>, it served as a
          watchtower during the Spanish colonial period.
        </Text>

        <View className="mb-1 mt-2 flex w-full flex-row items-start">
          <TouchableOpacity className="h-[250px] w-[45%] overflow-hidden" onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
            This quadrilateral tower made of {'\n'}cut coral stone, transported from Baclayon by
            foot, is one of seven Spanish-era watchtowers in Bohol and served as a vital lookout
            against pirates and invaders, commanding a view of the Abatan River. Its unusual inland
            location in Balilihansuggests a strategic purpose beyond river monitoring—maintaining
            vigilance over potential unrest.
          </Text>
        </View>

        <View className="-mb-2 flex w-full flex-row">
          <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[12px] leading-[20px]">
            While some sources suggest its bell also called the faithful to mass across the hilly
            terrain, its primary function was likely for defense.{'\n'}
            It withstood numerous typhoons until the devastating 7.2 magnitude earthquake of October
            15, 2013, caused its collapse.
          </Text>
          <TouchableOpacity className="h-[200px] w-[45%] overflow-hidden" onPress={handlePress(3)}>
            <Image source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[240px] w-[40%] overflow-hidden" onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(5)}>
              <Image source={images[5]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(7)}>
              <Image source={images[6]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[22px] max-xs:text-base">
          Thanks to over ₱6.8 million in funding from the National Museum of the Philippines (NMP),
          this important historic structure, located on 
          <Text style={{ color: '#0E8341' }}>Mt. Carmel Hill</Text> (locally known as Van DeLeon
          Hill), is rehabilitated.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(7)}>
            <Image source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(8)}>
            <Image source={images[8]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[22px]">
          Its restoration preserves a significant example of Bohol's Spanish colonial defenses,
          similar to those found in Panglao, Maribojoc, and Pamilacan. Additionally, they were
          collectively declared by the NMP as National Cultural Treasures on August 29, 2011. These
          events, along with the belfry's history, highlight the resilience of Balilihan and its
          people.
        </Text>

        <View className="-mt-2 mb-5 flex flex-row">
          <TouchableOpacity className="h-[260px] w-[40%] overflow-hidden" onPress={handlePress(9)}>
            <Image source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity
              className="h-[130px] w-full overflow-hidden"
              onPress={handlePress(10)}>
              <Image source={images[10]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[130px] w-full overflow-hidden"
              onPress={handlePress(11)}>
              <Image source={images[11]} className="h-full w-full" />
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
