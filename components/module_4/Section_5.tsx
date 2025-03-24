import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import FastImage from 'expo-fast-image';

const Section_5 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  // const images = useMemo(
  //   () => [
  //     require('../../assets/module_4/2. Churches/1.a Our Lady of Mt. Carmel Parish Church (1954).jpg'),
  //     require('../../assets/module_4/2. Churches/1.b New Balilihan Church.jpg'),
  //     require('../../assets/module_4/2. Churches/1.c Restored Our Lady of Mt. Carmel Parish Church.jpeg'),
  //     require('../../assets/module_4/2. Churches/2.a Marker of the Old Church burned by the Americans in 1900.jpg'),
  //     require('../../assets/module_4/2. Churches/2.b Our Lady of Mt. Carmel Parish Church (1939) with Rev. Fr. Aproniano Ochuga Galacia.jpg'),
  //     require('../../assets/module_4/2. Churches/3.e Portrait of Ray Francia, Cebu_s Michelangelo.png'),
  //     require('../../assets/module_4/2. Churches/3.Inside the Church.jpg'),
  //     require('../../assets/module_4/2. Churches/3.b Octagonal-shaped ceiling of the cupola.jpg'),
  //     require('../../assets/module_4/2. Churches/3.c Painting of St. Cecilia with Ray Francias mark.jpg'),
  //     require('../../assets/module_4/2. Churches/4.b Bell in the Our Lady of Mt. Carmel dated in 1831.jpg'),
  //     require('../../assets/module_4/2. Churches/4.c The Limbarok Bells dated in 1856_1950.jpg'),
  //     require('../../assets/module_4/2. Churches/4.a Iron bridge connecting the portico to the bell tower.jpg'),
  //     require('../../assets/module_4/2. Churches/5.a Restoration of the Balilihan Church.jpg'),
  //     require('../../assets/module_4/2. Churches/5.b Restored Balilihan Church.jpg'),
  //     require('../../assets/module_4/2. Churches/5.c Convent of Our Lady of Mt. Carmel Parish.jpeg'),
  //     require('../../assets/module_4/2. Churches/5.d Important Cultural Property Marker of the Church.jpg'),
  //     require('../../assets/module_4/2. Churches/6. Image of Our Lady of Mt. Carmel.jpg'),
  //     require('../../assets/module_4/2. Churches/7.a Santo Nino Parish Church.jpg'),
  //     require('../../assets/module_4/2. Churches/7.b Inside the Sto. Nino Church.jpg'),
  //     require('../../assets/module_4/2. Churches/8.a Image of the Sto. Nino.jpg'),
  //     require('../../assets/module_4/2. Churches/8.b The Altar.jpg'),
  //     require('../../assets/module_4/2. Churches/8.c Hugusan in front of the Church.jpg'),
  //   ],
  //   []
  // );

  const images = useMemo(
    () => [
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790608/1.a_Our_Lady_of_Mt._Carmel_Parish_Church_1954_g0wbgu.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790608/1.b_New_Balilihan_Church_zshicd.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790609/1.c_Restored_Our_Lady_of_Mt._Carmel_Parish_Church_weqq61.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790610/2.a_Marker_of_the_Old_Church_burned_by_the_Americans_in_1900_jy1ml2.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790608/2.b_Our_Lady_of_Mt._Carmel_Parish_Church_1939_with_Rev._Fr._Aproniano_Ochuga_Galacia_jv3l13.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790610/3.e_Portrait_of_Ray_Francia_Cebu_s_Michelangelo_aj8ifx.png',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790610/3.Inside_the_Church_ba6gzj.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790608/3.b_Octagonal-shaped_ceiling_of_the_cupola_kibwig.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790608/3.c_Painting_of_St._Cecilia_with_Ray_Francias_mark_wkm1aw.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790611/4.b_Bell_in_the_Our_Lady_of_Mt._Carmel_dated_in_1831_nyrqut.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790611/4.c_The_Limbarok_Bells_dated_in_1856_1950_dhz6ek.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790610/4.a_Iron_bridge_connecting_the_portico_to_the_bell_tower_dcjpyv.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790611/5.a_Restoration_of_the_Balilihan_Church_nnpzte.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790611/5.b_Restored_Balilihan_Church_odnlsy.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790611/5.c_Convent_of_Our_Lady_of_Mt._Carmel_Parish_yokeiy.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790612/5.d_Important_Cultural_Property_Marker_of_the_Church_aktnxo.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790612/6._Image_of_Our_Lady_of_Mt._Carmel_o08jfl.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790612/7.a_Santo_Nino_Parish_Church_v9ldqr.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790612/7.b_Inside_the_Sto._Nino_Church_gvupu6.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790612/8.a_Image_of_the_Sto._Nino_jkjpvt.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790613/8.b_The_Altar_at3n3w.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742790613/8.c_Hugusan_in_front_of_the_Church_glvskj.jpg',
      },
    ],
    []
  );

  return (
    <>
      {/* _______________________________BALILIHAN CHURCHES________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN CHURCHES">
        <Text
          className="mt-2 py-2 text-center font-inknut text-[14px] uppercase leading-[24px]"
          style={{ color: '#0E8341' }}>
          Our Lady of{'\n'}Mt. Carmel Parish Church
        </Text>
        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Balilihan boasts two significant churches reflecting its rich history. The
          <Text style={{ color: '#0E8341' }}> Our Lady of Mt. Carmel Parish Church</Text>, a
          striking example of American colonial architecture, stands in mainland Balilihan.
        </Text>

        <View className="mb-3 mt-2">
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(0)}>
            <FastImage source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(1)}>
            <FastImage source={images[1]} className="h-full w-full" />
          </TouchableOpacity>

          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(2)}>
            <FastImage source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The Our Lady of Mt. Carmel Parish Church then and now.
        </Text>

        <View className="mb-1 mt-4 flex w-full flex-row items-start">
          {/* Justified Text */}
          <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[11px] leading-[20px]">
            The parish was inaugurated on May 20, 1829, and was placed under the Augustinian
            Recollects who served until the outbreak of the revolution against Spain in Bohol in
            1898. The current church was constructed of poured concrete by Rev. Eliseo Josol y
            Villamayor between 1918 and 1930. An earlier church and convent stood opposite the
            present church but were ruined by a storm in 1863. Later, another church, constructed
            with wooden panels and a nipa roof, was destroyed by the burning of the town during the
            Philippine-American War in 1900.
          </Text>

          {/* Image with Caption */}
          <View className="w-[50%]">
            <TouchableOpacity className="h-[430px] w-full overflow-hidden" onPress={handlePress(3)}>
              <FastImage source={images[3]} className="h-full w-full" />
            </TouchableOpacity>

            <Text
              className="py-1 text-justify font-inknut text-[11px]"
              style={{
                color: '#B08923',
                lineHeight: 18, // Tight spacing
              }}>
              The historical landmark of the Balilihan Church burned by the American troops.
            </Text>
          </View>
        </View>

        <TouchableOpacity
          className="mb-3 h-[230px] w-full overflow-hidden"
          onPress={handlePress(4)}>
          <FastImage source={images[4]} className="h-full w-full" />
        </TouchableOpacity>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          Our Lady of Mt. Carmel Parish Church (1939) with Rev. Fr. Aproniano O. Galicia.
        </Text>

        <View className="mb-4 flex w-full flex-row items-start">
          {/* Image with Caption */}
          <View className="w-[40%]">
            <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(5)}>
              <FastImage source={images[5]} className="h-full w-full" />
            </TouchableOpacity>
            <Text
              className="py-1 text-center font-inknut text-[11px]"
              style={{
                color: '#B08923',
                lineHeight: 18, // Tight spacing
              }}>
              Raymundo Francia
            </Text>
          </View>

          {/* Justified Text */}
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[11px] leading-[20px]">
            This cruciform church has a cupola at the center part of the structure. This
            three-aisled church features stunning ceiling paintings by Cebuano artist{' '}
            <Text style={{ color: '#0E8341' }}>Raymundo Francia</Text> (1928), known as Cebu’s
            Michelangelo, depicting the Seven Sacraments, The Last Supper, Old Testament depictions
            such as The Great Flood, scenes of Heaven illuminated by octagonal clerestory windows,
            and other magnificent renditions.
          </Text>
        </View>

        <View className="-mt-2 mb-3 flex flex-row">
          <TouchableOpacity className="h-[260px] w-[40%] overflow-hidden " onPress={handlePress(6)}>
            <FastImage source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(7)}>
              <FastImage source={images[7]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(8)}>
              <FastImage source={images[8]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The Balilihan Church Painting is considered the most intact and authentic Ray Francia
          painting in Bohol.
        </Text>

        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          Other notable features include chevron-patterned floor tiles and a neo-Gothic cast iron
          bridge that connects the portico to the bell tower, which is adorned with bells dating
          from the 19th to the 20th century.
        </Text>

        <View className="mb-3 mt-3 flex flex-row">
          <View className="w-[60%]">
            <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(9)}>
              <FastImage source={images[9]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[130px] w-full overflow-hidden"
              onPress={handlePress(10)}>
              <FastImage source={images[10]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            className="h-[260px] w-[40%] overflow-hidden "
            onPress={handlePress(11)}>
            <FastImage source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The iron bridge connecting the portico to the bell tower, and the bells dated in 1831,
          1856, and 1950
        </Text>

        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          The National Museum of the Philippines recently held a ceremonial turnover and unveiling
          of markers designating the Our Lady of Mount Carmel Parish Church as an Important Cultural
          Property.
        </Text>

        <View className="mt-3 flex w-full flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(12)}>
            <FastImage source={images[12]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(13)}>
            <FastImage source={images[13]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View className="mb-3 flex w-full flex-row">
          <TouchableOpacity className="h-[160px] w-[60%] overflow-hidden" onPress={handlePress(14)}>
            <FastImage source={images[14]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[160px] w-[40%] overflow-hidden" onPress={handlePress(15)}>
            <FastImage source={images[15]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The restored church and convent, and the seal as the Important Cultural Property.
        </Text>

        <View className="mb-3 flex w-full flex-row items-center">
          <TouchableOpacity className="h-[300px] w-[40%] overflow-hidden" onPress={handlePress(16)}>
            <FastImage source={images[16]} className="h-full w-full" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[11px] leading-[20px]">
            This significant event, marking a milestone in the preservation of Balilihan's cultural
            heritage, was made possible through the collaborative efforts of the National Museum -
            Bohol, the Balilihan municipal government, the parish, and the Diocese of Tagbilaran.
            {'\n'}
            {'\n'}
            The Balilihan community's generous donations have supported additional projects aimed at
            beautifying and maintaining the church.
          </Text>
        </View>

        <Text
          className="mt-2 py-2 text-center font-inknut text-[14px] uppercase leading-[24px]"
          style={{ color: '#0E8341' }}>
          Santo Niño Parish Church
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
          onPress={handlePress(17)}>
          <FastImage source={images[17]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          In the biggest barrio in town, Hanopol, the
          <Text style={{ color: '#0E8341' }}> Santo Niño Parish Church</Text>, built in 1932, holds
          a special place in the community. Initially a chapel, its size reflects the deep faith of
          the Hanopol residents, becoming the largest in the diocese.{'\n'}
          {'\n'}
          Declared a parish in 1989, with
          <Text style={{ color: '#0E8341' }}> Rev. Fr. Florante</Text> Mendaña as its first parish
          priest, the church features a long portico, a belfry situated on the epistle side, and a
          curvilinear pediment topped with a globe and cross. The annual Santo Niño feast celebrated
          on January 16th, is a vibrant testament to the community's devotion.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-2 h-[250px] w-full overflow-hidden"
          onPress={handlePress(18)}>
          <FastImage source={images[18]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Fronting the church is the concrete hugusan, the structure where the child playing as the
          angel is suspended and lowered during the traditional
          <Text style={{ color: '#0E8341' }}> Hugos</Text> during Easter Sunday.
        </Text>

        <View className="mb-5 mt-2 flex flex-row">
          <TouchableOpacity
            className="h-[240px] w-[40%] overflow-hidden "
            onPress={handlePress(19)}>
            <FastImage source={images[19]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(20)}>
              <FastImage source={images[20]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(21)}>
              <FastImage source={images[21]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_5;
