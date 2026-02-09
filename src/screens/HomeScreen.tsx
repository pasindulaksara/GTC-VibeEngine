import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, ScrollView, Image, FlatList } from 'react-native';
import { fetchTrendingMovies, getPosterUrl } from '../services/tmdb'; // 🔌 Your Engine [cite: 2026-01-29]

const VIBES = [
  { id: 28, emoji: '🔥', label: 'HYPE BEAST' },
  { id: 878, emoji: '🧠', label: 'BRAINIAC' },
  { id: 27, emoji: '🦉', label: 'NIGHT OWL' },
  { id: 35, emoji: '😂', label: 'JESTER' },
];

export default function HomeScreen({ navigation }: any) {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    const loadTrending = async () => {
      const data = await fetchTrendingMovies();
      setTrending(data.slice(0, 10)); // Top 10 trending
    };
    loadTrending();
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-cinema-950">
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 🍿 HEADER */}
        <View className="px-6 mt-10 mb-8">
          <Text className="text-corn font-black text-xs uppercase tracking-[5px]">Grab The Corn</Text>
          <Text className="text-white text-5xl font-black italic mt-2">VIBE PULSE</Text>
        </View>

        {/* 🏎️ TRENDING HORIZONTAL LIST [cite: 2026-01-29] */}
        <View className="mb-10">
          <Text className="px-6 text-slate-500 font-black text-[10px] uppercase tracking-widest mb-4">Trending Now</Text>
          <FlatList
            horizontal
            data={trending}
            keyExtractor={(item: any) => item.id.toString()}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingLeft: 24 }}
            renderItem={({ item }) => (
              <TouchableOpacity 
                onPress={() => navigation.navigate('Detail', { movie: item })}
                className="mr-4"
              >
                <Image 
                  source={{ uri: getPosterUrl(item.poster_path) }} 
                  className="h-60 w-40 rounded-[30px] bg-cinema-900 border border-cinema-800"
                />
              </TouchableOpacity>
            )}
          />
        </View>

        {/* 🎭 VIBE GRID */}
        <View className="px-6 flex-row flex-wrap justify-between mb-20">
          <Text className="w-full text-slate-500 font-black text-[10px] uppercase tracking-widest mb-4">Select Your Tribe</Text>
          {VIBES.map((vibe) => (
            <TouchableOpacity 
              key={vibe.id}
              onPress={() => navigation.navigate('Results', { genreId: vibe.id, vibeLabel: vibe.label })}
              className="w-[48%] bg-cinema-900 aspect-square rounded-[40px] mb-4 items-center justify-center border border-cinema-800 shadow-2xl"
            >
              <Text className="text-6xl mb-2">{vibe.emoji}</Text>
              <Text className="text-white font-black text-[10px] tracking-widest">{vibe.label}</Text>
            </TouchableOpacity>
          ))}
        </View>

      </ScrollView>

      {/* 🧭 NAVIGATION BAR */}
      <View className="flex-row justify-around p-8 bg-cinema-900/90 absolute bottom-0 w-full rounded-t-[50px] border-t border-cinema-800 backdrop-blur-md">
        <TouchableOpacity onPress={() => navigation.navigate('Vault')}><Text className="text-2xl">🔒</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}><Text className="text-2xl">🏠</Text></TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Profile')}><Text className="text-2xl">👤</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}