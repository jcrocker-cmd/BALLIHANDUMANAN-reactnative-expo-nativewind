import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState } from 'react';
import React from 'react';
import Title from 'components/Title';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { VideoView, useVideoPlayer } from 'expo-video';
import { WebView } from 'react-native-webview';
import GoogleMapsWebView from 'components/GoogleMaps';
import pic_1 from '../../assets/module_4/1. Belfry/1.Old Photo Belfry 2.png';
import pic_2 from '../../assets/module_4/1. Belfry/1.Old Photo Belfry 1.jpg';
import pic_3 from '../../assets/module_4/1. Belfry/2. Photo Belfry.jpg';
import pic_4 from '../../assets/module_4/1. Belfry/3. Old Photo Belfry (1987).jpg';
import pic_5 from '../../assets/module_4/1. Belfry/4.Rehabilitation of the Belfry.jpg';
import pic_6 from '../../assets/module_4/1. Belfry/4.Destruction of the Belfry after the 2013 Bohol Earthquake.jpg';
import pic_7 from '../../assets/module_4/1. Belfry/4.Putting back of the Balilihan Belfry Marker during the restoration.jpg';
import pic_8 from '../../assets/module_4/1. Belfry/5.b Turnover and Acceptance Ceremonies in 2017.jpg';
import pic_9 from '../../assets/module_4/1. Belfry/5.a Turnover and Acceptance Ceremonies in 2017.jpg';

import pic_10 from '../../assets/module_4/1. Belfry/6.a. The Restored Balilihan Belfry.jpeg';
import pic_11 from '../../assets/module_4/1. Belfry/6.b. Inside the Restored Balilihan Belfry.jpg';
import pic_12 from '../../assets/module_4/1. Belfry/6.c The Restored Balilihan Belfry.png';

import pic_13 from '../../assets/module_4/2. Churches/1.a Our Lady of Mt. Carmel Parish Church (1954).jpg';
import pic_14 from '../../assets/module_4/2. Churches/1.b New Balilihan Church.jpg';
import pic_15 from '../../assets/module_4/2. Churches/1.c Restored Our Lady of Mt. Carmel Parish Church.jpeg';

import pic_16 from '../../assets/module_4/2. Churches/2.a Marker of the Old Church burned by the Americans in 1900.jpg';

import pic_17 from '../../assets/module_4/2. Churches/2.b Our Lady of Mt. Carmel Parish Church (1939) with Rev. Fr. Aproniano Ochuga Galacia.jpg';
import pic_18 from '../../assets/module_4/2. Churches/3.e Portrait of Ray Francia, Cebu_s Michelangelo.png';

import pic_19 from '../../assets/module_4/2. Churches/3.Inside the Church.jpg';
import pic_20 from '../../assets/module_4/2. Churches/3.b Octagonal-shaped ceiling of the cupola.jpg';
import pic_21 from '../../assets/module_4/2. Churches/3.c Painting of St. Cecilia with Ray Francias mark.jpg';

import pic_22 from '../../assets/module_4/2. Churches/4.b Bell in the Our Lady of Mt. Carmel dated in 1831.jpg';
import pic_23 from '../../assets/module_4/2. Churches/4.c. The Limbarok Bells dated in 1856 & 1950.jpg';
import pic_24 from '../../assets/module_4/2. Churches/4.a Iron bridge connecting the portico to the bell tower.jpg';

import pic_25 from '../../assets/module_4/2. Churches/5.a Restoration of the Balilihan Church.jpg';
import pic_26 from '../../assets/module_4/2. Churches/5.b Restored Balilihan Church.jpg';

import pic_27 from '../../assets/module_4/2. Churches/5.c Convent of Our Lady of Mt. Carmel Parish.jpeg';
import pic_28 from '../../assets/module_4/2. Churches/5.d Important Cultural Property Marker of the Church.jpg';

import pic_29 from '../../assets/module_4/2. Churches/6. Image of Our Lady of Mt. Carmel.jpg';
import pic_30 from '../../assets/module_4/2. Churches/7.a Santo Nino Parish Church.jpg';
import pic_31 from '../../assets/module_4/2. Churches/7.b Inside the Sto. Nino Church.jpg';

