// import React, { useEffect } from 'react';
// import { View, Text, ActivityIndicator } from 'react-native';

// export default function LoadingScreen({ navigation }: { navigation: any }) {
//   useEffect(() => {
//     setTimeout(() => {
//       navigation.replace('Home'); // Replace to prevent going back to loading
//     }, 2000); // Show for 2 seconds
//   }, []);

//   return (
//     <View className="flex-1 items-center justify-center bg-black">
//       <ActivityIndicator size="large" color="#fff" />
//       <Text className="mt-4 text-lg text-white">Loading...</Text>
//     </View>
//   );
// }

import React, { useEffect, useState } from 'react';
import { View, Text, Animated } from 'react-native';

export default function LoadingScreen({ navigation }: { navigation: any }) {
  const [progress, setProgress] = useState(0);
  const animatedWidth = new Animated.Value(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigation.replace('Home'); // Navigate when progress reaches 100%
          return 100;
        }
        return prev + 2; // Increase by 2% every 300ms
      });
    }, 60);

    // Animate the progress bar width
    Animated.timing(animatedWidth, {
      toValue: 100,
      duration: 2000, // 2 seconds animation
      useNativeDriver: false,
    }).start();

    return () => clearInterval(interval); // Clean up interval on unmount
  }, []);

  return (
    <View className="flex-1 items-center justify-center bg-black px-10">
      <Text className="font-inknut mb-4 py-2 text-sm text-white"> {progress}%</Text>
      <View className="h-1 w-full rounded bg-gray-700">
        <Animated.View
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#4CAF50',
            borderRadius: 5,
          }}
        />
      </View>
    </View>
  );
}
