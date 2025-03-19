import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Image,
} from 'react-native';
import { Container } from 'components/Container';
import banner from '../../assets/module_4/banner.png';



  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <View className="h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
      </View>
      <Container>
        


      </Container>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  questionContainer: { marginBottom: 40 },
  question: { marginBottom: 10 },
  option: {
    backgroundColor: '#fff',
    padding: 10,
    marginTop: 5,
    borderRadius: 5,
  },
  selectedOption: { backgroundColor: '#FFF800' },
  optionText: { textAlign: 'center' },
});

export default QuizScreen;
