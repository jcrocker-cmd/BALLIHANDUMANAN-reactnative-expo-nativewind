import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/BarangayQueztions';
import { NormalContainer } from 'components/NormalContainer';

// Define your navigation types
type RootStackParamList = {
  BarangayQuizScreen: undefined;
  Module_5: undefined;
  BarangayResultScreen: { answers: (string | null)[] };
};

type ResultScreenNavigationProp = StackNavigationProp<RootStackParamList, 'BarangayResultScreen'>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'BarangayResultScreen'>;

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
            className="mt-5 rounded-lg bg-[#0E8341] py-3"
            onPress={() => navigation.navigate('BarangayQuizScreen')}>
            <Text className="text-center font-inknut text-[13px] text-white">Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-2 rounded-lg bg-[#0E8341] py-3"
            onPress={() => navigation.navigate('Module_5')}>
            <Text className="text-center font-inknut text-[13px] text-white">Exit</Text>
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
