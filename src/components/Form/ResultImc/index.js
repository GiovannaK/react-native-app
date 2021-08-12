import React from 'react'
import { View, Text, TouchableOpacity, Share } from 'react-native'
import { styles } from './style'

export const ResultImc = ({messageResultImc, resultImc}) => {

  const onShare = async () => {
    const result = await Share.share({
      message: `Meu IMC hoje é ${resultImc}`
    })
  }
  return (
    <View style={styles.resultImc}>
      <View style={styles.boxShare}>
        {resultImc !== null ? (
          <TouchableOpacity onPress={onShare}style={styles.shared}>
            <Text style={styles.sharedText}>Compartilhar</Text>
          </TouchableOpacity>

        ) : (
          <View />
        )}
      </View>
      <Text style={styles.information}>{messageResultImc}</Text>
      <Text style={styles.numberImc}>{resultImc}</Text>
    </View>
  )
}
