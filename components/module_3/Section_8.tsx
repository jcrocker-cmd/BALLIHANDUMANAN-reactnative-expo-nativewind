import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_8 = () => {
  return (
    <>
      {/* _______________________________TIME TO SHINE!________________________________ */}
      <CollapsibleSubTitle name="TIME TO SHINE!">
        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          Let's design the future of Balilihan! For this activity, titled "BALILIHAN 2075: A
          Collaborative Vision," you'll create a poster showcasing your shared vision for the town
          in the next 50 years. Use your knowledge of Balilihan's history and growth to imagine
          plausible future trends. Let your creativity shine—use any colors and materials you like
          to bring your vision to life!
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_8;
