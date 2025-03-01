import React from 'react';
import { TouchableOpacity, View, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import bg from '../assets/bg.png';
import buttonbg from '../assets/button-bg.jpg';

interface IconButtonProps {
  icon?: keyof typeof Ionicons.glyphMap; // Ensures valid Ionicons name
  text: string;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, onPress }) => {
  return (
    <ImageBackground source={buttonbg} className="overflow-hidden rounded-lg">
      <TouchableOpacity
        className="relative flex w-full flex-row items-center rounded-lg border-[1px] border-white bg-white/30 p-3 px-5 pb-6 pt-6 shadow-md"
        onPress={onPress}>
        <Text className="max-xs:text-[12px] flex-1 pr-10 text-left font-inknut text-[14px] text-white">
          {text}
        </Text>
        <Ionicons name="chevron-forward" size={20} color="white" />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default IconButton;
