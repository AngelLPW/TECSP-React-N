import { StyleSheet } from "react-native";



export const styles= StyleSheet.create({
    Conteiner:{
        backgroundColor: '#F1FAFC',
        Flex:1,

    }
    ,imageBackground: {
        height: '100%',
         // Ajusta la imagen al tamaño del contenedor
      },
      fab1: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 80,
          backgroundColor: '#A9C2E0', // Color de fondo del botón
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: '#FFFFFF',
      },
      fab2: {
          position: 'absolute',
          margin: 16,
          right: 0,
          bottom: 0,
          backgroundColor: '#A9C2E0', // Color de fondo del botón
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          textAlignVertical: 'center',
          color: '#FFFFFF',
          fontSize: 20,
      },
      NavigationContainer: {
        backgroundColor: '#6750A4',
    },
    ButtonEditar:{
        backgroundColor: '#A9C2E0', // Color de fondo del botón
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        color: '#FFFFFF',
        fontSize: 20,
    },

    ContenedorPrincipal: {
        flex: 1,
        backgroundColor: '#6750A4',
        paddingLeft: 8,
        paddingRight: 8,
        paddingTop: 5,

    },
    ContenedorImagen: {
        width: '100%',
        height: 410,
        //elevation: 10,
        marginBottom: 10,
        borderColor: '#9A9A9A',
        borderWidth: 1,
        borderRadius: 10,
        backgroundColor: '#f3f3f3',



    },
    Imagenes: {
        width: '100%',
        height: '60%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
    },
    ViewTitulo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 0,
        height: '10%',
    },
    TituloImagen: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 2,
        paddingBottom: 10,
        fontSize: 20,
        top: 0,
        color: '#535355',
        textAlign: 'left',
        fontFamily: 'Century Gotic',
        height: '100%',



    },
    TextoImagen: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 10,
        fontSize: 20,
        top: 0,
        color: '#535355',
        justifyContent: 'flex-start',
        textAlign: 'left',
        fontFamily: 'Century Gotic',
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    precio: {
        position: 'absolute',
        backgroundColor: '#A02A1D',
        fontSize: 20,
        top: 10,
        borderBottomRightRadius: 7,
        borderTopRightRadius: 7,
        width: 110,
        paddingLeft: 5,
        color: '#FFFFFF',

        justifyContent: 'center',
    },
    PanelPrincipalRegistro: {
        width: '100%',
        height: '100%',
        backgroundColor: '#9596AB',
        // justifyContent: 'flex-start',
        // alignItems: 'center',
        padding: 1,

    },
    Btndate:{

    },
    ContenedorInput: {
        flex: 1,
        padding: 5,
        backgroundColor: 'transparent',
                width: '95%',
        justifyContent: 'center',
        alignItems: 'center',


    },
    Label: {
        width: '100%',
        color: '#fff',
        fontSize: 22,
        fontWeight: 'bold',
        paddingTop: 1,
        marginTop: 10,
        marginLeft: 20,
        paddingBottom:5
    },
    TextBox: {
        // width: '100%',
        //backgroundColor: 'white',
        // fontSize: 20,
        padding: 5,
        marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10,
        width: '95%',
        height: 40,
        paddingLeft: 20,
        textAlign: 'left',
        borderColor: '#fff',
        borderWidth: 2,
        borderRadius: 15,
        marginBottom: 12,
        paddingHorizontal: 7,
        color: '#fff',
        fontSize: 22,
        marginLeft: 10,


    },
    botonfecha: {
        padding: 10,
        marginBottom: 1,
        marginLeft: 0,
        borderRadius:10,

    },
    radiobuton: {
        paddingRight: 20,
        paddingLeft: 12,
        paddingBottom:10,
        flexDirection: 'row',
        alignItems: 'center',


    },
    radiobuton2: {
        paddingRight: 0,
        paddingLeft: 0,
        flexDirection: 'column',
        // alignItems: 'center',
        backgroundColor:'#Z617A74',
        borderRadius:10,


    },
    Labelradio: {
        color: '#fff',
        fontWeight:'800',
        marginRight: 1,
        marginLeft: 15,
        fontSize: 20,
    },
    SizeImageSave:{
        width: 90,
        height: 70,
        borderRadius: 10,
        padding: 10,
        marginTop: 15,
        marginBottom: 10,
        marginLeft: 100,
        marginRight: 100,
        backgroundColor:'#FFFFFF',
      },
      Modals: {
        backgroundColor: '#6750A4',
        position:'absolute'
      },
      modalContainer: {
        bottom: 0,
        marginLeft: 10,
        marginRight: 10,
        width: '95%',
        height: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#6750A4',
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
      },
      ButtonCerrar: {
        alignSelf: 'flex-end',
        width: 45,
        height: 35,
        textAlign: 'center',
        //backgroundColor: '#C42B1C',
        color: '#FFFFFF',
        borderRadius: 100,
        padding: 6,
        //marginBottom: 10,
        marginLeft: '75%', // Ajusta el margen derecho según sea necesario
        fontSize: 17,
        fontWeight: 'bold',
      },
      panelBtnRadio:{
        width: '95%',
        
      },

      Lista: {
        // //backgroundColor: '#D8F9F1',
        // borderRadius: 10,
        // padding: 10,
        // marginVertical: 8,
        // marginHorizontal: 16,
        backgroundColor: '#E1FAF0', // Color de fondo similar a las notas rápidas de Windows
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowOpacity: 0.25,
      
      },
      DatosLista: {
        fontSize: 22,
        fontStyle: 'Century',
        color: '#4A4743',
        borderBottomColor: '#8E8287',
        borderBottomWidth: 2,
        paddingBottom:6,
        paddingLeft: 10,
        paddingRight: 10,
      },
      SizeImage:{
        width: 35,
        height: 35
      },
      containerBoton: {
        flex: 1,
        flexDirection: 'row',
        paddingTop: 5,
        height:'auto',
        alignItems: 'center',
        justifyContent: 'space-around',
      },
      PanelPrincipal2:{
        padding: 10,
    flex: 1,
    // flexDirection: "column",
    // width: '100%',
     backgroundColor: "#878F95",
      },

    
})