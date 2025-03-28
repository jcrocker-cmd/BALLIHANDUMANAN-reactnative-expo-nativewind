import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/EraQueztions';
import { Container } from 'components/Container';
import banner from '../../assets/module_4/banner.png';
import { useMemo } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

// Define your navigation types
type RootStackParamList = {
  GuessEraQuizScreen: undefined;
  GuessEraResultScreen: { answers: (string | null)[] };
};

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'GuessEraQuizScreen'>;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const selectAnswer = (index: number, option: string): void => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = (): void => {
    navigation.navigate('GuessEraResultScreen', { answers });
  };

  const images = useMemo(
    () => ({
      japan: require('../../assets/module_5/japan.jpg'),
      us: require('../../assets/module_5/us.jpg'),
      spain: require('../../assets/module_5/spain.jpg'),
    }),
    []
  );

  useFocusEffect(
    React.useCallback(() => {
      setAnswers(Array(questions.length).fill(null));
    }, [])
  );

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
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 py-1 font-inknut text-[14px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Guess That Era!
        </Text>
      </View>
      <Container>
        <FlatList
          ListHeaderComponent={
            <View>
              <Text className="mb-2 text-center font-inknutSemiBold text-[14px] text-white">
                GUESS THAT ERA!
              </Text>
              <Text className="mb-5 py-1 font-inknut text-[12px] leading-[22px] text-white">
                Read each event description carefully and identify which period of occupation
                (Spanish, American, or Japanese) it describes. To answer each item, they must choose
                the correct flag by selecting the appropriate option:
              </Text>
              <View className="mb-3 flex w-full flex-row justify-between">
                <View className="w-1/3">
                  <View className="flex items-center justify-center">
                    <TouchableOpacity className="h-[60px] w-[80%] overflow-hidden">
                      <Image source={images.spain} className="h-full w-full" />
                    </TouchableOpacity>
                    <Text className="py-2 text-center font-inknut text-[12px] text-white ">
                      Spanish
                    </Text>
                  </View>
                </View>

                <View className="w-1/3">
                  <View className="flex items-center justify-center">
                    <TouchableOpacity className="h-[60px] w-[80%] overflow-hidden">
                      <Image source={images.us} className="h-full w-full" />
                    </TouchableOpacity>
                    <Text className="py-2 text-center font-inknut text-[12px] text-white ">
                      American
                    </Text>
                  </View>
                </View>
                <View className="w-1/3">
                  <View className="flex items-center justify-center">
                    <TouchableOpacity className="h-[60px] w-[80%] overflow-hidden">
                      <Image source={images.japan} className="h-full w-full" />
                    </TouchableOpacity>
                    <Text className="py-2 text-center font-inknut text-[12px] text-white ">
                      Japanese
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          }
          showsVerticalScrollIndicator={false}
          data={questions}
          keyExtractor={(item, index) => `question-${index}`}
          renderItem={({ item, index }) => (
            <View style={styles.questionContainer}>
              <Text
                style={styles.question}
                className="py-1 font-inknut text-[12px] leading-[22px] text-white">
                {index + 1}. {item.question}
              </Text>
              {item.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => selectAnswer(index, option)}
                  style={[styles.option, answers[index] === option && styles.selectedOption]}>
                  <Text
                    style={styles.optionText}
                    className="text font-inknut text-[12px] text-[#0E8341]">
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
          ListFooterComponent={
            <TouchableOpacity onPress={handleSubmit} className="rounded-lg bg-[#0E8341] p-3">
              <Text className="text-center font-inknut text-[12px] text-[#FFF800]">Submit</Text>
            </TouchableOpacity>
          }
        />
      </Container>
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
