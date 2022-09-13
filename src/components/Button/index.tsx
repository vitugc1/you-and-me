import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps, View } from "react-native"
import { styles } from './styles';

type Props = TouchableOpacityProps & {
  text: string;
  loading: boolean;
}

export const Button = ({ text, loading, ...rest }: Props) => {
  return (
    <>
      {loading ? (
        <View style={styles.button}>
          <ActivityIndicator size="small" color="#fff" />
        </View>
      ): (
        <TouchableOpacity style={styles.button} {...rest}>
          <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
      )}
    </>
   
  )
}