import { StyleSheet, Text, View } from 'react-native'
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
    padding: 12,
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderWidth: 2,
    borderColor: '#ddb52f',
  }
})