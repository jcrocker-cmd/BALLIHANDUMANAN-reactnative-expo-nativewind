import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { useState, useMemo, useCallback } from 'react';
import ImageViewer from 'components/common/ImageViewer';

const Section_3 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_1/pic_1.png'),
      require('../../assets/module_1/pic_2.png'),
      require('../../assets/module_1/1.b. Bohol under the jurisdiction of Cebu.jpg'),
      require('../../assets/module_1/2. Map - Baclayon and its neighboring towns.png'),
      require('../../assets/module_1/3. Mariano Ricafort_s signature - the 61st Governor-General of the Philippines.jpg'),
      require('../../assets/module_1/pic_6.png'),
      require('../../assets/module_1/pic_7.png'),
      require('../../assets/module_1/6. Map of Balilihan and Catigbian.jpg'),
      require('../../assets/module_1/7. Drone shot of the poblacion in Balilihan.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________Journey to the Beginning________________________________ */}
      <CollapsibleSubTitle name="journey to the beginning">
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          After completing both activities, it’s time to watch a short video clip about the town’s
          origins and how it was started. Afterward, please share your thoughts and reflections on
          what you’ve learned.
        </Text>
        {/* Clickable Image */}
        <TouchableOpacity
          className="mb-7 mt-5 h-[230px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="py-1 text-center font-inknut text-[12px] uppercase  leading-[24px]">
          BALILIHAN’S FORMAL ESTABLISHMENT,  TERRITORIAL CHANGES, AND ANNEXATIONS
        </Text>

        {/* Clickable Image */}
        <TouchableOpacity
          className="mb-7 mt-5 h-[230px] w-full overflow-hidden"
          onPress={handlePress(1)}>
          <Image source={images[1]} className="h-full w-full" />
        </TouchableOpacity>

        <View className="mb-4 mt-4 flex w-full flex-row items-center">
          <TouchableOpacity className="h-[260px] w-1/2 overflow-hidden" onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
            Balilihan's history is intertwined with the evolving political landscape of the
            Philippines. Initially, under Spanish rule, Bohol fell under the jurisdiction of
            Cebu. Balilihan, a significant pueblo (town) at the time with 2,878 inhabitants, was
            among the 41 pueblos that comprised Cebu province.
          </Text>
        </View>

        <Text className="py-1 text-justify font-inknut text-[12px] leading-[24px]">
          However, on September 1, 1847, Spanish authorities established Bohol as a separate
          province independent from Cebu. Only 22 of Bohol's towns were created during that time,
          including Balilihan.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[250px] w-full overflow-hidden"
          onPress={handlePress(3)}>
          <Image source={images[3]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="py-1 text-justify font-inknut text-[12px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>Baclayon</Text> was the first town the Spaniards built
          in Bohol. Originally, the town of Baclayon was much bigger and included what are
          now Balilihan, Alburquerque, Catigbian, Corella, Sikatuna, and San Isidro.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[220px] w-full overflow-hidden"
          onPress={handlePress(4)}>
          <Image source={images[4]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Around 1827, <Text style={{ color: '#0E8341' }}>Governor-General Mariano Ricafort</Text>
           wanted people to govern themselves, so new towns were made. Balilihan became its town
          around 1828, separating from Baclayon. At first, it was sparsely settled, but grew rapidly
          and became economically, politically, socially, and religiously progressive.
          {'\n'}It was on September 29, 1828, when a friar, called by the natives as 
          <Text style={{ color: '#0E8341' }}>Fray Tomas,</Text> sought the cooperation of the
          inhabitants and organized and established a settlement in the sitio of{' '}
          <Text style={{ color: '#0E8341' }}>“Bay sa Iring”</Text> (presently located in Datag).
        </Text>

        <View className="mb-4 mt-4 flex w-full flex-row items-center">
          <TouchableOpacity className="h-[190px] w-1/2 overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
            In 1901, <Text style={{ color: '#0E8341' }}>Jose Aniceto B. Clarin</Text>, Bohol's first
            civil governor, announced his intention to annex Balilihan and make it a barrio of
            Antequera, effectively abolishing Balilihan as a town.
          </Text>
        </View>

        <View className="mb-1 mt-4 flex w-full flex-row items-start">
          <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[12px] leading-[20px]">
            <Text style={{ color: '#0E8341' }}>Manuel Diamante</Text>, Balilihan's municipal
            president, strongly opposed this plan, voicing the people's discontent and warning of
            potential unrest if the annexation proceeded. Governor Clarinultimately decided against
            annexing Balilihan to Antequera.
          </Text>

          <TouchableOpacity className="h-[180px] w-[40%] overflow-hidden" onPress={handlePress(6)}>
            <Image source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          However, as a consequence of this initial plan, the neighboring town of Catigbian was
          downgraded to a barrio under Act No. 370 of the Philippine Commission, becoming part
          of Balilihan. Following this action, Governor Clarin proposed a revised plan to the US
          authorities: instead of Balilihan's demotion, 
          <Text style={{ color: '#0E8341' }}>Catigbian</Text> should be integrated into Balilihan.
          This demonstrates a shift in strategy, from initially targeting Balilihan for annexation
          to ultimately suggesting Catigbian's incorporation into Balilihan.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(7)}>
          <Image source={images[7]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          In a twist of fate, by 1949, Balilihan faced significant territorial loss
          when Catigbian was granted its own town charter. This decision came despite strong
          objections from Balilihan's Mayor,
          <Text style={{ color: '#0E8341' }}>Balbino Chatto</Text> , and 
          <Text style={{ color: '#0E8341' }}>Gerardo Racho</Text>, who personally traveled to
          Malacañang to appeal to President Elpidio Quirino. Their efforts to
          retain Catigbian within Balilihan were unsuccessful, marking a significant change in the
          region's administrative landscape.{'\n'}
          {'\n'}Subsequent administrative divisions further shaped Balilihan's position. In 1907,
          Bohol's municipalities were divided into three legislative districts,
          with Balilihan initially assigned to the Second District. The 1987 Philippine Constitution
          led to further reapportionment of towns, resulting in Balilihan's current placement in
          the 
          <Text style={{ color: '#0E8341' }}>First District of Bohol</Text>.{'\n'}
          {'\n'}This demonstrates Balilihan's shifting administrative affiliations throughout its
          history, reflecting the broader changes in the governance of the region.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_3;
