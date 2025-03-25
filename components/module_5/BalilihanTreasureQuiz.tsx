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
import { questions } from '../../assets/quiz/BalilihanTreasureQueztions';
import { Container } from 'components/Container';
import banner from '../../assets/module_4/banner.png';
import { Ionicons } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

type RootStackParamList = {
  BalilihanTreasureQuizScreen: undefined;
  BalilihanTreasureQuizScreenResult: { answers: (string | null)[] };
};

type QuizScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'BalilihanTreasureQuizScreen'
>;

const QuizScreen: React.FC = () => {
  const navigation = useNavigation<QuizScreenNavigationProp>();
  const [answers, setAnswers] = useState<(string | null)[]>(Array(questions.length).fill(null));

  const selectAnswer = (index: number, option: string): void => {
    const newAnswers = [...answers];
    newAnswers[index] = option;
    setAnswers(newAnswers);
  };

  const handleSubmit = (): void => {
    navigation.navigate('BalilihanTreasureQuizScreenResult', { answers });
  };

  useFocusEffect(
    React.useCallback(() => {
      setAnswers(Array(questions.length).fill(null));
    }, [])
  );

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
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
            textShadowColor: 'black',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 8,
          }}>
          Uncover Balilihan’s Treasures
        </Text>
      </View>
      <Container>
        <FlatList
          ListHeaderComponent={
            <Text className="mb-5 py-1 text-justify font-inknut text-[12px] leading-[22px] text-white">
              Identify each cultural asset whether it is Natural, Built, Movable, or Intangible
              heritage. Let's go!
            </Text>
          }
          showsVerticalScrollIndicator={false}
          data={questions}
          keyExtractor={(item, index) => `question-${index}`}
          renderItem={({ item, index }) => (
            <View style={styles.questionContainer}>
              <Image source={item.image} style={styles.image} />
              {item.options.map((option) => (
                <TouchableOpacity
                  key={option}
                  onPress={() => selectAnswer(index, option)}
                  style={[styles.option, answers[index] === option && styles.selectedOption]}>
                  <Text
                    style={styles.optionText}
                    className="font-inknut text-[12px] text-[#0E8341]">
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
  questionContainer: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
  },
  image: {
    width: '100%',
    height: 230,
    borderRadius: 8,
    marginBottom: 10,
  },
  option: {
    padding: 10,
    borderColor: '#B2BEB5',
    borderWidth: 1.5,
    borderRadius: 5,
    marginVertical: 5,
  },
  selectedOption: {
    backgroundColor: '#FFF800',
    borderWidth: 0,
  },
  optionText: {
    textAlign: 'center',
  },
});

export default QuizScreen;
