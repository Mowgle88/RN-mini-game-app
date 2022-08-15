import React, { useState } from 'react'
import { StyleSheet, TextInput, View, Text, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

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
    <View style={styles.inputContainer}>
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
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#3b021f',
    borderRadius: 8,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25
  },
  numberInput: {
    height: 50,
    width: 50,
    marginVertical: 8,
    fontSize: 32,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 2,
    color: '#ddb52f',
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
