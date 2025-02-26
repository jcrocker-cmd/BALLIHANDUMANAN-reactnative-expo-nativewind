import { View, Text } from 'react-native';
import { Container } from '../components/Container';
import { SafeAreaView, Image } from 'react-native';
import { TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

interface AboutProps {
  title: string;
  description: string;
  icon: any;
}

const AboutScreen: React.FC<AboutProps> = ({ title, description, icon }) => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Container>
          <TouchableOpacity onPress={() => navigation.goBack()} className="mb-6 pt-10">
            <Ionicons name="arrow-back" size={30} color="#fff" />
          </TouchableOpacity>

          <TouchableOpacity>
            <View className="flex items-center justify-center">
              <Text className="-mt-4 py-1 text-justify font-inknut text-lg text-white">
                {title}
              </Text>
              <Image source={icon} className="m-7 h-[140px] w-[140px]" />
            </View>
          </TouchableOpacity>

          <ScrollView>
            <Text className="py-5 text-justify font-inknut text-[12px] text-white">
              {description}
            </Text>
          </ScrollView>
        </Container>
      </SafeAreaView>
    </>
  );
};

export default AboutScreen;
