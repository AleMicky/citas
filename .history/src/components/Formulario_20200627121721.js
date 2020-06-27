import React from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';
import DateTimePickerModal from "react-native-modal-datetime-picker";

const Formulario = () => {


    const [pasiente, setPaciente] = React.useState('');
    const [propietario, setPropietario] = React.useState('');
    const [telefono, setTelefono] = React.useState('');
    const [fecha, setFecha] = React.useState('');
    const [hora, setHora] = React.useState('');
    const [sitomas, setSintomas] = React.useState('');

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
        setFecha(date.toLocaleDateString());
        hideDatePicker();
    };

    // Hora
    const showTimePicker = () => {
        setTimePickerVisibility(true);
    };

    const hideTimePicker = () => {
        setTimePickerVisibility(false);
    };

    const handleConfirmHora = (hora) => {
        
        setHora(hora.toLocaleTimeString('es-ES'));
        hideTimePicker();
    };


    return (
        <>
            <View style={styles.formulario}>
                <View>
                    <Text style={styles.label}>Paciente</Text>
                    <TextInput style={styles.inpul}
                        onChangeText={texto => setPaciente(texto)}
                    />
                </View>
                <View>
                    <Text style={styles.label}>Propietario</Text>
                    <TextInput style={styles.inpul}
                                onChangeText={texto => setPropietario(texto)}                    />
                </View>
                <View>
                    <Text style={styles.label}>Telefono Contacto</Text>
                    <TextInput style={styles.inpul}
                        onChangeText={texto => setTelefono(texto)}
                        keyboardType='phone-pad'
                    />
                </View>
                <View>
                    <Text style={styles.label}>Fecha</Text>
                    <Button title="Selecionar Fecha" onPress={showDatePicker} />
                    <DateTimePickerModal
                        isVisible={isDatePickerVisible}
                        mode="date"
                        onConfirm={handleConfirmFecha}
                        onCancel={hideDatePicker}
                        locale='es_ES'
                        is24Hour
                    />
                    <Text>{fecha}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Hora</Text>
                    <Button title="Selecionar Hora" onPress={showTimePicker} />
                    <DateTimePickerModal
                        isVisible={isTimePickerVisible}
                        mode="time"
                        onConfirm={handleConfirmHora}
                        onCancel={hideTimePicker}
                        locale='es_ES'
                    />
                    <Text>{hora}</Text>
                </View>
                <View>
                    <Text style={styles.label}>Sintomas</Text>
                    <TextInput  multiline
                                style={styles.inpul}
                                onChangeText={texto => setSintomas(texto)}
                    />
                </View>
            </View>
        </>
    );
}


const styles = StyleSheet.create({
    formulario: {
        backgroundColor: '#ffff',
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginHorizontal: '2.5%'
    },
    label: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 20
    },
    inpul: {
        marginTop: 10,
        height: 50,
        borderColor: '#e1e1e1',
        borderWidth: 1,
        borderStyle: 'solid'
    }
});

export default Formulario;
