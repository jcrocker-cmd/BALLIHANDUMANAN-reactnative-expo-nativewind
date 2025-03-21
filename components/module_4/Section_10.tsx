import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_10 = () => {
  return (
    <>
      {/* _______________________________LET’S REFLECT!________________________________ */}
      <CollapsibleSubTitle name="LET’S REFLECT!">
        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          After learning about Balilihan's rich cultural heritage, take some time for reflection
          using the following guide questions:{'\n'}
          1. What aspects of Balilihan's history and culture resonated most with you, and why?
          {'\n'}
          2. What are the most significant contributions of Balilihan to Bohol's overall culture and
          history?{'\n'}
          3. How can we ensure that Balilihan's cultural heritage is preserved and celebrated for
          future generations?
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_10;
