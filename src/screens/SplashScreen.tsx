import React, { useEffect } from 'react';
import { View, Text, Image } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withRepeat, withSpring } from 'react-native-reanimated';

export default function SplashScreen({ navigation }: any) {
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  useEffect(() => {
    // 🧠 The GTC Heartbeat: No video, just smooth energy
    scale.value = withRepeat(withSpring(1.15), -1, true);
    
    // 🚀 Slide into Home after the verified 2.5s delay
    const timer = setTimeout(() => {
      navigation.replace('Home');
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View className="flex-1 bg-cinema-950 items-center justify-center">
      <Animated.View style={animatedStyle} className="items-center">
        {/* 🍿 Using mascot 1.png for the "Happy Vibe" */}
        <Image 
          source={require('../../assets/1.png')} 
          className="w-48 h-48 mb-6"
          resizeMode="contain"
        />
        <Text className="text-7xl font-black text-white italic">GTC</Text>
      </Animated.View>
      
      {/* 🏗️ Brand Subtitle logic from the Bible */}
      <View className="absolute bottom-20 items-center">
        <View className="w-10 h-1 bg-corn rounded-full mb-2" />
        <Text className="text-corn font-bold tracking-[8px] uppercase text-[10px]">
          Grab The Corn
        </Text>
      </View>
    </View>
  );
}