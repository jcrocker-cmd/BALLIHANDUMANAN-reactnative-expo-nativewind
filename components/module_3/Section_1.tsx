import React from 'react';
import { Text } from 'react-native';
import GoogleMapsWebView from 'components/GoogleMaps';
import CollapsibleSubTitle from '../CollapsibleSubTitle';

const Section_1 = () => {
  return (
    <>
      {/* _______________________________What I need to know?________________________________ */}
      <CollapsibleSubTitle name="What I need to know?">
        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          This chapter explores Balilihan's life after World War II's devastation and examining its
          current social, economic, and political development. We will investigate significant
          events, key figures,and leaders who shaped its progress, the adoption of its official
          municipal flag, logo, hymn, and symbols, and the impactful projects and organizations
          established to build a better future.{'\n'}
          {'\n'}
          By understanding the social, economic, and political progress of the community, and
          appreciating the resilience reflected in its symbols and community projects, we aim to
          cultivate a sense of pride and responsibility towards Balilihan's continued growth and
          betterment.
        </Text>
        <GoogleMapsWebView />
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_1;
