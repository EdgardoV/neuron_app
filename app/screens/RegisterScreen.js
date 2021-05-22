import React, { Component, useState } from 'react'
import { Image, Text, TextInput, TouchableOpacity, View, ActivityIndicator, Alert } from 'react-native'
import { loginScreen } from '@styles/General'
import auth from '@react-native-firebase/auth'

export default class RegisterScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            isLoading: false
        };
    }

    register =  async () => { 

        this.state.isLoading = true;

        auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => {
            this.state.isLoading = false;
            console.log('User account created & signed in!');
            this.goToScreen('Feed')
        })
        .catch(error => {
            this.setState({ isLoading: false });
            let message = 'Algo salió mal';
            if (error.code === 'auth/email-already-in-use') {
            message = 'El correo electrónico ya está registrado.';
            }

            if (error.code === 'auth/invalid-email') {
            message = 'El correo electrónico es invalido';
            }

            if (error.code === 'auth/weak-password') {
            message = 'La contraseña es demasiado corta.';
            }

            Alert.alert('No pudimos crear tu cuenta', message);
            console.error(error);
        });
    }

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
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
                    Ya casi terminamos...
                </Text>
                <Text style={[loginScreen.label, { marginTop: 0 }]}>
                    Completa el formulario,
                </Text>
                <Text style={[loginScreen.label, { marginTop: 0 }]}>
                    por favor.
                </Text>

                <TextInput
                    style={loginScreen.input}
                    placeholder="Nombre completo"
                    keyboardType="default"
                    onChangeText={(name) => this.setState({ name})}
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Usuario"
                    keyboardType="default"
                    onChangeText={(username) => this.setState({ username})}
                    autoCapitalize='none'
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Correo electrónico"
                    keyboardType="email-address"
                    autoCapitalize='none'
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Confirmar correo"
                    keyboardType="email-address"
                    onChangeText={(email) => this.setState({ email})}
                    autoCapitalize='none'
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Contraseña"
                    keyboardType="default"
                    textContentType="password"
                    autoCapitalize='none'
                    secureTextEntry={true}
                />

                <TextInput
                    style={loginScreen.secondinput}
                    placeholder="Confirmar contraseña"
                    keyboardType="default"
                    textContentType="password"
                    password='true'
                    autoCapitalize='none'
                    secureTextEntry={true}
                    onChangeText={(password) => this.setState({ password})}
                />

                <Image
                        style={{
                            width: 113,
                            height: 23,
                            position: 'absolute',
                            bottom: 25}}
                        source={require('@resources/images/logo-neuron.png')}
                />

                <TouchableOpacity style={[loginScreen.button, { marginTop: 16 }]} onPress={() => this.register()}>

                    <Text style={loginScreen.labelButton}>
                    REGISTRAR</Text>
                </TouchableOpacity>
                <ActivityIndicator animating={this.state.isLoading} />
                <TouchableOpacity style={{top: 8}} onPress={() => this.goToScreen('Login')}>
                    <Text style={{fontSize: 14,
                        fontFamily: 'Raleway-Bold',
                        color: '#86EF00',
                        textAlign: 'center',
                        marginBottom: 8}}>
                        VOLVER
                    </Text>
                </TouchableOpacity>
        </View>
        

    )}

}