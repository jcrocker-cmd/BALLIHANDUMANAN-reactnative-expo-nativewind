import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_5 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);

  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_2/pic_11.png'),
      require('../../assets/module_2/pic_12.png'),
      require('../../assets/module_2/pic_13.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN DURING AMERICAN OCCUPATION!________________________________ */}
      <CollapsibleSubTitle name={'BALILIHAN DURING AMERICAN\nOCCUPATION'}>
        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          The brutality of the Spanish colonial period in Balilihan, sadly, wasn't unique. The early
          American occupation proved equally harsh.{'\n'}
          On November 12, 1899, during the Philippine-American War, Balilihan eagerly awaited the
          arrival of American soldiers from Antequera. Town officials, prominent citizens, and even
          the town band assembled to welcome the "new conquerors."
        </Text>

        <TouchableOpacity
          className="mt-4 h-[230px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          The arrival of American troops in Balilihan.
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          However, this welcoming reception was short-lived. Upon arrival, the American troops
          immediately rounded up everyone —<Text style={{ color: '#0E8341' }}>Capitan Antonio</Text>{' '}
          Racho, municipal secretary
          <Text style={{ color: '#0E8341' }}> Manuel Diamante</Text>, council members, and even the
          musicians — and subjected them to harsh interrogation.{'\n'}
          With chilling efficiency, the Americans announced their intention to burn Balilihan to the
          ground. Despite a desperate plea from
          <Text style={{ color: '#0E8341' }}> Segundo Racho</Text>, the teenage son of Tan Tonio,
          who spoke on behalf of the welcoming party, the American officer remained unmoved, stating
          that the order to burn the town had already been given.
        </Text>
        <TouchableOpacity
          className="mt-4 h-[180px] w-full overflow-hidden"
          onPress={handlePress(1)}>
          <Image source={images[1]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="mb-3 text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
          The burning of the town by the American troops.
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[11px] leading-[24px]">
          The flames quickly immersed Balilihan, including the church, municipal building, schools,
          and private houses, leaving behind a scene of destruction. The only structure that was
          spared was the Spanish belfry.{'\n'}
          Years passed, for the first time, the people selected their own leaders through an
          election, with<Text style={{ color: '#0E8341' }}> Manuel Diamante</Text> elected as
          Municipal President. Under his leadership, and that of the other newly elected officials,
          the town began to transform.
        </Text>

        <View className="mb-1 mt-4 flex w-full flex-row items-start">
          {/* Image with Caption */}
          <View className="w-[40%]">
            <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(2)}>
              <Image source={images[2]} className="h-full w-full" />
            </TouchableOpacity>
            <Text className=" text-center font-inknut text-[11px]" style={{ color: '#B08923' }}>
              Manuel Diamante
            </Text>
          </View>

          {/* Justified Text */}
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[11px] leading-[20px]">
            Streets were built, peace and order were restored, and the population of the town center
            (población) grew significantly, as new homes were constructed. This era marked a turning
            point, a time when the community began to heal and rebuild, laying the foundation for a
            brighter future.
          </Text>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_5;
