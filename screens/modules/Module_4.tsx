import { View, Text, SafeAreaView, ScrollView, TouchableOpacity, Modal, Image } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState, useMemo } from 'react';
import React from 'react';
import Title from 'components/Title';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { VideoView, useVideoPlayer } from 'expo-video';
import { WebView } from 'react-native-webview';
import GoogleMapsWebView from 'components/GoogleMaps';
import pic_1 from '../../assets/module_4/1. Belfry/1.Old Photo Belfry 2.jpg';
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
import pic_12 from '../../assets/module_4/1. Belfry/6.c The Restored Balilihan Belfry.jpg';

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

import pic_45 from '../../assets/module_4/3. Plaza/4.a Balilihan Plaza at night and during Christmas.jpg';
import pic_46 from '../../assets/module_4/3. Plaza/4.c Balilihan Plaza at night and during Christmas.jpg';
import pic_47 from '../../assets/module_4/3. Plaza/4.d Balilihan Plaza at night and during Christmas.jpg';
import pic_48 from '../../assets/module_4/3. Plaza/4.e Balilihan Plaza at night and during Christmas.jpg';
import pic_49 from '../../assets/module_4/3. Plaza/4.b Balilihan Plaza at night and during Christmas.jpg';

import pic_50 from '../../assets/module_4/3. Plaza/5.a Rizal Monument.jpg';
import pic_51 from '../../assets/module_4/3. Plaza/5.c Restored Rizal Monument.jpg';
import pic_52 from '../../assets/module_4/3. Plaza/5.b Rizal Day 2024 celebration with the Punong Barangays.jpg';

import pic_53 from '../../assets/module_4/3. Plaza/6.a Old Photo of the Balilihan Plaza - courtesy by Dr. Carlito Orig.jpg';
import pic_54 from '../../assets/module_4/3. Plaza/6.b Balilihan Kiosk Photo Courtesy by Omar Torralba.jpg';
import pic_55 from '../../assets/module_4/3. Plaza/6.c Miss Carmel Academy 1965 Parade at the Balilihan Plaza.jpg';

import pic_56 from '../../assets/module_4/3. Plaza/7.a A Plaque as First Prize Winner for National Beautification & Cleanliness - Regional Level (1969-1970).jpeg';
import pic_57 from '../../assets/module_4/3. Plaza/7.b Balilihan Plaza before restoration.png';
import pic_58 from '../../assets/module_4/3. Plaza/8. Official Turnover.jpg';

import pic_59 from '../../assets/module_4/4. Kawasan Falls/1.a Kawasan Falls.jpg';
import pic_60 from '../../assets/module_4/4. Kawasan Falls/1.b Kawasan Falls.jpg';

import pic_61 from '../../assets/module_4/4. Kawasan Falls/2.a Kawasan Falls.jpg';
import pic_62 from '../../assets/module_4/4. Kawasan Falls/2.b Kawasan Falls.jpg';

import pic_63 from '../../assets/module_4/4. Kawasan Falls/3.a Kawasan Falls Complex.jpg';
import pic_64 from '../../assets/module_4/4. Kawasan Falls/3.b Ongoing rehabilitation of the Balilihan Kawasan Falls Tourist complex.jpg';
import pic_65 from '../../assets/module_4/4. Kawasan Falls/3.c Cottages.jpg';
import pic_66 from '../../assets/module_4/4. Kawasan Falls/3.d Abatan River (known as Bantayan River by locals).jpg';

import pic_67 from '../../assets/module_4/4. Kawasan Falls/4.a Swimming at the base of the falls.jpg';
import pic_68 from '../../assets/module_4/4. Kawasan Falls/4.b Fun Paddle Activity at the Bantayan River.jpg';

import pic_69 from '../../assets/module_4/4. Kawasan Falls/5.a Kawasan Falls before the 2013 earthquake.jpg';
import pic_70 from '../../assets/module_4/4. Kawasan Falls/5.b Kawasan Falls before the 2013 earthquake.png';

import pic_71 from '../../assets/module_4/5. Sumad Festival/1.a Balilihan Sumad 1994.png';
import pic_72 from '../../assets/module_4/5. Sumad Festival/1.b Balilihan Sumad 1995.png';
import pic_73 from '../../assets/module_4/5. Sumad Festival/1.c Balilihan Sumad 2021.jpg';
import pic_74 from '../../assets/module_4/5. Sumad Festival/1.d Balilihan Sumad 2024.jpg';

import pic_75 from '../../assets/module_4/5. Sumad Festival/2.b Duwa-Sayaw in the _90s.png';
import pic_76 from '../../assets/module_4/5. Sumad Festival/2.c Sumad celebration in the 90_s.png';
import pic_77 from '../../assets/module_4/5. Sumad Festival/2.d Pasunding current.jpg';
import pic_78 from '../../assets/module_4/5. Sumad Festival/2.e Pasunding current.jpg';

