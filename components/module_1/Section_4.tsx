import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import GoogleMapsView from 'components/GoogleMaps';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_1/7. Drone shot of the poblacion in Balilihan.jpg'),
      require('../../assets/module_1/8. Balili Grass.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________Try This!________________________________ */}
      <CollapsibleSubTitle name="try this!">
        <View style={{ flex: 1 }}>
          <Text
            style={{ textAlign: 'justify', color: '#0E8341' }}
            className="py-2  font-inknut text-[12px] leading-[24px] max-xs:text-base">
            Now it's time to put your historical knowledge to the test! Using what you've learned
            about Balilihan's historical establishment, territorial changes, and annexations, try to
            name the families who were among its first inhabitants or settlers. Consult the answer
            key to check your guesses
          </Text>
          <TouchableOpacity
            className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
            onPress={handlePress(0)}>
            <Image source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <View style={{ flex: 1 }}>
          <Text
            style={{ textAlign: 'justify' }}
            className="py-2 font-inknut text-[12px] leading-[24px] max-xs:text-base">
            <Text style={{ color: '#0E8341' }}>Balilihan</Text> is an interior town, located 22
            kilometers northeast of Tagbilaran City, the capital of Bohol. The town is situated on a
            low, rolling plateau with verdant hills, mostly covered in trees and vegetation. The
            lowlands are usually converted into rice fields, while the hillsides are typically
            planted with corn, root crops, and coconuts.
            {'\n'}
            {'\n'}Ever wondered about the name “Balilihan”?
          </Text>
        </View>

        <View className="mb-1 mt-4 flex w-full flex-row items-start">
          <TouchableOpacity className="h-[180px] w-[50%] overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>

          <View className="flex-1 pl-3">
            <Text className="py-1 text-justify font-inknut text-[12px] leading-[20px]">
              It’s linked to a species of grass locally known as "balili", a naturally abundant and
              excellent grazing food for large cattle such as carabaos, cows, and horses. Therefore,
              Balilihan simply implies an abundance of balili grass in the place.
            </Text>
          </View>
        </View>

        <GoogleMapsView></GoogleMapsView>

        {/*  */}
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_4;
