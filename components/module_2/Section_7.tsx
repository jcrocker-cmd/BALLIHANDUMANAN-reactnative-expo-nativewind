import { Text } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

const Section_7 = () => {
  return (
    <>
      {/* _______________________________LET’S REFLECT!________________________________ */}
      <CollapsibleSubTitle name="LET’S REFLECT!">
        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          Reflect on Balilihan’s experiences during the Spanish, American, and Japanese colonial
          periods. Consider the lasting impacts of each period and how they shaped the town’s
          identity and development. Here are the guide questions:{'\n'}
          1.​How did the nature of colonial rule differ across the Spanish, American, and Japanese
          periods in Balilihan? What were the unique challenges and opportunities presented by each
          colonial power?{'\n'}
          2.​What are some of the enduring legacies of each colonial period in Balilihan today?
          {'\n'}
          3.​How did the people of Balilihan demonstrate resilience and adaptability in the face of
          successive colonial regimes?{'\n'}
        </Text>
      </CollapsibleSubTitle>
    </>
  );
};

export default Section_7;
