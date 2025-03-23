import { TouchableOpacity, Text, Image, View } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { useState, useCallback, useMemo } from 'react';
import ImageViewer from 'components/common/ImageViewer';

const Section_6 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(() => [require('../../assets/module_1/9. Timeline.png')], []);
  return (
    <>
      {/* _______________________________Time to Shine!________________________________ */}
      <CollapsibleSubTitle name="TIME TO SHINE!">
        <View style={{ flex: 1 }}>
          <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
            Create a timeline showcasing the key events in the origin of Balilihan, including its
            creation, territorial changes, and annexations. Review the information you’ve learned
            from the discussions. Organize your timeline using the format provided below.
          </Text>
        </View>

        <TouchableOpacity
          className="mb-4 mt-4 h-[320px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_6;
