import React, { Component } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { messagesScreen } from '@styles/General'

export default class NotificationsScreen extends Component {

    render () { return(
        <SafeAreaView style={messagesScreen.background}>
            <View style={messagesScreen.header}>
                <Image
                    source={require('@resources/images/logo-line.png')}
                    style={{width: 160, height: 30,}} resizeMode="contain"
                />
                <TouchableOpacity style={messagesScreen.searchButton}>
                    <Text style={{ fontSize: 12 }}>🔍</Text>
                </TouchableOpacity>
            </View>

            <View style={messagesScreen.body}>
                <Text style={messagesScreen.topLabel}>Mensajes 💬</Text>
                <Image
                    source={require('@resources/images/img-waiting.png')}
                    style={{
                        marginTop: 120,
                        width: 234,
                        height: 185,
                        alignSelf: 'center'
                    }}
                />
                <Text style={{
                    marginTop: 48,
                    fontSize: 12,
                    fontFamily: 'Raleway-Bold',
                    color: '#DADADA',
                    textAlign: 'center'
                }}>
                    Aún no tienes ningún mensaje, vuelve pronto.
                </Text>
            </View>

        </SafeAreaView>
    )}

}