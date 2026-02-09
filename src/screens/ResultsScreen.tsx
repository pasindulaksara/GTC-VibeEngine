import React from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

// 🍿 Sample UI Data (to be replaced by TMDB later) [cite: 2026-01-29]
const MOCK_MOVIES = [
  { id: '1', title: 'The Dark Knight', rating: 9.0, vibe: '🔥 HYPE', color: 'text-vibe-hype' },
  { id: '2', title: 'Inception', rating: 8.8, vibe: '🧠 SMART', color: 'text-indigo-400' },
  { id: '3', title: 'Interstellar', rating: 8.7, vibe: '😭 FEELS', color: 'text-vibe-feels' },
  { id: '4', title: 'The Matrix', rating: 8.7, vibe: '🔥 HYPE', color: 'text-vibe-hype' },
];

export default function ResultsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-4">
      
      {/* 🧭 SLIM HEADER [cite: 2026-02-02] */}
      <View className="flex-row items-center justify-between py-6">
        <View>
          <Text className="text-corn font-black text-[10px] uppercase tracking-widest">Results for</Text>
          <Text className="text-white text-2xl font-black italic">🔥 Hype Vibe</Text>
        </View>
        <Image source={require('../../assets/1.png')} className="h-10 w-10 rounded-full border border-corn" />
      </View>

      {/* 🖼️ THE MOVIE GRID [cite: 2026-01-29, 2026-02-02] */}
      <FlatList
        data={MOCK_MOVIES}
        numColumns={2}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity className="w-[48%] mb-6">
            <View className="relative">
              {/* 🎬 MOVIE POSTER */}
              <View className="h-64 w-full bg-cinema-900 rounded-[30px] border border-cinema-800 overflow-hidden shadow-2xl">
                <View className="items-center justify-center flex-1">
                   <Text className="text-white opacity-20 text-xs">Poster Loading...</Text>
                </View>
              </View>

              {/* ⭐ IMDb FLOATING BADGE [cite: 2026-01-29, 2026-02-02] */}
              <View className="absolute top-3 right-3 bg-[#f5c518] px-2 py-1 rounded-lg flex-row items-center shadow-lg">
                <Text className="text-black font-black text-[8px] mr-1">IMDb</Text>
                <Text className="text-black font-black text-[10px]">{item.rating}</Text>
              </View>
            </View>

            {/* 🏷️ MOVIE INFO */}
            <View className="mt-3 px-1">
              <Text className="text-white font-bold text-sm mb-1" numberOfLines={1}>{item.title}</Text>
              <View className="flex-row items-center">
                <Text className={`font-black text-[10px] tracking-tighter uppercase ${item.color}`}>
                  {item.vibe}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  );
}