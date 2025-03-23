import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_3 = () => {
  return (
    <>
      {/* _______________________________Journey to the Future________________________________ */}
      <CollapsibleSubTitle name="journey to the future">
        <Text className="pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          Since its establishment as a separate town on September 29, 1828, Balilihan has undergone
          a remarkable transformation. What began as a small settlement for Dagohoy's rebels has
          evolved into the thriving municipality we know today.
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_3;
