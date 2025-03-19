import React from 'react';
import { View, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system'; // Import File System
import banner from '../../assets/module_4/banner.png';
import { AssesmentContainer } from 'components/AssesmentContainer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

const Module_5 = () => {
  const navigation = useNavigation();

  // Function to download PDF
  const downloadPDF = async (url, filename) => {
    try {
      const fileUri = FileSystem.documentDirectory + filename;
      const { uri } = await FileSystem.downloadAsync(url, fileUri);
      Alert.alert('Download Complete', `File saved to ${uri}`);
    } catch (error) {
      Alert.alert('Download Failed', 'Something went wrong.');
      console.error(error);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />

      {/* Banner */}
      <View className="relative h-[130px] w-full overflow-hidden">
        <Image source={banner} className="h-full w-full" />
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/30 p-2">
          <Ionicons name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
        <Text
          className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 py-1 font-inknut text-[16px] text-white"
          style={{
            textShadowColor: 'black',
            textShadowOffset: { width: 2, height: 2 },
            textShadowRadius: 8,
          }}>
          Assessment and Activities
        </Text>
      </View>

      {/* Gradient Background & PDF Buttons */}
      <AssesmentContainer>
        <View className="flex-1 items-center gap-4">
          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => downloadPDF('https://example.com/pdf1.pdf', 'Module_1.pdf')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">
              Download Module 1 PDF
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => downloadPDF('https://example.com/pdf2.pdf', 'Module_2.pdf')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">
              Download Module 2 PDF
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => downloadPDF('https://example.com/pdf3.pdf', 'Module_3.pdf')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">
              Download Module 3 PDF
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="w-[95%] rounded-lg bg-white px-6 py-3"
            onPress={() => downloadPDF('https://example.com/pdf4.pdf', 'Module_4.pdf')}>
            <Text className="py-1 text-center font-inknut text-[14px] text-green-800">
              Download Module 4 PDF
            </Text>
          </TouchableOpacity>
        </View>
      </AssesmentContainer>
    </SafeAreaView>
  );
};

export default Module_5;
