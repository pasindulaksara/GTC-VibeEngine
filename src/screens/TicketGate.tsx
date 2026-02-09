import React from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native';

export default function TicketGate({ navigation }: any) {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 items-center justify-center px-8">
      
      {/* 🎫 1. THE TICKET VISUAL [cite: 2026-02-02] */}
      <View className="items-center mb-12">
        <View className="bg-corn w-24 h-24 rounded-full items-center justify-center mb-6 shadow-2xl shadow-corn/40">
           <Text className="text-4xl">🎫</Text>
        </View>
        <Text className="text-white text-3xl font-black italic text-center">TICKET GATE</Text>
        <Text className="text-slate-400 font-bold text-center mt-2 px-4">
          Unlocking your exclusive trailer access...
        </Text>
      </View>

      {/* 📺 2. THE AD PLACEHOLDER [cite: 2026-02-02] */}
      <View className="w-full bg-cinema-900 border-2 border-dashed border-cinema-800 rounded-[40px] p-10 items-center mb-10">
        <Text className="text-corn font-black text-[10px] uppercase tracking-[5px] mb-4">Sponsored Content</Text>
        <View className="h-32 w-full bg-cinema-800 rounded-2xl items-center justify-center">
            <Text className="text-slate-500 font-bold text-xs uppercase italic">AdMob Placeholder</Text>
        </View>
        <Text className="text-slate-500 text-[10px] text-center mt-4 italic">
          Trailer will play automatically after this short message.
        </Text>
      </View>

      {/* 🎮 3. CONTROLS [cite: 2026-02-02] */}
      <TouchableOpacity 
        onPress={() => navigation.goBack()}
        className="bg-cinema-800 px-8 py-4 rounded-full border border-cinema-700"
      >
        <Text className="text-white font-black text-xs uppercase tracking-widest">Cancel & Return</Text>
      </TouchableOpacity>

      {/* 🎭 HEADER MASCOT [cite: 2026-02-02] */}
      <View className="absolute top-16 right-8">
        <Image source={require('../../assets/6.png')} className="h-12 w-12 opacity-50" />
      </View>

    </SafeAreaView>
  );
}