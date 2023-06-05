import React, { useEffect } from 'react'
import { View, Text, Button, TextInput, Alert, Image, TouchableOpacity, } from 'react-native';
import { styles } from '../Style/Styles';
import { ScrollView } from 'react-native-gesture-handler';
import { useState } from 'react';
import DateTimePicker from '@react-native-community/datetimepicker';
import { format } from 'date-fns';
import axios from 'axios';
import { RadioButton } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackScreenProps } from '@react-navigation/stack';
import { es } from 'date-fns/locale';

interface Props extends StackScreenProps<any, any> { };
export const ingreso = ({ navigation }: Props) => {

  interface IUser {
    ID: string;
    cedula: string;
    nombre_completo: string;
    telefono: string;
    maquina: string;
    descipcion: string;
    fecha_ingreso: string;
    estado: string;
  }
  // const navigation = useNavigation();
  const [txtId, SetTxtNumId] = useState('');
  const [txtCedula, SetTxtCedula] = useState('');
  const [txtNombreCliente, SetTxtNombreCliente] = useState('');
  const [TxtFechaReservacion, SetFechaReservacion] = useState('');
  const [Txttelefono, Settxttelefono] = useState('');
  const [Txtdescripcion, Settxtdescripcion] = useState('');
  const [Txtestado, Settxtestado] = useState('');
  const [Checkpaquete, SetCheckpaquete] = React.useState('');
  const [Txtmaquina, SetTxtmaquina] = useState('');
  const [Datosvalue, setDatos] = useState<IUser[]>();
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [selectedDateText, setSelectedDateText] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [editData, setEditData] = useState<IUser | null>(null);

  
  // =========== Metodo para asignar el valod de paquete al txt precio====================
  const handlePaqueteChange = (value: string) => {
    SetCheckpaquete(value);
  };



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
  const telefono = (text: string) => {
    Settxttelefono(text);
  }

  const Maquina = (text: string) => {
    SetTxtmaquina(text);
  }
  const descripcion = (text: string) => {
    Settxtdescripcion(text);
  }


  const FechaReservacion = (text: string) => {
    SetFechaReservacion(text);
  }


  const showDateTimePicker = () => {
    setShowDatePicker(true);
  };


  // ================ Metodo para obtener la fecha y formatearla ============
  const handleDateChange = (event: any, selectedDate?: Date) => {
    const currentDate = selectedDate || date;
    setShowDatePicker(false);
    setDate(currentDate);

    const formattedDate = format(currentDate, 'yyyy-MM-dd');
    setSelectedDateText(formattedDate);
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



  // ================ Alerta de nuevo registro =========================
  const showAlert = (title: string, message: string) => {
    Alert.alert(
      title,
      message,
      [{ text: 'OK', onPress: () => {} }]
    );
  };


  // ============ Metodo para guardar en la base de datos=================
  const CreateGestor = async (
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
       showAlert('Notificación del sistema','Todos los campos son obligatorios');
       return;
    }
  
    axios
      .post(
        'https://apilpdu.azurewebsites.net/Cliente',
        {
          cedula: cedula,
          nombre_completo: nombre_completo,
          telefono:telefono ,
          fecha_ingreso: fecha_ingreso,
          maquina: maquina,
          descipcion: descipcion,
          estado: estado,
        },
        { headers: { 'Content-Type': 'application/json' } }
      )
      .then(Response => {
        console.log(Response.data);
        limpiarCampos();
        showAlert('Mensaje de Confirmacion','La informacion de la maquina con su descripcion se guardo de manera correcta');
        GetGestor();
        navigation.navigate('Home');
      })
      .catch(err => console.log(err));
  };
  


  // ============ Peticion a la API para obtener los datos de la BD=================
  const GetGestor = () => {
    //192.168.1.115
    axios.get('https://apilpdu.azurewebsites.net/Cliente').then(Response => {
      setDatos(Response.data)
    }).catch(err => console.log(err));
  }

    // ============ Activacion de la peticion a la API =================
  useEffect(() => {
    GetGestor()
  }, [])

  return (

    < ScrollView style={styles.PanelPrincipalRegistro}>
      {/* <ImageBackground style={{ flex: 1,
        padding: 5,
        width: '95%',
        }} source={require("../Resource/11.jpg")} /> */}

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
          onChangeText={Maquina}
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
          <Button  title="Seleccionar fecha" onPress={showDateTimePicker} color="#7D8A55"/>

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
          <Text style={styles.Label}>Seleccione Trabajo a Realizar</Text>
          <View style={styles.radiobuton2}>
            <RadioButton.Item label="Reparación" value="Reparación" />
            <RadioButton.Item label="Mantenimiento" value="Mantenimiento" />
          </View>

        </RadioButton.Group>


        <TouchableOpacity
          onPress={() =>
            CreateGestor(
              txtCedula,
              txtNombreCliente,
              Txttelefono,
              Txtmaquina,
              Txtdescripcion,
              selectedDateText,
              Checkpaquete,

              
            )
          }
        >
          <Image source={require('../Recurso/save-to-disk-user-interface-icon-vector-removebg-preview.png')} style={styles.SizeImageSave} /> 
        </TouchableOpacity>
      </View>

    </ScrollView>


  )
}
