import { View, Text } from 'react-native';
import React from 'react';

interface TitleProps {
  name: string;
}

const Title = ({ name }: TitleProps) => {
  return (
    <View>
      <Text
        className="py-2 text-center font-inknut
 text-lg color-[#0E8341]">
        {name}
      </Text>
    </View>
  );
};

export default Title;