import pic_79 from '../../assets/module_4/5. Sumad Festival/3.a Agro-air.jpg';
import pic_80 from '../../assets/module_4/5. Sumad Festival/3.c Booths in Agro-Fair.jpg';
import pic_81 from '../../assets/module_4/5. Sumad Festival/3.d Booths in Agro-Fair.jpg';
import pic_82 from '../../assets/module_4/5. Sumad Festival/3.e Booths in Agro-Fair.jpg';

import pic_83 from '../../assets/module_4/5. Sumad Festival/4.a Sumad Festival King and Queen.jpg';
import pic_84 from '../../assets/module_4/5. Sumad Festival/4.c Mutya sa Balilihan.jpg';
import pic_85 from '../../assets/module_4/5. Sumad Festival/4.b Sumad Festival King and Queen.jpg';
import pic_86 from '../../assets/module_4/5. Sumad Festival/4.d Fun Run for a cause - Dagan para sa Katawhan.jpg';
import pic_87 from '../../assets/module_4/5. Sumad Festival/4.e Awarding and Recognition of Honorees.jpg';
import pic_88 from '../../assets/module_4/5. Sumad Festival/4.f Awarding of Achievers.jpg';

import pic_89 from '../../assets/module_4/5. Sumad Festival/5.a Sumad Streetdancing in 2009.jpg';
import pic_90 from '../../assets/module_4/5. Sumad Festival/5.b Sumad Streetdancing in 2009.jpg';
import pic_91 from '../../assets/module_4/5. Sumad Festival/5.e Sumad Streetdancing in 2024.jpg';
import pic_92 from '../../assets/module_4/5. Sumad Festival/5.d Sumad Streetdancing in 2024.png';

import pic_93 from '../../assets/module_4/5. Sumad Festival/6.c Tiyo Kiking.jpg';
import pic_94 from '../../assets/module_4/5. Sumad Festival/6.b Tiyo Kiking at Sambag Cemetery.jpg';
import pic_95 from '../../assets/module_4/5. Sumad Festival/6.a Eladio I. Chatto - Tiyo Kiking.png';

import pic_96 from '../../assets/module_4/5. Sumad Festival/7.b Republic Act No. 9706.png';
import pic_97 from '../../assets/module_4/5. Sumad Festival/7.c Republic Act No. 9706.png';

import pic_98 from '../../assets/module_4/6. Other Cultural Assets/1.a Old Municipal Hall.jpg';
import pic_99 from '../../assets/module_4/6. Other Cultural Assets/1.b Old Municipal Hall.jpg';
import pic_100 from '../../assets/module_4/6. Other Cultural Assets/1.c Old Municipal Hall.jpg';
import pic_101 from '../../assets/module_4/6. Other Cultural Assets/2. Balilihan Central Elementary School - Gabaldon Building.png';

import pic_102 from '../../assets/module_4/6. Other Cultural Assets/3.a Diamante House (Del Carmen Weste).png';
import pic_103 from '../../assets/module_4/6. Other Cultural Assets/3.b Jaum House (Datag Norte).png';
import pic_104 from '../../assets/module_4/6. Other Cultural Assets/3.c Ocon House (Cabad).png';

import pic_105 from '../../assets/module_4/6. Other Cultural Assets/4.a Old Cemetery.png';
import pic_106 from '../../assets/module_4/6. Other Cultural Assets/4.b Sambag Cemetery.jpg';
import pic_107 from '../../assets/module_4/6. Other Cultural Assets/4.c Abaca Cemetery.png';
import pic_108 from '../../assets/module_4/6. Other Cultural Assets/4.d Bod Cemetery.jpg';
import pic_109 from '../../assets/module_4/6. Other Cultural Assets/4.e Datag Cemetery.jpg';

import pic_110 from '../../assets/module_4/6. Other Cultural Assets/5.a Camugao Falls.jpg';
import pic_111 from '../../assets/module_4/6. Other Cultural Assets/5.b Camugao Falls.jpg';
import pic_112 from '../../assets/module_4/6. Other Cultural Assets/5.c Camugao Falls before the 2013 Bohol Earthquake.jpg';

import pic_113 from '../../assets/module_4/6. Other Cultural Assets/6.a Niluksuan Falls.jpg';
import pic_114 from '../../assets/module_4/6. Other Cultural Assets/6.b Niluksuan Falls before the 2013 Bohol Earthquake.jpg';

import pic_115 from '../../assets/module_4/6. Other Cultural Assets/8.a Bugwak Spring.jpg';
import pic_116 from '../../assets/module_4/6. Other Cultural Assets/8.b Bugwak Spring.jpg';

import pic_117 from '../../assets/module_4/6. Other Cultural Assets/7.a Magsija Swimming Pool.jpg';
import pic_118 from '../../assets/module_4/6. Other Cultural Assets/7.b Magsija Swimming Pool.jpg';

