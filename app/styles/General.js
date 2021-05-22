import { StyleSheet } from 'react-native'
import Colors from './Colors'

const imageBackgroundStyle = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE
    },
    imagebackground: {
        flex: 1,
        width: '100%',
        resizeMode: "stretch",
        justifyContent: "center"
    },
    transparent: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)'
    },
})

const loginScreen = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#282828'
    },
    logo: {
        marginTop: 10,
        width: 128,
        height: 110,
    },
    label: {
        marginTop: 20,
        textAlign: 'center', 
        fontFamily: 'Raleway-ExtraBold', 
        fontSize:24, 
        color: '#FAFAFA'
    },
    first: {
        position: 'absolute',
        width: '50%',
        height: '55%',
        top: 0,
        alignSelf: 'flex-end',
        backgroundColor: "#141414",
        opacity:0.31,
        borderBottomStartRadius: 50
    },
    second: {
        position: 'absolute',
        width: '90%',
        height: '25%',
        bottom: 0,
        alignSelf: 'flex-start',
        backgroundColor: "#353535",
        opacity:0.54,
        borderTopEndRadius: 50
    },
    input: {
        width: "75%",
        height: 43,
        backgroundColor: "#FAFAFA",
        fontFamily: 'Raleway-SemiBold',
        fontSize: 18,
        marginTop: 24,
        paddingStart: 20,
        borderRadius: 15
    },
    secondinput: {
        width: "75%",
        height: 43,
        backgroundColor: "#FAFAFA",
        fontFamily: 'Raleway-SemiBold',
        fontSize: 18,
        marginTop: 9,
        paddingStart: 20,
        borderRadius: 15
    },
    button: {
        width: "75%",
        height: 43,
        backgroundColor: "#86EF00",
        marginTop: 9,
        borderRadius: 15,
        shadowColor: "#86EF00",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.50,
        shadowRadius: 13
    },
    labelButton: {
        textAlign: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontFamily: 'Raleway-ExtraBold', 
        fontSize:18,
        marginTop: 10,
        color: '#282828',
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    iconButton: {
        top: 5,
        right: 0,
        position: 'absolute',
        width: 24,
        height: 24,
        flexDirection: 'row', 
        justifyContent: 'space-between',
    },
    link: {
        textAlign: 'center', 
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
        fontFamily: 'Raleway-SemiBold', 
        fontSize: 12,
        marginTop: 10,
        color: '#86EF00',
        shadowColor: "#86EF00",
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.50,
        shadowRadius: 2
    },
    authButton: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'contain'
    }
})

const feedScreen = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#222222'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    searchButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 15
    },
    greetings: {
        marginTop: 40,
        fontFamily: 'Raleway-ExtraBold', 
        fontSize: 24, 
        color: '#FAFAFA'
    },
    body: {
        flex: 1,
        paddingHorizontal: 20
    },
    ask: {
        marginTop: 8,
        fontFamily: 'Raleway',
        fontSize: 14,
        color: 'rgba(255, 255, 255, 0.54)'
    },
    addSomething: {
        width: 63,
        height: 63,
        borderRadius: 15,
        overflow: 'hidden',
    },
    addSomethingIcon: {
        justifyContent: 'center',
        alignItems: 'center', 
        flex: 1,
        backgroundColor: '#E8FF5C80'
    },
    saySomethingView: {
        flex: 1,
        backgroundColor: '#2B2B2B',
        borderRadius: 15,
        borderTopLeftRadius: 0,
        justifyContent: 'center',
        alignItems: 'center'
    },
    saySomethingText: {
        fontFamily: 'Raleway-Medium',
        fontSize: 14,
        color: '#999999'
    },
    triangleCorner: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderRightWidth: 20,
        borderTopWidth: 20,
        borderRightColor: "transparent",
        borderTopColor: '#2B2B2B',
        transform: [{ rotate: "90deg" }],
    },
    tabPosts: {
        flexDirection: 'row',
        alignSelf: 'center',
        marginTop: 115,
        height: 71,
        width: '85%',
        borderRadius: 15,
        justifyContent: 'center',
    },
    buttonTabPostsSelected: {
        height: '60%',
        width: '90%',
        backgroundColor: '#8FFF00',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTabPosts: {
        height: '60%',
        width: '90%',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelTabs: {
        fontSize: 12,
        fontFamily: 'Raleway-Bold',
        color: '#FAFAFA',
        shadowOffset: {width: 0, height:4},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    labelTabsSelected: {
        fontSize: 12,
        fontFamily: 'Raleway-Bold',
        shadowColor: '#0000',
        shadowOffset: {width: 0, height:4},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    historiesContent: {
        backgroundColor: '#2B2B2B',
        height: 77,
        width: '107%',
        top: 230,
        right: 0,
        position: 'absolute',
        borderBottomStartRadius: 15,
        borderTopStartRadius: 15
    }
})

const notificationsScreen = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#222222'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    searchButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 15
    },
    body: {
        flex: 1,
        paddingHorizontal: 20
    },
    topLabel: {
        marginTop: 40,
        fontFamily: 'Raleway-ExtraBold', 
        fontSize: 24, 
        color: '#FAFAFA'
    },
})

