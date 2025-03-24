import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [require('../../assets/module_3/pic_1.png'), require('../../assets/module_3/pic_2.png')],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN DURING THE POST-WAR________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN DURING THE POST-WAR">
        <TouchableOpacity
          className="mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="-mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          The aftermath of World War II and
        </Text>
        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          Japanese occupation in the Philippines.
        </Text>

        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          The liberation from Japanese rule was met with joyous celebrations. People emerged from
          their mountain hideouts, eager to embrace freedom under American tutelage. A spirit of
          rebuilding swept through the community; everyone worked tirelessly to repair their homes
          and restore their lives. Schools reopened, public offices resumed their functions, and
          peace returned, bringing a sense of normalcy.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(1)}>
          <Image source={images[1]} className="h-full w-full" />
        </TouchableOpacity>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          A flag-raising ceremony commemorates Philippine independence from American rule on July 4,
          1946.
        </Text>

        <Text className="pb-5 pt-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
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
