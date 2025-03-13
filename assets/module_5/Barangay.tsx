import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';

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
  const [timeLeft, setTimeLeft] = useState(60); // 1-minute timer

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
    setTimeLeft(60);
    setAnswer('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Guess the Barangay!</Text>
      <Image source={require('../../assets/bar.png')} style={styles.map} />
      <Text style={styles.timer}>Time Left: {timeLeft}s</Text>
      <Text style={styles.question}>Which barangay is #{barangays[currentIndex].id}?</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter barangay name"
        value={answer}
        onChangeText={setAnswer}
      />
      <Button title="Submit" onPress={handleGuess} />
      <Text style={styles.score}>Score: {score}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  map: {
    width: 300,
    height: 300,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  timer: {
    fontSize: 18,
    marginBottom: 10,
    color: 'red',
  },
  question: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    width: '80%',
    marginBottom: 10,
    borderRadius: 5,
  },
  score: {
    fontSize: 20,
    marginTop: 10,
  },
});
