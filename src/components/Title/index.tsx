import React from 'react';
import { Text } from "react-native"
import { styles } from './styles';

export const Title = ({ text }: { text: string }) => {
  return (
    <Text style={styles.text}>{text}</Text>
  )
}