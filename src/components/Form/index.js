import React, { useState } from 'react'
import { View, Text, TextInput,
  TouchableOpacity, Vibration, Pressable, Keyboard } from 'react-native'
import { ResultImc } from './ResultImc'
import {styles} from './style'

export default Form = () => {
  const [height, setHeight] = useState(null)
  const [weight, setWeight] = useState(null)
  const [imc, setImc] = useState(null)
  const [textButton, setTextButton] = useState('Calcular')
  const [messageImc, setMessageImc] = useState('Preencha o peso e a altura')
  const [errorMessage, setErrorMessage] = useState(null);

  const imcCalculator = () => {
    let heightFormat = height.replace(",",".")
    return setImc((weight/(heightFormat * heightFormat)).toFixed(2))
  }

  const verifyImc = () => {
    if(imc === null){
      Vibration.vibrate();
      setErrorMessage('Campo obrigatório*')
    }
  }

  const validateImc = () => {
    if(weight !== null && height !== null){
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu IMC é igual a:');
      setTextButton("Calcular Novamente");
      setErrorMessage(null);
      return
    }
    verifyImc();
    setImc(null);
    setTextButton("Calcular");
    setMessageImc("Preencha o peso e altura");
  }
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View  style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          placeholder="Ex. 1.75"
          keyboardType="numeric"
          onChangeText={setHeight}
          value={height}
        />

        <Text style={styles.formLabel}>Peso</Text>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
        <TextInput
          style={styles.formInput}
          onChangeText={setWeight}
          value={weight}
          placeholder="Ex. 75.365"
          keyboardType="numeric"
        />
        <TouchableOpacity style={styles.buttonCalculator} onPress={() => validateImc()}>
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity >
      </View>
      <ResultImc messageResultImc={messageImc} resultImc={imc} />
    </Pressable>
  )
}

