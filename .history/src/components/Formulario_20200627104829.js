import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {

    const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
    const [isTimePickerVisible, setTimePickerVisibility] = React.useState(false);

    // Fecha
    const showDatePicker = () => {
      setDatePickerVisibility(true);
    };
  
    const hideDatePicker = () => {
      setDatePickerVisibility(false);
    };
  
    const handleConfirmFecha = (date) => {
      console.warn("A date has been picked: ", date);
      hideDatePicker();
    };

    // Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };
    
    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmHora = (date) => {
        console.warn("A date has been picked: ", date);
        hideTimePicker();
      };
  

    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput style={styles.inpul}
                               onChangeText={(texto) => console.log(texto)}
                               
                    />
                </View>
                <View>
                    <Text style={styles.label}>Propietario</Text>
                    <TextInput style={styles.inpul}
                               onChangeText={(texto) => console.log(texto)}
                               
                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefono Contacto</Text>
                    <TextInput style={styles.inpul}
                               onChangeText={(texto) => console.log(texto)}
                               keyboardType='phone-pad'
                    />
                </View>
                <View>
                    <Button title="Show Date Picker" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmFecha}
                        onCancel={hideDatePicker}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput multiline
                               style={styles.inpul}
                               onChangeText={(texto) => console.log(texto)}
                               
                    />
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    formulario:{
        backgroundColor:'#ffff',
        paddingHorizontal:20,
        paddingVertical:10,
        marginHorizontal:'2.5%'
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
