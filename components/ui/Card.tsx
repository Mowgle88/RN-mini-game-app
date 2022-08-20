import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface CardProps {
  children: React.ReactNode,
}

export default function Card({ children }: CardProps) {
  return (
    <View style={styles.card}>
      {children}
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  card: {
    marginTop: deviceWidth < 380 ? 18 : 36,
    marginHorizontal: 24,
    padding: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
})