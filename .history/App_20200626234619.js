import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {
  return (
    <View style={styles.container}> 
        <Text style={styles.titulo}>Hola Mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#7cb342'
  },
  titulo:{
    marginTop:40,
    fontSize: 34,
    fontWeight:'bold',
    textAlign:'center'
  }
})
