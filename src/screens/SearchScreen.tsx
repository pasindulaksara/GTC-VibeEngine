import React from 'react';
import { View, Text, TextInput, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SearchScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      {/* 🍿 1. INTENT INPUT [cite: 2026-02-02] */}
      <View className="mt-8 mb-8">
        <Text className="text-corn font-black text-xs uppercase tracking-[5px] mb-2">Omni-Intent Search</Text>
        <View className="bg-cinema-900 rounded-3xl p-5 border-2 border-corn shadow-2xl">
          <TextInput 
            placeholder="Tell Pop what's on your mind..." 
            placeholderTextColor="#64748b"
            multiline
            className="text-white font-bold text-xl min-h-[100px] text-left align-top"
          />
        </View>
      </View>

      {/* 🧠 2. SUGGESTED INTENTS [cite: 2026-02-02] */}
      <View className="mb-10">
        <Text className="text-slate-500 font-bold text-sm mb-4">Try something like...</Text>
        <View className="flex-row flex-wrap gap-3">
          {[
            "Rainy Friday Night 🌧️", 
            "Mind-Bending Noir 🧠", 
            "LOR 2 Saga Link 💍", 
            "Adrenaline Spike 🔥"
          ].map((intent) => (
            <TouchableOpacity key={intent} className="bg-cinema-900 px-4 py-3 rounded-2xl border border-cinema-800">
              <Text className="text-white font-medium text-xs">{intent}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {/* 🎭 3. TRENDING NOW (BY COUNTRY) [cite: 2026-02-02] */}
      <View>
        <View className="flex-row items-center justify-between mb-4">
          <Text className="text-white font-black text-lg">Top in Sri Lanka 🇱🇰</Text>
          <Text className="text-corn font-bold text-xs">VIEW ALL</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {[1, 2, 3, 4].map((i) => (
            <View key={i} className="mr-4">
              <View className="h-44 w-32 bg-cinema-900 rounded-3xl border border-cinema-800" />
              <View className="h-2 w-16 bg-cinema-800 rounded-full mt-3" />
            </View>
          ))}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}