import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

interface GameOverScreenProps {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: () => void
}

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER</Title>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('../assets/images/success.png')} />
      </View>
      <Text style={styles.summaryText}>
        Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
      </Text>
      <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
    </View>
  )
}

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: deviceWidth < 380 ? 200 : 300,
    height: deviceWidth < 380 ? 200 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    borderRadius: deviceWidth < 380 ? 100 : 150,
    overflow: 'hidden',
    margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: deviceWidth < 380 ? 20 : 24,
    textAlign: 'center',
    marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})