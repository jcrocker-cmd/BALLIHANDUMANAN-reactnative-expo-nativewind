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
import { questions } from '../../assets/quiz/TakeTheQuizQueztions';
import { Container } from 'components/Container';
import { Ionicons } from '@expo/vector-icons';
import banner from '../../assets/module_4/banner.png';

// Define your navigation types
type RootStackParamList = {
  Quiz: undefined;
  Result: { answers: (string | null)[] };
};

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'TakeTheQuiz'>;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const selectAnswer = (index: number, option: string): void => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = (): void => {
    navigation.navigate('TakeTheQuizResultScreen', { answers });
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
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 py-1 font-inknut text-[16px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Take The Quiz
        </Text>
      </View>
      <Container>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={questions}
          keyExtractor={(item, index) => `question-${index}`}
          renderItem={({ item, index }) => (
            <View style={styles.questionContainer}>
              <Text style={styles.question} className="py-1 font-inknut text-base text-white">
                {index + 1}. {item.question}
              </Text>
              {item.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => selectAnswer(index, option)}
                  style={[styles.option, answers[index] === option && styles.selectedOption]}>
                  <Text
                    style={styles.optionText}
                    className="text font-inknut text-[13px] text-[#0E8341]">
                    {option}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )}
        />

        <TouchableOpacity onPress={handleSubmit} className="rounded-lg bg-blue-500 p-3">
          <Text className="text-center font-inknut text-white">Submit</Text>
        </TouchableOpacity>
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
