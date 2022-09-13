import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Entypo} from '@expo/vector-icons';

type CustomButtomTabProps = {
  size: number
  color: string
  name: string
  focused: boolean
}

export const CustomButtomTab = ({ size, color, name, focused }: CustomButtomTabProps) => {
  return (
    <View style={styles.container}>
      {focused ? (
        <>
          <Entypo name='home' color={color} size={size} />
        </>
      ) : (
        <>
          <Entypo name='home' color={color} size={size} />
        </>
      )}
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    borderBottomColor: '#FE642E',
    fontSize: 13,
    color: '#fff',
    marginBottom: 4,
    marginTop: 3,
  }
})
