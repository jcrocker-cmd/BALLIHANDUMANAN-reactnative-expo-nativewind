import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import { useState, useMemo, useCallback } from 'react';
import ImageViewer from 'components/common/ImageViewer';

const Section_3 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      { uri: Image.resolveAssetSource(require('../../assets/module_2/pic_1.png')).uri },
      { uri: Image.resolveAssetSource(require('../../assets/module_2/pic_2.png')).uri },
      { uri: Image.resolveAssetSource(require('../../assets/module_2/pic_3.png')).uri },
    ],
    []
  );
  return (
    <>
      {/* _______________________________Journey to the History________________________________ */}
      <CollapsibleSubTitle name="journey to the History">
        <Text className="py-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          Before we begin, let's clarify what colonization means.  
        </Text>
        <View className="mt-2">
          <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(0)}>
            <Image source={require('../../assets/module_2/pic_1.png')} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(1)}>
            <Image source={require('../../assets/module_2/pic_2.png')} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[130px] w-full overflow-hidden" onPress={handlePress(2)}>
            <Image source={require('../../assets/module_2/pic_3.png')} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          The three periods of colonial influence in the Philippines.
        </Text>

        <Text className="mb-5 pt-2 text-justify font-inknut text-[11px] leading-[24px] max-xs:text-base">
          <Text style={{ color: '#0E8341' }}>Colonization</Text> is the process by which one nation
          or power establishes and maintains political, economic, and social control over another
          territory and its people. This often involves the displacement of indigenous populations,
          the exploitation of resources, and the imposition of new cultural and political systems.
          {'\n'}
          {'\n'}
          Understanding this definition will help us analyze the impact of colonization
          on Balilihan. Let's begin!
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_3;
