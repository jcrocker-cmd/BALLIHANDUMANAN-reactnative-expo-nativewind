import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_4 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_2/2. Sample Spanish Garrison in the Philippines.jpg'),
      require('../../assets/module_2/3. Bay sa Iring in Datag.png'),
      require('../../assets/module_2/pic_6.png'),
      require('../../assets/module_2/pic_7.png'),
      require('../../assets/module_2/pic_8.png'),
      require('../../assets/module_2/5. Spanish Belfry.jpg'),
      require('../../assets/module_2/6. A punishment being drawn behind a horse.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN DURING SPANISH OCCUPATION________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN DURING SPANISH OCCUPATION">
        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(0)}>
          <Image source={images[0]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          In 1828, as the Bohol Rebellion under Dagohoy was nearing its end, the settlement
          of Balilihanwas established to accommodate the growing number
          of Dagohoy insurrectos (rebels) defecting to the Spaniards. They established a military
          garrison in <Text style={{ color: '#0E8341' }}>Datag</Text> to discourage further rebel
          support. When the Dagohoy Revolt finally ended in 1829, both town and parish were
          established to accommodate 2,100 former Dagohoy rebels.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
          onPress={handlePress(1)}>
          <Image source={images[1]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          Near this garrison, in a place called{' '}
          <Text style={{ color: '#0E8341' }}>"Bay sa Iring"</Text> (House of Cats), about two
          kilometers from the Spanish garrison, a Spanish friar, 
          <Text style={{ color: '#0E8341' }}>Fray Tomas</Text>, convened a meeting of the villagers.
          He urged them to embrace peace and work together for the common good.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
          onPress={handlePress(2)}>
          <Image source={images[2]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
          Gaining their unanimous support, Fray Tomas appointed 
          <Text style={{ color: '#0E8341' }}>Serafino Pongase</Text> as the
          first gobernadorcillo (municipal mayor), marking September 29, 1828, as the official
          founding date of Balilihan. Tragically, Pongase's term was cut short when he was killed in
          a dispute.{'\n'}
          The initial municipal center in "Bay sa Iring" proved unsuitable due to water scarcity,
          leading to its relocation to the present site (población) which is amply supplied with
          water by various springs such as Tan Pero, Ka Dadoy, Boho,
          Ka Boro, Bulingit, Bocboc, Komon, and Abaca.
        </Text>

        <View className="mb-5 mt-2 flex flex-row">
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(3)}>
            <Image source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          High atop a hill stands Balilihan's lone surviving testament to its Spanish past, the
          Spanishbelfry. Built in 1835 by 
          <Text style={{ color: '#0E8341' }}>Recollect Father Antonio Cortes</Text>
           and inaugurated in 1844, this remarkable structure is a testament to the dedication and
          effort involved in its construction.
        </Text>

        <View className="mb-1 mt-4 flex w-full flex-row items-start">
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
          <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
            The tower itself is a blend of adobe and coral stones, each piece carried on foot from
            the distant rock deposits of the mother town Baclayon, a testament to the physical labor
            that went into creating this enduring landmark.
          </Text>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          However, in 1888, this move didn't satisfy 
          <Text style={{ color: '#0E8341' }}>Fray Benito Grayoa</Text>, the succeeding friar, who
          desired to transfer the seat of the pueblo in 
          <Text style={{ color: '#0E8341' }}>Cabad</Text>, a barrio four kilometers west
          of poblacion. <Text style={{ color: '#0E8341' }}>Capitan Bartolome Racho</Text>, the
          current gobernadorcillo, fiercely resisted this relocation.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
          onPress={handlePress(6)}>
          <Image source={images[6]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Fray Grayoa's response was brutal where he imprisoned and then cruelly punished Tan
          Tome, dragging him through the streets behind his horse. This act of violence instilled
          fear, causing many residents to flee Balilihan to other provinces like Leyte, Surigao, and
          Misamis.{'\n'}
          It could be possible that among the towns in Bohol, Balilihan suffered bloody birth pains.
          First, the killing of its first  
          <Text style={{ color: '#0E8341' }}>gobernadorcillo</Text>; second, the act of a Spanish
          priest to suppress, through terror and violence and the death of a  
          <Text style={{ color: '#0E8341' }}>gobernadorcillo</Text> who just wanted to express the
          sentiment of his people.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_4;
