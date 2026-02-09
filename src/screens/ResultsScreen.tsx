import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, SafeAreaView, ActivityIndicator } from 'react-native';
import { fetchMoviesByGenre, getPosterUrl } from '../services/tmdb';

export default function ResultsScreen({ route, navigation }: any) {
  const { genreId, vibeLabel } = route.params;
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadData = async () => {
      // 🛡️ Fallback: If no genreId, fetch Trending instead of showing empty
      const idToFetch = genreId || 28; 
      const data = await fetchMoviesByGenre(idToFetch);
      
      if (data.length === 0) {
         const backup = await fetchTrendingMovies();
         setMovies(backup);
      } else {
         setMovies(data);
      }
      setLoading(false);
    };
    loadData();
  }, [genreId]);
  if (loading) return (
    <SafeAreaView className="flex-1 bg-cinema-950 items-center justify-center">
      <ActivityIndicator color="#facc15" size="large" />
    </SafeAreaView>
  );

  return (
    <SafeAreaView className="flex-1 bg-cinema-950">
      <View className="px-6 py-4 flex-row items-center">
        <TouchableOpacity onPress={() => navigation.goBack()} className="mr-4">
          <Text className="text-corn text-2xl font-black">←</Text>
        </TouchableOpacity>
        <Text className="text-white text-3xl font-black italic uppercase">{vibeLabel}</Text>
      </View>

      <FlatList
        data={movies}
        numColumns={2}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            className="w-[48%] m-1 mb-6"
            onPress={() => navigation.navigate('Detail', { movie: item })}
          >
            <Image 
              source={{ uri: getPosterUrl(item.poster_path) }} 
              className="h-72 w-full rounded-[30px] bg-cinema-900 border border-cinema-800"
            />
            <Text className="text-white font-black text-[10px] mt-3 uppercase px-2" numberOfLines={1}>
              {item.title}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingHorizontal: 16 }}
      />
    </SafeAreaView>
  );
}