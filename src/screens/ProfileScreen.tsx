import React from 'react';
import { View, Text, ScrollView, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const BADGES = [
  { id: '1', name: 'Hype Beast', icon: '🔥', level: 'Lvl 3' },
  { id: '2', name: 'Brainiac', icon: '🧠', level: 'Lvl 1' },
  { id: '3', name: 'Night Owl', icon: '🦉', level: 'Locked' },
];

export default function ProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950">
      <ScrollView className="px-6" showsVerticalScrollIndicator={false}>
        
        {/* 👤 1. USER HEADER [cite: 2026-02-02] */}
        <View className="items-center mt-10 mb-8">
          <View className="h-32 w-32 rounded-full border-4 border-corn p-1 mb-4 shadow-2xl">
            <Image 
              source={require('../../assets/1.png')} 
              className="h-full w-full rounded-full bg-cinema-900" 
            />
          </View>
          <Text className="text-white text-3xl font-black italic">PASINDU L.</Text>
          <Text className="text-corn font-black text-xs uppercase tracking-[3px] mt-1">Cinephile Elite</Text>
        </View>

        {/* 📊 2. QUICK STATS [cite: 2026-02-02] */}
        <View className="flex-row justify-between bg-cinema-900 rounded-[35px] p-6 mb-10 border border-cinema-800">
          <View className="items-center border-r border-cinema-800 flex-1">
            <Text className="text-white font-black text-xl">42</Text>
            <Text className="text-slate-500 font-bold text-[8px] uppercase">Vaulted</Text>
          </View>
          <View className="items-center border-r border-cinema-800 flex-1">
            <Text className="text-white font-black text-xl">128</Text>
            <Text className="text-slate-500 font-bold text-[8px] uppercase">Buried</Text>
          </View>
          <View className="items-center flex-1">
            <Text className="text-corn font-black text-xl">1.2k</Text>
            <Text className="text-slate-500 font-bold text-[8px] uppercase">XP</Text>
          </View>
        </View>

        {/* 🎖️ 3. BADGE WALL [cite: 2026-02-02] */}
        <Text className="text-white font-black text-lg mb-6 italic tracking-tight">Trophy Room</Text>
        <View className="flex-row flex-wrap justify-between gap-y-6">
          {BADGES.map((badge) => (
            <View key={badge.id} className="w-[45%] items-center bg-cinema-900 rounded-[30px] p-5 border border-cinema-800 shadow-xl">
              <View className={`h-16 w-16 rounded-full items-center justify-center mb-3 ${badge.level === 'Locked' ? 'bg-cinema-950 opacity-20' : 'bg-cinema-800'}`}>
                <Text className="text-3xl">{badge.icon}</Text>
              </View>
              <Text className="text-white font-black text-[10px] uppercase tracking-tighter text-center">{badge.name}</Text>
              <Text className="text-corn font-bold text-[8px] mt-1">{badge.level}</Text>
            </View>
          ))}
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}