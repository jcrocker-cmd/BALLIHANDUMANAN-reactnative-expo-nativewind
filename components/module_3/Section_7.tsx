import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_7 = () => {
  return (
    <>
      {/* _______________________________LET’S REFLECT!________________________________ */}
      <CollapsibleSubTitle name="LET’S REFLECT!">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          After exploring Balilihan’s history in postwar, current conditions, and its municipal
          identity, take some time for personal reflection. Consider these questions to deepen your
          understanding and connect the information to your own experiences and perspectives.{'\n'}
          1. How has Balilihan’s postwar recovery shaped its current situation? What continuities
          and changes do you observe between the past and the present?{'\n'}
          2. How does Balilihan’s municipal identity (symbols, flag, official hymn, etc.) reflect
          its history and values?{'\n'}
          3. How has this learning experience broadened your understanding of Balilihan and its
          people? What new perspectives or insights have you gained?  
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_7;
