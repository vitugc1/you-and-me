import React from "react"
import { Text } from "react-native"

import { Backgruond } from "../../components/Background"
import { Card } from "../../components/Card"
import { useAuth } from "../../hooks/auth"

export const Home = () => {
  return (
    <Backgruond>
      <Card />
    </Backgruond>
  )
}