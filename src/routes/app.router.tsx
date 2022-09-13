import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import { Home } from '../screens/Home';
import { Entypo } from '@expo/vector-icons'; 
import { Ionicons } from '@expo/vector-icons'; 

import { MaterialCommunityIcons } from '@expo/vector-icons'; 
import { Music } from '../screens/Music';
import { Movie } from '../screens/Movie';
import { Profile } from '../screens/Profile';

const { Navigator, Screen } = createMaterialBottomTabNavigator();

export const AppRoutes = () => {
  return (
    <Navigator
      activeColor="#6200EE" //  3e2465 6200EE BB86FC
      inactiveColor="#f0edf6"
      screenOptions={{ 
        tabBarColor: '#000',
      }}
    >
      <Screen
        name='home'
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="home" size={24} color={color} />
          ),
        }}
      />
      <Screen 
        name='music' 
        component={Music} 
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="musical-note" size={24} color={color} />
          )
        }}
      />
      <Screen 
        name='movies' 
        component={Movie}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="movie-open-edit" size={24} color={color} />
          )
        }}
      />
      <Screen 
        name='profile' 
        component={Profile}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="user" size={24} color={color} />
          )
        }}
      />
    </Navigator>
  )
}