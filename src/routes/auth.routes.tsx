import React from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { SignIn } from "../screens/SignIn"

const { Navigator, Screen } = createNativeStackNavigator()

export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name='welcome' component={SignIn} />
    </Navigator>
  )
}