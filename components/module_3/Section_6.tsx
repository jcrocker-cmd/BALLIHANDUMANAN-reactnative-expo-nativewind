import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_6 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_3/18. Balilihan Flag.jpg'),
      require('../../assets/module_3/officialseal.png'),
      require('../../assets/module_3/20. Balilihan Hymn Music Sheet.jpg'),
      require('../../assets/module_3/21.Mahogany - Municipal Tree.jpg'),
      require('../../assets/module_3/21.Anthurium - Municipal Flower.jpg'),
      require('../../assets/module_3/21.Coconut - Municipal Plant.jpg'),
      require('../../assets/module_3/21.Banana - Municipal Fruit.jpg'),
      require('../../assets/module_3/21.Tilapia - Municipal Fish.jpg'),
      require('../../assets/module_3/21.Pigeon - Municipal Bird.png'),
      require('../../assets/module_3/21.Carabao - Municipal Animal.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN’S MUNICIPAL IDENTITY________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN’S MUNICIPAL IDENTITY">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The municipal ordinance under Sections 13 and 14, Chapter 8 of the Code of General
          Ordinances enacted on March 14, 1995, provided for the adoption of a municipal flag. Here
          is the flag’s design and symbolism:
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 flex h-[180px] w-[80%] self-center overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full object-contain" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The rectangular field is divided vertically across the width into three equal fields. The
          sky-blue field in the flag symbolizes peace, its white center for nobility, and red for
          courage. The head of the carabao, colored yellow, symbolizes the patience, strength,
          obedience, and perseverance of its people. The laurel leaves in dark green, represent the
          31 barangays of the town. In the background is the historic belfry, colored chocolate
          brown, a symbol of the town’s patrimony.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 flex h-[180px] w-[180px] self-center overflow-hidden"
          onPress={handlePress(1)}>
          <Image source={images[1]} className="h-full w-full object-contain" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The Balilihan official seal's emblem powerfully symbolizes the town's unity and strength.
          A small inner circle depicts a united leadership, diverse in personality yet unified in
          purpose. This inner circle expands into a larger outer circle representing the
          entire Balilihan community—one in mind and spirit, bound by faith, hope, and love, and
          sharing the motto "Aim High, BalilihanForever."
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Three distinct areas outside the central circles showcase the town's abundant agricultural
          bounty, represented by various cultivated crops and plants. A carabao, symbolizing
          strength and power, highlights agriculture as the cornerstone of Balilihan's economy.
          Finally, a triangle formed by two lines represents the historic Balilihan belfry, a
          prominent landmark linking the town's past to its present. The space within the triangle
          symbolizes the community's democratic freedoms, while the triangle itself signifies
          unwavering dedication, love, and devotion—a unity that endures through all challenges.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(2)}>
            <Image
              source={images[2]}
              className="h-full w-full"
              resizeMode="cover"
              style={{ alignSelf: 'flex-start' }}
            />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          "Balilihan sa Kahangturan," with music by Arturo M. Lomantas and lyrics by Evelyn
          R. Lomantas, was selected as the official municipal hymn following a composition contest
          held in the late 1980s. Among the judges was Justino "Ning" Romea, renowned composer of
          the Bohol hymn, "Awit sa Bohol."
        </Text>

        <Text
          style={{ color: '#0E8341' }}
          className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The municipal symbols were officially adopted on March 25, 1998, as outlined in Section
          42, Chapter IV of the Municipal Environmental Code.
        </Text>

        <View className="mb-5 mt-2 flex w-full flex-row">
          <TouchableOpacity className="h-[200px] w-1/4 overflow-hidden" onPress={handlePress(3)}>
            <Image source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-1/4 overflow-hidden" onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-1/4 overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-1/4 overflow-hidden" onPress={handlePress(6)}>
            <Image source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 mt-2 flex w-full flex-row ">
          <Text className="w-1/2 py-1 text-left font-inknut text-[10px] leading-[24px]">
            Municipal Tree – Mahogany{'\n'}
            Municipal Flower – Anthurium{'\n'}
            Municipal Plant – Coconut{'\n'}
            Municipal Fruit – Banana {'\n'}
          </Text>

          <Text className="w-1/2 text-balance py-1 text-justify font-inknut text-[10px] leading-[24px]">
            Municipal Fish – Tilapia{'\n'}
            Municipal Bird – Pigeon{'\n'}
            Municipal Animal – Carabao{'\n'}
          </Text>
        </View>

        <View className="mb-5 mt-2 flex w-full flex-row">
          <TouchableOpacity className="h-[200px] w-1/3 overflow-hidden" onPress={handlePress(7)}>
            <Image source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-1/3 overflow-hidden" onPress={handlePress(8)}>
            <Image source={images[8]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-1/3 overflow-hidden" onPress={handlePress(9)}>
            <Image source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_6;
