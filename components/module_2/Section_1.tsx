import React from 'react';
import { Text } from 'react-native';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_1 = () => {
  return (
    <>
      {/* _______________________________What I need to know?________________________________ */}
      <CollapsibleSubTitle name="What I need to know?">
        <Text className="pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          This chapter delves into the historical experiences of Balilihan that reflects the broader
          patterns of colonization that have profoundly shaped the Philippines into what it is
          today. We will examine the significant events that shaped Balilihan during the Spanish,
          American, and Japanese occupations, and analyze their impact on the lives and livelihoods
          of its people.{'\n'}
          {'\n'}
          Through this study, you will develop an understanding of the challenges and hardships
          faced by the Balilihan community during these periods to foster empathy for their
          experiences and perspectives.{'\n'}
          {'\n'}
          Ultimately, this also aims to cultivate a deep appreciation for the remarkable resilience
          and perseverance demonstrated by the people of Balilihan in the face of foreign
          domination, highlighting their enduring strength and spirit.
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_1;
