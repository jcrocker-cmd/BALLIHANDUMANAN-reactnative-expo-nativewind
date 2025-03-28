import { Text, View } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_5 = () => {
  return (
    <>
      {/* _______________________________Let's Reflect!________________________________ */}
      <CollapsibleSubTitle name="let's reflect">
        <View style={{ flex: 1 }}>
          <Text className=" text-balance pb-5 pt-2 text-justify font-inknut text-[11px] leading-[24px]">
            Reflect on what you’ve learned about Balilihan’s formal establishment, territorial
            changes, and annexations by answering these guide questions:{'\n'}1. What were the major
            challenges faced during the establishment of the municipality? What triumphs and
            successes marked this period in Balilihan’s history?{'\n'}2. For you, how might the
            original settlers of Balilihan have felt about territorial changes?{'\n'}3. What lessons
            can be learned from the experience of establishing Balilihan as an independent
            municipality?
          </Text>
        </View>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_5;
