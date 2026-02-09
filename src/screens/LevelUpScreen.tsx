import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function LevelUpScreen({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 items-center justify-center px-8">
      
      {/* 🎇 1. CELEBRATION EFFECT [cite: 2026-02-02] */}
      <View className="absolute inset-0 items-center justify-center opacity-20">
        <Text className="text-[200px] text-corn font-black italic">LVL 5</Text>
      </View>

      {/* 🎖️ 2. THE REWARD [cite: 2026-02-02] */}
      <View className="items-center z-10">
        <View className="bg-corn w-40 h-40 rounded-full items-center justify-center mb-8 shadow-2xl shadow-corn/50 border-8 border-white/20">
           <Image source={require('../../assets/1.png')} className="h-28 w-28" />
        </View>
        
        <Text className="text-corn font-black text-xs uppercase tracking-[10px] mb-4">New Rank Unlocked</Text>
        <Text className="text-white text-5xl font-black italic text-center mb-6">CINEPHILE ELITE</Text>
        
        <View className="bg-cinema-900 px-6 py-4 rounded-3xl border border-cinema-800 mb-12">
          <Text className="text-slate-400 font-bold text-sm text-center">
            You just buried your 100th movie in the Graveyard! ⚰️
          </Text>
        </View>
      </View>

      {/* 🎮 3. ACTION [cite: 2026-02-02] */}
      <TouchableOpacity 
        onPress={() => navigation.navigate('Profile')}
        className="w-full bg-white h-16 rounded-[30px] items-center justify-center shadow-2xl"
      >
        <Text className="text-black font-black uppercase text-sm tracking-widest">View My Badges</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className="mt-6"
      >
        <Text className="text-slate-500 font-black text-xs uppercase tracking-widest">Dismiss</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}