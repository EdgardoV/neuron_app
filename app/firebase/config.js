import * as firebase from "firebase"

class Firebase {
    static init () {
        firebase.initializeApp({
            apiKey: "AIzaSyA6GtZG6mQmT2uEm3Zr_uaWVyZ4ZHIQO4E",
            authDomain: "dontgiveup-4a5aa.firebaseapp.com",
            projectId: "dontgiveup-4a5aa",
            storageBucket: "dontgiveup-4a5aa.appspot.com",
            messagingSenderId: "380045218951",
            appId: "1:380045218951:web:3723157f23943b5c38d422",
            measurementId: "G-SKDYN7JHC3"
        })
    }
}

module.exports = {Firebase}