import { StyleSheet, Text, View, Dimensions, StyleProp, TextStyle } from 'react-native'
import React from 'react'
import Colors from '../../constants/colors'

interface NumberContainerProps {
  children: React.ReactNode,
  style?: StyleProp<TextStyle>
}

export default function NumberContainer({ children, style }: NumberContainerProps) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    margin: deviceWidth < 380 ? 12 : 24,
    padding: deviceWidth < 380 ? 12 : 24,
    borderWidth: 4,
    borderColor: Colors.accent500,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  numberText: {
    color: Colors.accent500,
    fontSize: deviceWidth < 380 ? 28 : 36,
    // fontWeight: 'bold'
    fontFamily: 'open-sans-bold'
  }
})