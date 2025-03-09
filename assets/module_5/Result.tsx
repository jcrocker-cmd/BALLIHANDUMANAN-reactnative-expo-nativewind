import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { questions } from '../quiz/queztions';
import { ScrollView } from 'react-native-gesture-handler';

type RootStackParamList = {
  Quiz: undefined;
  Result: { answers: string[] };
};

type Props = StackScreenProps<RootStackParamList, 'Result'>;

const ResultScreen: React.FC<Props> = ({ route, navigation }) => {
  const { answers } = route.params;
  const score = answers.filter((ans, index) => ans === questions[index].correctAnswer).length;

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Text style={styles.score}>
        Your Score: {score} / {questions.length}
      </Text>
      {questions.map((item, index) => (
        <View key={index} style={styles.resultItem}>
          <Text>
            {index + 1}. {item.question}
          </Text>
          <Text style={styles.correctAnswer}>Correct: {item.correctAnswer}</Text>
          <Text style={answers[index] === item.correctAnswer ? styles.correct : styles.wrong}>
            Your Answer: {answers[index] || 'Not answered'}
          </Text>
        </View>
      ))}
      <Button title="Restart Quiz" onPress={() => navigation.navigate('Quiz')} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  score: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 20 },
  resultItem: { marginTop: 10 },
  correctAnswer: { color: 'green', fontWeight: 'bold' },
  correct: { color: 'green' },
  wrong: { color: 'red' },
});

export default ResultScreen;
