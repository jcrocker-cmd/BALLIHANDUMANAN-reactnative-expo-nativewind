import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import FastImage from 'expo-fast-image';

const Section_6 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  // const images = useMemo(
  //   () => [
  //     require('../../assets/module_4/3. Plaza/1.a Balilihan Plaza before the Restoration.png'),
  //     require('../../assets/module_4/3. Plaza/1.b Restored Balilihan Plaza.jpeg'),
  //     require('../../assets/module_4/3. Plaza/2.a Overview of Balilihan Plaza.png'),
  //     require('../../assets/module_4/3. Plaza/2.b Plaza and the Church.jpeg'),
  //     require('../../assets/module_4/3. Plaza/3.a Playground.jpg'),
  //     require('../../assets/module_4/3. Plaza/3.b. Playground.jpg'),
  //     require('../../assets/module_4/3. Plaza/3.c Tennis Court.jpeg'),
  //     require('../../assets/module_4/3. Plaza/3.e Cultural Programs at the Kiosk.jpg'),
  //     require('../../assets/module_4/3. Plaza/3.f Veteran_s Mark.jpg'),
  //     require('../../assets/module_4/3. Plaza/3.d Restored Kiosk.jpeg'),
  //     require('../../assets/module_4/3. Plaza/4.a Balilihan Plaza at night and during Christmas.jpg'),
  //     require('../../assets/module_4/3. Plaza/4.c Balilihan Plaza at night and during Christmas.jpg'),
  //     require('../../assets/module_4/3. Plaza/4.d Balilihan Plaza at night and during Christmas.jpg'),
  //     require('../../assets/module_4/3. Plaza/4.e Balilihan Plaza at night and during Christmas.jpg'),
  //     require('../../assets/module_4/3. Plaza/4.b Balilihan Plaza at night and during Christmas.jpg'),
  //     require('../../assets/module_4/3. Plaza/5.a Rizal Monument.jpg'),
  //     require('../../assets/module_4/3. Plaza/5.c Restored Rizal Monument.jpg'),
  //     require('../../assets/module_4/3. Plaza/5.b Rizal Day 2024 celebration with the Punong Barangays.jpg'),
  //     require('../../assets/module_4/3. Plaza/6.a Old Photo of the Balilihan Plaza - courtesy by Dr. Carlito Orig.jpg'),
  //     require('../../assets/module_4/3. Plaza/6.b Balilihan Kiosk Photo Courtesy by Omar Torralba.jpg'),
  //     require('../../assets/module_4/3. Plaza/6.c Miss Carmel Academy 1965 Parade at the Balilihan Plaza.jpg'),
  //     require('../../assets/module_4/3. Plaza/7.a A Plaque as First Prize Winner for National Beautification_Cleanliness.jpeg'),
  //     require('../../assets/module_4/3. Plaza/7.b Balilihan Plaza before restoration.png'),
  //     require('../../assets/module_4/3. Plaza/8. Official Turnover.jpg'),
  //   ],
  //   []
  // );

  const images = useMemo(
    () => [
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791301/1.a_Balilihan_Plaza_before_the_Restoration_oiuc66.png',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791301/1.b_Restored_Balilihan_Plaza_mf0spt.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791301/2.a_Overview_of_Balilihan_Plaza_gjgg5w.png',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791302/2.b_Plaza_and_the_Church_xrkmlx.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791303/3.a_Playground_jxfiw4.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791302/3.b._Playground_mqmbku.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791302/3.c_Tennis_Court_wd82ad.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791303/3.e_Cultural_Programs_at_the_Kiosk_avpopc.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791303/3.f_Veteran_s_Mark_yyvbah.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791303/3.d_Restored_Kiosk_umheqs.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791304/4.a_Balilihan_Plaza_at_night_and_during_Christmas_pvfkkv.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791306/4.c_Balilihan_Plaza_at_night_and_during_Christmas_phuag8.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791306/4.d_Balilihan_Plaza_at_night_and_during_Christmas_xmlt4f.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791307/4.e_Balilihan_Plaza_at_night_and_during_Christmas_y4n8ok.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791305/4.b_Balilihan_Plaza_at_night_and_during_Christmas_fayv3s.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791307/5.a_Rizal_Monument_v1fesu.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791308/5.c_Restored_Rizal_Monument_deftrq.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791308/5.b_Rizal_Day_2024_celebration_with_the_Punong_Barangays_evnc9v.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791309/6.a_Old_Photo_of_the_Balilihan_Plaza_-_courtesy_by_Dr._Carlito_Orig_xz1h4m.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791310/6.b_Balilihan_Kiosk_Photo_Courtesy_by_Omar_Torralba_v1qfhb.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791310/6.c_Miss_Carmel_Academy_1965_Parade_at_the_Balilihan_Plaza_nommli.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791311/7.a_A_Plaque_as_First_Prize_Winner_for_National_Beautification_Cleanliness_hbqz3h.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791312/7.b_Balilihan_Plaza_before_restoration_gksumt.png',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742791313/8._Official_Turnover_a1l85u.jpg',
      },
    ],
    []
  );

  return (
    <>
      {/* _______________________________BALILIHAN MUNICIPAL PLAZA & PARK________________________________ */}
      <CollapsibleSubTitle name={`BALILIHAN MUNICIPAL PLAZA\n& PARK`}>
        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          <Text style={{ color: '#0E8341' }}>The Balilihan Municipal Plaza and Park </Text>
          (also known as Plaza Rizal or Balilihan Plaza) serves as its vibrant heart, a green escape
          attracting visitors with its lush landscaping. Lined with beautifully trimmed gumamela and
          santan flowers, the plaza's narrow streets create a picturesque setting.
        </Text>

        <View className="mb-3 mt-3 flex w-full">
          <TouchableOpacity className="h-[220px] w-full overflow-hidden" onPress={handlePress(0)}>
            <FastImage source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[220px] w-full overflow-hidden" onPress={handlePress(1)}>
            <FastImage source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The Balilihan Plaza before and after the restoration.
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Rectangular plots of balili and bermuda grass divide the space, which is surrounded by a
          mix of residential homes and important community buildings.
        </Text>

        <View className="flex w-full py-3">
          <TouchableOpacity className="h-[220px] w-full overflow-hidden" onPress={handlePress(2)}>
            <FastImage source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[220px] w-full overflow-hidden" onPress={handlePress(3)}>
            <FastImage source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-3 text-justify font-inknut text-[11px] leading-[24px]">
          These include the municipal health building, a senior citizen center, a daycare center,
          Carmel Academy (the town's oldest secondary school), and the Our Lady of Mount Carmel
          Parish Church. A portion of land in front of the church, donated to the parish, is
          separated from the plaza by the main street.
        </Text>

        <View className="mt-2 flex flex-row">
          <TouchableOpacity className="h-[240px] w-[40%] overflow-hidden " onPress={handlePress(4)}>
            <FastImage source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-[60%]">
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(5)}>
              <FastImage source={images[5]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(6)}>
              <FastImage source={images[6]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>

        <View className="mb-5 flex flex-row">
          <View className="w-[60%]">
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(7)}>
              <FastImage source={images[7]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[120px] w-full overflow-hidden" onPress={handlePress(8)}>
              <FastImage source={images[8]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity className="h-[240px] w-[40%] overflow-hidden " onPress={handlePress(9)}>
            <FastImage source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-2 text-justify font-inknut text-[11px] leading-[24px]">
          Balilihan's town plaza offers a variety of recreational amenities, including a kiosk,
          veterans' mark, lawn tennis court, and children's playground. This green space provides
          vital connections to nature, encouraging physical activity and community engagement.
          Residents and visitors alike enjoy the plaza's clean and inviting atmosphere, with many
          using it for jogging and exercise. Illuminated trees enhance Christmas celebrations,
          adding a festive touch.
        </Text>

        <View className="mt-2 flex flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(10)}>
            <FastImage source={images[10]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(11)}>
            <FastImage source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity className="h-[160px] w-full overflow-hidden" onPress={handlePress(12)}>
          <FastImage source={images[12]} className="h-full w-full" />
        </TouchableOpacity>

        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(13)}>
            <FastImage source={images[13]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(14)}>
            <FastImage source={images[14]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Another built heritage found in the plaza is the Rizal Monument. It is a tribute to the
          martyrdom of Dr. Jose Rizal, constructed before the Second World War.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(15)}>
            <FastImage source={images[15]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(16)}>
            <FastImage source={images[16]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          className="mb-5 h-[230px] w-full overflow-hidden"
          onPress={handlePress(17)}>
          <FastImage source={images[17]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Initiated by former town Mayor Blas Asunto in 1918, its construction took nearly eight
          years, culminating in its inauguration on September 21, 1926, under the leadership of then
          Municipal Mayor Eduardo Racho. The monument features a life-sized bronze sculpture of
          Rizal, standing at four feet and 11 inches, mounted on a white-painted cement base, with
          the entire structure reaching a height of 8 meters. Originally, four large acacia trees,
          planted during the time of former Mayor Segundo Racho(1910), marked the plaza's corners;
          sadly, only two remain today. The plaza's transformation from a former public market site
          is a testament to the efforts of municipal leaders.
        </Text>

        <TouchableOpacity
          className=" mt-3 h-[240px] w-full overflow-hidden"
          onPress={handlePress(18)}>
          <FastImage source={images[18]} className="h-full w-full" />
        </TouchableOpacity>

        <TouchableOpacity className=" h-[240px] w-full overflow-hidden" onPress={handlePress(19)}>
          <FastImage source={images[19]} className="h-full w-full" />
        </TouchableOpacity>

        <TouchableOpacity
          className="mb-3 h-[240px] w-full overflow-hidden"
          onPress={handlePress(20)}>
          <FastImage source={images[20]} className="h-full w-full" />
        </TouchableOpacity>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          Vintage photos at the Balilihan Plaza in 1960’s.
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Under former Mayor Eladio I. Chatto Sr., significant beautification projects were
          undertaken, including constructing cemented roads, planting banaba trees, and establishing
          the tennis court in 1983.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(21)}>
            <FastImage source={images[21]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/2 overflow-hidden" onPress={handlePress(22)}>
            <FastImage source={images[22]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          Balilihan's town plaza achieved national recognition in 1969-1970, winning first prize in
          a regional beautification and cleanliness contest. This prestigious award significantly
          boosted the town's popularity throughout the province, attracting many visitors from
          neighboring municipalities.
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
          onPress={handlePress(23)}>
          <FastImage source={images[23]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[11px] leading-[24px]">
          Official Turnover of the newly-rehabilitated Plaza Rizal, with the Old Municipal Hall and
          the Our Lady of Mt. Carmel Parish, from the National Museum represented by Director
          General Jeremy Barnes to LGU Balilihan.{'\n'}
          Additionally, it has been declared as an Important Cultural Property and restored by the
          National Museum of the Philippines under Republic Act No. 10066 or the National Heritage
          Act of 2009.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_6;
