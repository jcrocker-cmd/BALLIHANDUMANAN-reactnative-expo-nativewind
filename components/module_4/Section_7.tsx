import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import FastImage from 'expo-fast-image';

const Section_7 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  // const images = useMemo(
  //   () => [
  //     require('../../assets/module_4/4. Kawasan Falls/1.a Kawasan Falls.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/1.b Kawasan Falls.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/2.a Kawasan Falls.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/2.b Kawasan Falls.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/3.a Kawasan Falls Complex.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/3.b Ongoing rehabilitation of the Balilihan Kawasan Falls Tourist complex.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/3.c Cottages.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/3.d Abatan River (known as Bantayan River by locals).jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/4.a Swimming at the base of the falls.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/4.b Fun Paddle Activity at the Bantayan River.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/5.a Kawasan Falls before the 2013 earthquake.jpg'),
  //     require('../../assets/module_4/4. Kawasan Falls/5.b Kawasan Falls before the 2013 earthquake.png'),
  //   ],
  //   []
  // );

  const images = useMemo(
    () => [
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791912/1.a_Kawasan_Falls_xx6fjr.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791933/1.b_Kawasan_Falls_td9cse.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791935/2.a_Kawasan_Falls_dgbuzb.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791935/2.b_Kawasan_Falls_y41gec.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791935/3.a_Kawasan_Falls_Complex_pbpgir.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791936/3.b_Ongoing_rehabilitation_of_the_Balilihan_Kawasan_Falls_Tourist_complex_hyn7xy.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791936/3.c_Cottages_mxqk6k.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791936/3.d_Abatan_River_known_as_Bantayan_River_by_locals_wzn1ji.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791937/4.a_Swimming_at_the_base_of_the_falls_hqj3fn.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791938/4.b_Fun_Paddle_Activity_at_the_Bantayan_River_j9jzlc.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791939/5.a_Kawasan_Falls_before_the_2013_earthquake_j9cufp.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791940/5.b_Kawasan_Falls_before_the_2013_earthquake_oevned.png',
      },
    ],
    []
  );

  return (
    <>
      {/* _______________________________KAWASAN FALLS________________________________ */}
      <CollapsibleSubTitle name="KAWASAN FALLS">
        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Kawasan Falls is a renowned tourist destination waterfall in Bohol. Kawasan, meaning "to
          embark" in Visayan, derives its name from its historical role as a bustling barter center.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[40%] overflow-hidden" onPress={handlePress(0)}>
            <FastImage source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[60%] overflow-hidden" onPress={handlePress(1)}>
            <FastImage source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        {/* Wrap the text inside a View and apply margin */}
        <View style={{ flex: 1 }}>
          <Text className="py-1 text-justify font-inknut text-[11px] leading-[22px]">
            Located about a kilometer upstream from the Bantayan docking area along the Abatan River
            (known as Bantayan River by the locals), and bordering the barangays of Cabad, Candasig,
            and Dorol (though administered by Cabad), Kawasan Falls is approximately four kilometers
            from Balilihan's municipal hall.
          </Text>
        </View>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(2)}>
            <FastImage source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(3)}>
            <FastImage source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          From the Kawasan Tourism Complex, visitors descend a cemented stairway to the falls,
          enjoying breathtaking river views and cottages. The falls feature a 25-meter cascade into
          a natural pool, surrounded by lush tropical vegetation and rugged cliffs.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(4)}>
            <FastImage source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(5)}>
            <FastImage source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(6)}>
            <FastImage source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(7)}>
            <FastImage source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          It is easily accessible by any type of vehicle, thanks to a newly constructed concrete
          road. Visitors can enjoy swimming in the pool at the base of the falls, do a fun paddle
          activity at the Bantayan River, and appreciate the tranquil atmosphere and clean air.
          Kawasan Falls was the endpoint of a former Abatan River cruise project.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(8)}>
            <FastImage source={images[8]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(9)}>
            <FastImage source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          It is important to note that the 7.2 magnitude earthquake that struck Bohol in 2013
          significantly altered the falls' original structure, damaging a previously existing cave
          system.
        </Text>

        <View className="mb-3 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(10)}>
            <FastImage source={images[10]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(11)}>
            <FastImage source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The Kawasan Falls before the 2013 Bohol earthquake.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_7;
