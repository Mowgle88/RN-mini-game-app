import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Alert, FlatList, useWindowDimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NumberContainer from '../components/game/NumberContainer';
import Card from '../components/ui/Card';
import InstructionText from '../components/ui/InstructionText';
import PrimaryButton from '../components/ui/PrimaryButton';
import Title from '../components/ui/Title';
import GuessLogItem from '../components/game/GuessLogItem';

interface GameScreenProps {
  userNumber: number,
  onGameOver: (numberOfRounds: number) => void
}

function generateRandomBetween(min: number, max: number, exclude: number): number {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundary = 1;
let maxBoundary = 100;

export default function GameScreen(this: any, { userNumber, onGameOver }: GameScreenProps) {

  const initialGuess = generateRandomBetween(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const { width, height } = useWindowDimensions();

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRounds.length);
    }
  }, [currentGuess, userNumber, onGameOver])

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, [])

  function nextGuessHandler(direction: string) {

    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", "You know this is wrong...", [
        { text: 'Sorry', style: 'cancel' }
      ])
      return;
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess);
    setCurrentGuess(newRndNumber);
    setGuessRounds((prevGuessRounds) => [...prevGuessRounds, newRndNumber])
  }

  // const guessRoundsListLength = guessRounds.length;

  let content = (
    <>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.instructionText}>Hidher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </>
  );

  if (width > 400) {
    content = (
      <>
        <InstructionText style={styles.instructionText}>Hidher or lower?</InstructionText>
        <View style={styles.buttonsContainerWide}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'lower')}>
              <Ionicons name='md-remove' size={24} color='white' />
            </PrimaryButton>
          </View>
          <NumberContainer style={styles.numberContainer}>{currentGuess}</NumberContainer>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, 'greater')}>
              <Ionicons name='md-add' size={24} color='white' />
            </PrimaryButton>
          </View>
        </View>
      </>
    );
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {content}
      <View style={styles.flatListContainer}>
        <FlatList
          data={guessRounds}
          renderItem={(itemData) => (
            <GuessLogItem
              // roundNumber={guessRoundsListLength - itemData.index}
              roundNumber={itemData.index + 1}
              guess={itemData.item}
            />
          )}
          keyExtractor={(item) => `${item}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
  },
  instructionText: {
    marginBottom: 12
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  },
  buttonsContainerWide: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  flatListContainer: {
    flex: 1,
    paddingVertical: 16
  },
  numberContainer: {
    margin: 5,
    padding: 5
  }
})