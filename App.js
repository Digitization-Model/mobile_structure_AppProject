import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Login from './components/Login';

//Ejecución de la aplicación
export default function App() {
  return (
    <Login/>
  );
}
//Estilos CSS para App.js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
