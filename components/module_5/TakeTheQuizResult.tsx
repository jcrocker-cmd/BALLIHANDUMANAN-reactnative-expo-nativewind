import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/TakeTheQuizQueztions';
import { NormalContainer } from 'components/NormalContainer';

// Define your navigation types
type RootStackParamList = {
  Quiz: undefined;
  Result: { answers: (string | null)[] };
};

type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'TakeTheQuizResultScreen'
>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'TakeTheQuizResultScreen'>;

const ResultScreen: React.FC = () => {
  const navigation = useNavigation<ResultScreenNavigationProp>();
  const route = useRoute<ResultScreenRouteProp>();
  const { answers } = route.params;

  const score = answers.filter((ans, index) => ans === questions[index].correctAnswer).length;

  return (
    <NormalContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.score} className="py-1 pt-6 font-inknutBold text-xl">
            Your Score: {score} / {questions.length}
          </Text>
          {questions.map((item, index) => (
            <View key={`result-${index}`} style={styles.resultItem}>
              <Text style={styles.question} className="py-1 font-inknut text-sm">
                {index + 1}. {item.question}
              </Text>
              <Text style={styles.correctAnswer} className="py-1 font-inknut text-sm">
                Correct: {item.correctAnswer}
              </Text>
              <Text
                style={answers[index] === item.correctAnswer ? styles.correct : styles.wrong}
                className="py-1 font-inknut text-sm">
                Your Answer: {answers[index] || 'Not answered'}
              </Text>
            </View>
          ))}
          <TouchableOpacity
            onPress={() => navigation.navigate('TakeTheQuizScreen')}
            className="rounded-lg bg-blue-500 p-3">
            <Text className="text-center font-bold text-white">Try Again</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </NormalContainer>
  );
};

const styles = StyleSheet.create({
  score: {
    textAlign: 'center',
    marginBottom: 20,
    fontFamily: 'InknutRegular',
  },
  resultItem: { marginBottom: 15 },
  question: { marginBottom: 5 },
  correctAnswer: { color: 'green' },
  correct: { color: 'green' },
  wrong: { color: 'red' },
});

export default ResultScreen;
