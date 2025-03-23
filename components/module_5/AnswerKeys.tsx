import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/BarangayQueztions';
import { AssesmentContainer } from 'components/AssesmentContainer';
import banner from '../../assets/module_4/banner.png';
import { Ionicons } from '@expo/vector-icons';
import TableExample from './BalilihanExpAnswer';

// Define your navigation types
type RootStackParamList = {
  BarangayQuizScreen: undefined;
  BarangayResultScreen: { answers: (string | null)[] };
};

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BarangayQuizScreen'>;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const selectAnswer = (index: number, option: string): void => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = (): void => {
    navigation.navigate('BarangayResultScreen', { answers });
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {/* Banner  */}
      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 py-1 font-inknut text-[14px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Answer Keys
        </Text>
      </View>
      <AssesmentContainer>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-center font-inknut text-[14px]"> GUESS THAT BARANGAY!{'\n'}</Text>
          <Text className="font-inknut text-[11px] ">
            1. Cantalid{'\n'}
            2. Cantomimbo{'\n'}
            3. Cogon{'\n'}
            4. Datag{'\n'}
            5. Del Carmen{'\n'}
            6. Baucan{'\n'}
            7. Boctol{'\n'}
            8. Boyog{'\n'}
            9. Cabad{'\n'}
            10. Candasig{'\n'}
            11. Sagasa{'\n'}
            12. Sal-ing{'\n'}
            13. San Isidro{'\n'}
            14. Santo Niño{'\n'}
            15. Tagustusan{'\n'}
            16. Del Rosario{'\n'}
            17. Dorol{'\n'}
            18. Hanopol{'\n'}
            19. Magsija{'\n'}
            20. Maslog
          </Text>

          <TableExample></TableExample>

          <Text className="pt-10 text-center font-inknut text-[14px] uppercase">
            BEGINNING: TOWN AND ITS PEOPLE{'\n'}
          </Text>
          <Text className="font-inknut text-[11px] ">
            • Orig{'\n'}• Dangoy{'\n'}• Racho{'\n'}• Maniwang{'\n'}• Lacea{'\n'}• Pongase{'\n'}
          </Text>

          <Text className="pt-10 text-center font-inknut text-[14px]">GUESS THAT ERA!{'\n'}</Text>
          <Text className="font-inknut text-[11px] ">
            1. Spanish Occupation{'\n'}
            2. American Occupation{'\n'}
            3. Japanese Occupation{'\n'}
            4. Spanish Occupation{'\n'}
            5. Spanish Occupation{'\n'}
            6. Japanese Occupation{'\n'}
            7. American Occupation{'\n'}
            8. Spanish Occupation{'\n'}
            9. Japanese Occupation{'\n'}
            10. American Occupation
          </Text>

          <Text className="pt-10 text-center font-inknut text-[14px] uppercase">
            Uncover Balilihan’s Treasures{'\n'}
          </Text>
          <Text className="font-inknut text-[11px] ">
            1. Kawasan Falls - Natural Heritage{'\n'}
            2. Balilihan Belfry - Built Heritage{'\n'}
            3. Sumad Festival - Intangible Heritage{'\n'}
            4. Hugos - Intangible Heritage{'\n'}
            5. Tagbo - Intangible Heritage{'\n'}
            6. Manlawi Peak - Natural Heritage{'\n'}
            7. Santo Entierro - Movable Heritage
            {'\n'}
            8. Our Lady of Mt. Carmel Parish Church - Built Heritage{'\n'}
            9. Old Municipal Hall - Built Heritage{'\n'}
            10. Kumparsa - Intangible Heritage
          </Text>

          <Text className="pt-10 text-center font-inknut text-[14px] uppercase">
            Take the Quiz{'\n'}
          </Text>
          <Text className="font-inknut text-[11px] ">
            1. Bay sa Iring{'\n'}
            2. Hanopol{'\n'}
            3. Baclayon{'\n'}
            4. Scarcity of water.{'\n'}
            5. It experienced rapid economic growth.{'\n'}
            6. Civil unrest and potential conflict.{'\n'}
            7. Effective leadership and community unity.{'\n'}
            8. September 29, 1828{'\n'}
            9. Local leaders can play a crucial role in shaping political outcomes.{'\n'}
            10. It reflects aspirations for self-governance and local leadership.{'\n'}
            11. Effective; he successfully maintained a measure of safety and provided vital support
            to the resistance.{'\n'}
            12. American{'\n'}
            13. Japanese{'\n'}
            14. American{'\n'}
            15. Spanish{'\n'}
            16. Establishment of a military garrison and forced hiding in the mountains.{'\n'}
            17. It instilled fear and caused many residents to flee.{'\n'}
            18. The destruction of infrastructure and the town's rebuilding efforts.{'\n'}
            19. Their participation indicates that women played a crucial and active role in
            supporting the community during times of crisis.{'\n'}
            20. His approach, while risky, was relatively successful in mitigating harm and
            supporting the resistance.{'\n'}
            21. Balilihan sa Kahangturan{'\n'}
            22. A new beginning and hope for the future{'\n'}
            23. Peace{'\n'}
            24. Improved governance and financial management{'\n'}
            25. A unified community effort driven by collective spirit and resilience.{'\n'}
            26. The town's rich history and its enduring spirit.{'\n'}
            27. The town's connection to the Dagohoy Rebellion.{'\n'}
            28. Interactive exhibits showcasing the town's history.{'\n'}
            29. All of the above.{'\n'}
            30. It reflects the community's pride and harmony in its heritage.{'\n'}
            31. 1835-1846{'\n'}
            32. Earthquake{'\n'}
            33. 1989{'\n'}
            34. Carmel Academy{'\n'}
            35. The community's unwavering faith and resilience in the face of adversity.{'\n'}
            36. The recognition of these sites' historical and cultural value.{'\n'}
            37. The town's historical experience under successive periods of Spanish and American
            colonial rule.{'\n'}
            38. A collaborative and unified effort dedicated to safeguarding cultural heritage.
            {'\n'}
            39. Camugao Falls{'\n'}
            40. The town values tradition and community, supporting local crafts and women's
            economic contributions.
          </Text>
        </ScrollView>
      </AssesmentContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questionContainer: { marginBottom: 40 },
  question: { marginBottom: 10 },
  option: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  selectedOption: { backgroundColor: '#FFF800' },
  optionText: { textAlign: 'center' },
});

export default QuizScreen;
