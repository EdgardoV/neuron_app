import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Modal } from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const icons ={
    Feed: 'home',
    Messages: 'message',
    Notifications: 'notifications',
    Profile: 'person',
};


export default class CustomTab extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showButtons: false,
    };
  }

  render() {
    return (
      <View style={styles.tab}>
        {this.props.navigation.state.routes.map((route, index) => (
            <View key={index.toString()} style={{ flexDirection: 'row' }}>
                <TouchableOpacity style={styles.tabIcon} onPress={() => this.props.navigation.navigate(route.routeName)}>
                    <MaterialIcon name={icons[route.routeName]} size={30} color={this.props.navigation.state.index === index ? '#86EF00': 'white'} />
                </TouchableOpacity>
                {route.routeName === 'Messages' && (
                    <TouchableOpacity style={styles.tabIcon} onPress={() => this.setState({ showButtons: true })}>
                        <View style={styles.addButton}>
                            <MaterialIcon name="add" color="white" size={50} style={styles.plusShadow} />
                        </View>
                    </TouchableOpacity>
                )}
            </View>
        ))}
        <Modal visible={this.state.showButtons} transparent animationType="slide">
            <View style={styles.modalStyle}>
                <TouchableOpacity style={styles.buttons} onPress={() => this.setState({ showButtons: false })}>
                    <Text style={styles.label}>Publicación</Text>
                    <MaterialIcon name="edit" size={13} color='#2B2B2B' />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => this.setState({ showButtons: false })}>
                    <Text style={styles.label}>Foto/Video</Text>
                    <MaterialIcon name="add-a-photo" size={13} color='#2B2B2B' />
                </TouchableOpacity>
            </View>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    tab: {
        width: '100%',
        backgroundColor: '#222222',
        paddingHorizontal: 25,
        flexDirection: 'row',
        paddingBottom: 20,
    },
    tabIcon: {
        width: (Dimensions.get('window').width - 50) / 5,
        height: (Dimensions.get('window').width - 50) / 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addButton: {
        width: '100%',
        height: '100%',
        backgroundColor: '#86EF00',
        shadowColor: "#86EF00",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.50,
        shadowRadius: 13,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
    },
    plusShadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
    },
    buttons: {
        paddingLeft: 15,
        paddingRight: 8,
        paddingVertical: 8,
        borderRadius: 100,
        backgroundColor: '#86EF00',
        shadowColor: "#86EF00",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.50,
        shadowRadius: 13,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    modalStyle: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'flex-end',
        paddingBottom: (Dimensions.get('window').width - 50) / 5 + 20,
        alignItems: 'center',
    },
    label: {
        fontFamily: 'Raleway-Medium',
        fontSize: 12,
        color: '#2B2B2B',
        marginRight: 15,
    }
});
