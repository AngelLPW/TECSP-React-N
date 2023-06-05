import 'react-native-gesture-handler';
import React from 'react'
import { DarkTheme, NavigationContainer } from '@react-navigation/native';
import { Navegacion } from './src/Navigator/Navegacion'

const App = () => {
  return (
<NavigationContainer theme={DarkTheme}>
<Navegacion/>
</NavigationContainer>
    )
}

export default App