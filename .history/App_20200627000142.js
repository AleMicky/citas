import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function App() {

  const [citas, setCitas] = React.useState([
      { id:1, paciente:'Miguel', propietario:'Alejandro', sitomas: 'Tos' },
      { id:1, paciente:'Juan', propietario:'Miguel', sitomas: 'No duerme' },
      { id:1, paciente:'Rossy', propietario:'Camila', sitomas: 'No come' }
  ]);

  return (
    <View style={styles.contenedor}> 
        <Text style={styles.titulo}>Hola Mundo</Text>
        <FlatList data = {citas}
                  renderItem = {(citas) => {
                      <View>
                          <Text>{citas.paciente}</Text>
                      </View>
                  }} 
          />
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
