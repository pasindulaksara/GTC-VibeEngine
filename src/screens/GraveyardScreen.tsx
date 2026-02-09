import React from 'react';
import { View, Text, FlatList, Image, SafeAreaView } from 'react-native';

const HISTORY_DATA = [
  { id: '1', title: 'The Matrix', date: 'Watched Feb 09', poster: '/f89U3Y9L9UnZYjhy9GfsS0XCDtm.jpg' },
  { id: '2', title: 'Interstellar', date: 'Watched Feb 05', poster: '/gEU2QniE6E77NI6vCU67oYvbpv2.jpg' },
];

export default function GraveyardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      
      {/* ⚰️ HEADER [cite: 2026-02-02] */}
      <View className="mt-8 mb-10 flex-row items-center justify-between">
        <View>
          <Text className="text-slate-500 font-black text-xs uppercase tracking-[5px]">Movie Identity</Text>
          <Text className="text-white text-3xl font-black italic">THE GRAVEYARD</Text>
        </View>
        <Text className="text-3xl opacity-40">⚰️</Text>
      </View>

      {/* 🎞️ TIMELINE LIST [cite: 2026-02-02] */}
      <FlatList
        data={HISTORY_DATA}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <View className="flex-row mb-8">
            {/* Timeline Line */}
            <View className="items-center mr-4">
              <View className="w-1 h-full bg-cinema-900 rounded-full" />
              <View className="absolute top-0 w-4 h-4 rounded-full bg-corn border-4 border-cinema-950" />
            </View>
            
            {/* Movie Info */}
            <View className="flex-1 flex-row bg-cinema-900 p-4 rounded-[25px] border border-cinema-800 items-center shadow-xl">
              <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w200${item.poster}` }} 
                className="h-20 w-14 rounded-xl mr-4"
                resizeMode="cover"
              />
              <View className="flex-1">
                <Text className="text-white font-black text-sm mb-1 uppercase tracking-tighter" numberOfLines={1}>{item.title}</Text>
                <Text className="text-slate-500 font-bold text-[10px]">{item.date}</Text>
              </View>
              <View className="bg-cinema-950 px-3 py-1 rounded-full">
                <Text className="text-slate-400 font-black text-[8px]">RIP</Text>
              </View>
            </View>
          </View>
        )}
      />

    </SafeAreaView>
  );
}