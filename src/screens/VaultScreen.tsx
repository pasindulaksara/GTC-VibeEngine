import React from 'react';
import { View, Text, FlatList, Image, SafeAreaView, TouchableOpacity } from 'react-native';

const VAULT_DATA = [
  { id: '1', title: 'The Dark Knight', rating: 9.0, poster: '/qJ2tW6WMUD6M2sD3haM4kthOEEz.jpg' },
  { id: '2', title: 'Inception', rating: 8.8, poster: '/edv3bs1vOTaypB606bbHTdQAlga.jpg' },
];

export default function VaultScreen() {
  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      
      {/* 🔒 HEADER [cite: 2026-02-02] */}
      <View className="mt-8 mb-8 flex-row items-center justify-between">
        <View>
          <Text className="text-corn font-black text-xs uppercase tracking-[5px]">Digital Collection</Text>
          <Text className="text-white text-3xl font-black italic">THE VAULT</Text>
        </View>
        <View className="bg-cinema-900 p-3 rounded-2xl border border-cinema-800">
           <Text className="text-xl">🔒</Text>
        </View>
      </View>

      {/* 🖼️ VAULT GRID [cite: 2026-02-02] */}
      <FlatList
        data={VAULT_DATA}
        numColumns={2}
        keyExtractor={(item) => item.id}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        renderItem={({ item }) => (
          <TouchableOpacity className="w-[48%] mb-6">
            <View className="h-60 bg-cinema-900 rounded-[30px] border border-cinema-800 overflow-hidden shadow-2xl">
              <Image 
                source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster}` }} 
                className="h-full w-full"
                resizeMode="cover"
              />
              <View className="absolute top-3 left-3 bg-black/60 px-2 py-1 rounded-lg">
                <Text className="text-white font-black text-[10px]">⭐ {item.rating}</Text>
              </View>
            </View>
            <Text className="text-white font-bold text-xs mt-3 px-1" numberOfLines={1}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />

    </SafeAreaView>
  );
}