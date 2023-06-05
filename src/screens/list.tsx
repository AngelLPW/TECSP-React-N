
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { View, Text, Button, Modal, TextInput, Alert, Pressable, ScrollView, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
import { styles } from '../Style/Styles';
import { RadioButton } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { SafeAreaView } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';

export const list = () => {

    interface IUser {
        id: string;
        cedula: string;
        nombre_completo: string;
        telefono: string;
        maquina: string;
        descripcion: string;
        fecha_ingreso: string;
        estado: string;
    }

    const navigation = useNavigation();
    const [txtId, SetTxtNumId] = useState('');
    const [txtCedula, SetTxtCedula] = useState('');
    const [txtNombreCliente, SetTxtNombreCliente] = useState('');
    const [CheckSexo, SetCheckSexo] = React.useState('');
    const [TxtFechaReservacion, SetFechaReservacion] = useState('');
    const [Txttelefono, Settxttelefono] = useState('');
    const [Txtdescripcion, Settxtdescripcion] = useState('');
    const [Txtmaquina, SetTxtmaquina] = useState('');
    const [Checkpaquete, SetCheckpaquete] = React.useState('');
    const [TxtPrecio, SetTxtPrecio] = useState('');
    const [Datosvalue, setDatos] = useState<IUser[]>();
    const [date, setDate] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [selectedDateText, setSelectedDateText] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [editData, setEditData] = useState<IUser | null>(null);
    const [IDEliminar, setIDEliminar] = useState('');
    // ================ Metodo asignar los valores de los txt =====================
    const NumId = (text: string) => {
        SetTxtNumId(text);
    }

    const Cedula = (text: string) => {
        SetTxtCedula(text);
    }

    const NombreCompleto = (text: string) => {
        SetTxtNombreCliente(text);
    }

    const FechaReservacion = (text: string) => {
        SetFechaReservacion(text);
    }


    const maquina = (text: string) => {
        SetTxtmaquina(text);
    }
    const descripcion = (text: string) => {
        Settxtdescripcion(text);
    }

    const telefono = (text: string) => {
        Settxttelefono(text);
    }
    const showDateTimePicker = () => {
        setShowDatePicker(true);
    };


    const ConfirmarEliminacion = (ID: string) => {
        Alert.alert(
            'Confirmación de eliminación',
            'Estas Seguro que deseas eliminar este registro',
            [
                { text: 'Eliminar', onPress: () => { Eliminar(ID) } },
                { text: 'Cancelar', onPress: () => console.log('Cancelar presionado') },
            ]
        );
    };

    const showAlert = (title: string, message: string) => {
        Alert.alert(
            title,
            message,
            [{ text: 'OK', onPress: () => { } }]
        );
    };

    // ================ Metodo para obtener la fecha y formatearla ============
    const handleDateChange = (event: any, selectedDate?: Date) => {
        const currentDate = selectedDate || date;
        setShowDatePicker(false);
        setDate(currentDate);

        const formattedDate = format(currentDate, 'yyyy-MM-dd');
        setSelectedDateText(formattedDate);
    };

    // =========== Metodo para asignar el valod de paquete al txt precio====================
    const handlePaqueteChange = (value: string) => {
        SetCheckpaquete(value);


    };

    // =========== metodo para Elimiar el dato de la BD  =============================
    const Eliminar = (ID: string) => {
        setIDEliminar(ID)
        DeleteGestor(ID)
        GetGestor()
        console.log(ID)
    };

    // ============================metodo para limpiar los campos ========
    const limpiarCampos = () => {
        SetTxtNumId('');
        SetTxtCedula('');
        setSelectedDateText('');
        SetTxtNombreCliente('');
        SetFechaReservacion('');
        SetTxtmaquina("");
        Settxtdescripcion('');
        Settxttelefono('');
        SetCheckpaquete('');
    };

    // ==================== metodo para refrescar la lista ========
    const handleScroll = () => {
        // Realiza cualquier lógica adicional aquí si es necesario
        GetGestor()
    };

    // ==================== metodo para cargar los datos de la BD a la lista ===================
    const GetGestor = () => {
        //192.168.1.115
        axios.get('https://apilpdu.azurewebsites.net/Cliente').then(Response => {
            setDatos(Response.data)
        }).catch(err => console.log(err));
    }

    // ==================== metodo para ACTUALIZAR los datos de la BD  ===================
    const UpdateGestor = (
        ID: string,
        cedula: string,
        nombre_completo: string,
        telefono: string,
        maquina: string,
        descipcion: string,
        fecha_ingreso: string,
        estado: string
    ) => {
        // Validar que todos los campos no estén vacíos
        if (
            cedula.trim() === '' ||
            nombre_completo.trim() === '' ||
            telefono.trim() === '' ||
            fecha_ingreso.trim() === '' ||
            maquina.trim() === '' ||
            descipcion.trim() === '' ||
            estado.trim() === ''
        ) {
            showAlert('Notificación del sistema', 'Todos los campos son obligatorios');
            return;
        }
        axios.put(`https://apilpdu.azurewebsites.net/Cliente/${ID}`, {

            cedula: cedula,
            nombre_completo: nombre_completo,
            telefono: telefono,
            fecha_ingreso: fecha_ingreso,
            maquina: maquina,
            descipcion: descipcion,
            estado: estado,

        },
            { headers: { 'Content-Type': 'application/json' } })
            .then(Response => {
                limpiarCampos();
                showAlert('Mensaje de Confirmacion', 'Actualizacion del paquete Exitoso');
                GetGestor();
            }).catch(err => console.log(err));

    };
    //--------  Peticion Delete para eliminar los datos de la BD --------
    const DeleteGestor = (ID: string) => {
        axios.delete(`https://apilpdu.azurewebsites.net/Cliente/${ID}`)
            .then(Res => {
                GetGestor();
                console.log(Res.data)
            }).catch(err => console.log(err))
    }

    useEffect(() => {
        GetGestor()
    }, [])

    const openEditModal = (item: IUser) => {
        setEditData(item);
        setModalVisible(true);

        // Asignar los valores del elemento seleccionado a los campos de entrada
        SetTxtNumId(item.id.toString()); // Convertir a cadena de texto
        SetTxtCedula(item.cedula);
        SetTxtNombreCliente(item.nombre_completo);
        SetFechaReservacion(item.fecha_ingreso);
        SetCheckpaquete(item.estado);
        SetTxtmaquina(item.maquina);
        Settxtdescripcion(item.descripcion);
        Settxttelefono(item.telefono);

    };
    return (

        <SafeAreaView style={styles.PanelPrincipal2} >
            <ScrollView onScroll={handleScroll}>
                <FlatList
                    data={Datosvalue}
                    keyExtractor={(item: IUser) => item.id}
                    renderItem={({ item }) => (
                        <View>
                            <View
                                style={styles.Lista}>
                                <Text style={styles.DatosLista}> Cliente #: {item.id}</Text>
                                <Text style={styles.DatosLista}> Cedula: {item.cedula}</Text>
                                <Text style={styles.DatosLista}> Nombre Completo: {item.nombre_completo}</Text>
                                <Text style={styles.DatosLista}> Contacto: {item.telefono}</Text>
                                <Text style={styles.DatosLista}> Nombre de la maquina: {item.maquina}</Text>
                                <Text style={styles.DatosLista}> Descripcion del problema: {item.descripcion}</Text>
                                <Text style={styles.DatosLista}> Fecha de ingreso: {item.fecha_ingreso}</Text>
                                <Text style={styles.DatosLista}> Estado de la maquina: {item.estado}</Text>
                                <View style={styles.containerBoton}>
                                    <TouchableOpacity onPress={() => openEditModal(item)}>
                                        <Image source={require('../Recurso/images-removebg-preview.png')} style={styles.SizeImage} />
                                        {/*     <Text style={styles.ButtonEditar}>Editar</Text> */}
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => { ConfirmarEliminacion(item.id) }}>
                                        <Image source={require('../Recurso/images__1_-removebg-preview.png')} style={styles.SizeImage} />
                                    </TouchableOpacity>
                                </View>

                            </View>
                        </View>
                    )}
                />
            </ScrollView>
            <Modal
                            visible={modalVisible}
                animationType='slide'
                transparent={true}
                style={styles.Modals}
                onRequestClose={() => setModalVisible(false)}
            >
                {/* Aquí puedes diseñar el contenido del modal */}
                {editData && (

                    <ScrollView style={styles.modalContainer}>
                        <View style={styles.ContenedorInput}>

                            <Text style={styles.Label}>Numero de Cedula</Text>
                            <TextInput
                                value={txtCedula}
                                onChangeText={Cedula}
                                style={styles.TextBox}
                                inputMode='numeric'
                            >
                            </TextInput>

                            <Text style={styles.Label}>Nombre Completo</Text>
                            <TextInput
                                value={txtNombreCliente}
                                onChangeText={NombreCompleto}
                                style={styles.TextBox}
                                inputMode='text'
                            >
                            </TextInput>
                            <Text style={styles.Label}>Telefono</Text>
                            <TextInput
                                value={Txttelefono}
                                onChangeText={telefono}
                                style={styles.TextBox}
                                inputMode='tel'
                            >
                            </TextInput>

                            <Text style={styles.Label}>Maquina</Text>
                            <TextInput
                                value={Txtmaquina}
                                onChangeText={maquina}
                                style={styles.TextBox}
                                inputMode='text'
                            >
                            </TextInput>
                            <Text style={styles.Label}>Descripción del problema</Text>
                            <TextInput
                                value={Txtdescripcion}
                                onChangeText={descripcion}
                                style={styles.TextBox}
                                inputMode='text'
                            >
                            </TextInput>

                            <View style={styles.botonfecha}>
                                <Button title="Seleccionar fecha" onPress={showDateTimePicker} />

                                {showDatePicker && (
                                    <DateTimePicker
                                        value={date}
                                        mode="datetime"
                                        display="default"
                                        onChange={handleDateChange}
                                    />
                                )}
                            </View>

                            <TextInput
                                style={styles.TextBox}
                                value={selectedDateText}
                                onChangeText={(text) => setSelectedDateText(text)}
                                inputMode='text'
                                id='Lanzamiento'
                                editable={false}
                            />


                            <RadioButton.Group onValueChange={handlePaqueteChange} value={Checkpaquete}>
                                <Text style={styles.Label}>Seleccione el paquete</Text>
                                <View style={styles.radiobuton2}>
                                    <RadioButton.Item label="Reparación" value="Reparación" />
                                    <RadioButton.Item label="Mantenimiento" value="Mantenimiento" />
                                </View>
                            </RadioButton.Group>
                            <Pressable
                                onPress={() => {
                                    UpdateGestor(
                                        txtId,
                                        txtCedula,
                                        txtNombreCliente,
                                        Txttelefono,
                                        Txtmaquina,
                                        Txtdescripcion,
                                        selectedDateText,
                                        Checkpaquete,

                                    )
                                    GetGestor()
                                    limpiarCampos()
                                    setModalVisible(false)
                                }}
                            >
                                <Image source={require('../Recurso/save-to-disk-user-interface-icon-vector-removebg-preview.png')} style={styles.SizeImageSave} />
                            </Pressable>
                        </View>




                    </ScrollView>
                )}
            </Modal>

        </SafeAreaView>
    )
}
