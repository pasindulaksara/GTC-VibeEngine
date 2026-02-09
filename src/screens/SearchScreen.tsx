import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import { fetchTrendingMovies, searchMovies, getPosterUrl } from '../services/tmdb';

export default function SearchScreen({ navigation }: any) {
  const [query, setQuery] = useState('');
  const [topMovies, setTopMovies] = useState([]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    const loadTop = async () => {
      const data = await fetchTrendingMovies();
      setTopMovies(data.slice(0, 5)); // Populate "Top in Sri Lanka"
    };
    loadTop();
  }, []);

  const handleSearch = async (text: string) => {
    setQuery(text);
    if (text.length > 2) {
      const data = await searchMovies(text);
      setResults(data);
    } else {
      setResults([]);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      <Text className="text-corn font-black text-[10px] uppercase tracking-[4px] mt-6 mb-4">Omni-Intent Search</Text>
      
      {/* SEARCH INPUT */}
      <View className="border-2 border-corn rounded-[30px] p-6 mb-8 bg-cinema-900/50">
        <TextInput
          className="text-white text-2xl font-black"
          placeholder="What's the vibe?"
          placeholderTextColor="#475569"
          value={query}
          onChangeText={handleSearch}
        />
      </View>

      {/* TOP IN SRI LANKA (From your screenshot) */}
      {!query && (
        <View>
          <View className="flex-row justify-between items-center mb-6">
            <Text className="text-white text-xl font-black">Top in Sri Lanka 🇱🇰</Text>
            <Text className="text-corn font-bold text-xs">VIEW ALL</Text>
          </View>
          <FlatList
            horizontal
            data={topMovies}
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item: any) => item.id.toString()}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => navigation.navigate('Detail', { movie: item })}>
                <Image 
                  source={{ uri: getPosterUrl(item.poster_path) }} 
                  className="h-52 w-36 rounded-[25px] mr-4 bg-cinema-900 border border-cinema-800"
                />
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* SEARCH RESULTS */}
      <FlatList
        data={results}
        keyExtractor={(item: any) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity 
            className="flex-row items-center mb-4 bg-cinema-900 p-4 rounded-3xl"
            onPress={() => navigation.navigate('Detail', { movie: item })}
          >
            <Image source={{ uri: getPosterUrl(item.poster_path) }} className="h-20 w-14 rounded-xl mr-4" />
            <Text className="text-white font-bold">{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
}