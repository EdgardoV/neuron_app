import React, { Component } from 'react'
import { View, StatusBar, ImageBackground, Text, Image } from 'react-native'
import * as Animatable from 'react-native-animatable'
import { imageBackgroundStyle } from '@styles/General'

export default class LoginScreen extends Component {

    goToScreen(routeName) {
        this.props.navigation.navigate(routeName)
    }

    componentDidMount () {

        setTimeout(() => {
            this.goToScreen('Login')
        }, 2500, this)

    }


    render () { return(
        <View style={imageBackgroundStyle.image}>
            <StatusBar translucent backgroundColor='rgba(0,0,0,0.2)' barStyle="light-content"/>
            <ImageBackground source={require('@resources/images/background-image-splash.png')} style={imageBackgroundStyle.imagebackground}>
                <View style={imageBackgroundStyle.transparent}>
                    <Animatable.Image
                        animation="pulse"
                        easing="ease-out"
                        iterationCount="infinite"
                        atyle={{
                            width:200,
                            height:200,
                            margin:400
                        }}
                        source={require('@resources/images/logo-splash.png')}
                    />
                    <Image
                        style={{
                            width: 113,
                            height: 23,
                            position: 'absolute',
                            bottom: 25}}
                        source={require('@resources/images/logo-neuron.png')}
                    />
                </View>
            </ImageBackground>
        </View>
    )} 

}