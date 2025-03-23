import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_9 = () => {
  return (
    <>
      {/* _______________________________EXPLORE MORE!________________________________ */}
      <CollapsibleSubTitle name="EXPLORE MORE!">
        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Having explored Balilihan's remarkable journey through the postwar period and its
          continued evolution, we now explore into the heart of its rich cultural heritage. In this
          chapter, we uncover the stories behind the municipality's most significant cultural
          treasures. Prepare to be captivated by the enduring legacy of Balilihan's cultural
          heritage. Proceed to the next chapter (
          <Text style={{ color: '#0E8341' }}>Balilihan'sCultural Heritages</Text>).
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_9;
