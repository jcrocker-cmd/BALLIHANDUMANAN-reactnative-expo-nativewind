import React from 'react';
import { Text } from 'react-native';
// import GoogleMapsWebView from 'components/GoogleMaps';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_1 = () => {
  return (
    <>
      {/* _______________________________What I need to know?________________________________ */}
      <CollapsibleSubTitle name="What I need to know?">
        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          This chapter explores the rich tapestry of Balilihan's cultural heritage, showcasing its
          unique identity and the importance of preserving it for future generations. We'll discover
          examples of Balilihan's cultural heritage, classifying them as natural, built, movable, or
          intangible, and exploring their significance to the community. You'll learn why protecting
          these treasures is vital, not just for Balilihan's present, but for its future.
        </Text>
        {/* <GoogleMapsWebView /> */}
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_1;
