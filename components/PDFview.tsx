import React from 'react';
import { View, Button, Alert, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as MediaLibrary from 'expo-media-library';

const PDF_URL = 'https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf';

const PdfDownloader = () => {
  const downloadPDF = async () => {
    try {
      // ✅ Request permissions
      const { status } = await MediaLibrary.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission Denied', 'Storage access is required.');
        return;
      }

      let fileUri = FileSystem.documentDirectory + 'downloaded.pdf';

      if (Platform.OS === 'android') {
        // ✅ Android: Use Storage Access Framework for Downloads folder
        const permissions =
          await FileSystem.StorageAccessFramework.requestDirectoryPermissionsAsync();
        if (!permissions.granted) {
          Alert.alert('Permission Denied', 'Cannot save to Downloads folder.');
          return;
        }

        // ✅ Create the file in the selected directory
        fileUri = await FileSystem.StorageAccessFramework.createFileAsync(
          permissions.directoryUri,
          'downloaded.pdf',
          'application/pdf'
        );
      }

      // ✅ Download the PDF
      const downloadResumable = FileSystem.createDownloadResumable(PDF_URL, fileUri);
      const { uri } = await downloadResumable.downloadAsync();

      if (!uri) {
        Alert.alert('Error', 'Failed to download the PDF.');
        return;
      }

      // ✅ Save to Media Library (iOS) / Show success message (Android)
      if (Platform.OS === 'ios') {
        const savedAsset = await MediaLibrary.createAssetAsync(uri);
        await MediaLibrary.createAlbumAsync('Download', savedAsset, false);
        Alert.alert('Download Complete', 'File saved in Downloads.');
      } else {
        Alert.alert('Download Complete', 'File saved in the selected folder.');
      }
    } catch (error) {
      console.error('Download error:', error);
      Alert.alert('Error', 'Failed to save the PDF.');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button title="Download PDF" onPress={downloadPDF} />
    </View>
  );
};

export default PdfDownloader;