import pic_32 from '../../assets/module_4/2. Churches/8.a Image of the Sto. Nino.jpg';
import pic_33 from '../../assets/module_4/2. Churches/8.b The Altar.jpg';
import pic_34 from '../../assets/module_4/2. Churches/8.c Hugusan in front of the Church.jpg';

import pic_35 from '../../assets/module_4/3. Plaza/1.a Balilihan Plaza before the Restoration.png';
import pic_36 from '../../assets/module_4/3. Plaza/1.b Restored Balilihan Plaza.jpeg';

import pic_37 from '../../assets/module_4/3. Plaza/2.a Overview of Balilihan Plaza.png';
import pic_38 from '../../assets/module_4/3. Plaza/2.b Plaza and the Church.jpeg';

import pic_39 from '../../assets/module_4/3. Plaza/3.a Playground.jpg';
import pic_40 from '../../assets/module_4/3. Plaza/3.b. Playground.jpg';
import pic_41 from '../../assets/module_4/3. Plaza/3.c Tennis Court.jpeg';

import pic_42 from '../../assets/module_4/3. Plaza/3.e Cultural Programs at the Kiosk.jpg';
import pic_43 from '../../assets/module_4/3. Plaza/3.f Veteran_s Mark.jpg';
import pic_44 from '../../assets/module_4/3. Plaza/3.d Restored Kiosk.jpeg';

import banner from '../../assets/module_2/banner.png';
import ImageViewing from 'react-native-image-viewing';

// import video from '../../assets/hymn-video.mp4';

