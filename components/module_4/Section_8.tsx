import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_8 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_4/5. Sumad Festival/1.a Balilihan Sumad 1994.png'),
      require('../../assets/module_4/5. Sumad Festival/1.b Balilihan Sumad 1995.png'),
      require('../../assets/module_4/5. Sumad Festival/1.c Balilihan Sumad 2021.jpg'),
      require('../../assets/module_4/5. Sumad Festival/1.d Balilihan Sumad 2024.jpg'),
      require('../../assets/module_4/5. Sumad Festival/2.b Duwa-Sayaw in the _90s.png'),
      require('../../assets/module_4/5. Sumad Festival/2.c Sumad celebration in the 90_s.png'),
      require('../../assets/module_4/5. Sumad Festival/2.d Pasunding current.jpg'),
      require('../../assets/module_4/5. Sumad Festival/2.e Pasunding current.jpg'),
      require('../../assets/module_4/5. Sumad Festival/3.a Agro-air.jpg'),
      require('../../assets/module_4/5. Sumad Festival/3.c Booths in Agro-Fair.jpg'),
      require('../../assets/module_4/5. Sumad Festival/3.d Booths in Agro-Fair.jpg'),
      require('../../assets/module_4/5. Sumad Festival/3.e Booths in Agro-Fair.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.a Sumad Festival King and Queen.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.c Mutya sa Balilihan.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.b Sumad Festival King and Queen.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.d Fun Run for a cause - Dagan para sa Katawhan.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.e Awarding and Recognition of Honorees.jpg'),
      require('../../assets/module_4/5. Sumad Festival/4.f Awarding of Achievers.jpg'),
      require('../../assets/module_4/5. Sumad Festival/5.a Sumad Streetdancing in 2009.jpg'),
      require('../../assets/module_4/5. Sumad Festival/5.b Sumad Streetdancing in 2009.jpg'),
      require('../../assets/module_4/5. Sumad Festival/5.e Sumad Streetdancing in 2024.jpg'),
      require('../../assets/module_4/5. Sumad Festival/5.d Sumad Streetdancing in 2024.png'),
      require('../../assets/module_4/5. Sumad Festival/6.c Tiyo Kiking.jpg'),
      require('../../assets/module_4/5. Sumad Festival/6.b Tiyo Kiking at Sambag Cemetery.jpg'),
      require('../../assets/module_4/5. Sumad Festival/6.a Eladio I. Chatto - Tiyo Kiking.png'),
      require('../../assets/module_4/5. Sumad Festival/7.b Republic Act No. 9706.png'),
      require('../../assets/module_4/5. Sumad Festival/7.c Republic Act No. 9706.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________SUMAD FESTIVAL________________________________ */}
      <CollapsibleSubTitle name="SUMAD FESTIVAL">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan's <Text style={{ color: '#0E8341' }}>Sumad Festival</Text>, celebrated annually
          on September 29th, commemorates the municipality's founding. "Sumad", locally means
          “anniversary”, signifies the accumulation of wisdom and experience over the years,
          highlighting the community's resilience, perseverance, and faith.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(0)}>
            <Image source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity className="h-[150px] w-full overflow-hidden" onPress={handlePress(2)}>
          <Image source={images[2]} className="h-full w-full" />
        </TouchableOpacity>
        <TouchableOpacity
          className="mb-5 h-[250px] w-full overflow-hidden"
          onPress={handlePress(3)}>
          <Image source={images[3]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Officially declared Balilihan Day (or Sumad) in 1993 through Resolution No.
          93-23-A—sponsored by Hon. Ambrosio L. Bayud, adopted on March 22, 1993, attested by Vice
          Mayor Dominisio Chatto, and approved by then-Mayor Edgar M. Chatto, with SB
          Secretary Nimia M. Lungay certifying its correctness—the festival initially featured a
          one-day celebration including “Pasunding,” a historical street dance drama or
          “duwa-sayaw”.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(6)}>
            <Image source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(7)}>
            <Image source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          This evolved into a two-day event (1994-1997), incorporating an agro-industrial fair, a
          beauty pageant ("Mutya ng Balilihan"), and a community awards ceremony. In 1998,
          the SumadFestival expanded to a week-long celebration based on Section 122, Chapter 9 of
          the Municipal Environment Code, adopted by the Sangguniang Bayan on March 25, 1998,
          attested by Vice Mayor Dominisio Chatto (presiding officer), and approved by Mayor Eladio
          I. Chatto on April 13, 1998.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(8)}>
            <Image source={images[8]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(9)}>
            <Image source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(10)}>
            <Image source={images[10]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(11)}>
            <Image source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Today, the festival attracts both local and international tourists, featuring an agro-fair
          showcasing each barangay's agricultural products, a Sumad Festival King and Queen pageant
          (with agriculture-themed costumes), a fun run, a food bazaar ("Painit Festival"),
          a streetdancing, and various other competitions and nightly events. The culmination
          program honors academic achievers, retirees, and outstanding barangays.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(12)}>
            <Image source={images[12]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(13)}>
            <Image source={images[13]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(14)}>
            <Image source={images[14]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(15)}>
            <Image source={images[15]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(16)}>
            <Image source={images[16]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(17)}>
            <Image source={images[17]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(18)}>
            <Image source={images[18]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(19)}>
            <Image source={images[19]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(20)}>
            <Image source={images[20]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[50%] overflow-hidden" onPress={handlePress(21)}>
            <Image source={images[21]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The festival holds a particularly poignant significance since the passing
          of Balilihan's longest-serving mayor, Eladio I. Chatto ("Tiyo Kiking"), on September 29,
          2001, during the 173rd Foundation Day celebration.
        </Text>

        <View className="mb-5 mt-2 flex flex-row">
          <TouchableOpacity className="h-[240px] w-1/2 overflow-hidden" onPress={handlePress(22)}>
            <Image source={images[22]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-1/2">
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(23)}>
              <Image source={images[23]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(24)}>
              <Image source={images[24]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          In 2009, Republic Act No. 9706—sponsored by Congressman Edgar M. Chatto and passed by the
          House of Representatives on December 3, 2008, and the Senate on May 26, 2009—officially
          declared September 29th a special non-working public holiday in Balilihan, signed into law
          by President Gloria Macapagal-Arroyo on August 7, 2009. The Sumad Festival continues to be
          a cherished tradition, celebrating Balilihan's history, culture, and community spirit.
        </Text>

        <View className="-mt-3 flex flex-row">
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(25)}>
            <Image source={images[25]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(26)}>
            <Image source={images[26]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_8;
