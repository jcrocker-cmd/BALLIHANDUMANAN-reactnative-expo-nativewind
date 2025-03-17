import React, { memo, useMemo } from 'react';
import { TouchableOpacity, Text, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import buttonbg from '../assets/button-bg.jpg';

interface IconButtonProps {
  text: string;
  onPress?: () => void;
}

const IconButton: React.FC<IconButtonProps> = memo(({ text, onPress }) => {
  // Memoize the ImageBackground to avoid unnecessary re-renders
  const background = useMemo(
    () => (
      <ImageBackground source={buttonbg} className="overflow-hidden rounded-lg">
        <TouchableOpacity
          className="relative flex w-full flex-row items-center rounded-lg border-[1px] border-white bg-white/30 p-3 px-5 pb-6 pt-6 shadow-md"
          onPress={onPress}>
          <Text className="flex-1 pr-10 text-left font-inknut text-[14px] text-white max-xs:text-[12px]">
            {text}
          </Text>
          <Ionicons name="chevron-forward" size={20} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    ),
    [text, onPress] // Recompute only if text or onPress changes
  );

  return background;
});

export default IconButton;
