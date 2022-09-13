import React from 'react';
import { View } from "react-native"
import { styles } from './styles';

type Props = {
  children: React.ReactNode;
}

export const Backgruond = ({children}: Props) => {
  return (
    <View  style={styles.container}>
      {children}
    </View>
  )
}