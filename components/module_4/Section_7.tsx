import { Text, TouchableOpacity, Image, View } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';

const Section_7 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_4/4. Kawasan Falls/1.a Kawasan Falls.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/1.b Kawasan Falls.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/2.a Kawasan Falls.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/2.b Kawasan Falls.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/3.a Kawasan Falls Complex.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/3.b Ongoing rehabilitation of the Balilihan Kawasan Falls Tourist complex.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/3.c Cottages.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/3.d Abatan River (known as Bantayan River by locals).jpg'),
      require('../../assets/module_4/4. Kawasan Falls/4.a Swimming at the base of the falls.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/4.b Fun Paddle Activity at the Bantayan River.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/5.a Kawasan Falls before the 2013 earthquake.jpg'),
      require('../../assets/module_4/4. Kawasan Falls/5.b Kawasan Falls before the 2013 earthquake.png'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________KAWASAN FALLS________________________________ */}
      <CollapsibleSubTitle name="KAWASAN FALLS">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Kawasan Falls is a renowned tourist destination waterfall in Bohol. Kawasan, meaning "to
          embark" in Visayan, derives its name from its historical role as a bustling barter center.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[40%] overflow-hidden" onPress={handlePress(0)}>
            <Image source={images[0]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[60%] overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Located about a kilometer upstream from the Bantayan docking area along
          the Abatan River(known as Bantayan River by the locals), and bordering the barangays
          of Cabad, Candasig, and Dorol (though administered by Cabad), Kawasan Falls is
          approximately four kilometers from Balilihan's municipal hall.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(3)}>
            <Image source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          From the Kawasan Tourism Complex, visitors descend a cemented stairway to the falls,
          enjoying breathtaking river views and cottages. The falls feature a 25-meter cascade into
          a natural pool, surrounded by lush tropical vegetation and rugged cliffs.
        </Text>

        <View className="mt-3 flex flex-row">
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <View className="mb-5 flex flex-row">
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(6)}>
            <Image source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[200px] w-[50%] overflow-hidden" onPress={handlePress(7)}>
            <Image source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          It is easily accessible by any type of vehicle, thanks to a newly constructed concrete
          road. Visitors can enjoy swimming in the pool at the base of the falls, do a fun
          paddle activity at the Bantayan River, and appreciate the tranquil atmosphere and clean
          air. Kawasan Falls was the endpoint of a former Abatan River cruise project.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(8)}>
            <Image source={images[8]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[280px] w-[50%] overflow-hidden" onPress={handlePress(9)}>
            <Image source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          It is important to note that the 7.2 magnitude earthquake that struck Bohol in 2013
          significantly altered the falls' original structure, damaging a previously existing cave
          system.
        </Text>

        <View className="mb-5 mt-3 flex flex-row">
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(10)}>
            <Image source={images[10]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-[50%] overflow-hidden" onPress={handlePress(11)}>
            <Image source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_7;
