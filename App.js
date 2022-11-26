import theme from './styles/Theme';
import Login from './screens/Login';
import React from 'react';
import { Provider as PaperProvider, useTheme } from 'react-native-paper';

export default function App() {
  return (
   <PaperProvider theme={theme}>
     <Login />
   </PaperProvider>
  );
}