import pic_119 from '../../assets/module_4/6. Other Cultural Assets/9.a Andoy Cave.jpg';
import pic_120 from '../../assets/module_4/6. Other Cultural Assets/9.b Andoy Cave.jpg';
import pic_121 from '../../assets/module_4/6. Other Cultural Assets/9.c Andoy Cave.jpg';

import pic_122 from '../../assets/module_4/6. Other Cultural Assets/10.a Camagong-ong Cave.jpg';
import pic_123 from '../../assets/module_4/6. Other Cultural Assets/10.b Camagong-ong Cave.jpg';

import pic_124 from '../../assets/module_4/6. Other Cultural Assets/11.a Manlawi Peak.jpg';
import pic_125 from '../../assets/module_4/6. Other Cultural Assets/11.b Manlawi Peak.jpg';

import pic_126 from '../../assets/module_4/6. Other Cultural Assets/12. Bantayan River (known as Abatan River).jpg';

import pic_127 from '../../assets/module_4/6. Other Cultural Assets/13.a BAWOD.jpg';
import pic_128 from '../../assets/module_4/6. Other Cultural Assets/13.b BAWOD products.jpg';
import pic_129 from '../../assets/module_4/6. Other Cultural Assets/13.c BAWOD.jpg';

import pic_130 from '../../assets/module_4/6. Other Cultural Assets/14. Kumparsa.png';

import pic_131 from '../../assets/module_4/6. Other Cultural Assets/15. Bingka ni Manang Kikay.png';

import pic_132 from '../../assets/module_4/6. Other Cultural Assets/16.a Tinunuang Uwang.jpg';
import pic_133 from '../../assets/module_4/6. Other Cultural Assets/16.b Tinunuang Ugang and Bebe.png';

import pic_134 from '../../assets/module_4/6. Other Cultural Assets/17. Basket Weaving in Dorol.png';

import pic_135 from '../../assets/module_4/6. Other Cultural Assets/18.a Santo Entierro.jpg';
import pic_136 from '../../assets/module_4/6. Other Cultural Assets/18.b Prosesyon sa Santo Entierro.jpg';

import pic_137 from '../../assets/module_4/6. Other Cultural Assets/19.a Sugat.jpg';
import pic_138 from '../../assets/module_4/6. Other Cultural Assets/19.b Hugos.jpg';

import pic_139 from '../../assets/module_4/6. Other Cultural Assets/20.a Old Dining Table.png';
import pic_140 from '../../assets/module_4/6. Other Cultural Assets/20.b Tea Set Porcelain.png';
import pic_141 from '../../assets/module_4/6. Other Cultural Assets/20.c Soupera.png';

import pic_142 from '../../assets/module_4/6. Other Cultural Assets/21. Urna.png';

import pic_143 from '../../assets/module_4/6. Other Cultural Assets/22.a Binisayang Pagpanambal.png';
import pic_144 from '../../assets/module_4/6. Other Cultural Assets/22.b Binisayang Pagpanambal.png';

import pic_145 from '../../assets/module_4/6. Other Cultural Assets/23. Tagbo.png';

import pic_146 from '../../assets/module_4/6. Other Cultural Assets/24. Eladio I. Chatto.png';
import pic_147 from '../../assets/module_4/6. Other Cultural Assets/25. Lino I. Chatto Sr..png';
import pic_148 from '../../assets/module_4/6. Other Cultural Assets/26. Hermogina R. Racho.png';

import banner from '../../assets/module_4/banner.png';
import ImageViewing from 'react-native-image-viewing';

// import video from '../../assets/hymn-video.mp4';

