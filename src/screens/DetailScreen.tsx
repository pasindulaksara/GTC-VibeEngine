import React from 'react';
import { View, Text, Image, ScrollView, SafeAreaView, TouchableOpacity } from 'react-native';

export default function DetailScreen() {
  return (
    <ScrollView className="flex-1 bg-cinema-950" showsVerticalScrollIndicator={false}>
      {/* 🎬 1. BACKDROP & POSTER [cite: 2026-01-29] */}
      <View className="relative h-[450px] w-full bg-cinema-900">
        <View className="absolute inset-0 bg-black/40 z-10" />
        {/* Placeholder for real TMDB Backdrop */}
        <View className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <Text className="text-white text-4xl font-black italic mb-2">The Dark Knight</Text>
          <View className="flex-row items-center gap-3">
            <View className="bg-[#f5c518] px-2 py-1 rounded-md"><Text className="font-black text-[10px]">IMDb 9.0</Text></View>
            <Text className="text-vibe-hype font-black text-xs uppercase">🔥 Action • Hype</Text>
          </View>
        </View>
      </View>

      <View className="p-6">
        {/* 🧠 2. THE BOREDOM METER [cite: 2026-02-02] */}
        <View className="bg-cinema-900 border border-cinema-800 rounded-3xl p-5 mb-6">
          <Text className="text-corn font-black text-[10px] uppercase tracking-widest mb-2">Vibe Intelligence</Text>
          <Text className="text-white font-bold text-lg mb-1">Warning: Adrenaline Spike ⚡</Text>
          <Text className="text-slate-400 text-sm leading-5">
            "People loved the non-stop action, but the pacing is intense. Do not watch if you're looking to chill." [cite: 2026-02-02]
          </Text>
        </View>

        {/* 🍿 3. THE SAGA LINKER (Your New Idea!) [cite: 2026-02-01] */}
        <View className="mb-6">
          <Text className="text-white font-black text-lg mb-4">Complete the Saga</Text>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {[1, 2, 3].map((i) => (
              <View key={i} className="mr-4 items-center">
                <View className="h-32 w-24 bg-cinema-900 rounded-2xl border border-cinema-800" />
                <Text className="text-slate-500 text-[10px] mt-2 font-bold">Part {i}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* 🕹️ 4. THE VAULT / GRAVEYARD BUTTONS [cite: 2026-02-02] */}
        <View className="flex-row gap-4 mb-10">
          <TouchableOpacity className="flex-1 bg-corn h-14 rounded-2xl items-center justify-center shadow-lg">
            <Text className="text-black font-black uppercase text-xs">Lock in Vault</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex-1 bg-cinema-800 h-14 rounded-2xl items-center justify-center border border-cinema-700">
            <Text className="text-white font-black uppercase text-xs">Watch Trailer</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}