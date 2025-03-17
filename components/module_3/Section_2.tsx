import { Text, View } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_2 = () => {
  return (
    <>
      {/* _______________________________Let's Do This!________________________________ */}
      <CollapsibleSubTitle name="let’s do this!">
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
          To begin our exploration of Balilihan's postwar history and beyond, we invite you to
          listen to the moving hymn, "Balilihan sa Kahangturan." Watch the video presentation below
          and listen attentively to the lyrics, allowing the music to resonate within you.
        </Text>

        <View style={{ height: 250, width: '100%', marginVertical: 12 }}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/Mo-xlvY8Kts' }}
            allowsFullscreenVideo
            style={{ height: 250, width: '100%' }}
          />
        </View>
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
          After you've watched and listened to the hymn, take a moment to reflect on these guide
          questions:{'\n'}
          {'\n'}1. What emotions are expressed in the hymn, and what parts of the lyrics touch you
          most deeply?{'\n'}
          2. What is the overall message or purpose of the hymn?{'\n'}
          {'\n'}
          Excellent work! You've thoughtfully listened to and reflected upon the Balilihan hymn,
          "Balilihan sa Kahangturan." Now, armed with a deeper appreciation for the spirit
          of Balilihan as expressed in its hymn, let's explore its remarkable journey through the
          postwar era and into the present day.
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_2;
