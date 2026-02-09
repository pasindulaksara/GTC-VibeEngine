import "./global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// --- PHASE 1: THE SOUL [cite: 2026-02-02] ---
import SplashScreen from "./src/screens/SplashScreen";
import QuizScreen from "./src/screens/QuizScreen";

// --- PHASE 2: THE GRID [cite: 2026-02-02] ---
import HomeScreen from "./src/screens/HomeScreen";
import ResultsScreen from "./src/screens/ResultsScreen"; 
import SearchScreen from "./src/screens/SearchScreen"; 

// --- PHASE 3: THE CHOICE [cite: 2026-02-02] ---
import DetailScreen from "./src/screens/DetailScreen"; 
import TicketGate from "./src/screens/TicketGate";

// --- PHASE 4: OWNERSHIP [cite: 2026-02-02] ---
import VaultScreen from "./src/screens/VaultScreen"; 
import GraveyardScreen from "./src/screens/GraveyardScreen"; 

// --- PHASE 5: IDENTITY [cite: 2026-02-02] ---
import ProfileScreen from "./src/screens/ProfileScreen"; 
import LevelUpScreen from "./src/screens/LevelUpScreen"; 
import SettingsScreen from "./src/screens/SettingsScreen"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 🚀 Change to "Splash" for production, currently set to "Home" for testing [cite: 2026-01-28] */}
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{ headerShown: false }}
      >
        {/* THE SOUL */}
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        
        {/* THE GRID */}
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        <Stack.Screen name="Search" component={SearchScreen} />
        
        {/* THE CHOICE */}
        <Stack.Screen name="Detail" component={DetailScreen} />
        <Stack.Screen name="TicketGate" component={TicketGate} />
        
        {/* OWNERSHIP */}
        <Stack.Screen name="Vault" component={VaultScreen} />
        <Stack.Screen name="Graveyard" component={GraveyardScreen} />
        
        {/* IDENTITY */}
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="LevelUp" component={LevelUpScreen} />
        <Stack.Screen name="Settings" component={SettingsScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}