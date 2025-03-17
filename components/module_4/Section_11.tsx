import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_11 = () => {
  return (
    <>
      {/* _______________________________TIME TO SHINE!________________________________ */}
      <CollapsibleSubTitle name="TIME TO SHINE!">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Get ready to make history! Balilihan's Bicentennial Celebration—200 years of heritage,
          resilience, and faith—is fast approaching! In 2028, the Sumad Festival will be bigger and
          brighter than ever, and your team will design the program that makes it unforgettable.
          {'\n'}
          Your challenge is to create a detailed, week-long program outline (Day 1-Day 7) for the
          2028 Sumad Festival. Think big, think bold, think Balilihan! Your program should include
          specific activities, dates, and a clear objective for each event. Imagine the
          possibilities—a festival that not only celebrates the past but also inspires the future.
          Let's do this using the Program Outline Template below:
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_11;
