import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const MovieDetial = () => {
  return (
   <LinearGradient
    colors={["#1A2A6C", "#B21F1F", "#FDBB2D"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={{ flex: 1, position: 'relative'}}
   >

   </LinearGradient>
  )
}

export default MovieDetial