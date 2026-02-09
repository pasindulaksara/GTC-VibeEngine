import "./global.css";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';

// 🍿 Core Screens
import SplashScreen from "./src/screens/SplashScreen";
import QuizScreen from "./src/screens/QuizScreen";
import HomeScreen from "./src/screens/HomeScreen";
import ResultsScreen from "./src/screens/ResultsScreen"; 

// 🆕 New Testing Screens [cite: 2026-02-02]
import SearchScreen from "./src/screens/SearchScreen"; 
import DetailScreen from "./src/screens/DetailScreen"; 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      {/* 🚀 Change to "Search" or "Detail" to test the new UI instantly [cite: 2026-02-02] */}
      <Stack.Navigator 
        initialRouteName="Search" 
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Quiz" component={QuizScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Results" component={ResultsScreen} />
        
        {/* 🍿 Registering the new screens in the stack [cite: 2026-02-02] */}
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}