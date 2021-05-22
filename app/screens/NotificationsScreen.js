import React, { Component } from 'react'
import { Image, ImageBackground, SafeAreaView, Text, TouchableOpacity, View } from 'react-native'
import { notificationsScreen } from '@styles/General'

export default class NotificationsScreen extends Component {

    render () { return(
        <SafeAreaView style={notificationsScreen.background}>
            <View style={notificationsScreen.header}>
                <Image
                    source={require('@resources/images/logo-line.png')}
                    style={{width: 160, height: 30,}} resizeMode="contain"
                />
                <TouchableOpacity style={notificationsScreen.searchButton}>
                    <Text style={{ fontSize: 12 }}>🔍</Text>
                </TouchableOpacity>
            </View>

            <View style={notificationsScreen.body}>
                <Text style={notificationsScreen.topLabel}>Notificaciones 🔔</Text>
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
                    Aún no tienes notificaciones, vuelve pronto.
                </Text>
            </View>

        </SafeAreaView>
    )}

}