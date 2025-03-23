import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_6 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_2/pic_14.png'),
      require('../../assets/module_2/pic_15.png'),
      require('../../assets/module_2/9. Women_s Auxiliary Service.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN DURING JAPANESE OCCUPATION________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN DURING JAPANESE OCCUPATION">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          From what has been said, Balilihan was not born in a bed of roses but out of a cradle of
          thorns and bruises. <Text style={{ color: '#0E8341' }}>World War II </Text>
          brought a new wave of hardship to Balilihan. The Japanese established a garrison in the
          town, forcing residents into hiding in the mountains for safety.
        </Text>

        <TouchableOpacity
          className="mt-4 h-[220px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          Forces of the invading Japanese Imperial Army in Bohol.
        </Text>
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan became a refuge for displaced people from other areas, all enduring a life of
          hardship and deprivation. Innocent civilians were often captured, tortured, and killed by
          the Japanese on mere suspicion of supporting the guerilla resistance.
          {'\n'}
          The situation improved somewhat under the wartime mayor, the popular
          <Text style={{ color: '#0E8341' }}> Tan Idzong</Text> (Patricio Ibarra), who skillfully
          navigated the precarious balance between cooperating with the Japanese occupiers and
          supporting the guerilla movement. A concentration camp holding around 240 suspected
          collaborators was established in the barrio of
          <Text style={{ color: '#0E8341' }}> Hanopol.</Text>
          {'\n'}
          However, the presence of the Bolo Battalion, under the command of Captains Balbino Chatto
          and Angel Racho, helped to mitigate the fear and brutality. The Women's Auxiliary Service
          (WAS), led by Captains Lutgarda Diez, Teofila A. Racho, and Hermogena Diez, bravely took
          on the responsibility of feeding the camp's inmates.{'\n'}
        </Text>

        <View className="flex w-full flex-row">
          <TouchableOpacity
            className="mt-4 h-[220px] w-1/2 overflow-hidden"
            onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-4 h-[220px] w-1/2 overflow-hidden"
            onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="-mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          The Bolo Battalion (left) and
        </Text>
        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          the Women’s Auxiliary Service (right).
        </Text>

        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan also played a significant role in the resistance movement, with Captain Lino I.
          Chatto and others actively participating. The Balilihan Bohol Regiment further contributed
          by supplying food—rice, corn, grits, chickens, and other provisions—to soldiers stationed
          at the Tagbilaran firing range, making Balilihan a crucial supply base during the war.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_6;