const Module_1 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null); // Track which FastImage is open

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
    { uri: Image.resolveAssetSource(pic_42).uri },
    { uri: Image.resolveAssetSource(pic_43).uri },
    { uri: Image.resolveAssetSource(pic_44).uri },
    { uri: Image.resolveAssetSource(pic_45).uri },
    { uri: Image.resolveAssetSource(pic_46).uri },
    { uri: Image.resolveAssetSource(pic_47).uri },
    { uri: Image.resolveAssetSource(pic_48).uri },
    { uri: Image.resolveAssetSource(pic_49).uri },
    { uri: Image.resolveAssetSource(pic_50).uri },
    { uri: Image.resolveAssetSource(pic_51).uri },
    { uri: Image.resolveAssetSource(pic_52).uri },
    { uri: Image.resolveAssetSource(pic_53).uri },
    { uri: Image.resolveAssetSource(pic_54).uri },
    { uri: Image.resolveAssetSource(pic_55).uri },
    { uri: Image.resolveAssetSource(pic_56).uri },
    { uri: Image.resolveAssetSource(pic_57).uri },
    { uri: Image.resolveAssetSource(pic_58).uri },
    { uri: Image.resolveAssetSource(pic_59).uri },
    { uri: Image.resolveAssetSource(pic_60).uri },
    { uri: Image.resolveAssetSource(pic_61).uri },
    { uri: Image.resolveAssetSource(pic_62).uri },
    { uri: Image.resolveAssetSource(pic_63).uri },
    { uri: Image.resolveAssetSource(pic_64).uri },
    { uri: Image.resolveAssetSource(pic_65).uri },
    { uri: Image.resolveAssetSource(pic_66).uri },
    { uri: Image.resolveAssetSource(pic_67).uri },
    { uri: Image.resolveAssetSource(pic_68).uri },
    { uri: Image.resolveAssetSource(pic_69).uri },
    { uri: Image.resolveAssetSource(pic_70).uri },
    { uri: Image.resolveAssetSource(pic_71).uri },
    { uri: Image.resolveAssetSource(pic_72).uri },
    { uri: Image.resolveAssetSource(pic_73).uri },
    { uri: Image.resolveAssetSource(pic_74).uri },
    { uri: Image.resolveAssetSource(pic_75).uri },
    { uri: Image.resolveAssetSource(pic_76).uri },
    { uri: Image.resolveAssetSource(pic_77).uri },
    { uri: Image.resolveAssetSource(pic_78).uri },
    { uri: Image.resolveAssetSource(pic_79).uri },
    { uri: Image.resolveAssetSource(pic_80).uri },
    { uri: Image.resolveAssetSource(pic_81).uri },
    { uri: Image.resolveAssetSource(pic_82).uri },
    { uri: Image.resolveAssetSource(pic_83).uri },
    { uri: Image.resolveAssetSource(pic_84).uri },
    { uri: Image.resolveAssetSource(pic_85).uri },
    { uri: Image.resolveAssetSource(pic_86).uri },
    { uri: Image.resolveAssetSource(pic_87).uri },
    { uri: Image.resolveAssetSource(pic_88).uri },
    { uri: Image.resolveAssetSource(pic_89).uri },
    { uri: Image.resolveAssetSource(pic_90).uri },
    { uri: Image.resolveAssetSource(pic_91).uri },
    { uri: Image.resolveAssetSource(pic_92).uri },
    { uri: Image.resolveAssetSource(pic_93).uri },
    { uri: Image.resolveAssetSource(pic_94).uri },
    { uri: Image.resolveAssetSource(pic_95).uri },
    { uri: Image.resolveAssetSource(pic_96).uri },
    { uri: Image.resolveAssetSource(pic_97).uri },
    { uri: Image.resolveAssetSource(pic_98).uri },
    { uri: Image.resolveAssetSource(pic_99).uri },
    { uri: Image.resolveAssetSource(pic_100).uri },
    { uri: Image.resolveAssetSource(pic_101).uri },
    { uri: Image.resolveAssetSource(pic_102).uri },
    { uri: Image.resolveAssetSource(pic_103).uri },
    { uri: Image.resolveAssetSource(pic_104).uri },
    { uri: Image.resolveAssetSource(pic_105).uri },
    { uri: Image.resolveAssetSource(pic_106).uri },
    { uri: Image.resolveAssetSource(pic_107).uri },
    { uri: Image.resolveAssetSource(pic_108).uri },
    { uri: Image.resolveAssetSource(pic_109).uri },
    { uri: Image.resolveAssetSource(pic_110).uri },
    { uri: Image.resolveAssetSource(pic_111).uri },
    { uri: Image.resolveAssetSource(pic_112).uri },
    { uri: Image.resolveAssetSource(pic_113).uri },
    { uri: Image.resolveAssetSource(pic_114).uri },
    { uri: Image.resolveAssetSource(pic_115).uri },
    { uri: Image.resolveAssetSource(pic_116).uri },
    { uri: Image.resolveAssetSource(pic_117).uri },
    { uri: Image.resolveAssetSource(pic_118).uri },
    { uri: Image.resolveAssetSource(pic_119).uri },
    { uri: Image.resolveAssetSource(pic_120).uri },
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
            <View className="mb-4 mt-4 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN MUNICIPAL PLAZA & PARK________________________________ */}
            <CollapsibleSubTitle name={`BALILIHAN MUNICIPAL PLAZA\n& PARK`}>
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

              <View className="flex w-full py-3">
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

              <Text className="text-balance py-3 text-justify font-inknut text-[12px] leading-[24px]">
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

              <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's town plaza offers a variety of recreational amenities, including a
                kiosk, veterans' mark, lawn tennis court, and children's playground. This green
                space provides vital connections to nature, encouraging physical activity and
                community engagement. Residents and visitors alike enjoy the plaza's clean and
                inviting atmosphere, with many using it for jogging and exercise. Illuminated trees
                enhance Christmas celebrations, adding a festive touch.
              </Text>

              <View className="mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(44)}>
                  <Image source={pic_45} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(45)}>
                  <Image source={pic_46} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="h-[160px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(46)}>
                <Image source={pic_47} className="h-full w-full" />
              </TouchableOpacity>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(47)}>
                  <Image source={pic_48} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(48)}>
                  <Image source={pic_49} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Another built heritage found in the plaza is the Rizal Monument. It is a tribute to
                the martyrdom of Dr. Jose Rizal, constructed before the Second World War.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(49)}>
                  <Image source={pic_50} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(50)}>
                  <Image source={pic_51} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                className="mb-5 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(51)}>
                <Image source={pic_52} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Initiated by former town Mayor Blas Asunto in 1918, its construction took nearly
                eight years, culminating in its inauguration on September 21, 1926, under the
                leadership of then Municipal Mayor Eduardo Racho. The monument features a life-sized
                bronze sculpture of Rizal, standing at four feet and 11 inches, mounted on a
                white-painted cement base, with the entire structure reaching a height of 8 meters.
                Originally, four large acacia trees, planted during the time of former Mayor
                Segundo Racho(1910), marked the plaza's corners; sadly, only two remain today. The
                plaza's transformation from a former public market site is a testament to the
                efforts of municipal leaders.
              </Text>

              <TouchableOpacity
                className=" mt-3 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(52)}>
                <Image source={pic_53} className="h-full w-full" />
              </TouchableOpacity>

              <TouchableOpacity
                className=" h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(53)}>
                <Image source={pic_54} className="h-full w-full" />
              </TouchableOpacity>

              <TouchableOpacity
                className="mb-5 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(54)}>
                <Image source={pic_55} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Under former Mayor Eladio I. Chatto Sr., significant beautification projects were
                undertaken, including constructing cemented roads, planting banaba trees, and
                establishing the tennis court in 1983.
              </Text>

              <View className="mb-5 mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(55)}>
                  <Image source={pic_56} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(56)}>
                  <Image source={pic_57} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's town plaza achieved national recognition in 1969-1970, winning first
                prize in a regional beautification and cleanliness contest. This prestigious award
                significantly boosted the town's popularity throughout the province, attracting many
                visitors from neighboring municipalities.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(57)}>
                <Image source={pic_58} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Official Turnover of the newly-rehabilitated Plaza Rizal, with the Old Municipal
                Hall and the Our Lady of Mt. Carmel Parish, from the National Museum represented by
                Director General Jeremy Barnes to LGU Balilihan.{'\n'}
                Additionally, it has been declared as an Important Cultural Property and restored by
                the National Museum of the Philippines under Republic Act No. 10066 or the National
                Heritage Act of 2009.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________KAWASAN FALLS________________________________ */}
            <CollapsibleSubTitle name="KAWASAN FALLS">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Kawasan Falls is a renowned tourist destination waterfall in Bohol. Kawasan, meaning
                "to embark" in Visayan, derives its name from its historical role as a bustling
                barter center.
              </Text>

              <View className="mb-5 mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(58)}>
                  <Image source={pic_59} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-[60%] overflow-hidden"
                  onPress={() => setVisibleIndex(59)}>
                  <Image source={pic_60} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Located about a kilometer upstream from the Bantayan docking area along
                the Abatan River(known as Bantayan River by the locals), and bordering the barangays
                of Cabad, Candasig, and Dorol (though administered by Cabad), Kawasan Falls is
                approximately four kilometers from Balilihan's municipal hall.
              </Text>

              <View className="mb-5 mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(60)}>
                  <Image source={pic_61} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(61)}>
                  <Image source={pic_62} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                From the Kawasan Tourism Complex, visitors descend a cemented stairway to the falls,
                enjoying breathtaking river views and cottages. The falls feature a 25-meter cascade
                into a natural pool, surrounded by lush tropical vegetation and rugged cliffs.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[200px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(62)}>
                  <Image source={pic_63} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(63)}>
                  <Image source={pic_64} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[200px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(64)}>
                  <Image source={pic_65} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(65)}>
                  <Image source={pic_66} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                It is easily accessible by any type of vehicle, thanks to a newly constructed
                concrete road. Visitors can enjoy swimming in the pool at the base of the falls, do
                a fun paddle activity at the Bantayan River, and appreciate the tranquil atmosphere
                and clean air. Kawasan Falls was the endpoint of a former Abatan River cruise
                project.
              </Text>

              <View className="mb-5 mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[280px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(66)}>
                  <Image source={pic_67} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[280px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(67)}>
                  <Image source={pic_68} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                It is important to note that the 7.2 magnitude earthquake that struck Bohol in 2013
                significantly altered the falls' original structure, damaging a previously existing
                cave system.
              </Text>

              <View className="mb-5 mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[250px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(68)}>
                  <Image source={pic_69} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(69)}>
                  <Image source={pic_70} className="h-full w-full" />
                </TouchableOpacity>
              </View>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________SUMAD FESTIVAL________________________________ */}
            <CollapsibleSubTitle name="SUMAD FESTIVAL">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's <Text style={{ color: '#0E8341' }}>Sumad Festival</Text>, celebrated
                annually on September 29th, commemorates the municipality's founding. "Sumad",
                locally means “anniversary”, signifies the accumulation of wisdom and experience
                over the years, highlighting the community's resilience, perseverance, and faith.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(70)}>
                  <Image source={pic_71} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(71)}>
                  <Image source={pic_72} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="h-[150px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(72)}>
                <Image source={pic_73} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[250px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(73)}>
                <Image source={pic_74} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Officially declared Balilihan Day (or Sumad) in 1993 through Resolution No.
                93-23-A—sponsored by Hon. Ambrosio L. Bayud, adopted on March 22, 1993, attested by
                Vice Mayor Dominisio Chatto, and approved by then-Mayor Edgar M. Chatto, with SB
                Secretary Nimia M. Lungay certifying its correctness—the festival initially featured
                a one-day celebration including “Pasunding,” a historical street dance drama or
                “duwa-sayaw”.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(74)}>
                  <Image source={pic_75} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(75)}>
                  <Image source={pic_76} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(76)}>
                  <Image source={pic_77} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(77)}>
                  <Image source={pic_78} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                This evolved into a two-day event (1994-1997), incorporating an agro-industrial
                fair, a beauty pageant ("Mutya ng Balilihan"), and a community awards ceremony. In
                1998, the SumadFestival expanded to a week-long celebration based on Section 122,
                Chapter 9 of the Municipal Environment Code, adopted by the Sangguniang Bayan on
                March 25, 1998, attested by Vice Mayor Dominisio Chatto (presiding officer), and
                approved by Mayor Eladio I. Chatto on April 13, 1998.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(78)}>
                  <Image source={pic_79} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(79)}>
                  <Image source={pic_80} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(80)}>
                  <Image source={pic_81} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(81)}>
                  <Image source={pic_82} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Today, the festival attracts both local and international tourists, featuring
                an agro-fair showcasing each barangay's agricultural products, a Sumad Festival King
                and Queen pageant (with agriculture-themed costumes), a fun run, a food bazaar
                ("Painit Festival"), a streetdancing, and various other competitions and nightly
                events. The culmination program honors academic achievers, retirees, and outstanding
                barangays.
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(82)}>
                  <Image source={pic_83} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(83)}>
                  <Image source={pic_84} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(84)}>
                  <Image source={pic_85} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(85)}>
                  <Image source={pic_86} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(86)}>
                  <Image source={pic_87} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(87)}>
                  <Image source={pic_88} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(88)}>
                  <Image source={pic_89} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(89)}>
                  <Image source={pic_90} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(90)}>
                  <Image source={pic_91} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(91)}>
                  <Image source={pic_92} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The festival holds a particularly poignant significance since the passing
                of Balilihan's longest-serving mayor, Eladio I. Chatto ("Tiyo Kiking"), on September
                29, 2001, during the 173rd Foundation Day celebration.
              </Text>

              <View className="mb-5 mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[240px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(92)}>
                  <Image source={pic_93} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-1/2">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(93)}>
                    <Image source={pic_94} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(94)}>
                    <Image source={pic_95} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                In 2009, Republic Act No. 9706—sponsored by Congressman Edgar M. Chatto and passed
                by the House of Representatives on December 3, 2008, and the Senate on May 26,
                2009—officially declared September 29th a special non-working public holiday
                in Balilihan, signed into law by President Gloria Macapagal-Arroyo on August 7,
                2009. The Sumad Festival continues to be a cherished tradition,
                celebrating Balilihan's history, culture, and community spirit.
              </Text>

              <View className="-mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[280px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(95)}>
                  <Image source={pic_96} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[280px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(96)}>
                  <Image source={pic_97} className="h-full w-full" />
                </TouchableOpacity>
              </View>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________OTHER CULTURAL HERITAGE ASSETS IN BALILIHAN________________________________ */}
            <CollapsibleSubTitle name={`OTHER CULTURAL HERITAGE\nASSETS IN BALILIHAN`}>
              <TouchableOpacity
                className="h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(97)}>
                <Image source={pic_98} className="h-full w-full" />
              </TouchableOpacity>

              <View className="mb-5 flex flex-row">
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(98)}>
                  <Image source={pic_99} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[160px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(99)}>
                  <Image source={pic_100} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Balilihan Old Municipal Hall{'\n'}</Text>
                (Del Carmen Sur){'\n'} Declared as an Important Cultural Property by the National
                Museum of the Philippines.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(100)}>
                <Image source={pic_101} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Balilihan Central Elementary School{'\n'}</Text>
                (Del Carmen Weste){'\n'}A century-old Gabaldon Building (a name from
                Assemblyman Isauro Gabaldon, the Father of Philippine Public Education).
              </Text>

              <TouchableOpacity
                className="mt-3 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(101)}>
                <Image source={pic_102} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(102)}>
                <Image source={pic_103} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(103)}>
                <Image source={pic_104} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Ancestral Houses in Balilihan{'\n'}</Text>
                Diamante House (Del Carmen Weste), Jaum House{'\n'}(Datag Norte), and Ocon House
                (Cabad) were built during the Spanish and American colonial period.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[210px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(104)}>
                <Image source={pic_105} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[210px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(105)}>
                <Image source={pic_106} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[210px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(106)}>
                <Image source={pic_107} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="h-[210px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(107)}>
                <Image source={pic_108} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[210px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(108)}>
                <Image source={pic_109} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Cemeteries in Balilihan{'\n'}</Text>
                Old Cemetery (Del Carmen Weste), Abaca Cemetery (Del Carmen Sur), SambagCemetery
                (Del Carmen Sur), Bod Cemetery (Cogon), & Datag Cemetery (HanopolEste)
              </Text>

              <View className="mt-3 flex flex-row">
                <TouchableOpacity
                  className="h-[220px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(109)}>
                  <Image source={pic_110} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[220px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(110)}>
                  <Image source={pic_111} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="mb-5 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(111)}>
                <Image source={pic_112} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Camugao Falls </Text>(San Isidro){'\n'}
                The tallest waterfall in the municipality (30 meters).
              </Text>

              <TouchableOpacity
                className="mt-3 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(111)}>
                <Image source={pic_113} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(111)}>
                <Image source={pic_114} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Niluksuan Falls </Text>(Sal-ing){'\n'}
                This waterfall, though short in height, resembles a cascade of shimmering,
                transparent curtains.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(114)}>
                <Image source={pic_115} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(115)}>
                <Image source={pic_116} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Bugwak Spring </Text>(Sto. Niño){'\n'}
                It is named "Bugwak" due to the powerful pressure of water that bursts forth from
                the lower surface of the mountainside spring.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(116)}>
                <Image source={pic_117} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(117)}>
                <Image source={pic_118} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Magsija Swimming Pool </Text>(Magsija){'\n'}
                Located along the highway, it is a man-made pool, fed by a nearby
                spring, that offers cool and fresh water.
              </Text>

              <View className="mb-5 mt-4 flex flex-row">
                <TouchableOpacity
                  className="h-[350px] w-1/2 overflow-hidden "
                  onPress={() => setVisibleIndex(118)}>
                  <Image source={pic_119} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-1/2">
                  <TouchableOpacity
                    className="h-[175px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(119)}>
                    <Image source={pic_120} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[175px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(120)}>
                    <Image source={pic_121} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Andoy Cave </Text>(Hanopol Norte){'\n'}
                The cave is called Andoy, named after its former landowner, Fernando Paanod.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[180px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(121)}>
                <Image source={pic_122} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[180px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(122)}>
                <Image source={pic_123} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Camagong-ong Cave </Text>(Maslog){'\n'}
                Camagong-ong Cave brings an enchanting and fascinating ambiance while doing the
                laundry and fetching water for the house consumption of the locals.
              </Text>

              <View className="mb-5 mt-3 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[280px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(123)}>
                  <Image source={pic_124} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[280px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(124)}>
                  <Image source={pic_125} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Manlawe Peak or Bud Manlawe </Text>(Cogon)
                {'\n'}
                Standing tall at approximately 900 feet, this mountain is the highest point in the
                municipality.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[280px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(125)}>
                <Image source={pic_126} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Bantayan River </Text>(Cabad)
                {'\n'}
                The area of the Bantayan River serves as a connecting point between the Abatan River
                and Kawasan Falls.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(126)}>
                <Image source={pic_127} className="h-full w-full" />
              </TouchableOpacity>
              <View className="mb-5 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[180px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(127)}>
                  <Image source={pic_128} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(128)}>
                  <Image source={pic_129} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>
                  Balilihan Association of Women for Development (BAWOD)
                </Text>
                {'\n'}
                (Del Carmen Sur){'\n'}
                Empowered by the Balilihan LGU, BAWOD's skilled women collaborate, develop their
                crafts, and prosper through a shared vision and mutual support.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(129)}>
                <Image source={pic_130} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Kumparsa</Text>
                {'\n'}
                A well-known traditional Filipino stringed ensemble that local musicians
                in DatagNorte, Balilihan play.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(130)}>
                <Image source={pic_131} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Bingka ni Manang Kikay</Text>
                {'\n'}
                A traditional rice cake that has been a beloved Balilihan delicacy for over 60
                years, enjoyed especially on market days, Sundays, and special occasions.
              </Text>

              <TouchableOpacity
                className="mt-3 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(131)}>
                <Image source={pic_132} className="h-full w-full" />
              </TouchableOpacity>
              <TouchableOpacity
                className="mb-5 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(132)}>
                <Image source={pic_133} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Tinunuang Uwang, Ugang, and Bebe</Text>
                {'\n'}
                Traditionally cooked in coconut milk (tinunuan), the “uwang” (river shrimp), and
                “ugang ug bebe” (river clams) are a local delicacy found in the river of Dorol.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[160px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(133)}>
                <Image source={pic_134} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Basket Weaving in Balilihan</Text>
                {'\n'}
                Basket weaving in Dorol, a barangay boundary in the municipality of Antequera
                (Basket Capital of Bohol).
              </Text>

              <View className="mb-5 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(134)}>
                  <Image source={pic_135} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(135)}>
                  <Image source={pic_136} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Prosesyon sa Santo Entierro</Text>
                {'\n'}
                Each Good Friday, Catholic devotees in Balilihan solemnly participate in the
                Santo Entierro procession, commemorating Christ's burial.
              </Text>

              <View className="mb-5 mt-3 flex w-full">
                <TouchableOpacity
                  className="h-[210px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(136)}>
                  <Image source={pic_137} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[210px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(137)}>
                  <Image source={pic_138} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Sugat and Hugos</Text>
                {'\n'}
                The "Sugat," or "Encounter of Mary and Jesus," a cherished annual tradition and
                highlight of Balilihan's Easter Eve Mass, features the "hugos," a tradition where a
                child plays the role of an angel descending from heaven to comfort the grieving
                Virgin Mary.
              </Text>

              <View className="mt-3 flex w-full">
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(138)}>
                  <Image source={pic_139} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(139)}>
                  <Image source={pic_140} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <TouchableOpacity
                className="mb-5 h-[280px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(140)}>
                <Image source={pic_141} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Furniture and Tableware</Text>
                {'\n'}
                These furniture and tableware pieces were used by local leaders during the American
                and Japanese colonial periods.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(141)}>
                <Image source={pic_142} className="h-full w-full" />
              </TouchableOpacity>
              <Text className=" text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Urna</Text>
                {'\n'}
                It is intricately carved wooden housings for Santos (religious icons), which are
                commonly found throughout the Philippines.
              </Text>

              <View className="mb-5 mt-3 flex w-full">
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(142)}>
                  <Image source={pic_143} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(143)}>
                  <Image source={pic_144} className="h-full w-full" />
                </TouchableOpacity>
              </View>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Binisayang Pagpanambaw</Text>
                {'\n'}
                Local healers in Balilihan utilize an empowered coconut oil,
                created from chopped medicinal leaves and roots in coconut oil every Good Friday, to
                enhance their healing practices.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[280px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(144)}>
                <Image source={pic_145} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Tagbo o Panagtapok sa Pagpanghinlo</Text>
                {'\n'}
                In Balilihan, the community practice of "Tagbo," initiated by barangay officials for
                events like clean-ups and road clearing, remains prevalent.
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(145)}>
                <Image source={pic_146} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Eladio I. Chatto</Text>
                {'\n'}
                The Assemblyman of Bohol from 1984 to 1986 and the longest-serving mayor in the
                municipality of Balilihan (28 years – 1959 to 1984 & 1995 to 1998)
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(146)}>
                <Image source={pic_147} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Lino Chatto Sr.</Text>
                {'\n'}
                The longest-serving governor in the province of Bohol (11 years – 1967 to 1978)
              </Text>

              <TouchableOpacity
                className="mb-5 mt-3 h-[320px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(147)}>
                <Image source={pic_148} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="mb-5 text-balance py-1 text-center font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Hermogena R. Racho</Text>
                {'\n'}
                She was part of the Women’s Auxiliary Service (WAS) in Bohol during the Second World
                War.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________LET’S REFLECT!________________________________ */}
            <CollapsibleSubTitle name="LET’S REFLECT!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                After learning about Balilihan's rich cultural heritage, take some time for
                reflection using the following guide questions:{'\n'}
                1. What aspects of Balilihan's history and culture resonated most with you, and why?
                {'\n'}
                2. What are the most significant contributions of Balilihan to Bohol's overall
                culture and history?{'\n'}
                3. How can we ensure that Balilihan's cultural heritage is preserved and celebrated
                for future generations?
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________TIME TO SHINE!________________________________ */}
            <CollapsibleSubTitle name="TIME TO SHINE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Get ready to make history! Balilihan's Bicentennial Celebration—200 years of
                heritage, resilience, and faith—is fast approaching! In 2028, the Sumad Festival
                will be bigger and brighter than ever, and your team will design the program that
                makes it unforgettable.{'\n'}
                Your challenge is to create a detailed, week-long program outline (Day 1-Day 7) for
                the 2028 Sumad Festival. Think big, think bold, think Balilihan! Your program should
                include specific activities, dates, and a clear objective for each event. Imagine
                the possibilities—a festival that not only celebrates the past but also inspires the
                future. Let's do this using the Program Outline Template below:
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
