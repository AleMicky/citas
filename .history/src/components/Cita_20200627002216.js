import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Cita = ({ item }) => {

    const { paciente } = item;
    return (
        <View>
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

})
export default Cita;
