import React from 'react';
import { View, Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation, useRoute, RouteProp, NavigationProp } from '@react-navigation/native';
import { NormalContainer } from 'components/NormalContainer';

type RouteParams = {
  answers: string[];
  score: number;
};

type RootStackParamList = {
  BalilihanExplorer_3: undefined;
  BalilihanExplorerHome: undefined;
  BarangayResultScreen: { answers: string[]; score: number };
};

export default function BarangayResultScreen() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const route = useRoute<RouteProp<{ params: RouteParams }, 'params'>>();
  const { answers, score } = route.params;

  // List of correct barangays for reference
  const barangays = [
    { id: 1, name: 'Cantomimbo' },
    { id: 2, name: 'Sagasa' },
    { id: 3, name: 'Boyog Norte' },
    { id: 4, name: 'Del Rosario' },
    { id: 5, name: 'Santo Niño' },
    { id: 6, name: 'Del Carmen Norte' },
    { id: 7, name: 'Dorol' },
    { id: 8, name: 'Candasig' },
    { id: 9, name: 'Maslog' },
    { id: 10, name: 'Del Carmen Sur' },
  ];

  return (
    <NormalContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="pt-5 text-center font-inknut text-[20px] text-[#0E8341]">
            Quiz Completed!
          </Text>
          <Text className="text-center font-inknutBold text-[18px]">
            Your Score: {score} / {barangays.length}
          </Text>

          <View className="mt-5">
            {answers.map((answer, index) => {
              const correctAnswer = barangays[index].name;
              const isCorrect = answer?.toLowerCase() === correctAnswer.toLowerCase();
              return (
                <View key={index} className="mb-2 rounded-md border bg-gray-100 p-3">
                  <Text className="font-inknut text-[16px]">Barangay #{barangays[index].id}</Text>
                  <Text
                    className={`font-inknut text-[14px] ${isCorrect ? 'text-green-600' : 'text-red-600'}`}>
                    Your Answer: {answer || 'No Answer'}
                  </Text>
                  {!isCorrect && (
                    <Text className="font-inknut text-[14px] text-green-600">
                      Correct Answer: {correctAnswer}
                    </Text>
                  )}
                </View>
              );
            })}
          </View>

          <TouchableOpacity
            className="mt-5 rounded-lg bg-[#0E8341] py-3"
            onPress={() => navigation.navigate('BalilihanExplorer_3')}>
            <Text className="text-center font-inknut text-[13px] text-white">Try Again</Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="mt-2 rounded-lg bg-[#0E8341] py-3"
            onPress={() => navigation.navigate('BalilihanExplorerHome')}>
            <Text className="text-center font-inknut text-[13px] text-white">Exit</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </NormalContainer>
  );
}
