import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';
import { NormalContainer } from '../../components/NormalContainer';
import { useState } from 'react';
import React from 'react';
import Title from 'components/Title';
import CollapsibleSubTitle from 'components/CollapsibleSubTitle';

import pic_1 from '../../assets/module_2/pic_1.png';
import pic_2 from '../../assets/module_2/pic_2.png';
import pic_3 from '../../assets/module_2/pic_3.png';
import pic_4 from '../../assets/module_2/2. Sample Spanish Garrison in the Philippines.jpg';
import pic_5 from '../../assets/module_2/3. Bay sa Iring in Datag.png';
import pic_6 from '../../assets/module_2/pic_6.png';
import pic_7 from '../../assets/module_2/pic_7.png';
import pic_8 from '../../assets/module_2/pic_8.png';
import pic_9 from '../../assets/module_2/5. Spanish Belfry.jpg';
import pic_10 from '../../assets/module_2/6. A punishment being drawn behind a horse.jpg';
import pic_11 from '../../assets/module_2/pic_11.png';
import pic_12 from '../../assets/module_2/pic_12.png';
import pic_13 from '../../assets/module_2/pic_13.png';
import pic_14 from '../../assets/module_2/pic_14.png';
import pic_15 from '../../assets/module_2/pic_15.png';
import banner from '../../assets/module_2/banner.png';
import ImageViewing from 'react-native-image-viewing';

