import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import NumberContainer from '../components/game/NumberContainer';
import Title from '../components/ui/Title'

interface GameScreenProps {
  userNumber: number
}

function generateRandomBetween(min: number, max: number, exclude: number): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

export default function GameScreen({ userNumber }: GameScreenProps) {

  const initialGuess = generateRandomBetween(1, 100, userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24
  },
})