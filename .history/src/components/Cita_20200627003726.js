import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const Cita = ({ item }) => {

    const { paciente, propietario, sitomas } = item;
    return (
        <View style={styles.cita}>
            <View>
                <Text style={styles.lebel}>Paciente: </Text>
                <Text style={styles.texto}>{paciente}</Text>
            </View>
            <View>
                <Text style={styles.lebel}>Propietario: </Text>
                <Text style={styles.texto}>{propietario}</Text>
            </View>
            <View>
                <Text style={styles.lebel}>Sitomas: </Text>
                <Text style={styles.texto}>{sitomas}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.butonEliminar}>
                        <Text style={textoELiminar}>Eliminar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cita:{
        backgroundColor:'#fff',
        borderBottomColor:"#e1e1e1",
        borderStyle:'solid',
        borderBottomWidth: 1,
        paddingVertical:20,
        paddingHorizontal:20,
    },
    lebel:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    texto:{
        fontSize:18,
    },
    butonEliminar:{
        padding:10,
        backgroundColor:'red',
        marginVertical:10,
    },
    textoELiminar:{
        color:'#fff',
        fontWeight:'bold',
        textAlign:'center'
    }
})
export default Cita;
