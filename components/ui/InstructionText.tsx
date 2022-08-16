import { StyleProp, StyleSheet, Text, TextStyle } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface InstructionTextProps {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}

export default function InstructionText({ children, style }: InstructionTextProps) {
  return (
    <Text style={[styles.instructionText, style]}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  instructionText: {
    color: Colors.accent500,
    fontSize: 24
  },
})