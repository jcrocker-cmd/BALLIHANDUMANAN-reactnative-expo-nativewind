import React from 'react';
import { Text, View } from 'react-native';
import CollapsibleSubTitle from '../../components/CollapsibleSubTitle';
import { Platform } from 'react-native';

const Section_1 = () => {
  return (
    <>
      {/* _______________________________What I need to know?________________________________ */}
      <CollapsibleSubTitle name="What I need to know?">
        <View style={{ flex: 1 }}>
          <Text
          style={Platform.OS === 'ios' ? { fontSize: 13 } : {}}
            className="mb-5 py-2 font-inknut text-[11px] text-justify leading-[24px]">
            Have you ever wondered how Balilihan, the town we know and love today, came to be? How
            did it transition from a humble settlement to a thriving municipality? This chapter
            invites you on a journey to uncover the captivating story of Balilihan's beginnings.
            {'\n'}
            {'\n'}We'll explore the diverse tales surrounding the town's founding, its early
            inhabitants, and the establishment of its various barrios. We'll delve into the
            historical relationship between Balilihan and Baclayon, examining key events,
            territorial changes, and annexations that shaped the town's identity.{'\n'}
            {'\n'}
            Through exploration and reflection, we'll cultivate a deep appreciation for Balilihan's
            rich heritage, fostering a sense of responsibility to preserve and protect this
            invaluable legacy for future generations.
          </Text>
        </View>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_1;
