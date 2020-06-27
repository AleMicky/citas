import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import Cita from './src/components/Cita';

export default function App() {

  const [citas, setCitas] = React.useState([
      { id:'1', paciente:'Miguel', propietario:'Alejandro', sitomas: 'Tos' },
      { id:'2', paciente:'Juan', propietario:'Miguel', sitomas: 'No duerme' },
      { id:'3', paciente:'Rossy', propietario:'Camila', sitomas: 'No come' }
  ]);

   const eliminarPaciente = id => {
      setCitas((citasActuales) =>{
        return citasActuales.filter(citas => citas.id != id)
      })
   }
  return (
    <View style={styles.contenedor}> 
        <Text style={styles.titulo}>Administrador de Citas</Text>
          <Text style={styles.titulo}>{citas.length > 0 ?'Administra tus citas':'No hay citas, agrega una '}</Text>
        <FlatList data = {citas}
                  renderItem = {({item}) => (<Cita item = {item} eliminarPaciente = {eliminarPaciente}/>)} 
                  keyExtractor = {citas => citas.id}
          />
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#d81b60'
  },
  titulo:{
    marginTop:40,
    marginBottom:20,
    fontSize: 24,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff'
  }
})
