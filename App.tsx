import "./global.css"; // MUST IMPORT THIS
import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSpring } from 'react-native-reanimated';

export default function App() {
  const scale = useSharedValue(1);

  useEffect(() => {
    scale.value = withRepeat(withSpring(1.2), -1, true);
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  return (
    // "bg-slate-950" = Dark Cinema background
    <View className="flex-1 items-center justify-center bg-slate-950">
      <Animated.View 
        // "bg-yellow-400" = Corn Gold
        className="h-32 w-32 items-center justify-center rounded-3xl bg-yellow-400 shadow-2xl shadow-yellow-500/50"
        style={animatedStyle}
      >
        <Text className="text-6xl">🍿</Text>
      </Animated.View>
      
      <Text className="mt-8 text-2xl font-bold tracking-widest text-blue-600/100">
        GRAB THE CORN
      </Text>
      <Text className="mt-2 text-slate-400">Stop the Scroll. Start the Vibe.</Text>
    </View>
  );
}