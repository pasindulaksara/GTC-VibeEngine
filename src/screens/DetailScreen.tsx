import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import { getPosterUrl, getBackdropUrl } from '../services/tmdb'; // 🔌 Your Engine [cite: 2026-01-29]

export default function DetailScreen({ route, navigation }: any) {
  // 1. CATCH THE REAL DATA [cite: 2026-02-02, 2026-02-10]
  const { movie } = route.params || {};

  // 🛡️ Safety: If no movie data, show error and back button
  if (!movie) {
    return (
      <SafeAreaView className="flex-1 bg-cinema-950 items-center justify-center">
        <Text className="text-white mb-4">No Movie Data Found</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} className="bg-corn p-4 rounded-xl">
          <Text className="font-black">GO BACK</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <ScrollView className="flex-1 bg-cinema-950" showsVerticalScrollIndicator={false}>
      
      {/* 🎬 1. REAL CINEMATIC BACKDROP [cite: 2026-01-29, 2026-02-10] */}
      <View className="relative h-[480px] w-full">
        <Image 
          source={{ uri: getBackdropUrl(movie.backdrop_path) || getPosterUrl(movie.poster_path) }} 
          className="absolute inset-0 w-full h-full bg-cinema-900"
          resizeMode="cover"
        />
        {/* Dark overlay for readability */}
        <View className="absolute inset-0 bg-black/40" />
        <View className="absolute inset-0 bg-gradient-to-t from-cinema-950 via-transparent to-transparent" />
        
        {/* BACK BUTTON */}
        <TouchableOpacity 
          onPress={() => navigation.goBack()}
          className="absolute top-12 left-6 bg-black/50 p-3 rounded-2xl border border-white/10"
        >
          <Text className="text-corn text-xl font-black">←</Text>
        </TouchableOpacity>

        <View className="absolute bottom-0 left-0 right-0 p-6">
          <Text className="text-white text-4xl font-black italic tracking-tighter mb-2 uppercase">
            {movie.title}
          </Text>
          <View className="flex-row items-center gap-3">
            <View className="bg-[#f5c518] px-2 py-1 rounded-md shadow-lg">
              <Text className="font-black text-[10px] text-black italic">RATING {movie.vote_average}</Text>
            </View>
            <Text className="text-white font-black text-xs uppercase tracking-widest">
              📅 {movie.release_date?.split('-')[0]}
            </Text>
          </View>
        </View>
      </View>

      <View className="px-6 pb-20">
        
        {/* 🧠 2. DYNAMIC VIBE INTELLIGENCE [cite: 2026-02-02, 2026-02-10] */}
        <View className="bg-cinema-900 border border-cinema-800 rounded-[35px] p-6 mb-8 shadow-2xl">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-corn font-black text-xs uppercase tracking-[4px]">Vibe Intelligence</Text>
            <Text className="text-xl">⚡</Text>
          </View>
          <Text className="text-white font-black text-xl mb-2 italic">Summary</Text>
          <Text className="text-slate-400 font-bold text-sm leading-6">
            {movie.overview || "No intelligence data available for this title yet."}
          </Text>
        </View>

        {/* 🕹️ 3. THE ACTION HUB [cite: 2026-02-02, 2026-02-10] */}
        <View className="flex-row gap-4">
          <TouchableOpacity 
            className="flex-1 bg-corn h-16 rounded-3xl items-center justify-center shadow-xl shadow-corn/20"
            onPress={() => alert('Saved to Vault!')}
          >
            <Text className="text-black font-black uppercase text-xs tracking-widest">Lock in Vault</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            onPress={() => navigation.navigate('TicketGate', { movie })}
            className="flex-1 bg-cinema-800 h-16 rounded-3xl items-center justify-center border border-cinema-700"
          >
            <Text className="text-white font-black uppercase text-xs tracking-widest">Watch Trailer</Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  );
}