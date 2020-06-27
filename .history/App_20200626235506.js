import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function App() {

  const [citas, setCitas] = React.useState([
      { id:1, paciente:'Miguel', propietario:'Alejandro', sitomas: 'Tos' }
  ]);

  return (
    <View style={styles.contenedor}> 
        <Text style={styles.titulo}>Hola Mundo</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#b2fab4'
  },
  titulo:{
    marginTop:40,
    fontSize: 34,
    fontWeight:'bold',
    textAlign:'center'
  }
})
