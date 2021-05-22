import React, { Component } from 'react'
import { Text, StyleSheet, SafeAreaView, View, Image, ImageBackground, TouchableOpacity, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { profileScreen, postCard } from '@styles/General'
import firestore from '@react-native-firebase/firestore'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class ProfileScreen extends Component {

    constructor(props) {
        super(props)
        this.state = {
            posts: [],
          };
    }

    componentDidMount () {
        firestore().collection('posts')
        .get()
        .then(querySnapshot => {
            const posts = []
          //console.log('Total users: ', querySnapshot.size);
      
            querySnapshot.forEach(documentSnapshot => {
                console.log(documentSnapshot.data)
                const {comments, likes, photo, post, tipo, usuario} = documentSnapshot.data()
                posts.push({
                    id: documentSnapshot.id,
                    comments,
                    likes,
                    photo,
                    post,
                    tipo,
                    usuario,
                })
            //console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
            });

            this.setState({ posts });

        });
    }


    render () { return(
        <SafeAreaView style={profileScreen.background}>

            <ScrollView>
                <View style={profileScreen.header}>

                    <Image 
                        source={require('@resources/images/img-dummy-sport.png')} 
                        style={profileScreen.cover}
                    />

                    <LinearGradient
                        locations={[0.01,0.25,1]}
                        colors={['#222222', 'rgba(34, 34, 34, 0.80)', 'rgba(34, 34, 34, 1)']} 
                        style={[profileScreen.headerGradient, {top:0}]}
                    />

                    <Image 
                        source={require('@resources/images/logo-line.png')}
                        style={profileScreen.logo}
                    />


                    <View style={profileScreen.headerFirstInfo}>

                        <View style={profileScreen.contentInfo}>
                            
                            <Text style={profileScreen.numbersInfo}>
                                10.2 K
                            </Text>
                            <Text style={profileScreen.labelInfo}>Seguidores</Text>

                        </View>

                        <LinearGradient
                            colors={['#8FFF00', '#8FFF00', '#E8FF5C']} 
                            style={profileScreen.photoBackground}
                        >

                            <Image
                                source={{uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                                style={profileScreen.photo}
                            ></Image>

                        </LinearGradient>


                        <View style={profileScreen.contentInfo}>

                            <Text style={profileScreen.numbersInfo}>
                                2
                            </Text>
                            <Text style={profileScreen.labelInfo}>Publicaciones</Text>

                        </View>

                    </View>
                    <View style={[profileScreen.contentPersonalInfo, {top: 200}]}>

                        <Text style={profileScreen.name}>
                            Edgardo Victorino Marín
                        </Text>
                        <Text style={profileScreen.username}>
                            @EdgardoVictorino
                        </Text>
                    </View>
                </View>
                <View style={[profileScreen.contentProfile, {marginTop: 260,marginHorizontal: 20}]}>

                    <Text style={profileScreen.time}>
                        Miembro desde hace 6 meses
                    </Text>

                    <LinearGradient
                        start={{x: 0, y: 0}} 
                        end={{x: 1, y: 0}}
                        colors={['#737373', '#383838', '#000000']}
                        style={profileScreen.contentAchivements}
                    >

                        <View style={{
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <TouchableOpacity style={profileScreen.buttonAchivements}>
                                <Text style={profileScreen.labelAchievements}>Logros</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{
                            flex: 1.5,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>

                            <Text style={profileScreen.achievements}>
                                🏆🎖🏅🥇🥇
                            </Text>

                        </View>

                    </LinearGradient>

                    {
                        this.state.posts.map((post, index) => {
                            return(
                                <View key={index.toString()} style={postCard.body}>

                                    <View
                                        style={postCard.header}
                                    >
                                        <View style={{
                                            flex: 0.5,
                                        }}/>

                                        <View style={{
                                            flex: 1,
                                            justifyContent: 'center',
                                        }}>
                                            <Text style={postCard.username}>
                                                {post.usuario}
                                            </Text>
                                            <Text style={postCard.time}>
                                                Hace un momento
                                            </Text>
                                        </View>

                                        <View style={{
                                            flex: 0.5,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                        }}>
                                            
                                            <TouchableOpacity style={postCard.buttonMore}>
                                                <MaterialIcons name="more-horiz" color="white" size={30} style={{}} />
                                            </TouchableOpacity>

                                        </View>

                                    </View>
                                    
                                    <View style={{
                                        width: '100%',
                                        height: '75%',
                                        backgroundColor: '#2B2B2B',
                                        borderRadius: 15,
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        right: 0,
                                        shadowColor: '#000000',
                                        shadowOffset: {width: 0, height:-4},
                                        shadowOpacity: 0.25,
                                        shadowRadius: 9
                                    }}>

                                        {post.tipo === 2 ?(<View style={{ width:'100%', height:'100%', borderRadius: 15, alignItems: 'center', justifyContent: 'center'}}>
                                            <ImageBackground source={{uri: post.photo}} style={{width:'100%', height:'100%', borderRadius: 15, opacity: 0.8, alignItems: 'center', justifyContent: 'center'}}>
                                                <Text style={{fontFamily:'Raleway-SemiBold',  fontSize: 18 , color: '#FAFAFA', shadowColor: '#000000', shadowOpacity:0.25, shadowRadius:4 , shadowOffset: {width: 0, height: 4}}}>
                                                    {post.post}
                                                </Text>
                                            </ImageBackground>
                                            
                                        </View>) : 
                                        (<View style={{width:'100%', height:'100%', borderRadius: 15, justifyContent: 'center', alignItems: 'center'}}>
                                            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#CC00FF', '#63CAE1', '#00FF66']}  style={{justifyContent: 'center', alignItems: 'center',width:'100%', height:'100%', borderRadius: 15}}>
                                            <Text style={{fontFamily:'Raleway-SemiBold',  fontSize: 18 , color: '#FAFAFA', shadowColor: '#000000', shadowOpacity:0.25, shadowRadius:4 , shadowOffset: {width: 0, height: 4}}}>
                                                    {post.post}
                                            </Text>
                                            </LinearGradient>
                                        </View>
                                        )}

                                    </View>
                                    
                                    <View style={{
                                        position: 'absolute',
                                        top:0,
                                        left:0,
                                        height: '50%',
                                        width: '25%',
                                        backgroundColor: '#2B2B2B',
                                        borderTopStartRadius: 15,
                                        borderBottomEndRadius: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}>
                                        <LinearGradient
                                            colors={['#8FFF00', '#8FFF00', '#E8FF5C']} 
                                            style={postCard.photoBackground}
                                        >
                                            <Image
                                                source={{uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                                                style={postCard.photo}
                                            ></Image>

                                        </LinearGradient>

                                        <Text style={{
                                            fontSize: 18,
                                            fontFamily: 'Raleway-SemiBold',
                                            marginTop: 8,
                                            color: '#fafafa'
                                        }}>
                                            ❤️ {post.likes}
                                        </Text>

                                    </View>

                                    <TouchableOpacity style={{
                                        width: 120,
                                        height: 33,
                                        backgroundColor: 'rgba(34,34,34,0.38)',
                                        position: 'absolute',
                                        borderRadius: 15,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        bottom: 12,
                                        left: 8
                                    }}>
                                        <Text style={{
                                            fontSize: 12,
                                            fontFamily: 'Raleway-SemiBold',
                                            color: '#FAFAFA'
                                        }}>
                                            💬 {post.comments} Comentarios
                                        </Text>
                                    </TouchableOpacity>
                                
                                </View>
                            )
                        })
                    }

                    


            </View>
            </ScrollView>

        </SafeAreaView>
    )}

}

var styles = StyleSheet.create({
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    },
  });
  