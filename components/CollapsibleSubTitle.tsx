import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ReactNode, useState, useRef } from 'react';
import React from 'react';
import icon from '../assets/bulb_icon.png';
import { Platform } from 'react-native';

interface CollapsibleSubTitleProps {
  name: string;
  children: ReactNode;
}

const CollapsibleSubTitle = ({ name, children }: CollapsibleSubTitleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;
  const contentHeightRef = useRef(0);

  const toggleCollapse = () => {
    Animated.timing(animation, {
      toValue: isOpen ? 0 : contentHeightRef.current,
      duration: 300,
      useNativeDriver: false, // Native driver doesn't support height animations
    }).start();
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Clickable Header */}
      <TouchableOpacity onPress={toggleCollapse}>
        <View style={styles.container} className="py-4">
          <Text style={styles.text} className={`font-inknut text-[14px] font-semibold ${Platform.OS === 'ios' ? 'text-[16px]' : ''}`}>
            {name}
          </Text>
          <Image source={icon} resizeMode="contain" style={styles.icon} />
        </View>
      </TouchableOpacity>

      {/* Animated Collapsible Content */}
      <Animated.View style={{ height: animation, overflow: 'hidden' }}>
        <View
          onLayout={(event) => {
            if (contentHeightRef.current === 0) {
              contentHeightRef.current = event.nativeEvent.layout.height; // Store height once
            }
          }}
          style={styles.contentContainer}>
          {children}
        </View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    textTransform: 'uppercase',
    color: '#0E8341',
  },
  icon: {
    width: 27,
    height: 27,
  },
  contentContainer: {
    width: '100%',
    position: 'absolute',
  },
});

export default CollapsibleSubTitle;
