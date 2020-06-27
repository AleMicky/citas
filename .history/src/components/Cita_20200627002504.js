import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Cita = ({ item }) => {

    const { paciente, propietario, sitomas } = item;
    return (
        <View style={styles.cita}>
            <View>
                <Text>Paciente: </Text>
                <Text>{paciente}</Text>
            </View>
            <View>
                <Text>Propietario: </Text>
                <Text>{propietario}</Text>
            </View>
            <View>
                <Text>Sitomas: </Text>
                <Text>{sitomas}</Text>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    cita:{
        backgroundColor:'#fff',
        borderBottomColor:"#e1e1e1",
        borderStyle:'solid',
        borderBottomWidth: 1
    }
})
export default Cita;
