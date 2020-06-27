import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const Cita = ({cita}) => {

    const { paciente } = cita;
    return (
        <View>
            <Text>{paciente}</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    
})  
export default Cita;
