import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  icon: keyof typeof Ionicons.glyphMap; // Ensures valid Ionicons name
  text: string;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({ icon, text, onPress }) => {
  return (
    <TouchableOpacity
      className="relative flex w-full flex-row items-center rounded-lg bg-white p-3 pb-6 pt-6 shadow-md"
      onPress={onPress}>
      {/* Left Icon */}
      <View className="absolute left-0 top-8 -ml-3 -translate-y-1/2 items-center justify-center rounded-full bg-yellow-400 p-2">
        <Ionicons name={icon} size={20} color="#000" />
      </View>

      {/* Text */}
      <Text className="font-inknut ml-5 flex-1 text-center text-[14px] text-gray-800">{text}</Text>

      {/* Right Arrow */}
      <Ionicons name="chevron-forward" size={20} color="green" />
    </TouchableOpacity>
  );
};

export default IconButton;
