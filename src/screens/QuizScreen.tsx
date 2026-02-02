import React, { useState } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
// 🛠️ New Gesture Handler v2 Imports
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { useSharedValue, useAnimatedStyle, withSpring, runOnJS } from 'react-native-reanimated';

const { width } = Dimensions.get('window');

const QUIZ_DATA = [
    { id: 'hype', mascot: require('../../assets/2.png'), question: "Need an Adrenaline Rush?", tribe: "Achiever", color: "border-vibe-hype" },
    { id: 'drama', mascot: require('../../assets/3.png'), question: "Ready for a Heartfelt Cry?", tribe: "Socializer", color: "border-vibe-feels" },
    { id: 'mind', mascot: require('../../assets/1.png'), question: "Into Mind-Bending Puzzles?", tribe: "Explorer", color: "border-indigo-500" }, // 🧠 Mind-Bending
    { id: 'scary', mascot: require('../../assets/4.png'), question: "Can you handle the Spooks?", tribe: "Explorer", color: "border-vibe-scared" },
    { id: 'chill', mascot: require('../../assets/5.png'), question: "Just need some Background Noise?", tribe: "Explorer", color: "border-vibe-chill" }, // 😴 Chill
    { id: 'critic', mascot: require('../../assets/6.png'), question: "Only the Best of the Best?", tribe: "Killer", color: "border-corn" },
  ];

export default function QuizScreen({ navigation }: any) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const translateX = useSharedValue(0);

  const nextCard = () => {
    if (currentIndex < QUIZ_DATA.length - 1) {
      setCurrentIndex(prev => prev + 1);
      translateX.value = 0;
    } else {
      navigation.replace('Home'); // 🚀 Navigation flow verified [cite: 2026-02-02]
    }
  };

  // 🛠️ Modern Gesture API (Gesture Handler v2) [cite: 2026-02-02]
  const gesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = event.translationX;
    })
    .onEnd((event) => {
      if (Math.abs(event.translationX) > 150) {
        translateX.value = withSpring(
          event.translationX > 0 ? width : -width, 
          {}, 
          () => runOnJS(nextCard)()
        );
      } else {
        translateX.value = withSpring(0);
      }
    });

    const animatedStyle = useAnimatedStyle(() => {
        // 🟢 Green for Right, 🔴 Red for Left
        const backgroundColor = translateX.value > 0 ? '#10b981' : '#ef4444'; 
        const opacity = Math.min(Math.abs(translateX.value) / 150, 0.4);
      
        return {
          transform: [
            { translateX: translateX.value },
            { rotate: `${translateX.value / 20}deg` }
          ],
          // This adds a glowing border effect as they swipe
          shadowColor: backgroundColor,
          shadowOpacity: opacity,
        };
      });

  const current = QUIZ_DATA[currentIndex];

  return (
    <View className="flex-1 bg-cinema-950 items-center justify-center px-6">
      <View className="absolute top-16 items-center">
        <Text className="text-corn font-black text-xs uppercase tracking-[5px]">Find Your Tribe</Text>
        <Text className="text-white text-3xl font-black italic mt-2">GTC VIBE CHECK</Text>
      </View>

      {/* 🛠️ GestureDetector replaces the old PanGestureHandler [cite: 2026-02-02] */}
      <GestureDetector gesture={gesture}>
        <Animated.View 
          style={animatedStyle} 
          className={`bg-cinema-900 w-full h-[450px] rounded-[40px] border-4 ${current.color} items-center justify-center p-8 shadow-2xl`}
        >
          <Image source={current.mascot} className="w-48 h-48 mb-8" resizeMode="contain" />
          <Text className="text-white text-3xl font-black text-center">{current.question}</Text>
          <View className="mt-8 flex-row items-center bg-cinema-950 px-4 py-2 rounded-full">
            <Text className="text-slate-400 font-bold uppercase text-[10px]">Swipe to choose</Text>
          </View>
        </Animated.View>
      </GestureDetector>

      <View className="absolute bottom-20 flex-row gap-2">
        {QUIZ_DATA.map((_, i) => (
          <View key={i} className={`h-1.5 w-8 rounded-full ${i === currentIndex ? 'bg-corn' : 'bg-cinema-800'}`} />
        ))}
      </View>
    </View>
  );
}