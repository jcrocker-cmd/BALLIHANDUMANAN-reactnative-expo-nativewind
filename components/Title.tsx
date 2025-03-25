import { View, Text } from 'react-native';
import React from 'react';
import { Platform } from 'react-native';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <View>
      <Text
        className={`mb-2 -mt-1 py-2 text-center font-inknut
 text-[16px] leading-[22px] color-[#0E8341] ${Platform.OS === 'ios' ? 'text-[18px]' : ''}`}>
        {children}
      </Text>
    </View>
  );
};

export default Title;
