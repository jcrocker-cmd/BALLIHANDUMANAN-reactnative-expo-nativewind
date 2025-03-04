import { View, Text } from 'react-native';
import React from 'react';

interface TitleProps {
  children: React.ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return (
    <View>
      <Text
        className="py-2 text-center font-inknut
 text-xl color-[#0E8341]">
        {children}
      </Text>
    </View>
  );
};

export default Title;
