import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { AssesmentContainer } from 'components/AssesmentContainer';
import banner from '../../assets/module_4/banner.png';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

// List of barangays for the quiz
const barangays = [
  { id: 1, name: 'Haguilanan Grande' },
  { id: 2, name: 'San Roque' },
  { id: 3, name: 'San Isidro' },
  { id: 4, name: 'Hanopol Este' },
  { id: 5, name: 'Tagustusan' },
  { id: 6, name: 'Del Carmen Este' },
  { id: 7, name: 'Magsija' },
  { id: 8, name: 'Datag Sur' },
  { id: 9, name: 'Datag Norte' },
  { id: 10, name: 'Baucan Norte' },
];

type RootStackParamList = {
  BalilihanExplorerHome: undefined;
  BalilihanExplorer_1_Result: { answers: (string | null)[]; score: number };
};

export default function App() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current barangay index
  const [answer, setAnswer] = useState(''); // Stores the user's answer
  const [score, setScore] = useState(0); // Stores the user's score
  const [timeLeft, setTimeLeft] = useState(120); // 2-minute timer (120 seconds)
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  // Format the time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      navigation.navigate('BalilihanExplorer_1_Result', { answers: userAnswers, score });
    }
  }, [timeLeft]);

  const handleGuess = () => {
    const userAnswer = answer.trim() || null;
    setUserAnswers((prev) => [...prev, userAnswer]);

    if (userAnswer?.toLowerCase() === barangays[currentIndex].name.toLowerCase()) {
      setScore(score + 1);
    }

    setAnswer('');
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIndex < barangays.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to the results screen when the quiz is done
      navigation.navigate('BalilihanExplorer_1_Result', { answers: userAnswers, score });
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      {/* Banner  */}
      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.navigate('BalilihanExplorerHome')}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 py-1 font-inknut text-[16px] text-white"
          style={{
            textShadowColor: 'black', // Outline color
            textShadowOffset: { width: 2, height: 2 }, // Stroke position
            textShadowRadius: 8, // Spread
          }}>
          Guess That Barangay!
        </Text>
      </View>

      <ScrollView>
        <AssesmentContainer>
          <View style={styles.container}>
            {/* <Text className="font-inknutSemiBold text-[18px]">Guess the Barangay!</Text> */}
            <Image source={require('../../assets/module_5/BRGY MAP 1.png')} style={styles.map} />
            <Text style={styles.timer} className="font-inknut">
              Time Left: {formatTime(timeLeft)}
            </Text>
            <Text style={styles.question} className="font-inknut text-[16px]">
              Which barangay is #{barangays[currentIndex].id}?
            </Text>
            <TextInput
              className="font-inknut text-[14px] color-[#0E8341]"
              style={styles.input}
              placeholder="Enter barangay name"
              value={answer}
              placeholderTextColor="#0E8341"
              onChangeText={setAnswer}
            />
            <TouchableOpacity
              style={styles.button}
              className="rounded-lg py-4"
              onPress={handleGuess}>
              <Text className="text-center font-inknut text-[#FFF800]">Submit</Text>
            </TouchableOpacity>
            {/* <Text style={styles.score}>Score: {score}</Text> */}
          </View>
        </AssesmentContainer>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: '100%',
    height: 300,
    resizeMode: 'cover',
    marginBottom: 5,
    // borderColor: 'white',
    // borderWidth: 1,
  },
  timer: {
    fontSize: 16,
    color: 'red',
  },
  question: {
    marginBottom: 10,
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#0E8341',
    borderRadius: 8, // Adjust this value as needed
    paddingVertical: 10,
    paddingHorizontal: 50,
    alignItems: 'center', // Centers text inside the button
  },
  score: {
    fontSize: 20,
    marginTop: 10,
  },
});
