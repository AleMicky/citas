import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const Formulario = () => {
    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput style={styles.inpul}
                    
                    />
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#ffff'
    },
    label:{
        fontWeight:'bold',
        fontSize:18,
        marginTop:20
    },
    inpul:{
        marginTop:10,
        height:50,
        borderColor:'#e1e1e1',
        borderWidth:1,
        borderStyle:'solid'
    }
});

export default Formulario;
