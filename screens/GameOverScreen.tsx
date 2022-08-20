import React from 'react';
import { StyleSheet, View, Image, Text, Dimensions, useWindowDimensions, ScrollView } from 'react-native';
import PrimaryButton from '../components/ui/PrimaryButton';

import Title from '../components/ui/Title';
import Colors from '../constants/colors';

interface GameOverScreenProps {
  roundsNumber: number,
  userNumber: number,
  onStartNewGame: () => void
}

export default function GameOverScreen({ roundsNumber, userNumber, onStartNewGame }: GameOverScreenProps) {

  const { width, height } = useWindowDimensions();

  let imageSize = 300;
  let summaryTextStyle = {
    fontSize: 24,
    marginBottom: 24
  }

  if (width < 380) {
    imageSize = 200;
    summaryTextStyle.fontSize = 20;
  }

  if (height < 400) {
    imageSize = 160;
    summaryTextStyle.fontSize = 16;
    summaryTextStyle.marginBottom = 10;
  }

  const imageStyle = {
    width: imageSize,
    height: imageSize,
    borderRadius: imageSize / 2,
    margin: imageSize / 10
  }

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.rootContainer}>
        <Title>GAME OVER</Title>
        <View style={[styles.imageContainer, imageStyle]}>
          <Image style={styles.image} source={require('../assets/images/success.png')} />
        </View>
        <Text style={[styles.summaryText, summaryTextStyle]}>
          Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>
        </Text>
        <PrimaryButton onPress={onStartNewGame} >Start New Game</PrimaryButton>
      </View>
    </ScrollView>
  )
}

// const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    // width: deviceWidth < 380 ? 200 : 300,
    // height: deviceWidth < 380 ? 200 : 300,
    borderWidth: 3,
    borderColor: Colors.primary800,
    // borderRadius: deviceWidth < 380 ? 100 : 150,
    overflow: 'hidden',
    // margin: 36
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    // fontSize: deviceWidth < 380 ? 20 : 24,
    textAlign: 'center',
    // marginBottom: 24
  },
  highlight: {
    fontFamily: 'open-sans-bold',
    color: Colors.primary500
  }
})