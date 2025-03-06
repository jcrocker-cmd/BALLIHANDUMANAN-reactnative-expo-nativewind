import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState } from 'react';
import React from 'react';
import Title from 'components/Title';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { VideoView, useVideoPlayer } from 'expo-video';
import { WebView } from 'react-native-webview';
import GoogleMapsWebView from 'components/GoogleMaps';
import pic_1 from '../../assets/module_3/pic_1.png';
import pic_2 from '../../assets/module_3/pic_2.png';
import pic_3 from '../../assets/module_2/pic_3.png';
import pic_4 from '../../assets/module_3/pic_4.png';
import pic_5 from '../../assets/module_3/pic_5.png';
import pic_6 from '../../assets/module_3/pic_6.png';
import pic_7 from '../../assets/module_3/pic_7.png';
import pic_8 from '../../assets/module_3/pic_8.png';
import pic_9 from '../../assets/module_3/pic_9.png';
import pic_10 from '../../assets/module_3/pic_10.png';
import pic_11 from '../../assets/module_3/pic_11.png';
import pic_12 from '../../assets/module_3/10.a. Our Lady of Mt. Carmel Parish.jpg';
import pic_13 from '../../assets/module_3/10.b. Sto. Nino Parish.jpg';
import pic_14 from '../../assets/module_3/pic_14.png';
import pic_15 from '../../assets/module_3/pic_15.png';

import pic_16 from '../../assets/module_3/12.Rice.jpg';
import pic_17 from '../../assets/module_3/12.Corn.jpg';
import pic_18 from '../../assets/module_3/12.Livestock.jpg';

import pic_19 from '../../assets/module_3/12.Basket Weaving in Balilihan Market.png';
import pic_20 from '../../assets/module_3/12.Basket Weaving.jpg';

import pic_21 from '../../assets/module_3/13.Kawasan Falls with people.jpg';
import pic_22 from '../../assets/module_3/13.Camugao Falls Inspection.jpg';
import pic_23 from '../../assets/module_3/13.Manlawi Peak Inspection.jpg';

import pic_24 from '../../assets/module_3/14.Construction of Roads.jpg';
import pic_25 from '../../assets/module_3/14.New Road.jpg';
import pic_26 from '../../assets/module_3/14.New Road b.jpg';

import pic_27 from '../../assets/module_3/15. Balilihan as a 3rd Class Municipality.jpg';
import pic_28 from '../../assets/module_3/16. DILG.png';

import pic_29 from '../../assets/module_3/17.Green Banner Award.jpg';
import pic_30 from '../../assets/module_3/17.CROWN Award.jpg';
import pic_31 from '../../assets/module_3/17.Outstanding Anti-Drug Drive.jpg';

import pic_32 from '../../assets/module_3/18. Balilihan Flag.jpg';
import pic_33 from '../../assets/module_3/officialseal.png';
import pic_34 from '../../assets/module_3/20. Balilihan Hymn Music Sheet.jpg';

import pic_35 from '../../assets/module_3/21.Mahogany - Municipal Tree.jpg';
import pic_36 from '../../assets/module_3/21.Anthurium - Municipal Flower.jpg';
import pic_37 from '../../assets/module_3/21.Coconut - Municipal Plant.jpg';
import pic_38 from '../../assets/module_3/21.Banana - Municipal Fruit.jpg';

