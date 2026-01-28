import "./global.css"; // 🛑 REQUIRED FOR TAILWIND
import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image, FlatList, ActivityIndicator, SafeAreaView } from 'react-native';
import { fetchTrendingMovies } from './src/services/tmdb'; // Import your logic
import { VIBE_THEMES, GENRE_MAP, GENRES } from './src/constants/vibes';

export default function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      const data = await fetchTrendingMovies();
      setMovies(data);
      setLoading(false);
    };
    loadData();
  }, []);

  // 🧠 Logic for movie feelings (Vibes) [cite: 2026-01-28]
  const getVibe = (ids: number[]) => {
    if (!ids) return VIBE_THEMES.CHILL;
    if (ids.includes(28) || ids.includes(12)) return VIBE_THEMES.HYPE;
    if (ids.includes(10749)) return VIBE_THEMES.HAPPY;
    if (ids.includes(18)) return VIBE_THEMES.FEELS;
    if (ids.includes(27)) return VIBE_THEMES.SCARED;
    return VIBE_THEMES.CHILL;
  };

  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-4 pt-10">
      {/* 🍿 HEADER */}
      <View className="flex-row items-center justify-between mb-8">
        <Text className="text-4xl font-black text-white italic tracking-tighter">GTC</Text>
        <Image 
          source={require('./assets/1.png')} 
          className="h-10 w-10 rounded-full border border-corn" 
        />
      </View>

      {/* 🏛️ CATEGORY BAR */}
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className="flex-none mb-10">
          {GENRES.map((genre) => (
            <TouchableOpacity key={genre} className="mr-3 px-6 py-2 rounded-2xl bg-cinema-900 border border-cinema-800">
              <Text className="text-white font-medium">{genre}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {loading ? (
        <ActivityIndicator color="#FFD700" size="large" className="mt-20" />
      ) : (
        <FlatList
          data={movies}
          keyExtractor={(item: any) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            const vibe = getVibe(item.genre_ids);
            const firstId = item.genre_ids?.[0];
            const genreName = firstId ? (GENRE_MAP[firstId] || "Movie") : "Trending";

            return (
              <View className="bg-cinema-900 rounded-3xl p-4 border border-cinema-800 mb-4 flex-row gap-4 shadow-xl">
                {/* 🎞️ MOVIE POSTER [cite: 2026-01-28] */}
                <Image 
                  source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }} 
                  className="h-32 w-24 rounded-2xl bg-slate-800 shadow-2xl"
                />
                
                <View className="flex-1 justify-center">
                  <Text className="text-white text-lg font-black mb-1" numberOfLines={1}>
                    {item.title}
                  </Text>
                  
                  {/* ⭐ IMDb RATING */}
                  <View className="flex-row items-center mb-3">
                    <View className="bg-[#f5c518] px-1.5 py-0.5 rounded-sm mr-2">
                      <Text className="text-[10px] font-black text-black">IMDb</Text>
                    </View>
                    <Text className="text-white font-bold text-xs">{item.vote_average.toFixed(1)}</Text>
                  </View>

                  {/* 😊 VIBE PILL */}
                  <View className={`self-start px-3 py-1.5 rounded-full border ${vibe.border} bg-cinema-950 flex-row items-center`}>
                    <Text className="mr-2 text-base">{vibe.emoji}</Text>
                    <Text className={`font-black uppercase text-[9px] tracking-tighter ${vibe.color}`}>
                      {genreName} • {vibe.label}
                    </Text>
                  </View>
                </View>
              </View>
            );
          }}
        />
      )}
    </SafeAreaView>
  );
}