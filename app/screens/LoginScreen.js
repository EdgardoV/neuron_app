import React, { Component, useState } from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, Alert } from 'react-native'
import { loginScreen } from '@styles/General'
import auth from '@react-native-firebase/auth'

export default class LoginScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: ""
        };
      }

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
    }

    login = async () => {
        auth()
        .signInWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            console.log('Login successfully!');
            this.goToScreen('Feed')
        })
        .catch(error => {
            let message = 'Algo salió mal.';
            if (error.code === 'auth/wrong-password') {
            message = 'La contraseña ingresada es incorrecta.';
            }

            if (error.code === 'auth/user-not-found') {
            console.log('That email address is invalid!');
            message = 'El correo electrónico no está registrado.';
            }

            Alert.alert('No pudimos iniciar sesión', message);

            console.error(error);
        });
    }

    render () { return(
        <View style={loginScreen.background}>
                <View
                style={loginScreen.first}/>
                <View
                style={loginScreen.second}/>

                <Image
                    style={loginScreen.logo}
                    source={require('@resources/images/logo-splash.png')}
                />
                <Text style={loginScreen.label}>
                    Bienvenid@
                </Text>

                <TextInput
                    style={loginScreen.input}
                    placeholder="Usuario"
                    keyboardType="default"
                    autoCapitalize='none'
                    onChangeText={(email) => this.setState({ email})}
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Contraseña"
                    keyboardType="default"
                    textContentType="password"
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password })}
                />

                <Image
                        style={{
                            width: 113,
                            height: 23,
                            position: 'absolute',
                            bottom: 25}}
                        source={require('@resources/images/logo-neuron.png')}
                />

                <TouchableOpacity style={loginScreen.button} onPress={() => this.login()}>

                    <Text style={loginScreen.labelButton}>
                    INGRESAR</Text>

                </TouchableOpacity>

                <TouchableOpacity style={{
                    marginTop: 14
                }} onPress={() => this.goToScreen('Register')}>

                    <Text style={[loginScreen.link, {marginRight: 35}]}>
                    Aun no tienes cuenta, Registrate!
                        
                    </Text>
                    <Image
                            style={loginScreen.iconButton}
                            source={require('@resources/icons/arrow_forward_rounded.png')}
                    />
                </TouchableOpacity>

                <View style={{
                    top: 90,
                    alignItems: 'center'
                }}>
                    <Text style={{
                        fontSize:12,
                        fontFamily: 'Raleway-SemiBold',
                        color: '#FAFAFA'
                    }}>
                    Puedes iniciar con:
                    </Text>

                    <View style={{
                        top: 20,
                        width: '75%',
                        flexDirection: 'row',
                    }}>
                        <TouchableOpacity style={{
                            flex: 1,
                            width: 85,
                            height: 85,
                            marginHorizontal: 7,
                            backgroundColor: "#1877F2",
                            borderRadius: 85,
                            alignItems: 'center'
                        }}>
                            <Image
                                style= {[loginScreen.authButton, {margin: 20}]}
                                source={require('@resources/icons/facebook.png')}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            flex: 1,
                            width: 85,
                            height: 85,
                            marginHorizontal: 7,
                            backgroundColor: "#FAFAFA",
                            borderRadius: 85,
                            alignItems: 'center'
                        }}>
                            <Image
                                style= {[loginScreen.authButton, {margin: 20}]}
                                source={require('@resources/icons/google.png')}
                            />

                        </TouchableOpacity>

                        <TouchableOpacity style={{
                            flex: 1,
                            width: 85,
                            height: 85,
                            marginHorizontal: 7,
                            backgroundColor: "#1C1C1C",
                            borderRadius: 85,
                            alignItems: 'center'
                        }}>
                            <Image
                                style= {[loginScreen.authButton, {margin: 10}]}
                                source={require('@resources/icons/apple.png')}
                            />

                        </TouchableOpacity>
                        

                    </View>


                </View>



        </View>
        

    )}

}