import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import FastImage from 'expo-fast-image';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742557985/5.a_Turnover_and_Acceptance_Ceremonies_in_2017_kh83qy.jpg',
      },
      {
        uri: 'https://res.cloudinary.com/dnh4lkqlw/image/upload/v1742557986/4.Destruction_of_the_Belfry_after_the_2013_Bohol_Earthquake_hanqqx.jpg',
      },
    ],
    []
  );

  return (
    <>
      {/* _______________________________BALILIHAN DURING THE POST-WAR________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN DURING THE POST-WAR">
        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <FastImage
            source={images[0]}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          The liberation from Japanese rule was met with joyous celebrations. People emerged from
          their mountain hideouts, eager to embrace freedom under American tutelage. A spirit of
          rebuilding swept through the community; everyone worked tirelessly to repair their homes
          and restore their lives. Schools reopened, public offices resumed their functions, and
          peace returned, bringing a sense of normalcy.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(1)}>
          <FastImage
            source={images[1]}
            style={{ width: '100%', height: '100%' }}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <Text className="pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          This renewed hope was powerfully symbolized on Independence Day, July 4, 1946, when all
          the children, including those born during the war ("war babies"), gathered in the town
          plaza around the Rizal monument, representing a bright new future for the next generation.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_4;
