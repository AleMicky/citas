import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.contenedor}> 
        <Text style={styles.titulo}>Hola Mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    backgroundColor:'#7cb342'
  },
  titulo:{
    marginTop:40,
    fontSize: 34,
    fontWeight:'bold',
    textAlign:'center'
  }
})
