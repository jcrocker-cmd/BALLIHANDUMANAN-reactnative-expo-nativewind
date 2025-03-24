import React, { memo, ReactNode, useMemo } from 'react';
import { TouchableOpacity, ImageBackground, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface IconButtonProps {
  onPress?: () => void;
  source: ImageSourcePropType;
  children: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = memo(({ children, onPress, source }) => {
  const background = useMemo(
    () => (
      <ImageBackground source={source} className="overflow-hidden rounded-md">
        <TouchableOpacity
          className="flex h-[70px] w-full flex-row items-center justify-between rounded-lg border border-white/80 bg-black/20 px-5"
          onPress={onPress}>
          {children}
          <Ionicons name="chevron-forward" size={22} color="white" />
        </TouchableOpacity>
      </ImageBackground>
    ),
    [onPress]
  );

  return background;
});

export default IconButton;
