import React from 'react'
import { StatusBar } from 'expo-status-bar';
import {StyleSheet, View, Text, TextInput, TouchableOpacity} from 'react-native'
import { Icon } from "@rneui/themed";
import { LinearGradient } from 'expo-linear-gradient';
//Diseño del Login
function Login() {
  return (
    <View style={stylesLog.container}>
        <View style={stylesLog.icon_container}>
        <Icon
        name='medkit-outline'
        type='ionicon'
        color='#38bae6'
        size={80}
        />
        <Text style={stylesLog.title}>Hi!</Text>
        </View>
        <View>
        <Text style={stylesLog.subtitle}>Sing in to continue</Text>
        </View>
        <TextInput 
            placeholder='example@email.com'
            style={stylesLog.textInput}/>
        <TextInput 
            placeholder='password'
            style={stylesLog.textInput}
            secureTextEntry={true}/>
        <Text style={stylesLog.passwordTitle}>
            Forgot your password?
        </Text>
        <TouchableOpacity style={stylesLog.opacity_container}>
            <LinearGradient
            // Button Linear Gradient
            colors={['#49afdd', '#87d5bc']}
            start={{x:0,y:0}}
            end={{x:1,y:1}}
            style={stylesLog.button}
            >
                <Text style={stylesLog.textButton}>Login</Text>
            </LinearGradient>
        </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  )
}

//Estilos CSS para App.js
//Aca crearemos los estilos o caracteristicas graficas que 
//van a tener nuestras etiquetas [View, Text, TextInput, TouchableOpacity]
const stylesLog = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    icon_container:{
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom:40,
    },
    opacity_container: {
        width:200,
        alignItems:'center',
        marginTop:20,
    },    
    title: {
        fontSize: 40,
        color: '#38bae6',
        fontWeight: 'bold',
    },
    subtitle: {
        right:82,
        fontSize: 20,
        color: '#bee7f1',
    },
    textInput: {
          padding: 10,
          paddingStart: 30,
          borderWidth:1,
          borderColor:'#a1cdf2',
          width: '80%',
          height: 50,
          marginTop: 20,
          borderRadius: 30,
          backgroundColor: '#fff'
    },
    passwordTitle:{
        fontSize:14,
        color:'#8bcfef',
        marginTop: 20,
        left:90,
    },
    textButton:{
        fontSize:14,
        color:'#ffff',
        fontWeight:'bold',
    },
    button:{
        width:'80%',
        height:50,
        borderRadius:25,
        padding:10,
        alignItems: 'center',
        justifyContent: 'center',
    },

});

export default Login