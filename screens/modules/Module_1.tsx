import { View, Text, Image } from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { SafeAreaView, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { VideoView, useVideoPlayer } from 'expo-video';
import Title from 'components/Title';
import SubTitle from 'components/SubTitle';
import pic_1 from '../../assets/module_1/1.a. Bohol Map (1852).jpg';
// import video from '../../assets/videos/hymn-video.mp4';
const videoSource = {
  uri: 'https://www.youtube.com/watch?v=n6s5ohIrkHw',
};

const AboutScreen = () => {
  const navigation = useNavigation();
  const player = useVideoPlayer(videoSource, (player) => {
    player.loop = true;
    player.play();
  });

  // console.log(player);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <NormalContainer>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-8 pt-10">
            <Ionicons name="arrow-back" size={30} color="#000" />
          </TouchableOpacity>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Title name="Beginning: Town and its People"></Title>
            <SubTitle name="What I need to know?"></SubTitle>
            {/* <View style={{ height: 250, width: '100%' }} className="my-3">
              <VideoView
                player={player}
                style={{ height: 250, width: '100%' }}
                allowsFullscreen
                allowsPictureInPicture
              />
            </View> */}
            <Text className="max-xs:text-base py-2 text-justify font-inknut text-base">
              Have you ever wondered how Balilihan, the town we know and love today, came to be? How
              did it transition from a humble settlement to a thriving municipality?
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
            <SubTitle name="let’s do this!"></SubTitle>

            <Text className="max-xs:text-base py-2 text-justify font-inknut text-base">
              A. Before we delve into the lesson, let’s test your knowledge of our barangays with a
              fun activity called <Text style={{ color: '#0E8341' }}>“Guess that Barangay!</Text>
              {'\n'}• Head over to the Assessment & Activities. section of the app to participate.
              {'\n'}
              • Once you’ve finished, take a moment to reflect on what you’ve learned. Consider
              these guide questions:  {'\n'}
              {'\n'}
              1. What did you learn about the barangays in Balilihan during the game?{'\n'}2. Which
              barangay name or meaning surprised you the most? Why?{'\n'}3. How can we use our
              knowledge of barangay names to help us better understand and appreciate our community?
              {'\n'}
              {'\n'}
              B. Now that you've reflected on the "Guess that Barangay!" activity, it's time to put
              your knowledge into action!{'\n'}• Get ready for{' '}
              <Text style={{ color: '#0E8341' }}>"Balilinhon, the Explorer,"</Text> where you'll use
              your knowledge of barangaysand map skills to locate them on a blank map.
              {'\n'}• You can find this activity in the Quizzes/Activities section of the app
            </Text>

            <SubTitle name="journey to the beginning"></SubTitle>
            <Text className="max-xs:text-base py-2 text-justify font-inknut text-base">
              After completing both activities, it’s time to watch a short video clip about the
              town’s origins and how it was started. Afterward, please share your thoughts and
              reflections on what you’ve learned.
            </Text>
            <View className="mb-7 mt-5 h-[320px] w-full overflow-hidden">
              <Image source={pic_1} className="h-full w-full" />
            </View>
          </ScrollView>
        </NormalContainer>
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
