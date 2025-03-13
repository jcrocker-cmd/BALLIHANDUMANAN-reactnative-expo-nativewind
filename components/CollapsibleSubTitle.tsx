import { View, Text, Image, StyleSheet, TouchableOpacity, Animated } from 'react-native';
import { ReactNode, useState, useRef, useCallback } from 'react';
import React from 'react';
import icon from '../assets/bulb_icon.png';

interface CollapsibleSubTitleProps {
  name: string;
  children: ReactNode;
}

const CollapsibleSubTitle = ({ name, children }: CollapsibleSubTitleProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [contentHeight, setContentHeight] = useState(0);
  const animation = useRef(new Animated.Value(0)).current;
  const [contentLoaded, setContentLoaded] = useState(false);

  const toggleCollapse = useCallback(() => {
    // If opening for the first time, load the content
    if (!isOpen && !contentLoaded) {
      setContentLoaded(true);
    }

    Animated.timing(animation, {
      toValue: isOpen ? 0 : contentHeight,
      duration: 300,
      useNativeDriver: false, // height animations must useNativeDriver: false
    }).start();

    setIsOpen(!isOpen);
  }, [isOpen, contentLoaded, animation, contentHeight]);

  const onLayoutContent = useCallback((event: any) => {
    setContentHeight(event.nativeEvent.layout.height);
  }, []);

  return (
    <>
      {/* Clickable Header */}
      <TouchableOpacity onPress={toggleCollapse}>
        <View style={styles.container} className="py-4">
          <Text style={styles.text} className="font-inknutSemiBold text-[14px]">
            {name}
          </Text>
          <Image source={icon} resizeMode="contain" style={styles.icon} />
        </View>
      </TouchableOpacity>

      {/* Animated Collapsible Content */}
      <Animated.View style={{ height: animation, overflow: 'hidden' }}>
        {/* Only render content if it has been loaded */}
        {contentLoaded && (
          <View onLayout={onLayoutContent} style={styles.contentContainer}>
            {children}
          </View>
        )}
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
    width: 30,
    height: 30,
  },
  contentContainer: {
    position: 'absolute', // Prevents affecting layout when collapsed
    width: '100%',
  },
});

export default CollapsibleSubTitle;
