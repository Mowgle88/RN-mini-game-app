import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface TitleProps {
  children?: React.ReactNode,
}

export default function Title({ children }: TitleProps) {
  return (
    <Text style={styles.title}>{children}</Text>
  )
}

const styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    padding: 12,
    fontSize: 24,
    // fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    // borderWidth: Platform.OS === 'android' ? 2 : 0,
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: 'white',
    maxWidth: '80%'
  }
})