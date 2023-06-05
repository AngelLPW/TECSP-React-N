import React from 'react'
import { Image, ImageBackground, Text, View } from 'react-native'
import { styles} from '../Style/Styles'
import { StackScreenProps } from '@react-navigation/stack'
import { FAB } from 'react-native-paper'

interface Props extends StackScreenProps<any, any> { };

export const Home = ({ navigation }: Props) => {
  return (
    <View style={styles.Conteiner}>
        <ImageBackground style={styles.imageBackground} resizeMode='stretch'  
        source={require("../Recurso/reparacion-laptop-portatil-heredia-costa-rica.jpg")}/>

        <FAB
        label={'Registro de reparación'}
        style={styles.fab2}
        animated={true}
        color='#000000'
        
        onPress={() => navigation.navigate('ingreso')}
      />
      <FAB
        label={'Lista de reparaciones'}
        style={styles.fab1}
        animated={true}
        color='#000000'
        
        onPress={() => navigation.navigate('list')}
      />

    </View>
  )
}
