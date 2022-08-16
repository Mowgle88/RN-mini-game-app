import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native'
import Card from '../components/ui/Card'
import InstructionText from '../components/ui/InstructionText'
import PrimaryButton from '../components/ui/PrimaryButton'
import Title from '../components/ui/Title'
import Colors from '../constants/colors'

interface StartGameScreenProps {
  onPickNumber: (pickNumber: number) => void
}

export default function StartGameScreen({ onPickNumber }: StartGameScreenProps) {
  const [enterNumber, setEnterNumber] = useState('');

  function numberInputHandler(enteredText: string) {
    setEnterNumber(enteredText);
  }

  function resetInputHandler() {
    setEnterNumber('');
  }

  function confirmInputHandler() {
    const choseNumber = parseInt(enterNumber);

    if (isNaN(choseNumber) || choseNumber <= 0 || choseNumber > 99) {
      Alert.alert(
        'Invalid number',
        'Number has be a number between 1 abd 99',
        [{ text: 'Okay', style: 'destructive', onPress: resetInputHandler }]
      )
      return;
    }
    onPickNumber(choseNumber);
  }

  return (
    <View style={styles.screenContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Enter a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType='number-pad'
          onChangeText={numberInputHandler}
          value={enterNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>

  )
}

const styles = StyleSheet.create({
  screenContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center'
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonsContainer: {
    flexDirection: 'row'
  },
  buttonContainer: {
    flex: 1
  }
})
