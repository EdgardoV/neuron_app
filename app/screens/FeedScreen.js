import React, { Component , useEffect } from 'react'
import { Image, ImageBackground, SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { feedScreen, postCard } from '@styles/General'
import LinearGradient from 'react-native-linear-gradient'
import firestore from '@react-native-firebase/firestore'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class FeedScreen extends Component {

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
        <SafeAreaView style={feedScreen.background}>
            <View style={feedScreen.header}>
                <Image
                    source={require('@resources/images/logo-line.png')}
                    style={{width: 160, height: 30,}} resizeMode="contain"
                />
                <TouchableOpacity style={feedScreen.searchButton}>
                    <Text style={{ fontSize: 12 }}>🔍</Text>
                </TouchableOpacity>
            </View>

            <ScrollView>
                <View style={feedScreen.body}>
                    <Text style={feedScreen.greetings}>Hola Edgardo</Text>
                    <Text style={[feedScreen.greetings, { marginTop: 0 }]}>Victorino! 👋</Text>

                    <Text style={feedScreen.ask}>¿Qué ha pasado?</Text>

                    <View style={{ flexDirection: 'row', marginTop: 20 }}>
                        <TouchableOpacity>
                            <ImageBackground
                                source={{ uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500' }}
                                style={feedScreen.addSomething}
                            >
                                <View style={feedScreen.addSomethingIcon}>
                                    <Image source={require('@resources/icons/add_circle_rounded.png')} style={{ width: 32, height: 32 }} resizeMode="cover" />
                                </View>
                            </ImageBackground>
                        </TouchableOpacity>

                        <Image source={require('@resources/images/triangle-rounded.png')} style={{ width: 20, height: 20, marginLeft: 10, marginRight: -8 }} />
                        <View style={feedScreen.saySomethingView}>
                            <Text style={feedScreen.saySomethingText}>Di algo y compartelo!</Text>
                        </View>
                    </View>

                    <View style={feedScreen.historiesContent}>

                        <ScrollView 
                            horizontal={true}
                            style={{
                                height: '100%',
                                width: '100%',
                            }}
                        >

                            {
                                Array.from({length:20}).map(() => {
                                    return (
                                        <View>
                                                <LinearGradient
                                                    colors={['#8FFF00', '#8FFF00', '#E8FF5C']} 
                                                    style={{
                                                        height: 46,
                                                        width: 46,
                                                        borderRadius: 15,
                                                        justifyContent: 'center',
                                                        alignItems: 'center',
                                                        margin: 10
                                                    }}
                                                >
                                                    <Image
                                                        source={{uri: 'https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}}
                                                        style={{
                                                            width: '90%',
                                                            height: '90%',
                                                            position: 'absolute',
                                                            borderRadius: 15
                                                        }}
                                                    ></Image>
                            
                                                </LinearGradient>
                                                
                                                <Text style={{
                                                    marginTop: -7,
                                                    fontSize: 12,
                                                    fontFamily: 'Raleway-SemiBold',
                                                    color: '#FAFAFA',
                                                    textAlign: 'center'
                                                }}>
                                                    Usuario
                                                </Text>
                            
                                        </View>
                                    )
                                })
                            }
                                                

                        </ScrollView>

                    </View>

                    <LinearGradient
                            start={{x: 0, y: 0}} 
                            end={{x: 1, y: 0}}
                            colors={['#737373', '#383838', '#000000']}
                            style={feedScreen.tabPosts}
                    >

                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                                <TouchableOpacity style={feedScreen.buttonTabPostsSelected}>
                                    <Text style={feedScreen.labelTabsSelected}>Reciente</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                                <TouchableOpacity style={feedScreen.buttonTabPosts}>
                                    <Text style={feedScreen.labelTabs}>Amigos</Text>
                                </TouchableOpacity>

                            </View>

                            <View style={{
                                flex: 1,
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}>

                                <TouchableOpacity style={feedScreen.buttonTabPosts}>
                                    <Text style={feedScreen.labelTabs}>Nuevos usuarios</Text>
                                </TouchableOpacity>

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