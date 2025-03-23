import { Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_11 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);

  const images = useMemo(
    () => [
      require('../../assets/module_4/6. Other Cultural Assets/Program Outline Template 1.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________TIME TO SHINE!________________________________ */}
      <CollapsibleSubTitle name="TIME TO SHINE!">
        <Text className="text-balance py-2 text-justify font-inknut text-[11px] leading-[24px]">
          Get ready to make history! Balilihan's Bicentennial Celebration—200 years of heritage,
          resilience, and faith—is fast approaching! In 2028, the Sumad Festival will be bigger and
          brighter than ever, and your team will design the program that makes it unforgettable.
          {'\n'}
          Your challenge is to create a detailed, week-long program outline (Day 1-Day 7) for the
          2028 Sumad Festival. Think big, think bold, think Balilihan! Your program should include
          specific activities, dates, and a clear objective for each event. Imagine the
          possibilities—a festival that not only celebrates the past but also inspires the future.
          Let's do this using the Program Outline Template below:
        </Text>

        <TouchableOpacity
          className="mb-5 mt-3 h-[250px] w-[80%] self-center overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_11;
