import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Alert,
  SafeAreaView,
  StatusBar,
  ScrollView,
} from 'react-native';
import { AssesmentContainer } from 'components/AssesmentContainer';
import banner from '../../assets/module_4/banner.png';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

// List of barangays for the quiz
const barangays = [
  { id: 1, name: 'Barangay 1' },
  { id: 2, name: 'Barangay 2' },
  { id: 3, name: 'Barangay 3' },
  { id: 4, name: 'Barangay 4' },
  { id: 5, name: 'Barangay 5' },
  { id: 6, name: 'Barangay 6' },
  { id: 7, name: 'Barangay 7' },
  { id: 8, name: 'Barangay 8' },
  { id: 9, name: 'Barangay 9' },
  { id: 10, name: 'Barangay 10' },
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0); // Tracks the current barangay index
  const [answer, setAnswer] = useState(''); // Stores the user's answer
  const [score, setScore] = useState(0); // Stores the user's score
  const [timeLeft, setTimeLeft] = useState(120); // 2-minute timer (120 seconds)

  // Format the time as MM:SS
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  useEffect(() => {
    // Decrease the timer every second
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      // When the timer runs out, show an alert and restart
      Alert.alert("Time's up!", `Final Score: ${score}`, [{ text: 'Restart', onPress: resetGame }]);
    }
  }, [timeLeft]);

  const handleGuess = () => {
    // Check if the answer is correct (case insensitive)
    if (answer.trim().toLowerCase() === barangays[currentIndex].name.toLowerCase()) {
      setScore(score + 1); // Increase score if correct
    }
    setAnswer(''); // Reset input field
    nextQuestion(); // Move to next question
  };

  const nextQuestion = () => {
    if (currentIndex < barangays.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // If all barangays are answered, show final score
      Alert.alert('Quiz Complete!', `Final Score: ${score}`, [
        { text: 'Restart', onPress: resetGame },
      ]);
    }
  };

  const resetGame = () => {
    setCurrentIndex(0);
    setScore(0);
    setTimeLeft(120); // Reset to 2 minutes (120 seconds)
    setAnswer('');
  };
  const navigation = useNavigation();

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
      </View>

      <ScrollView>
        <AssesmentContainer>
          <View style={styles.container}>
            <Text className="font-inknutSemiBold text-[18px]">Guess the Barangay!</Text>
            <Image source={require('../../assets/module_5/BRGY MAP 3.png')} style={styles.map} />
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
              className="rounded-lg py-10"
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