const messagesScreen = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor: '#222222'
    },
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15,
        alignItems: 'center'
    },
    searchButton: {
        padding: 15,
        borderWidth: 1,
        borderColor: '#C4C4C4',
        borderRadius: 15
    },
    body: {
        flex: 1,
        paddingHorizontal: 20,
    },
    topLabel: {
        marginTop: 40,
        fontFamily: 'Raleway-ExtraBold', 
        fontSize: 24, 
        color: '#FAFAFA'
    },
})

const profileScreen = StyleSheet.create({
    background: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#222222'
    },
    header: {
        flex: 2,
        alignItems: 'center',
        alignContent: 'center'
    },
    headerGradient: {
        flex: 1,
        top: 0,
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    headerFirstInfo: {
        top: 50,
        width: '100%',
        height: 123,
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'center',
        alignContent: 'center',
    },
    logo: {
        height: 30,
        width: 163,
        position: 'absolute',
    },
    cover: {
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
    },
    contentInfo: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
    },
    numbersInfo: {
        color: '#86EF00',
        fontSize: 36,
        fontFamily: 'Raleway-Bold',
        shadowColor: '#8FFF00',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        textAlign: 'center',
    },
    labelInfo: {
        color: '#86EF00',
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
        shadowColor: '#8FFF00',
        shadowOpacity: 0.5,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
        textAlign: 'center',
    },
    photo: {
        width: '90%',
        height: '90%',
        position: 'absolute',
        borderRadius: 25
    },
    photoBackground: {
        flex: 1,
        height: 123,
        width: 123,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    contentPersonalInfo: {
        flex: 1,
        flexDirection: 'column',
        height: 56,
        width: '100%',
        bottom: 0,
        position: 'absolute',
    },
    name: {
        fontSize: 18,
        fontFamily: 'Raleway-Bold',
        color: '#FAFAFA',
        textAlign: 'center',
        marginBottom: 8
    },
    username: {
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
        color: '#999999',
        textAlign: 'center',
        marginBottom: 8
    },
    contentProfile: { 
        flex: 4,
        alignItems: 'center'
    },
    time: {
        fontSize: 14,
        fontFamily: 'Raleway-Bold',
        color: '#86EF00',
        textAlign: 'center',
        marginBottom: 8
    },
    contentAchivements: {
        flexDirection: 'row',
        marginTop: 8,
        height: 71,
        width: '85%',
        borderRadius: 15,
        justifyContent: 'center',
    },
    buttonAchivements: {
        height: '60%',
        width: 100,
        backgroundColor: '#8FFF00',
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    labelAchievements: {
        fontSize: 12,
        fontFamily: 'Raleway-Bold',
        shadowColor: '#000000',
        shadowOffset: {width: 0, height:4},
        shadowOpacity: 0.25,
        shadowRadius: 4
    },
    achievements: {
        fontSize: 24,
        width: '85%',
        textAlign: 'right'
    }


})

const postCard = StyleSheet.create({
    body: {
        marginVertical: 12,
        alignSelf: 'center',
        height: 196,
        width: '100%',
        backgroundColor: '#2B2B2B',
        borderRadius: 15,
        shadowColor: '#000000',
        shadowOpacity: 0.25,
        shadowRadius: 20,
        shadowOffset: {width: 0, height:0}
    },
    header: {
        flexDirection: 'row',
        top: 0,
        height: '25%',
        width: '100%',
        borderTopStartRadius: 15,
        borderTopEndRadius: 15
    },
    username: {
        fontSize: 14,
        fontFamily: 'Raleway-ExtraBold',
        color: '#FAFAFA'
    },
    time: {
        fontSize: 12,
        fontFamily: 'Raleway-SemiBold',
        color: '#FAFAFA',
        opacity: 0.5
    },
    buttonMore: {
        borderRadius: 15,
        borderColor: '#C4C4C4',
        borderWidth: 1,
        height: '60%',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    photo: {
        width: '90%',
        height: '90%',
        position: 'absolute',
        borderRadius: 25
    },
    photoBackground: {
        height: 48,
        width: 48,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})

export { imageBackgroundStyle, loginScreen, feedScreen, notificationsScreen, messagesScreen, profileScreen, postCard }