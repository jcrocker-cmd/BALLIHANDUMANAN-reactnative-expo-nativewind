import { View, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useState, useMemo, useCallback } from 'react';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';
import ImageViewer from 'components/common/ImageViewer';
import { WebView } from 'react-native-webview';

const Section_5 = () => {
  const [visibleIndex, setVisibleIndex] = useState<number | null>(null);
  const onClose = useCallback(() => setVisibleIndex(null), []);
  const handlePress = useCallback((index: number) => () => setVisibleIndex(index), []);
  const images = useMemo(
    () => [
      require('../../assets/module_2/pic_3.png'),
      require('../../assets/module_3/pic_4.png'),
      require('../../assets/module_3/pic_5.png'),
      require('../../assets/module_3/pic_6.png'),
      require('../../assets/module_3/pic_7.png'),
      require('../../assets/module_3/pic_8.png'),
      require('../../assets/module_3/pic_9.png'),
      require('../../assets/module_3/pic_10.png'),
      require('../../assets/module_3/pic_11.png'),
      require('../../assets/module_3/10.a. Our Lady of Mt. Carmel Parish.jpg'),
      require('../../assets/module_3/10.b. Sto. Nino Parish.jpg'),
      require('../../assets/module_3/pic_14.png'),
      require('../../assets/module_3/pic_15.png'),
      require('../../assets/module_3/12.Rice.jpg'),
      require('../../assets/module_3/12.Corn.jpg'),
      require('../../assets/module_3/12.Livestock.jpg'),
      require('../../assets/module_3/12.Basket Weaving in Balilihan Market.png'),
      require('../../assets/module_3/12.Basket Weaving.jpg'),
      require('../../assets/module_3/13.Kawasan Falls with people.jpg'),
      require('../../assets/module_3/13.Camugao Falls Inspection.jpg'),
      require('../../assets/module_3/13.Manlawi Peak Inspection.jpg'),
      require('../../assets/module_3/14.Construction of Roads.jpg'),
      require('../../assets/module_3/14.New Road.jpg'),
      require('../../assets/module_3/14.New Road b.jpg'),
      require('../../assets/module_3/15. Balilihan as a 3rd Class Municipality.jpg'),
      require('../../assets/module_3/16. DILG.png'),
      require('../../assets/module_3/17.Green Banner Award.jpg'),
      require('../../assets/module_3/17.CROWN Award.jpg'),
      require('../../assets/module_3/17.Outstanding Anti-Drug Drive.jpg'),
    ],
    []
  );
  return (
    <>
      {/* _______________________________BALILIHAN TODAY________________________________ */}
      <CollapsibleSubTitle name="BALILIHAN TODAY">
        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Nearly two centuries after its founding, Balilihan has earned a respected name in Bohol
          andacross the country. This success is largely due to the visionary leadership of its
          spiritual and political guides throughout the years.
        </Text>

        <View style={{ height: 205, width: '100%', marginVertical: 12 }}>
          <WebView
            source={{ uri: 'https://www.youtube.com/embed/zgApN1jv4vs' }}
            allowsFullscreenVideo
            style={{ height: 250, width: '100%' }}
          />
        </View>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Their enduring legacies—evident in the landmarks and traditions they left behind—stand as
          testaments to their tireless efforts, sacrifices, and unwavering dedication to the people
          of Balilihan.{'\n'}
          The town's enduring strength lies in the resilience, perseverance, and faith of its
          people. Their unwavering commitment to God and country, coupled with an openness to
          embracing progress and innovation, has propelled Balilihan forward, constantly striving
          for greater achievements. This continuous improvement spirit defines Balilihan, a
          community forever moving towards a brighter future.
        </Text>
        <View className="mb-4 mt-2">
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(1)}>
            <Image source={images[1]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(2)}>
            <Image source={images[2]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          Then and now: municipal officials and employees in Balilihan.
        </Text>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          According to the Philippine Statistics Authority, the municipality boasts a substantial
          population of 18,694 as of 2020. Improvements in education and healthcare have
          significantly shaped Balilihan's social landscape. Community-based organizations and
          initiatives play a vital role in fostering social development and strengthening community
          bonds.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(3)}>
            <Image source={images[3]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity
            className="mb-2 h-[180px] w-full overflow-hidden"
            onPress={handlePress(4)}>
            <Image source={images[4]} className="h-full w-full" />
          </TouchableOpacity>
          <Text
            className="mb-4 py-1 text-center font-inknut text-[11px]"
            style={{
              color: '#B08923',
              lineHeight: 18, // Tight spacing
            }}>
            Groundbreaking of the BISU Tourism and Sports Institute in Balilihan.
          </Text>

          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(5)}>
            <Image source={images[5]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity
            className="mb-2 h-[180px] w-full overflow-hidden"
            onPress={handlePress(6)}>
            <Image source={images[6]} className="h-full w-full" />
          </TouchableOpacity>
          <Text
            className="mb-4 py-1 text-center font-inknut text-[11px]"
            style={{
              color: '#B08923',
              lineHeight: 18, // Tight spacing
            }}>
            The award-winning Balilihan Congressional District Library - one of only three
            congressional district libraries in the Philippines.
          </Text>
          <TouchableOpacity
            className="mb-2 h-[180px] w-full overflow-hidden"
            onPress={handlePress(7)}>
            <Image source={images[7]} className="h-full w-full" />
          </TouchableOpacity>
          <Text
            className="mb-4 py-1 text-center font-inknut text-[11px]"
            style={{
              color: '#B08923',
              lineHeight: 18, // Tight spacing
            }}>
            The newly-constructed Balilihan Municipal Health Building.
          </Text>
        </View>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan's vibrant cultural life is reflected in its annual celebrations. The Sumad
          Festival, held every September 29th, commemorates the town's founding.
        </Text>

        <TouchableOpacity
          className="mb-4 mt-4 h-[170px] w-full overflow-hidden"
          onPress={handlePress(8)}>
          <Image source={images[8]} className="h-full w-full" />
        </TouchableOpacity>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Religious festivities include the fiesta honoring Our Lady of Mount Carmel on July 16th
          and the celebration in honor of the Santo Niño at the Hanopol barrio on January 16th.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(9)}>
            <Image source={images[9]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(10)}>
            <Image source={images[10]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          These events unite the community, fostering a strong sense of shared identity and cultural
          pride, with the nightly activities adding a special dimension to the celebrations.{'\n'}
          Furthermore, Balilihan's rich heritage is preserved and celebrated through several sites
          recognized as Important Cultural Properties by the National Museum of the Philippines.
          These designations highlight the historical and cultural significance of these municipal
          heritages. These designations not only preserve the past but also contribute to the
          ongoing development of Balilihan's cultural tourism potential.
        </Text>

        <View className="mb-4 mt-3">
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(11)}>
            <Image source={images[11]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-full overflow-hidden" onPress={handlePress(12)}>
            <Image source={images[12]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          The National Museum of the Philippines has recognized the Our Lady of Mt. Carmel Parish
          Church and the Old Municipal Hall as Important Cultural Properties.
        </Text>

        <Text className="text-balance py-2 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan's economy is built on a foundation of agriculture, with rice, corn, and
          livestock farming, and basket weaving forming its core. However, recognizing the potential
          for growth beyond agriculture, the municipality is actively developing its tourism sector.
        </Text>

        <View className="mb-4 mt-3">
          <TouchableOpacity className="h-[150px] w-full overflow-hidden" onPress={handlePress(13)}>
            <Image source={images[13]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="flex flex-row">
            <TouchableOpacity className="h-[140px] w-1/2 overflow-hidden" onPress={handlePress(14)}>
              <Image source={images[14]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity className="h-[140px] w-1/2 overflow-hidden" onPress={handlePress(15)}>
              <Image source={images[15]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          Agriculture in Balilihan
        </Text>

        <View className="mb-4 mt-2 flex flex-row">
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(16)}>
            <Image source={images[16]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[230px] w-1/2 overflow-hidden" onPress={handlePress(17)}>
            <Image source={images[17]} className="h-full w-full" />
          </TouchableOpacity>
        </View>
        <Text
          className="mb-3 py-1 text-center font-inknut text-[11px]"
          style={{
            color: '#B08923',
            lineHeight: 18, // Tight spacing
          }}>
          Basket weaving in Balilihan.
        </Text>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          In the <Text style={{ color: '#0E8341' }}>tourism sector</Text>, this involves showcasing
          Balilihan's natural attractions, such as its picturesque waterfalls and other scenic
          locations, and the restoration of historically significant sites to create appealing
          destinations for visitors.
        </Text>

        <View className="mb-5 mt-2 flex flex-row">
          <TouchableOpacity className="h-[240px] w-1/2 overflow-hidden" onPress={handlePress(18)}>
            <Image source={images[18]} className="h-full w-full" />
          </TouchableOpacity>
          <View className="w-1/2">
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(19)}>
              <Image source={images[19]} className="h-full w-full" />
            </TouchableOpacity>
            <TouchableOpacity
              className="h-[120px] w-full overflow-hidden"
              onPress={handlePress(20)}>
              <Image source={images[20]} className="h-full w-full" />
            </TouchableOpacity>
          </View>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          A key component of this strategy is{' '}
          <Text style={{ color: '#0E8341' }}>infrastructure development</Text>. Significant
          investments are being made in the construction and maintenance of roads and bridges. This
          collaborative effort, funded by local, provincial, and national government agencies, aims
          to improve transportation throughout the municipality, making it more accessible for both
          residents and tourists.
        </Text>

        <View className="-mt-2 mb-5">
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(21)}>
            <Image source={images[21]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(22)}>
            <Image source={images[22]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[180px] w-full overflow-hidden" onPress={handlePress(23)}>
            <Image source={images[23]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Through the years, Balilihan's political landscape reflects a history of consistent
          progress and achievement. Recently, the municipality has earned numerous awards at the
          provincial, regional, and national levels, culminating in its recent reclassification from
          a 4th class to a 3rd class municipality in 2024. This advancement is a testament to
          effective governance and financial management.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[240px] w-full overflow-hidden" onPress={handlePress(24)}>
            <Image source={images[24]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          Balilihan consistently meets the Department of the Interior and Local Government's (DILG)
          Good Financial Housekeeping Standards, demonstrating adherence to rigorous accounting,
          auditing, and transparency practices, including full disclosure of its budget and
          finances.
        </Text>

        <View className="mb-5 mt-2">
          <TouchableOpacity className="h-[200px] w-full overflow-hidden" onPress={handlePress(25)}>
            <Image source={images[25]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
          A key driver of Balilihan's success is its flagship Countryside Action Program (CAP). In
          2024, CAP's impact was recognized with the prestigious Consistent Regional Outstanding
          Winner in Nutrition (CROWN) Award, highlighting its exceptional performance in 2023. This
          holistic approach to social development, focusing on health, nutrition, and sanitation,
          has previously earned Balilihan multiple Green Banner awards.{'\n'}
          (Photo of Plaque Green Banner award, CROWN Award, and Outstanding Anti-Drug Drive) Beyond
          its achievements in health and nutrition, Balilihan has also garnered significant
          recognition for its commitment to peace and order. In 2019, it received a national award
          for Outstanding Anti-Drug Drive from the DILG, and in 2024, it was honored with the
          BansiwagGovernance Award for its Anti-Drug Abuse Council and Peace and Order Council.
        </Text>

        <View className="mb-5 mt-2 flex w-full flex-row">
          <TouchableOpacity className="h-[250px] w-1/3 overflow-hidden" onPress={handlePress(26)}>
            <Image source={images[26]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/3 overflow-hidden" onPress={handlePress(27)}>
            <Image source={images[27]} className="h-full w-full" />
          </TouchableOpacity>
          <TouchableOpacity className="h-[250px] w-1/3 overflow-hidden" onPress={handlePress(28)}>
            <Image source={images[28]} className="h-full w-full" />
          </TouchableOpacity>
        </View>

        <Text className="text-balance pb-5 pt-2 text-justify font-inknut text-[12px] leading-[24px]">
          These accolades demonstrate Balilihan's dedication to effective governance, community
          well-being, and public safety.
        </Text>
      </CollapsibleSubTitle>
      {/* _______________________________Fullscreen Image Viewer________________________________ */}
      <ImageViewer images={images} visibleIndex={visibleIndex} onClose={onClose} />
    </>
  );
};

export default Section_5;
