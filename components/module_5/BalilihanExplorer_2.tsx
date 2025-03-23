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
import { useFocusEffect } from '@react-navigation/native';

// List of barangays for the quiz
const barangays = [
  { id: 1, name: 'Cantomimbo' },
  { id: 2, name: 'Sagasa' },
  { id: 3, name: 'Boyog Proper' },
  { id: 4, name: 'Hanopol Norte' },
  { id: 5, name: 'Tagustusan' },
  { id: 6, name: 'Del Carmen Norte' },
  { id: 7, name: 'Cabad' },
  { id: 8, name: 'Cantalid' },
  { id: 9, name: 'Baucan Sur' },
  { id: 10, name: 'Boctol' },
];

type RootStackParamList = {
  BalilihanExplorerHome: undefined;
  BalilihanExplorer_2_Result: { answers: (string | null)[]; score: number };
};

export default function App() {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current barangay index
  const [answer, setAnswer] = useState(''); // Stores the user's answer
  const [score, setScore] = useState(0); // Stores the user's score
  const [timeLeft, setTimeLeft] = useState(120); // 2-minute timer (120 seconds)
  const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

  useFocusEffect(
    React.useCallback(() => {
      setCurrentIndex(0);
      setAnswer('');
      setScore(0);
      setUserAnswers([]);
      setTimeLeft(120); // Reset the timer
    }, [])
  );

  // Format the time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'BalilihanExplorer_2_Result', params: { answers: userAnswers, score } }],
      });
    }

    return () => clearInterval(timer);
  }, [timeLeft, navigation, userAnswers, score]);

  const handleGuess = () => {
    if (currentIndex >= barangays.length) {
      return; // Avoid accessing out of bounds
    }

    const userAnswer = answer.trim() || null;
    setUserAnswers((prev) => [...prev, userAnswer]);

    // Check if user answer matches current barangay
    if (userAnswer?.toLowerCase() === barangays[currentIndex]?.name.toLowerCase()) {
      setScore(score + 1);
    }

    setAnswer('');
    nextQuestion();
  };

  const nextQuestion = () => {
    if (currentIndex < barangays.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // Navigate to the results and reset the stack
      navigation.reset({
        index: 0,
        routes: [
          {
            name: 'BalilihanExplorer_2_Result',
            params: { answers: userAnswers, score },
          },
        ],
      });
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
          <Ionicons name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/4 py-1 font-inknut text-[14px] text-white"
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
            <Image source={require('../../assets/module_5/BRGY MAP 2.png')} style={styles.map} />
            <Text style={styles.timer} className="font-inknut">
              Time Left: {formatTime(timeLeft)}
            </Text>
            <Text style={styles.question} className="font-inknut text-[14px]">
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
              <Text className="text-center font-inknut text-[14px] text-[#FFF800]">Submit</Text>
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
    paddingVertical: 5,
    paddingHorizontal: 40,
    alignItems: 'center', // Centers text inside the button
  },
  score: {
    fontSize: 20,
    marginTop: 10,
  },
});