import pic_39 from '../../assets/module_3/21.Tilapia - Municipal Fish.jpg';
import pic_40 from '../../assets/module_3/21.Pigeon - Municipal Bird.png';
import pic_41 from '../../assets/module_3/21.Carabao - Municipal Animal.jpg';

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
            <Title>
              Balilihan in the{'\n'}
              Postwar Era and Beyond
            </Title>

            {/* _______________________________What I need to know?________________________________ */}
            <CollapsibleSubTitle name="What I need to know?">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                This chapter explores Balilihan's life after World War II's
                devastation and examining its current social, economic, and political development.
                We will investigate significant events, key figures,and leaders who shaped its
                progress, the adoption of its official municipal flag, logo, hymn, and symbols, and
                the impactful projects and organizations established to build a better future.{'\n'}
                {'\n'}
                By understanding the social, economic, and political progress of the community, and
                appreciating the resilience reflected in its symbols and community projects, we aim
                to cultivate a sense of pride and responsibility towards Balilihan's continued
                growth and betterment.
              </Text>
              <GoogleMapsWebView />
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Let's Do This!________________________________ */}
            <CollapsibleSubTitle name="let’s do this!">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
                To begin our exploration of Balilihan's postwar history and beyond, we invite you to
                listen to the moving hymn, "Balilihan sa Kahangturan." Watch the video presentation
                below and listen attentively to the lyrics, allowing the music to resonate within
                you.
              </Text>

              <View style={{ height: 250, width: '100%', marginVertical: 12 }}>
                <WebView
                  source={{ uri: 'https://www.youtube.com/embed/Mo-xlvY8Kts' }}
                  allowsFullscreenVideo
                  style={{ height: 250, width: '100%' }}
                />
              </View>
              {/* 
              <View style={{ height: 250, width: '100%' }} className="my-3">
                <VideoView
                  player={player}
                  style={{ height: 250, width: '100%' }}
                  allowsFullscreen
                  allowsPictureInPicture
                />
              </View> */}

              <Text
                className="mt-2 py-2 text-center font-inknut text-[14px] leading-[24px]"
                style={{ color: '#0E8341' }}>
                “Balilihan sa Kahangturan”
              </Text>
              <Text
                className="py-2 text-center font-inknut text-[12px] leading-[24px]"
                style={{ color: '#0E8341' }}>
                Kabalilhan diha sa imong ngalan,{'\n'}
                Duyog ang kusog sa yanong buhilaman,{'\n'}
                Kapatagan, kabukiran nga malunhaw,{'\n'}
                Panalangin ni Bathala wa n’ya ihikaw;{'\n'}
                Dinagayday sa imong kasugiran,{'\n'}
                Diwa ni Dagohoy hunis kaliwatan,{'\n'}
                Ngalan mo nakulit na sa mga bungtod,{'\n'}
                Diha sa sabakan mo garbo ug bantayog;{'\n'}
                Balilihan, Balilihan{'\n'}
                Among lungsod, among yutawhan,{'\n'}
                Gabayan ka sa mga tinguha,{'\n'}
                Ikaw maoy mutya, among himaya,{'\n'}
                Balilihan, Balilihan{'\n'}
                Among lungsod, among yutawhan,{'\n'}
                Gugma’g kadasig ikaw halaran,{'\n'}
                Balilihan sa kahangturan{'\n'}
                Balilihan, Balilihan{'\n'}
                Among lungsod, among yutawhan,{'\n'}
                Gabayan ka sa mga tinguha,{'\n'}
                Ikaw maoy mutya, among himaya,{'\n'}
                Balilihan, Balilihan{'\n'}
                Among lungsod, among yutawhan,{'\n'}
                Gugma’g kadasig ikaw halaran,{'\n'}
                Balilihan sa kahangturan.
              </Text>

              <Text className="mt-4 py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                After you've watched and listened to the hymn, take a moment to reflect on these
                guide questions:{'\n'}
                {'\n'}1. What emotions are expressed in the hymn, and what parts of the lyrics touch
                you most deeply?{'\n'}
                2. What is the overall message or purpose of the hymn?{'\n'}
                {'\n'}
                Excellent work! You've thoughtfully listened to and reflected upon
                the Balilihan hymn, "Balilihan sa Kahangturan." Now, armed with a deeper
                appreciation for the spirit of Balilihan as expressed in its hymn, let's explore its
                remarkable journey through the postwar era and into the present day.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Journey to the Future________________________________ */}
            <CollapsibleSubTitle name="journey to the future">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Since its establishment as a separate town on September 29, 1828, Balilihan has
                undergone a remarkable transformation. What began as a small settlement
                for Dagohoy's rebels has evolved into the thriving municipality we know today.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN DURING THE POST-WAR________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN DURING THE POST-WAR">
              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(0)}>
                <Image source={pic_1} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                The liberation from Japanese rule was met with joyous celebrations. People emerged
                from their mountain hideouts, eager to embrace freedom under American tutelage. A
                spirit of rebuilding swept through the community; everyone worked tirelessly to
                repair their homes and restore their lives. Schools reopened, public offices resumed
                their functions, and peace returned, bringing a sense of normalcy.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(1)}>
                <Image source={pic_2} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                This renewed hope was powerfully symbolized on Independence Day, July 4, 1946, when
                all the children, including those born during the war ("war babies"), gathered in
                the town plaza around the Rizal monument, representing a bright new future for the
                next generation.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-4 mt-4 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN TODAY________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN TODAY">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Nearly two centuries after its founding, Balilihan has earned a respected name in
                Bohol andacross the country. This success is largely due to the visionary leadership
                of its spiritual and political guides throughout the years.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(2)}>
                <Image source={pic_3} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Their enduring legacies—evident in the landmarks and traditions they left
                behind—stand as testaments to their tireless efforts, sacrifices, and unwavering
                dedication to the people of Balilihan.{'\n'}
                The town's enduring strength lies in the resilience, perseverance, and faith of its
                people. Their unwavering commitment to God and country, coupled with an openness to
                embracing progress and innovation, has propelled Balilihan forward, constantly
                striving for greater achievements. This continuous improvement
                spirit defines Balilihan, a community forever moving towards a brighter future.
              </Text>
              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(3)}>
                  <Image source={pic_4} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(4)}>
                  <Image source={pic_5} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                According to the Philippine Statistics Authority, the municipality boasts a
                substantial population of 18,694 as of 2020. Improvements in education and
                healthcare have significantly shaped Balilihan's social landscape. Community-based
                organizations and initiatives play a vital role in fostering social development and
                strengthening community bonds.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(5)}>
                  <Image source={pic_6} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(6)}>
                  <Image source={pic_7} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(7)}>
                  <Image source={pic_8} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(8)}>
                  <Image source={pic_9} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(9)}>
                  <Image source={pic_10} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's vibrant cultural life is reflected in its annual celebrations.
                The Sumad Festival, held every September 29th, commemorates the town's founding.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[170px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(10)}>
                <Image source={pic_11} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Religious festivities include the fiesta honoring Our Lady of Mount Carmel on July
                16th and the celebration in honor of the Santo Niño at the Hanopol barrio on January
                16th.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(11)}>
                  <Image source={pic_12} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(12)}>
                  <Image source={pic_13} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                These events unite the community, fostering a strong sense of shared identity and
                cultural pride, with the nightly activities adding a special dimension to the
                celebrations.{'\n'}
                Furthermore, Balilihan's rich heritage is preserved and celebrated through several
                sites recognized as Important Cultural Properties by the National Museum of the
                Philippines. These designations highlight the historical and cultural significance
                of these municipal heritages. These designations not only preserve the past but also
                contribute to the ongoing development of Balilihan's cultural tourism potential.
              </Text>

              <View className="mb-5 mt-2">
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

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan's economy is built on a foundation of agriculture, with rice, corn,
                and livestock farming, and basket weaving forming its core. However, recognizing the
                potential for growth beyond agriculture, the municipality is actively developing its
                tourism sector.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[150px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(15)}>
                  <Image source={pic_16} className="h-full w-full" />
                </TouchableOpacity>
                <View className="flex flex-row">
                  <TouchableOpacity
                    className="h-[140px] w-1/2 overflow-hidden"
                    onPress={() => setVisibleIndex(16)}>
                    <Image source={pic_17} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[140px] w-1/2 overflow-hidden"
                    onPress={() => setVisibleIndex(17)}>
                    <Image source={pic_18} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <View className="mb-5 mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(18)}>
                  <Image source={pic_19} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(19)}>
                  <Image source={pic_20} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                This involves showcasing Balilihan's natural attractions, such as its picturesque
                waterfalls and other scenic locations, and the restoration of historically
                significant sites to create appealing destinations for visitors.
              </Text>

              <View className="mb-5 mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[240px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(20)}>
                  <Image source={pic_21} className="h-full w-full" />
                </TouchableOpacity>
                <View className="w-1/2">
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(21)}>
                    <Image source={pic_22} className="h-full w-full" />
                  </TouchableOpacity>
                  <TouchableOpacity
                    className="h-[120px] w-full overflow-hidden"
                    onPress={() => setVisibleIndex(22)}>
                    <Image source={pic_23} className="h-full w-full" />
                  </TouchableOpacity>
                </View>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                This involves showcasing Balilihan's natural attractions, such as its picturesque
                waterfalls and other scenic locations, and the restoration of historically
                significant sites to create appealing destinations for visitors.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(23)}>
                  <Image source={pic_24} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(24)}>
                  <Image source={pic_25} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[180px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(25)}>
                  <Image source={pic_26} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Through the years, Balilihan's political landscape reflects a history of consistent
                progress and achievement. Recently, the municipality has earned numerous awards at
                the provincial, regional, and national levels, culminating in its recent
                reclassification from a 4th class to a 3rd class municipality in 2024. This
                advancement is a testament to effective governance and financial management.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[240px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(26)}>
                  <Image source={pic_27} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan consistently meets the Department of the Interior and Local Government's
                (DILG) Good Financial Housekeeping Standards, demonstrating adherence to rigorous
                accounting, auditing, and transparency practices, including full disclosure of its
                budget and finances.
              </Text>

              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[200px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(27)}>
                  <Image source={pic_28} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                A key driver of Balilihan's success is its flagship Countryside Action Program
                (CAP). In 2024, CAP's impact was recognized with the prestigious Consistent Regional
                Outstanding Winner in Nutrition (CROWN) Award, highlighting its exceptional
                performance in 2023. This holistic approach to social development, focusing on
                health, nutrition, and sanitation, has previously earned Balilihan multiple Green
                Banner awards.{'\n'}
                (Photo of Plaque Green Banner award, CROWN Award, and Outstanding Anti-Drug Drive)
                Beyond its achievements in health and nutrition, Balilihan has also garnered
                significant recognition for its commitment to peace and order. In 2019, it received
                a national award for Outstanding Anti-Drug Drive from the DILG, and in 2024, it was
                honored with the BansiwagGovernance Award for its Anti-Drug Abuse Council and Peace
                and Order Council.
              </Text>

              <View className="mb-5 mt-2 flex w-full flex-row">
                <TouchableOpacity
                  className="h-[250px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(28)}>
                  <Image source={pic_29} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(29)}>
                  <Image source={pic_30} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[250px] w-1/3 overflow-hidden"
                  onPress={() => setVisibleIndex(30)}>
                  <Image source={pic_31} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                These accolades demonstrate Balilihan's dedication to effective governance,
                community well-being, and public safety.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN’S MUNICIPAL IDENTITY________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN’S MUNICIPAL IDENTITY">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The municipal ordinance under Sections 13 and 14, Chapter 8 of the Code of General
                Ordinances enacted on March 14, 1995, provided for the adoption of a municipal flag.
                Here is the flag’s design and symbolism:
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 flex h-[180px] w-[80%] self-center overflow-hidden"
                onPress={() => setVisibleIndex(31)}>
                <Image source={pic_32} className="h-full w-full object-contain" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The rectangular field is divided vertically across the width into three equal
                fields. The sky-blue field in the flag symbolizes peace, its white center for
                nobility, and red for courage. The head of the carabao, colored yellow, symbolizes
                the patience, strength, obedience, and perseverance of its people. The laurel leaves
                in dark green, represent the 31 barangays of the town. In the background is the
                historic belfry, colored chocolate brown, a symbol of the town’s patrimony.
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
