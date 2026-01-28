import "./global.css";
import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { VIBE_THEMES, GENRES } from './src/constants/vibes';

export default function App() {
  return (
    <View className="flex-1 bg-cinema-950 px-4 pt-16">
      {/* 🍿 HEADER */}
      <View className="flex-row items-center justify-between mb-8">
        <Text className="text-4xl font-black text-white italic tracking-tighter">GTC</Text>
        <View className="h-10 w-10 rounded-full bg-corn items-center justify-center">
          <Text className="font-bold">P</Text>
        </View>
      </View>

      {/* 🏛️ CLASSIC MODE (Genres) */}
      <Text className="text-slate-400 font-bold mb-3 uppercase tracking-widest text-xs">Classic Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-none mb-10">
        {GENRES.map((genre) => (
          <TouchableOpacity key={genre} className="mr-3 px-6 py-2 rounded-2xl bg-cinema-900 border border-cinema-800">
            <Text className="text-white font-medium">{genre}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* 🧪 THE TRICKY UX TRIAL (Feeling vs Genre) */}
      <Text className="text-slate-400 font-bold mb-4 uppercase tracking-widest text-xs">The Vibe Check (Trial)</Text>
      
      {/* CARD 1: HEARTFELT ROMANCE */}
      <View className="bg-cinema-900 rounded-3xl p-4 border border-cinema-800 mb-4">
        <View className="flex-row gap-4">
          <View className="h-32 w-24 bg-slate-800 rounded-xl overflow-hidden">
             <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/m03iE43vLktqfxTE0Znn97ds9LB.jpg' }} className="flex-1" />
          </View>
          <View className="flex-1 justify-center">
            <Text className="text-white text-xl font-bold mb-1">A Walk to Remember</Text>
            <Text className="text-slate-500 font-medium mb-3">Romance • 2002</Text>
            
            {/* THE FEELING PILL */}
            <View className={`self-start px-3 py-1 rounded-full border ${VIBE_THEMES.FEELS.border} bg-cinema-950 flex-row items-center`}>
              <Text className="mr-2 text-lg">{VIBE_THEMES.FEELS.emoji}</Text>
              <Text className={`font-bold uppercase text-[10px] ${VIBE_THEMES.FEELS.color}`}>
                {VIBE_THEMES.FEELS.label}
              </Text>
            </View>
          </View>
        </View>
      </View>

      {/* CARD 2: PURE JOY ANIMATION */}
      <View className="bg-cinema-900 rounded-3xl p-4 border border-cinema-800">
        <View className="flex-row gap-4">
          <View className="h-32 w-24 bg-slate-800 rounded-xl overflow-hidden">
             <Image source={{ uri: 'https://image.tmdb.org/t/p/w500/p978OuOs6Asv96v9CO9SAtvNIDS.jpg' }} className="flex-1" />
          </View>
          <View className="flex-1 justify-center">
            <Text className="text-white text-xl font-bold mb-1">Despicable Me</Text>
            <Text className="text-slate-500 font-medium mb-3">Animation • 2010</Text>
            
            {/* THE FEELING PILL */}
            <View className={`self-start px-3 py-1 rounded-full border ${VIBE_THEMES.HAPPY.border} bg-cinema-950 flex-row items-center`}>
              <Text className="mr-2 text-lg">{VIBE_THEMES.HAPPY.emoji}</Text>
              <Text className={`font-bold uppercase text-[10px] ${VIBE_THEMES.HAPPY.color}`}>
                {VIBE_THEMES.HAPPY.label}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}