const Module_1 = () => {
  const [visibleIndex, setVisibleIndex] = useState(null); // Track which image is open

  const images = [
    { uri: Image.resolveAssetSource(pic_1).uri },
    { uri: Image.resolveAssetSource(pic_2).uri },
    { uri: Image.resolveAssetSource(pic_3).uri },
    { uri: Image.resolveAssetSource(pic_4).uri },
    { uri: Image.resolveAssetSource(pic_5).uri },
    { uri: Image.resolveAssetSource(pic_6).uri },
    { uri: Image.resolveAssetSource(pic_7).uri },
    { uri: Image.resolveAssetSource(pic_8).uri },
    { uri: Image.resolveAssetSource(pic_9).uri },
    { uri: Image.resolveAssetSource(pic_10).uri },
    { uri: Image.resolveAssetSource(pic_11).uri },
    { uri: Image.resolveAssetSource(pic_12).uri },
    { uri: Image.resolveAssetSource(pic_13).uri },
    { uri: Image.resolveAssetSource(pic_14).uri },
    { uri: Image.resolveAssetSource(pic_15).uri },
  ];

  // console.log(player);

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar barStyle="light-content" backgroundColor="#1e1e1e" />
        <ScrollView showsVerticalScrollIndicator={false}>
          <View className="mb-4 h-[150px] w-full overflow-hidden">
            <Image source={banner} className="h-full w-full" />
          </View>
          <NormalContainer>
            <Title>Balilihan’s Journey: Three{'\n'}Periods of Colonial Influence</Title>

            {/* _______________________________What I need to know?________________________________ */}
            <CollapsibleSubTitle name="What I need to know?">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                This chapter delves into the historical experiences of Balilihan that reflects the
                broader patterns of colonization that have profoundly shaped the Philippines into
                what it is today. We will examine the significant events that
                shaped Balilihan during the Spanish, American, and Japanese occupations,
                and analyze their impact on the lives and livelihoods of its people.{'\n'}
                {'\n'}
                Through this study, you will develop an understanding of the challenges and
                hardships faced by the Balilihan community during these periods to foster empathy
                for their experiences and perspectives.{'\n'}
                {'\n'}
                Ultimately, this also aims to cultivate a deep appreciation for the remarkable
                resilience and perseverance demonstrated by the people of Balilihan in the face of
                foreign domination, highlighting their enduring strength and spirit.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Let's Do This!________________________________ */}
            <CollapsibleSubTitle name="let’s do this!">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px]">
                Before we dive into the history of Balilihan and the colonizers, let's have some
                fun! Get ready for "<Text style={{ color: '#0E8341' }}>Guess that Era!</Text>" 
                • Head over to the Quiz/Activity section of the app to participate.{'\n'}
                {'\n'}  • After you've completed the activity, take a moment to reflect on these
                guide questions:{'\n'}
                {'\n'}1. What did you learn about the activity?{'\n'}
                2. Can you describe one event from the activity that surprised you, and explain why?
                {'\n'}
                3. Which colonial power do you think had the most lasting impact on Balilihan based
                on the events described? Which period in the colonization of the Philippines has the
                most significant contribution or impact on the town of Balilihan?{'\n'}
                {'\n'}  Great job reflecting and completing the "Guess That Era!" activity.  Now
                that we've warmed up our historical thinking skills, let's explore into the
                significant events that shaped Balilihan during the period of colonial occupation.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________Journey to the History________________________________ */}
            <CollapsibleSubTitle name="journey to the History">
              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Before we begin, let's clarify what colonization means.  
              </Text>
              <View className="mb-5 mt-2">
                <TouchableOpacity
                  className="h-[130px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(0)}>
                  <Image source={pic_1} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[130px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(1)}>
                  <Image source={pic_2} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[130px] w-full overflow-hidden"
                  onPress={() => setVisibleIndex(2)}>
                  <Image source={pic_3} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                <Text style={{ color: '#0E8341' }}>Colonization</Text> is the process by which one
                nation or power establishes and maintains political, economic, and social control
                over another territory and its people. This often involves the displacement of
                indigenous populations, the exploitation of resources, and the imposition of new
                cultural and political systems.{'\n'}
                {'\n'}
                Understanding this definition will help us analyze the impact of colonization
                on Balilihan. Let's begin!
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN DURING SPANISH OCCUPATION________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN DURING SPANISH OCCUPATION">
              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(3)}>
                <Image source={pic_4} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                In 1828, as the Bohol Rebellion under Dagohoy was nearing its end, the settlement
                of Balilihanwas established to accommodate the growing number
                of Dagohoy insurrectos (rebels) defecting to the Spaniards. They established a
                military garrison in <Text style={{ color: '#0E8341' }}>Datag</Text> to discourage
                further rebel support. When the Dagohoy Revolt finally ended in 1829, both town and
                parish were established to accommodate 2,100 former Dagohoy rebels.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[240px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(4)}>
                <Image source={pic_5} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Near this garrison, in a place called{' '}
                <Text style={{ color: '#0E8341' }}>"Bay sa Iring"</Text> (House of Cats), about two
                kilometers from the Spanish garrison, a Spanish friar, 
                <Text style={{ color: '#0E8341' }}>Fray Tomas</Text>, convened a meeting of the
                villagers. He urged them to embrace peace and work together for the common good.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(5)}>
                <Image source={pic_6} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="py-2 text-justify font-inknut text-[12px] leading-[24px] max-xs:text-base">
                Gaining their unanimous support, Fray Tomas appointed 
                <Text style={{ color: '#0E8341' }}>Serafino Pongase</Text> as the
                first gobernadorcillo (municipal mayor), marking September 29, 1828, as the official
                founding date of Balilihan. Tragically, Pongase's term was cut short when he was
                killed in a dispute.{'\n'}
                The initial municipal center in "Bay sa Iring" proved unsuitable due to water
                scarcity, leading to its relocation to the present site (población) which is amply
                supplied with water by various springs such as Tan Pero, Ka Dadoy, Boho,
                Ka Boro, Bulingit, Bocboc, Komon, and Abaca.
              </Text>

              <View className="mb-5 mt-2 flex flex-row">
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(6)}>
                  <Image source={pic_7} className="h-full w-full" />
                </TouchableOpacity>
                <TouchableOpacity
                  className="h-[230px] w-1/2 overflow-hidden"
                  onPress={() => setVisibleIndex(7)}>
                  <Image source={pic_8} className="h-full w-full" />
                </TouchableOpacity>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                High atop a hill stands Balilihan's lone surviving testament to its Spanish past,
                the Spanishbelfry. Built in 1835 by 
                <Text style={{ color: '#0E8341' }}>Recollect Father Antonio Cortes</Text>
                 and inaugurated in 1844, this remarkable structure is a testament to the dedication
                and effort involved in its construction.
              </Text>

              <View className="mb-1 mt-4 flex w-full flex-row items-start">
                <TouchableOpacity
                  className="h-[200px] w-[50%] overflow-hidden"
                  onPress={() => setVisibleIndex(8)}>
                  <Image source={pic_9} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  The tower itself is a blend of adobe and coral stones, each piece carried on foot
                  from the distant rock deposits of the mother town Baclayon, a testament to the
                  physical labor that went into creating this enduring landmark.
                </Text>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                However, in 1888, this move didn't satisfy 
                <Text style={{ color: '#0E8341' }}>Fray Benito Grayoa</Text>, the succeeding friar,
                who desired to transfer the seat of the pueblo in 
                <Text style={{ color: '#0E8341' }}>Cabad</Text>, a barrio four kilometers west
                of poblacion. <Text style={{ color: '#0E8341' }}>Capitan Bartolome Racho</Text>, the
                current gobernadorcillo, fiercely resisted this relocation.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(9)}>
                <Image source={pic_10} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Fray Grayoa's response was brutal where he imprisoned and then cruelly punished Tan
                Tome, dragging him through the streets behind his horse. This act of violence
                instilled fear, causing many residents to flee Balilihan to other provinces like
                Leyte, Surigao, and Misamis.{'\n'}
                It could be possible that among the towns in Bohol, Balilihan suffered bloody birth
                pains. First, the killing of its first  
                <Text style={{ color: '#0E8341' }}>gobernadorcillo</Text>; second, the act of a
                Spanish priest to suppress, through terror and violence and the death of a  
                <Text style={{ color: '#0E8341' }}>gobernadorcillo</Text> who just wanted to express
                the sentiment of his people.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-4 mt-4 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN DURING AMERICAN OCCUPATION!________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN DURING AMERICAN OCCUPATION">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The brutality of the Spanish colonial period in Balilihan, sadly, wasn't unique. The
                early American occupation proved equally harsh.{'\n'}
                On November 12, 1899, during the Philippine-American War, Balilihan eagerly awaited
                the arrival of American soldiers from Antequera. Town officials, prominent citizens,
                and even the town band assembled to welcome the "new conquerors."
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[230px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(10)}>
                <Image source={pic_11} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                However, this welcoming reception was short-lived. Upon arrival, the American troops
                immediately rounded up everyone — 
                <Text style={{ color: '#0E8341' }}>Capitan Antonio</Text> Racho, municipal
                secretary <Text style={{ color: '#0E8341' }}>Manuel Diamante</Text>, council
                members, and even the musicians — and subjected them to harsh interrogation.{'\n'}
                With chilling efficiency, the Americans announced their intention to
                burn Balilihan to the ground. Despite a desperate plea from 
                <Text style={{ color: '#0E8341' }}>Segundo Racho</Text>, the teenage son of
                Tan Tonio, who spoke on behalf of the welcoming party, the American officer remained
                unmoved, stating that the order to burn the town had already been given.
              </Text>
              <TouchableOpacity
                className="mb-4 mt-4 h-[180px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(11)}>
                <Image source={pic_12} className="h-full w-full" />
              </TouchableOpacity>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The flames quickly immersed Balilihan, including the church, municipal building,
                schools, and private houses, leaving behind a scene of destruction. The only
                structure that was spared was the Spanish belfry.{'\n'}
                Years passed, for the first time, the people selected their own leaders through an
                election, with <Text style={{ color: '#0E8341' }}>Manuel Diamante</Text> elected as
                Municipal President. Under his leadership, and that of the other newly elected
                officials, the town began to transform.
              </Text>

              <View className="mb-1 mt-4 flex w-full flex-row items-start">
                <TouchableOpacity
                  className="h-[200px] w-[40%] overflow-hidden"
                  onPress={() => setVisibleIndex(12)}>
                  <Image source={pic_13} className="h-full w-full" />
                </TouchableOpacity>
                <Text className="flex-1 py-1 pl-3 text-justify font-inknut text-[12px] leading-[20px]">
                  Streets were built, peace and order were restored, and the population of the town
                  center (población) grew significantly, as new homes were constructed. This era
                  marked a turning point, a time when the community began to heal and rebuild,
                  laying the foundation for a brighter future.
                </Text>
              </View>

              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                From what has been said, Balilihan was not born in a bed of roses but out of a
                cradle of thorns and bruises. <Text style={{ color: '#0E8341' }}>World War II</Text>
                 brought a new wave of hardship to Balilihan. The Japanese established a garrison in
                the town, forcing residents into hiding in the mountains for safety.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________BALILIHAN DURING JAPANESE OCCUPATION________________________________ */}
            <CollapsibleSubTitle name="BALILIHAN DURING JAPANESE OCCUPATION">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                From what has been said, Balilihan was not born in a bed of roses but out of a
                cradle of thorns and bruises. <Text style={{ color: '#0E8341' }}>World War II</Text>
                 brought a new wave of hardship to Balilihan. The Japanese established a garrison in
                the town, forcing residents into hiding in the mountains for safety.
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(13)}>
                <Image source={pic_14} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan became a refuge for displaced people from other areas, all enduring a life
                of hardship and deprivation. Innocent civilians were often captured, tortured, and
                killed by the Japanese on mere suspicion of supporting the guerilla resistance.
                {'\n'}
                The situation improved somewhat under the wartime mayor, the popular 
                <Text style={{ color: '#0E8341' }}>Tan Idzong</Text> (Patricio Ibarra), who
                skillfully navigated the precarious balance between cooperating with the Japanese
                occupiers and supporting the guerilla movement. A concentration camp holding around
                240 suspected collaborators was established in the barrio of 
                <Text style={{ color: '#0E8341' }}>Hanopol.</Text>
                {'\n'}
                However, the presence of the Bolo Battalion, under the command of
                Captains Balbino Chatto and Angel Racho, helped to mitigate the fear and brutality.
                The Women's Auxiliary Service (WAS), led by Captains Lutgarda Diez, Teofila
                A. Racho, and Hermogena Diez, bravely took on the responsibility of feeding the
                camp's inmates.{'\n'}
              </Text>

              <TouchableOpacity
                className="mb-4 mt-4 h-[220px] w-full overflow-hidden"
                onPress={() => setVisibleIndex(14)}>
                <Image source={pic_15} className="h-full w-full" />
              </TouchableOpacity>
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Balilihan also played a significant role in the resistance movement, with Captain
                Lino I. Chatto and others actively participating. The Balilihan Bohol Regiment
                further contributed by supplying food—rice, corn, grits, chickens, and other
                provisions—to soldiers stationed at the Tagbilaran firing range, making Balilihan a
                crucial supply base during the war.
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________LET’S REFLECT!________________________________ */}
            <CollapsibleSubTitle name="LET’S REFLECT!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Reflect on Balilihan’s experiences during the Spanish, American, and Japanese
                colonial periods. Consider the lasting impacts of each period and how they shaped
                the town’s identity and development. Here are the guide questions:{'\n'}
                1.​How did the nature of colonial rule differ across the Spanish, American, and
                Japanese periods in Balilihan? What were the unique challenges and opportunities
                presented by each colonial power?{'\n'}
                2.​What are some of the enduring legacies of each colonial period
                in Balilihan today?{'\n'}
                3.​How did the people of Balilihan demonstrate resilience and adaptability in the
                face of successive colonial regimes?{'\n'}
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________TIME TO SHINE!________________________________ */}
            <CollapsibleSubTitle name="TIME TO SHINE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                Now, it's time to step into the shoes of the Balilinhons!  Let's bring their stories
                to life through role-play. This activity will allow for a deeper exploration of the
                historical events, prominent figures, and daily lives of the Balilinhons, fostering
                empathy and critical analysis of this significant period. Try it!
              </Text>
            </CollapsibleSubTitle>
            <View className="mb-2 mt-2 h-[1px] w-full bg-[#0E8341]" />

            {/* _______________________________EXPLORE MORE!________________________________ */}
            <CollapsibleSubTitle name="EXPLORE MORE!">
              <Text className="text-balance py-1 text-justify font-inknut text-[12px] leading-[24px]">
                The next chapter in this app takes you beyond the colonial era, focusing
                on Balilihan's journey through the postwar period and its ongoing evolution.  You'll
                discover how the town rebuilt and adapted after the war, exploring its social,
                economic, and cultural development.  Get ready to witness the resilience and
                progress of Balilihan in the years that followed. Proceed to the next chapter
                (Balilihan in the Postwar Era and Beyond)!
              </Text>
            </CollapsibleSubTitle>

            {/* _______________________________Fullscreen Image Viewer________________________________ */}
            <Modal visible={visibleIndex !== null} transparent={true}>
              <ImageViewing
                images={images}
                imageIndex={visibleIndex ?? 0}
                visible={visibleIndex !== null}
                onRequestClose={() => setVisibleIndex(null)}
              />
            </Modal>
          </NormalContainer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Module_1;
