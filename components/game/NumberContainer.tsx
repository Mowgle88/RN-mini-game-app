import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface NumberContainerProps {
  children: React.ReactNode
}

export default function NumberContainer({ children }: NumberContainerProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 25,
    padding: 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontSize: 36,
    fontWeight: 'bold'
  }
})