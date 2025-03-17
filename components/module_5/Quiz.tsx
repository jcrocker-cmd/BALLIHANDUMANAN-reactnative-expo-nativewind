import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Button,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/queztions';
import { Container } from '../Container';

type RootStackParamList = {
  Quiz: undefined;
  Result: { answers: string[] };
};

type QuizScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Quiz'>;
type Props = {
  navigation: QuizScreenNavigationProp;
};

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const selectAnswer = (index: number, option: string) => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <ScrollView>
          <FlatList
            data={questions}
            keyExtractor={(_, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View style={styles.questionContainer}>
                <Text style={styles.question} className="font-inknut">
                  {index + 1}. {item.question}
                </Text>
                {item.options.map((option) => (
                  <TouchableOpacity
                    key={option}
                    onPress={() => selectAnswer(index, option)}
                    style={[styles.option, answers[index] === option && styles.selectedOption]}>
                    <Text style={styles.optionText} className="font-inknut">
                      {option}{' '}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            )}
          />
        </ScrollView>

        <Button title="Submit" onPress={() => navigation.navigate('Result', { answers })} />
      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questionContainer: { marginBottom: 20 },
  question: { fontSize: 18, fontWeight: 'bold' },
  option: {
    backgroundColor: 'gray',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  selectedOption: { backgroundColor: 'blue' },
  optionText: { color: 'white', textAlign: 'center' },
});

export default QuizScreen;
