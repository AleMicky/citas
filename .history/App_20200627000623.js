import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

export default function App() {

  const [citas, setCitas] = React.useState([
      { id:'1', paciente:'Miguel', propietario:'Alejandro', sitomas: 'Tos' },
      { id:'2', paciente:'Juan', propietario:'Miguel', sitomas: 'No duerme' },
      { id:'3', paciente:'Rossy', propietario:'Camila', sitomas: 'No come' }
  ]);

  return (
    <View style={styles.contenedor}> 
        <Text style={styles.titulo}>Hola Mundo</Text>
        <FlatList data = {citas}
                  renderItem = {(citas) => (
                    <View>
                        <Text>{citas.item.paciente}</Text>
                    </View>
                  )} 
                  keyExtractor = {citas => citas.id}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#a5d6a7'
  },
  titulo:{
    marginTop:40,
    fontSize: 34,
    fontWeight:'bold',
    textAlign:'center'
  }
})
