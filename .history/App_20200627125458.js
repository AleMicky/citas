import React from 'react'
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import Cita from './src/components/Cita';
import Formulario from './src/components/Formulario';

export default function App() {

  const [mostrarFrom, setMostrarFrom ] = React.useState(true);
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
        <View>
                <TouchableOpacity onPress={() => console.log(1)} style={styles.butonMostrar}>
                        <Text style={styles.textoMostrar}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        <View style={styles.contenido}>
          {mostrarFrom ? (
            <Formulario />
          ):(
              <>
                <Text style={styles.titulo}>{citas.length > 0 ?'Administra tus citas':'No hay citas, agrega una '}</Text>
                <FlatList style={styles.listado}
                          data = {citas}
                          renderItem = {({item}) => (<Cita item = {item} eliminarPaciente = {eliminarPaciente}/>)} 
                          keyExtractor = {citas => citas.id}/>
              </>
          )}
          
         
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  contenedor:{
    flex:1,
    backgroundColor:'#d81b60'
  },
  titulo:{
    marginTop: 40,
    marginBottom:20,
    fontSize: 24,
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff'
  },
  butonMostrar:{
    borderRadius: 6,
    padding:10,
    backgroundColor:'red',
    marginVertical:10,
  },
  textoMostrar:{
      color:'#fff',
      fontWeight:'bold',
      textAlign:'center'
  },
  contenido:{
    flex: 1,
    marginHorizontal: '2.5%'
  },
  listado:{
      flex: 1,
  }
})
