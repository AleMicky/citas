import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Formulario = () => {
    return (
        <>
            <View>
                <Text style={styles.label}>Paciente</Text>
                <TextInput
                 
                 />
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    inpul:{}
});

export default Formulario;
