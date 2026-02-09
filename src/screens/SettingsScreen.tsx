import React from 'react';
import { View, Text, ScrollView, Switch, TouchableOpacity, SafeAreaView } from 'react-native';

export default function SettingsScreen() {
  const [isSafetyOn, setIsSafetyOn] = React.useState(true);

  return (
    <SafeAreaView className="flex-1 bg-cinema-950 px-6">
      <ScrollView showsVerticalScrollIndicator={false}>
        
        {/* 🛡️ 1. THE BOUNCER (SAFETY) [cite: 2026-02-02] */}
        <View className="mt-10 mb-10">
          <Text className="text-corn font-black text-xs uppercase tracking-[5px] mb-6">Security Protocols</Text>
          <View className="bg-cinema-900 rounded-[35px] p-6 border border-cinema-800 shadow-2xl">
            <View className="flex-row justify-between items-center mb-6">
              <View className="flex-1 mr-4">
                <Text className="text-white font-black text-lg italic">The Bouncer</Text>
                <Text className="text-slate-500 text-[10px] font-bold mt-1 leading-4">
                  Enable high-level content filtering for family-friendly viewing. [cite: 2026-02-02]
                </Text>
              </View>
              <Switch 
                value={isSafetyOn} 
                onValueChange={setIsSafetyOn}
                trackColor={{ false: '#1e293b', true: '#facc15' }}
              />
            </View>
            <View className="h-[1px] bg-cinema-800 w-full mb-6" />
            <TouchableOpacity className="flex-row justify-between items-center">
              <Text className="text-slate-300 font-bold text-sm">Content Restrictions</Text>
              <Text className="text-corn font-black text-xs">STRICT</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🧠 2. VIBE PREFERENCES [cite: 2026-02-02] */}
        <View className="mb-10">
          <Text className="text-slate-500 font-black text-xs uppercase tracking-[5px] mb-6">Personalization</Text>
          <View className="bg-cinema-900 rounded-[35px] p-6 border border-cinema-800">
            <TouchableOpacity className="flex-row justify-between items-center mb-8">
              <Text className="text-white font-bold text-sm">My Tribe Identity</Text>
              <Text className="text-slate-500 font-black text-xs">ACHIEVER</Text>
            </TouchableOpacity>
            <TouchableOpacity className="flex-row justify-between items-center">
              <Text className="text-white font-bold text-sm">Reset Quiz Data</Text>
              <Text className="text-red-500 font-black text-[10px]">WIPE DATA</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* 🚪 3. LOGOUT [cite: 2026-02-02] */}
        <TouchableOpacity className="w-full h-16 rounded-3xl border border-red-900/30 items-center justify-center mb-10">
          <Text className="text-red-500 font-black uppercase text-xs tracking-widest">Destroy Session</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  );
}