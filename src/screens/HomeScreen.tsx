import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, SafeAreaView, TextInput } from 'react-native';

// 🎭 Vibe Constants from the Bible [cite: 2026-02-01, 2026-02-02]
const VIBES = [
  { id: 'hype', emoji: '🔥', label: 'Hype', color: 'bg-vibe-hype' },
  { id: 'smart', emoji: '🧠', label: 'Smart', color: 'bg-indigo-600' },
  { id: 'feels', emoji: '😭', label: 'Feels', color: 'bg-vibe-happy' },
  { id: 'chill', emoji: '😊', label: 'Chill', color: 'bg-vibe-chill' },
];

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      
      {/* 🍿 1. CONVERSATIONAL HEADER [cite: 2026-02-02] */}
      <View className="mt-8 mb-10">
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-4xl font-black text-white italic tracking-tighter">GTC</Text>
          <Image source={require('../../assets/1.png')} className="h-12 w-12 rounded-full border-2 border-corn" />
        </View>
        <Text className="text-slate-400 text-lg font-bold">Yo, Pasindu! 👋</Text>
        <Text className="text-white text-3xl font-black leading-tight">What’s your vibe right now?</Text>
      </View>

      {/* 🔍 2. OMNI-INTENT SEARCH [cite: 2026-02-02] */}
      <View className="bg-cinema-900 rounded-3xl p-4 border border-cinema-800 flex-row items-center mb-10 shadow-xl">
        <Text className="text-2xl mr-3">🍿</Text>
        <TextInput 
          placeholder="I need a movie for a rainy night..." 
          placeholderTextColor="#64748b"
          className="text-white font-bold flex-1 text-lg"
        />
      </View>

      {/* 🎭 3. EMOJI VIBE BAR [cite: 2026-02-01] */}
      <View className="mb-10">
        <Text className="text-corn font-black text-xs uppercase tracking-[4px] mb-4">Select Feeling</Text>
        <View className="flex-row justify-between">
          {VIBES.map((v) => (
            <TouchableOpacity key={v.id} className="items-center">
              <View className={`${v.color} h-16 w-16 rounded-[24px] items-center justify-center shadow-lg`}>
                <Text className="text-3xl">{v.emoji}</Text>
              </View>
              <Text className="text-white font-bold mt-2 text-[10px] uppercase tracking-widest">{v.label}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 📅 4. FRIDAY NIGHT SPECIAL [cite: 2026-02-02] */}
      <View>
        <Text className="text-corn font-black text-xs uppercase tracking-[4px] mb-4">Weekly Special</Text>
        <TouchableOpacity className="bg-cinema-900 rounded-[40px] p-6 border border-cinema-800 overflow-hidden">
          <View className="flex-row justify-between items-start">
            <View className="flex-1">
              <Text className="text-vibe-hype font-black text-xs uppercase mb-1">Friday Night Movie</Text>
              <Text className="text-white text-2xl font-black leading-tight mb-4">The "Heart-Pounding" Collection</Text>
              <View className="bg-cinema-950 self-start px-4 py-2 rounded-full border border-cinema-800">
                <Text className="text-white font-bold text-[10px]">EXPLORE NOW →</Text>
              </View>
            </View>
            <View className="h-24 w-24 bg-cinema-800 rounded-3xl items-center justify-center">
              <Text className="text-4xl">🎬</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}