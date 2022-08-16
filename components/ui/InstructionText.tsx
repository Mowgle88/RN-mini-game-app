import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface InstructionTextProps {
  children: React.ReactNode,
}

export default function InstructionText({ children }: InstructionTextProps) {
  return (
    <Text style={styles.instructionText}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
})