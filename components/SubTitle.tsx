import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import icon from '../assets/bulb_icon.png';

interface SubTitleProps {
  name: string;
}

const SubTitle = ({ name }: SubTitleProps) => {
  return (
    <View style={styles.container} className="py-4">
      <Text style={styles.text} className="font-inknut text-[15px] font-semibold">
        {name}
      </Text>
      <Image source={icon} resizeMode="contain" style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderColor: 'black',
    // borderWidth: 1,
  },
  text: {
    textTransform: 'uppercase',
    color: '#0E8341',
    // paddingRight: 10,
    //
  },
  icon: {
    width: 30,
    height: 30,
  },
});

export default SubTitle;
