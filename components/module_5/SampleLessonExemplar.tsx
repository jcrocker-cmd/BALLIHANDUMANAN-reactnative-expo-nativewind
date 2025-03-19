import React from 'react';
import { View, Image, SafeAreaView, StatusBar, Text, TouchableOpacity, Alert } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';
import { Asset } from 'expo-asset'; // Import Asset module
import banner from '../../assets/module_4/banner.png';
import { AssesmentContainer } from 'components/AssesmentContainer';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

// List of PDFs inside assets folder
const pdfFiles = [
  {
    name: 'Lesson Exemplar (Lesson 1)',
    path: require('../../assets/module_5/PDF/Lesson Exemplar (Lesson 1).pdf'),
  },
  {
    name: 'Lesson Exemplar (Lesson 2)',
    path: require('../../assets/module_5/PDF/Lesson Exemplar (Lesson 1).pdf'),
  },
  {
    name: 'Lesson Exemplar (Lesson 3)',
    path: require('../../assets/module_5/PDF/Lesson Exemplar (Lesson 1).pdf'),
  },
  {
    name: 'Lesson Exemplar (Lesson 4)',
    path: require('../../assets/module_5/PDF/Lesson Exemplar (Lesson 1).pdf'),
  },
];

// Function to copy the PDF from assets and share it
const copyAndSharePDF = async (pdfPath: any, filename: string) => {
  try {
    // Get asset file path
    const asset = Asset.fromModule(pdfPath);
    await asset.downloadAsync(); // Ensure the file is available

    const fileUri = `${FileSystem.documentDirectory}${filename}`;

    // Copy from assets to local filesystem
    await FileSystem.copyAsync({
      from: asset.localUri!,
      to: fileUri,
    });

    Alert.alert('File Ready', `Choose a location to save your File.`);

    // Share the copied file
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(fileUri);
    } else {
      Alert.alert('Sharing Not Available', 'The file is saved but cannot be opened directly.');
    }
  } catch (error) {
    Alert.alert('Error', 'Failed to load or share the PDF.');
    console.error(error);
  }
};

const Module_5 = () => {
  const navigation = useNavigation();

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
          Sample Lesson Exemplar
        </Text>
      </View>

      {/* Gradient Background & PDF Buttons */}
      <AssesmentContainer>
        <View className="flex-1 items-center gap-4">
          {pdfFiles.map((pdf, index) => (
            <TouchableOpacity
              key={index}
              className="w-[95%] flex-row items-center justify-center gap-2 rounded-lg bg-white px-6 py-3"
              onPress={() => copyAndSharePDF(pdf.path, `${pdf.name}.pdf`)}>
              <Ionicons name="document-text-outline" size={20} color="green" />
              <Text className="py-1 text-center font-inknut text-[14px] text-green-800">
                {pdf.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </AssesmentContainer>
    </SafeAreaView>
  );
};

export default Module_5;
