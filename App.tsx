import React from 'react';
import { ThemeProvider } from 'styled-components';
import { useFonts, Roboto_700Bold, Roboto_500Medium, Roboto_400Regular } from '@expo-google-fonts/roboto';
import { Home }  from './src/screens/Home';
import theme  from './src/theme';
import { Loading } from './src/components/loading';



export default function App() {

  const [fontsLoaded ] = useFonts({ Roboto_700Bold, Roboto_500Medium, Roboto_400Regular })


  return (
    <ThemeProvider theme={theme}>
      { fontsLoaded ? <Home /> : <Loading />}
    </ThemeProvider>
    
  );
}

