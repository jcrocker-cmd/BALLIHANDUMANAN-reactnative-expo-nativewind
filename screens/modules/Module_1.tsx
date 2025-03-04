import { View, Text, Image, SafeAreaView, ScrollView, TouchableOpacity, Modal } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { VideoView, useVideoPlayer } from 'expo-video';
import Title from 'components/Title';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import PdfViewer from 'components/PDFview';

import pic_1 from '../../assets/module_1/pic_1.png';
import pic_2 from '../../assets/module_1/pic_2.png';
import pic_3 from '../../assets/module_1/1.b. Bohol under the jurisdiction of Cebu.jpg';
import pic_4 from '../../assets/module_1/2. Map - Baclayon and its neighboring towns.png';
import pic_5 from '../../assets/module_1/3. Mariano Ricafort_s signature - the 61st Governor-General of the Philippines.jpg';
import pic_6 from '../../assets/module_1/pic_6.png';
import pic_7 from '../../assets/module_1/pic_7.png';
import pic_8 from '../../assets/module_1/6. Map of Balilihan and Catigbian.jpg';
import pic_9 from '../../assets/module_1/7. Drone shot of the poblacion in Balilihan.jpg';
import pic_10 from '../../assets/module_1/8. Balili Grass.jpg';
import pic_11 from '../../assets/module_1/9. Timeline.png';
import banner from '../../assets/module_1/banner.png';
// import pic_1 from '../../assets/module_1/1.a. Bohol Map (1852).jpg';
import ImageViewing from 'react-native-image-viewing';
// import video from '../../assets/videos/hymn-video.mp4';
// const videoSource = {
//   uri: 'https://www.youtube.com/watch?v=n6s5ohIrkHw',
// };

