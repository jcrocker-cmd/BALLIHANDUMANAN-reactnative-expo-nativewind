import { Text, View } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_5 = () => {
  return (
    <>
      {/* _______________________________Explore More!________________________________ */}
      <CollapsibleSubTitle name="Explore More!">
        <View style={{ flex: 1 }}>
          <Text className=" text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
            Having established the context of Balilihan and its people, we now move on to examine
            the pivotal chapter detailing Balilihan's interaction with the colonizers. You’ll learn
            about the changes brought by the colonizers and the life and challenges faced by the
            Balilinhons. Prepare to uncover a more nuanced understanding of this significant
            historical period. Proceed to the next chapter (Balilihan’s Journey: Three Periods of
            Colonial Influence)!
          </Text>
        </View>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_5;
