import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
} from 'react-native';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { questions } from '../../assets/quiz/BalilihanTreasureQueztions';
import { NormalContainer } from 'components/NormalContainer';

// Define RootStackParamList type
type RootStackParamList = {
  BalilihanTreasureQuizScreen: undefined;
  Module_5: undefined;
  BalilihanTreasureQuizScreenResult: { answers: (string | null)[] };
};

type ResultScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BalilihanTreasureQuizScreenResult'
>;
type ResultScreenRouteProp = RouteProp<RootStackParamList, 'BalilihanTreasureQuizScreenResult'>;

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
              <View style={styles.imageContainer}>
                <Image
                  source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                  style={styles.image}
                />
              </View>
              <Text style={styles.correctAnswer} className="py-1 pt-8 font-inknut text-sm">
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
            onPress={() => navigation.navigate('BalilihanTreasureQuizScreen')}>
            <Text className="text-center font-inknut text-[14px] text-white">Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-2 rounded-lg bg-[#0E8341] py-3"
            onPress={() => navigation.navigate('Module_5')}>
            <Text className="text-center font-inknut text-[14px] text-white">Exit</Text>
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
  imageContainer: {
    width: '100%',
    height: 230, // Fixed height
    overflow: 'hidden', // Ensures no content goes beyond container
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover', // Makes the image cover the whole area while keeping aspect ratio
  },
});

export default ResultScreen;