const Module_1 = () => {
  // const navigation = useNavigation();
  // const player = useVideoPlayer(videoSource, (player) => {
  //   player.loop = true;
  //   player.play();
  // });

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
  ];

  // console.log(player);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-4 h-[150px] w-full overflow-hidden">
            <Image source={banner} className="h-full w-full" />
          </View>
          <NormalContainer>
            <Title>Beginning: Town and its People</Title>
            {/* _______________________________What I need to know?________________________________ */}
            <CollapsibleSubTitle name="What I need to know?">
              {/* <View style={{ height: 250, width: '100%' }} className="my-3">
                <VideoView
                  player={player}
                  style={{ height: 250, width: '100%' }}
                  allowsFullscreen
                  allowsPictureInPicture
                />
              </View> */}
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Have you ever wondered how Balilihan, the town we know and love today, came to be?
                How did it transition from a humble settlement to a thriving municipality?
                This chapter invites you on a journey to uncover the captivating story
                of Balilihan's beginnings.{'\n'}
                {'\n'}We'll explore the diverse tales surrounding the town's founding, its early
                inhabitants, and the establishment of its various barrios. We'll delve into the
                historical relationship between Balilihan and Baclayon, examining key events,
                territorial changes, and annexations that shaped the town's identity.{'\n'}
                {'\n'}
                Through exploration and reflection, we'll cultivate a deep appreciation
                for Balilihan's rich heritage, fostering a sense of responsibility to preserve and
                protect this invaluable legacy for future generations.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Let's Do This!________________________________ */}
            <CollapsibleSubTitle name="let’s do this!">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
                A. Before we delve into the lesson, let’s test your knowledge of our barangays with
                a fun activity called{' '}
                <Text style={{ color: '#0E8341' }}>“Guess that Barangay!</Text>
                {'\n'}• Head over to the Assessment & Activities. section of the app to participate.
                {'\n'}
                • Once you’ve finished, take a moment to reflect on what you’ve learned. Consider
                these guide questions:  {'\n'}
                {'\n'}
                1. What did you learn about the barangays in Balilihan during the game?{'\n'}
                2. Which barangay name or meaning surprised you the most? Why?{'\n'}3. How can we
                use our knowledge of barangay names to help us better understand and appreciate our
                community?
                {'\n'}
                {'\n'}
                B. Now that you've reflected on the "Guess that Barangay!" activity, it's time to
                put your knowledge into action!{'\n'}• Get ready for{' '}
                <Text style={{ color: '#0E8341' }}>"Balilinhon, the Explorer,"</Text> where you'll
                use your knowledge of barangaysand map skills to locate them on a blank map.
                {'\n'}• You can find this activity in the Quizzes/Activities section of the app
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Journey to the Beginning________________________________ */}
            <CollapsibleSubTitle name="journey to the beginning">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                After completing both activities, it’s time to watch a short video clip about the
                town’s origins and how it was started. Afterward, please share your thoughts and
                reflections on what you’ve learned.
              </Text>
              {/* Clickable Image */}
              <TouchableOpacity
                className="mb-7 mt-5 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(0)}>
                <Image source={pic_1} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-1 text-center font-inknut text-[12px] uppercase  leading-[24px]">
                BALILIHAN’S FORMAL ESTABLISHMENT,  TERRITORIAL CHANGES, AND ANNEXATIONS
              </Text>

              {/* Clickable Image */}
              <TouchableOpacity
                className="mb-7 mt-5 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(1)}>
                <Image source={pic_2} className="h-full w-full" />
              </TouchableOpacity>

              <View className="mb-4 mt-4 flex w-full flex-row items-center">
                <TouchableOpacity
                  className="h-[260px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(2)}>
                  <Image source={pic_3} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  Balilihan's history is intertwined with the evolving political landscape of the
                  Philippines. Initially, under Spanish rule, Bohol fell under the jurisdiction of
                  Cebu. Balilihan, a significant pueblo (town) at the time with 2,878 inhabitants,
                  was among the 41 pueblos that comprised Cebu province.
                </Text>
              </View>

              <Text className="py-1 text-justify font-inknut text-[12px] leading-[24px]">
                However, on September 1, 1847, Spanish authorities established Bohol as a separate
                province independent from Cebu. Only 22 of Bohol's towns were created during that
                time, including Balilihan.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[250px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(3)}>
                <Image source={pic_4} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-1 text-justify font-inknut text-[12px] leading-[24px]">
                <Text style={{ color: '#0E8341' }}>Baclayon</Text> was the first town the Spaniards
                built in Bohol. Originally, the town of Baclayon was much bigger and included what
                are now Balilihan, Alburquerque, Catigbian, Corella, Sikatuna, and San Isidro.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(4)}>
                <Image source={pic_5} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Around 1827,{' '}
                <Text style={{ color: '#0E8341' }}>Governor-General Mariano Ricafort</Text> wanted
                people to govern themselves, so new towns were made. Balilihan became its town
                around 1828, separating from Baclayon. At first, it was sparsely settled, but grew
                rapidly and became economically, politically, socially, and religiously progressive.
                {'\n'}It was on September 29, 1828, when a friar, called by the natives as 
                <Text style={{ color: '#0E8341' }}>Fray Tomas,</Text> sought the cooperation of the
                inhabitants and organized and established a settlement in the sitio of{' '}
                <Text style={{ color: '#0E8341' }}>“Bay sa Iring”</Text> (presently located
                in Datag).
              </Text>

              <View className="mb-4 mt-4 flex w-full flex-row items-center">
                <TouchableOpacity
                  className="h-[190px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(5)}>
                  <Image source={pic_6} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  In 1901, <Text style={{ color: '#0E8341' }}>Jose Aniceto B. Clarin</Text>, Bohol's
                  first civil governor, announced his intention to annex Balilihan and make it a
                  barrio of Antequera, effectively abolishing Balilihan as a town.
                </Text>
              </View>

              <View className="mb-1 mt-4 flex w-full flex-row items-start">
                <Text className="flex-1 py-1 pr-3 text-justify font-inknut text-[12px] leading-[20px]">
                  <Text style={{ color: '#0E8341' }}>Manuel Diamante</Text>, Balilihan's municipal
                  president, strongly opposed this plan, voicing the people's discontent and warning
                  of potential unrest if the annexation proceeded. Governor Clarinultimately decided
                  against annexing Balilihan to Antequera.
                </Text>

                <TouchableOpacity
                  className="h-[180px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(6)}>
                  <Image source={pic_7} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                However, as a consequence of this initial plan, the neighboring town
                of Catigbian was downgraded to a barrio under Act No. 370 of the Philippine
                Commission, becoming part of Balilihan. Following this action,
                Governor Clarin proposed a revised plan to the US authorities: instead
                of Balilihan's demotion, <Text style={{ color: '#0E8341' }}>Catigbian</Text> should
                be integrated into Balilihan. This demonstrates a shift in strategy, from initially
                targeting Balilihan for annexation to ultimately
                suggesting Catigbian's incorporation into Balilihan.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(7)}>
                <Image source={pic_8} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                In a twist of fate, by 1949, Balilihan faced significant territorial loss
                when Catigbian was granted its own town charter. This decision came despite strong
                objections from Balilihan's Mayor,
                <Text style={{ color: '#0E8341' }}>Balbino Chatto</Text> , and 
                <Text style={{ color: '#0E8341' }}>Gerardo Racho</Text>, who personally traveled to
                Malacañang to appeal to President Elpidio Quirino. Their efforts to
                retain Catigbian within Balilihan were unsuccessful, marking a significant change in
                the region's administrative landscape.{'\n'}
                {'\n'}Subsequent administrative divisions further shaped Balilihan's position. In
                1907, Bohol's municipalities were divided into three legislative districts,
                with Balilihan initially assigned to the Second District. The 1987 Philippine
                Constitution led to further reapportionment of towns, resulting
                in Balilihan's current placement in the 
                <Text style={{ color: '#0E8341' }}>First District of Bohol</Text>.{'\n'}
                {'\n'}This demonstrates Balilihan's shifting administrative affiliations throughout
                its history, reflecting the broader changes in the governance of the region.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Try This!________________________________ */}
            <CollapsibleSubTitle name="try this!">
              <Text
                style={{ color: '#0E8341' }}
                className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Now it's time to put your historical knowledge to the test! Using what you've
                learned about Balilihan's historical establishment, territorial changes, and
                annexations, try to name the families who were among its first inhabitants
                or settlers.  Consult the answer key to check your guesses
              </Text>
              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(8)}>
                <Image source={pic_9} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                <Text style={{ color: '#0E8341' }}>Balilihan</Text> is an interior town, located 22
                kilometers northeast of Tagbilaran City, the capital of Bohol. The town is situated
                on a low, rolling plateau with verdant hills, mostly covered in trees and
                vegetation. The lowlands are usually converted into rice fields, while the hillsides
                are typically planted with corn, root crops, and coconuts.
                {'\n'}
                {'\n'}Ever wondered about the name “Balilihan”?
              </Text>

              <View className="mb-1 mt-4 flex w-full flex-row items-start">
                <TouchableOpacity
                  className="h-[180px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(9)}>
                  <Image source={pic_10} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  It’s linked to a species of grass locally known as "balili," a naturally abundant
                  and excellent grazing food for large cattle such as carabaos, cows, and horses.
                   Therefore, Balilihan simply implies an abundance of  balili  grass in the place.
                </Text>
              </View>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Let's Reflect!________________________________ */}
            <CollapsibleSubTitle name="let's reflect">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Reflect on what you’ve learned about Balilihan’s formal establishment, territorial
                changes, and annexations by answering these guide questions:{'\n'}1. What were the
                major challenges faced during the establishment of the municipality? What triumphs
                and successes marked this period in Balilihan’s history?{'\n'}2. For you, how might
                the original settlers of Balilihan have felt about territorial changes?{'\n'}3. What
                lessons can be learned from the experience of establishing Balilihan as an
                independent municipality?
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Time to Shine!________________________________ */}
            <CollapsibleSubTitle name="TIME TO SHINE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Create a timeline showcasing the key events in the origin of Balilihan, including
                its creation, territorial changes, and annexations. Review the information you’ve
                learned from the discussions. Organize your timeline using the format provided
                below.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[320px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(10)}>
                <Image source={pic_11} className="h-full w-full" />
              </TouchableOpacity>
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