const Module_1 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null); // Track which image is open

  const images = [
    { uri: Image.resolveAssetSource(pic_1).uri },
    { uri: Image.resolveAssetSource(pic_2).uri },
    { uri: Image.resolveAssetSource(pic_3).uri },
    { uri: Image.resolveAssetSource(pic_4).uri },
    { uri: Image.resolveAssetSource(pic_5).uri },
    { uri: Image.resolveAssetSource(pic_6).uri },
    { uri: Image.resolveAssetSource(pic_7).uri },
    { uri: Image.resolveAssetSource(pic_8).uri },
    { uri: Image.resolveAssetSource(pic_9).uri },
    { uri: Image.resolveAssetSource(pic_10).uri },
    { uri: Image.resolveAssetSource(pic_11).uri },
    { uri: Image.resolveAssetSource(pic_12).uri },
    { uri: Image.resolveAssetSource(pic_13).uri },
    { uri: Image.resolveAssetSource(pic_14).uri },
    { uri: Image.resolveAssetSource(pic_15).uri },
    { uri: Image.resolveAssetSource(pic_16).uri },
    { uri: Image.resolveAssetSource(pic_17).uri },
    { uri: Image.resolveAssetSource(pic_18).uri },
    { uri: Image.resolveAssetSource(pic_19).uri },
    { uri: Image.resolveAssetSource(pic_20).uri },
    { uri: Image.resolveAssetSource(pic_21).uri },
    { uri: Image.resolveAssetSource(pic_22).uri },
    { uri: Image.resolveAssetSource(pic_23).uri },
    { uri: Image.resolveAssetSource(pic_24).uri },
    { uri: Image.resolveAssetSource(pic_25).uri },
    { uri: Image.resolveAssetSource(pic_26).uri },
    { uri: Image.resolveAssetSource(pic_27).uri },
    { uri: Image.resolveAssetSource(pic_28).uri },
    { uri: Image.resolveAssetSource(pic_29).uri },
    { uri: Image.resolveAssetSource(pic_30).uri },
    { uri: Image.resolveAssetSource(pic_31).uri },
    { uri: Image.resolveAssetSource(pic_32).uri },
    { uri: Image.resolveAssetSource(pic_33).uri },
    { uri: Image.resolveAssetSource(pic_34).uri },
    { uri: Image.resolveAssetSource(pic_35).uri },
    { uri: Image.resolveAssetSource(pic_36).uri },
    { uri: Image.resolveAssetSource(pic_37).uri },
    { uri: Image.resolveAssetSource(pic_38).uri },
    { uri: Image.resolveAssetSource(pic_39).uri },
    { uri: Image.resolveAssetSource(pic_40).uri },
    { uri: Image.resolveAssetSource(pic_41).uri },
  ];

  // const player = useVideoPlayer(video, (player) => {
  //   player.loop = true;
  //   // player.play();
  // });

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-4 h-[150px] w-full overflow-hidden">
            <Image source={banner} className="h-full w-full" />
          </View>
          <NormalContainer>
            <Title>Balilihan’s Cultural Heritage</Title>

            {/* _______________________________What I need to know?________________________________ */}
            <CollapsibleSubTitle name="What I need to know?">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                This chapter explores the rich tapestry of Balilihan's cultural heritage, showcasing
                its unique identity and the importance of preserving it for future generations.
                We'll discover examples of Balilihan's cultural heritage, classifying them as
                natural, built, movable, or intangible, and exploring their significance to the
                community. You'll learn why protecting these treasures is vital, not just
                for Balilihan's present, but for its future.
              </Text>
              <GoogleMapsWebView />
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Let's Do This!________________________________ */}
            <CollapsibleSubTitle name="let’s do this!">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
                Before we begin this chapter's exploration of Balilihan's cultural heritage, let's
                test your knowledge{'\n'}
                {'\n'}
                • Complete the "Uncover Balilihan's Treasures" activity within
                the Balilihandumanan app. This activity presents a series of photos
                showcasing Balilihan's cultural assets; guess the name of each heritage site.{'\n'}
                • Once you've completed the activity, we'll delve deeper into the stories behind
                these treasures with the following guide questions:{'\n'}
                1. Did you learn anything new about Balilihan’s cultural heritage during the
                activity? What surprised you?{'\n'}
                2. Did you find it easier to identify tangible or intangible heritage? Why do you
                think that is?{'\n'}
                {'\n'}
                Now that you've tested your knowledge of Balilihan's cultural heritage with the
                "Uncover Balilihan's Treasures" activity, let's delve deeper! We'll explore the
                stories and significance of these treasured assets.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________JOURNEY TO THE TREASURES________________________________ */}
            <CollapsibleSubTitle name="JOURNEY TO THE TREASURES">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Before we explore Balilihan's unique cultural heritage, let's understand what
                cultural heritage means. It's everything—both tangible and intangible—that a
                community values and passes down through generations.{'\n'}
                {'\n'}
                <Text style={{ color: '#0E8341' }}>Tangible Heritages</Text> are all resources with
                some physical embodiment of cultural values: historic towns, buildings,
                archeological sites, landscapes, and objects. This includes:{'\n'}
                • <Text style={{ color: '#0E8341' }}>Natural Heritage</Text> - Environments,
                landscapes, and natural resources like land and water.{'\n'}
                • <Text style={{ color: '#0E8341' }}>Built/Immovable Heritage</Text> - Structures
                like schools, government buildings, markets, bridges, parks, houses, and religious
                sites. • Movable Heritage - Things created by people, like paintings, sculptures,
                furniture, religious artifacts, and examples of traditional crafts (farming,
                fishing, baking, carpentry, etc.).{'\n'}
                {'\n'}
                <Text style={{ color: '#0E8341' }}>Intangible Heritage</Text> is less about physical
                things and more about practices, beliefs, and knowledge such as 
                <Text style={{ color: '#0E8341' }}>Oral Traditions, Customs, and Expressions</Text>
                 (stories, songs, sayings, and language), 
                <Text style={{ color: '#0E8341' }}>Social Practices, Rituals/Festive Events</Text>
                 (celebrations and ceremonies), 
                <Text style={{ color: '#0E8341' }}>Performing Arts</Text> (music, dance, theater),
                or <Text style={{ color: '#0E8341' }}>Traditional Skills and Craftsmanship</Text>
                 (specialized skills passed down through generations).{'\n'}
                {'\n'}
                With this understanding, we're ready to discover the incredible cultural heritage
                of Balilihan!
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN BELFRY________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN BELFRY">
              <View className="mb-5 mt-2 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(0)}>
                  <Image source={pic_1} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(1)}>
                  <Image source={pic_2} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                <Text style={{ color: '#0E8341' }}>The Balilihan Belfry</Text>, a significant
                historical structure in Poblacion, Balilihan, was erected between 1835 and 1846.
                Built under the supervision of 
                <Text style={{ color: '#0E8341' }}>Friar Manuel Plaza de San Benito</Text> and 
                <Text style={{ color: '#0E8341' }}>Capitan Placido Andoy</Text>, and inaugurated in
                1846 by <Text style={{ color: '#0E8341' }}>Friar Antonio Cortes de San Ramon</Text>
                 and <Text style={{ color: '#0E8341' }}>Capitan Gabriel Terec Racho</Text>, it
                served as a watchtower during the Spanish colonial period.
              </Text>

              <View className="mb-1 mt-2 flex w-full flex-row items-start">
                <TouchableOpacity
                  className="h-[250px] w-[45%] overflow-hidden"
                  onPress={() => setVisibleIndex(2)}>
                  <Image source={pic_3} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  This quadrilateral tower made of {'\n'}cut coral stone, transported
                  from Baclayon by foot, is one of seven Spanish-era watchtowers in Bohol and served
                  as a vital lookout against pirates and invaders, commanding a view of
                  the Abatan River. Its unusual inland location in Balilihansuggests a strategic
                  purpose beyond river monitoring—maintaining vigilance over potential unrest.
                </Text>
              </View>

              <View className="-mb-2 flex w-full flex-row">
                <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[12px] leading-[20px]">
                  While some sources suggest its bell also called the faithful to mass across the
                  hilly terrain, its primary function was likely for defense.{'\n'}
                  It withstood numerous typhoons until the devastating 7.2 magnitude earthquake of
                  October 15, 2013, caused its collapse.
                </Text>
                <TouchableOpacity
                  className="h-[200px] w-[45%] overflow-hidden"
                  onPress={() => setVisibleIndex(3)}>
                  <Image source={pic_4} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[240px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(4)}>
                  <Image source={pic_5} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(5)}>
                    <Image source={pic_6} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(7)}>
                    <Image source={pic_7} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[22px] max-xs:text-base">
                Thanks to over ₱6.8 million in funding from the National Museum of the Philippines
                (NMP), this important historic structure, located on 
                <Text style={{ color: '#0E8341' }}>Mt. Carmel Hill</Text> (locally known as Van
                DeLeon Hill), is rehabilitated.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(7)}>
                  <Image source={pic_8} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(8)}>
                  <Image source={pic_9} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[22px]">
                Its restoration preserves a significant example of Bohol's Spanish colonial
                defenses, similar to those found in Panglao, Maribojoc, and Pamilacan. Additionally,
                they were collectively declared by the NMP as National Cultural Treasures on
                August 29, 2011. These events, along with the belfry's history, highlight the
                resilience of Balilihan and its people.
              </Text>

              <View className="-mt-2 mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[260px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(9)}>
                  <Image source={pic_10} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(10)}>
                    <Image source={pic_11} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(11)}>
                    <Image source={pic_12} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>
            </CollapsibleSubTitle>
            <View className="mb-4 mt-4 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN CHURCHES________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN CHURCHES">
              <Text
                className="mt-2 py-2 text-center font-inknut text-[14px] uppercase leading-[24px]"
                style={{ color: '#0E8341' }}>
                Our Lady of{'\n'}Mt. Carmel Parish Church
              </Text>
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan boasts two significant churches reflecting its rich history. The 
                <Text style={{ color: '#0E8341' }}>Our Lady of Mt. Carmel Parish Church</Text>, a
                striking example of American colonial architecture, stands in mainland Balilihan.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(12)}>
                  <Image source={pic_13} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(13)}>
                  <Image source={pic_14} className="h-full w-full" />
                </TouchableOpacity>

                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(14)}>
                  <Image source={pic_15} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="-mb-2 flex w-full flex-row">
                <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[12px] leading-[20px]">
                  The parish was inaugurated on May 20, 1829, and was placed under the Augustinian
                  Recollects who served until the outbreak of the revolution against Spain in Bohol
                  in 1898. The currentchurch was constructed of poured concrete by Rev.
                  Eliseo Josol y Villamayor between 1918 and 1930. An earlier church and convent
                  stood opposite the present church but were ruined by a storm in 1863. Later,
                  another church, constructed with wooden panels and a nipa roof, was destroyed by
                  the burning of the town during the Philippine-American War in 1900.
                </Text>
                <TouchableOpacity
                  className="h-[430px] w-[45%] overflow-hidden"
                  onPress={() => setVisibleIndex(15)}>
                  <Image source={pic_16} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(16)}>
                <Image source={pic_17} className="h-full w-full" />
              </TouchableOpacity>

              <View className="mb-3 flex w-full flex-row items-center">
                <TouchableOpacity
                  className="h-[200px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(17)}>
                  <Image source={pic_18} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  This cruciform church has a cupola at the center part of the structure. This
                  three-aisled church features stunning ceiling paintings by Cebuano artist 
                  <Text style={{ color: '#0E8341' }}>Raymundo Francia</Text> (1928), known as Cebu’s
                  Michelangelo, depicting the Seven Sacraments, The Last Supper, Old Testament
                  depictions such as The Great Flood, scenes of Heaven illuminated by octagonal
                  clerestory windows, and other magnificent renditions.
                </Text>
              </View>

              <View className="-mt-2 mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[260px] w-[40%] overflow-hidden "
                  onPress={() => setVisibleIndex(18)}>
                  <Image source={pic_19} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(19)}>
                    <Image source={pic_20} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(20)}>
                    <Image source={pic_21} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Other notable features include chevron-patterned floor tiles and a neo-Gothic cast
                iron bridge that connects the portico to the bell tower, which is adorned with bells
                dating from the 19th to the 20th century.
              </Text>

              <View className="-mt-2 mb-5 flex flex-row">
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(21)}>
                    <Image source={pic_22} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[130px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(22)}>
                    <Image source={pic_23} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  className="h-[260px] w-[40%] overflow-hidden "
                  onPress={() => setVisibleIndex(23)}>
                  <Image source={pic_24} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                The National Museum of the Philippines recently held a ceremonial turnover and
                unveiling of markers designating the Our Lady of Mount Carmel Parish Church as an
                Important Cultural Property.
              </Text>

              <View className="mt-3 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(24)}>
                  <Image source={pic_25} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(25)}>
                  <Image source={pic_26} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[60%] overflow-hidden"
                  onPress={() => setVisibleIndex(26)}>
                  <Image source={pic_27} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(27)}>
                  <Image source={pic_28} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-3 flex w-full flex-row items-center">
                <TouchableOpacity
                  className="h-[300px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(28)}>
                  <Image source={pic_29} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  This significant event, marking a milestone in the preservation
                  of Balilihan's cultural heritage, was made possible through the collaborative
                  efforts of the National Museum - Bohol, the Balilihan municipal government, the
                  parish, and the Diocese of Tagbilaran.{'\n'}
                  {'\n'}
                  The Balilihan community's generous donations have supported additional projects
                  aimed at beautifying and maintaining the church.
                </Text>
              </View>

              <Text
                className="mt-2 py-2 text-center font-inknut text-[14px] uppercase leading-[24px]"
                style={{ color: '#0E8341' }}>
                Santo Niño Parish Church
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(29)}>
                <Image source={pic_30} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                In the biggest barrio in town, Hanopol, the 
                <Text style={{ color: '#0E8341' }}>Santo Niño Parish Church</Text>, built in 1932,
                holds a special place in the community. Initially a chapel, its size reflects the
                deep faith of the Hanopolresidents, becoming the largest in the diocese.{'\n'}
                {'\n'}
                Declared a parish in 1989, with 
                <Text style={{ color: '#0E8341' }}>Rev. Fr. Florante</Text> Mendaña as its first
                parish priest, the church features a long portico, a belfry situated on the epistle
                side, and a curvilinear pediment topped with a globe and cross. The annual Santo
                Niño feast celebrated on January 16th, is a vibrant testament to the community's
                devotion.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-3 h-[250px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(30)}>
                <Image source={pic_31} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Fronting the church is the concrete hugusan, the structure where the child playing
                as the angel is suspended and lowered during the traditional 
                <Text style={{ color: '#0E8341' }}>Hugos</Text> during Easter Sunday.
              </Text>

              <View className="mb-5 mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[240px] w-[40%] overflow-hidden "
                  onPress={() => setVisibleIndex(31)}>
                  <Image source={pic_32} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(32)}>
                    <Image source={pic_33} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(33)}>
                    <Image source={pic_34} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>
            </CollapsibleSubTitle>

            {/* _______________________________BALILIHAN MUNICIPAL PLAZA & PARK________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN MUNICIPAL PLAZA & PARK">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>The Balilihan Municipal Plaza and Park</Text>
                 (also known as Plaza Rizal or Balilihan Plaza) serves as its vibrant heart, a
                green escape attracting visitors with its lush landscaping. Lined with beautifully
                trimmed gumamela and santan flowers, the plaza's narrow streets create a picturesque
                setting.
              </Text>

              <View className="mb-5 mt-3 flex w-full">
                <TouchableOpacity
                  className="h-[220px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(34)}>
                  <Image source={pic_35} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[220px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(35)}>
                  <Image source={pic_36} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Rectangular plots of balili and bermuda grass divide the space, which is surrounded
                by a mix of residential homes and important community buildings.
              </Text>

              <View className="mb-5 mt-3 flex w-full">
                <TouchableOpacity
                  className="h-[220px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(36)}>
                  <Image source={pic_37} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[220px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(37)}>
                  <Image source={pic_38} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                These include the municipal health building, a senior citizen center, a daycare
                center, Carmel Academy (the town's oldest secondary school), and the Our Lady of
                Mount Carmel ParishChurch. A portion of land in front of the church, donated to the
                parish, is separated from the plaza by the main street.
              </Text>

              <View className="mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[240px] w-[40%] overflow-hidden "
                  onPress={() => setVisibleIndex(38)}>
                  <Image source={pic_39} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(39)}>
                    <Image source={pic_40} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(40)}>
                    <Image source={pic_41} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-5 flex flex-row">
                <View className="w-[60%]">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(41)}>
                    <Image source={pic_42} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(42)}>
                    <Image source={pic_43} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  className="h-[240px] w-[40%] overflow-hidden "
                  onPress={() => setVisibleIndex(43)}>
                  <Image source={pic_44} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's town plaza offers a variety of recreational amenities, including a
                kiosk, veterans' mark, lawn tennis court, and children's playground. This green
                space provides vital connections to nature, encouraging physical activity and
                community engagement. Residents and visitors alike enjoy the plaza's clean and
                inviting atmosphere, with many using it for jogging and exercise. Illuminated trees
                enhance Christmas celebrations, adding a festive touch.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 flex h-[180px] w-[180px] self-center overflow-hidden"
                onPress={() => setVisibleIndex(32)}>
                <Image source={pic_33} className="h-full w-full object-contain" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The Balilihan official seal's emblem powerfully symbolizes the town's unity and
                strength. A small inner circle depicts a united leadership, diverse in personality
                yet unified in purpose. This inner circle expands into a larger outer circle
                representing the entire Balilihan community—one in mind and spirit, bound by faith,
                hope, and love, and sharing the motto "Aim High, BalilihanForever."
              </Text>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Three distinct areas outside the central circles showcase the town's abundant
                agricultural bounty, represented by various cultivated crops and plants. A carabao,
                symbolizing strength and power, highlights agriculture as the cornerstone
                of Balilihan's economy. Finally, a triangle formed by two lines represents the
                historic Balilihan belfry, a prominent landmark linking the town's past to its
                present. The space within the triangle symbolizes the community's democratic
                freedoms, while the triangle itself signifies unwavering dedication, love, and
                devotion—a unity that endures through all challenges.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(33)}>
                  <Image
                    source={pic_34}
                    className="h-full w-full"
                    resizeMode="cover"
                    style={{ alignSelf: 'flex-start' }}
                  />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                "Balilihan sa Kahangturan," with music by Arturo M. Lomantas and lyrics by Evelyn
                R. Lomantas, was selected as the official municipal hymn following a composition
                contest held in the late 1980s. Among the judges was Justino "Ning" Romea, renowned
                composer of the Bohol hymn, "Awit sa Bohol."
              </Text>

              <Text
                style={{ color: '#0E8341' }}
                className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The municipal symbols were officially adopted on March 25, 1998, as outlined in
                Section 42, Chapter IV of the Municipal Environmental Code.
              </Text>

              <View className="mb-5 mt-2 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[200px] w-1/4 overflow-hidden"
                  onPress={() => setVisibleIndex(34)}>
                  <Image source={pic_35} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-1/4 overflow-hidden"
                  onPress={() => setVisibleIndex(35)}>
                  <Image source={pic_36} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-1/4 overflow-hidden"
                  onPress={() => setVisibleIndex(36)}>
                  <Image source={pic_37} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-1/4 overflow-hidden"
                  onPress={() => setVisibleIndex(37)}>
                  <Image source={pic_38} className="h-full w-full" />
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
                <TouchableOpacity
                  className="h-[200px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(38)}>
                  <Image source={pic_39} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(39)}>
                  <Image source={pic_40} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(40)}>
                  <Image source={pic_41} className="h-full w-full" />
                </TouchableOpacity>
              </View>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________LET’S REFLECT!________________________________ */}
            <CollapsibleSubTitle name="LET’S REFLECT!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                After exploring Balilihan’s history in postwar, current conditions, and its
                municipal identity, take some time for personal reflection. Consider these questions
                to deepen your understanding and connect the information to your own experiences and
                perspectives.{'\n'}
                1. How has Balilihan’s postwar recovery shaped its current situation? What
                continuities and changes do you observe between the past and the present?{'\n'}
                2. How does Balilihan’s municipal identity (symbols, flag, official hymn, etc.)
                reflect its history and values?{'\n'}
                3. How has this learning experience broadened your understanding of Balilihan and
                its people? What new perspectives or insights have you gained?  
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________TIME TO SHINE!________________________________ */}
            <CollapsibleSubTitle name="TIME TO SHINE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Let's design the future of Balilihan! For this activity, titled "BALILIHAN 2075: A
                Collaborative Vision," you'll create a poster showcasing your shared vision for the
                town in the next 50 years. Use your knowledge of Balilihan's history and growth to
                imagine plausible future trends. Let your creativity shine—use any colors and
                materials you like to bring your vision to life!
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________EXPLORE MORE!________________________________ */}
            <CollapsibleSubTitle name="EXPLORE MORE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Having explored Balilihan's remarkable journey through the postwar period and its
                continued evolution, we now explore into the heart of its rich cultural heritage. In
                this chapter, we uncover the stories behind the municipality's most significant
                cultural treasures. Prepare to be captivated by the enduring legacy
                of Balilihan's cultural heritage. Proceed to the next chapter (
                <Text style={{ color: '#0E8341' }}>Balilihan'sCultural Heritages</Text>).
              </Text>
            </CollapsibleSubTitle>

            {/* _______________________________Fullscreen Image Viewer________________________________ */}
            <Modal visible={visibleIndex !== null} transparent={true}>
              <ImageViewing
                images={images}
                imageIndex={visibleIndex ?? 0}
                visible={visibleIndex !== null}
                onRequestClose={() => setVisibleIndex(null)}
              />
            </Modal>
          </NormalContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Module_1;
