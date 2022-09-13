import React from 'react';
import { View, ActivityIndicator } from 'react-native'
import { NavigationContainer } from "@react-navigation/native"
import { useAuth } from "../hooks/auth"

import { AppRoutes } from "./app.router"
import { AuthRoutes } from "./auth.routes"

export const Routes = () => {
  const { user, isUser } = useAuth()

  if(isUser){
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    )
  }

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRoutes />}
    </NavigationContainer>
  )
}