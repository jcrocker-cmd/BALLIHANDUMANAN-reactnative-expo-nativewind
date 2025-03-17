import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_7 = () => {
  return (
    <>
      {/* _______________________________EXPLORE MORE!________________________________ */}
      <CollapsibleSubTitle name="EXPLORE MORE!">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          The next chapter in this app takes you beyond the colonial era, focusing
          on Balilihan's journey through the postwar period and its ongoing evolution.  You'll
          discover how the town rebuilt and adapted after the war, exploring its social, economic,
          and cultural development.  Get ready to witness the resilience and progress
          of Balilihan in the years that followed. Proceed to the next chapter (Balilihan in the
          Postwar Era and Beyond)!
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_7;
