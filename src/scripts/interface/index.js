import {navHandler} from "./_navigation";
import {closePopup} from "./_popup";
import firebase from 'firebase/app';


window.onload = async () => {
    await fireBaseInit();
    init();
}
const init = () => {
    navHandler();
    closePopup();
}

const fireBaseInit = async () => {
    return new Promise(async (resolve) => {
        let firebaseConfig = {
            apiKey: "AIzaSyBBkXKnek1w_jSCNUwA-FzJOWDGTkmwRv8",
            authDomain: "dark-pattern.firebaseapp.com",
            projectId: "dark-pattern",
            storageBucket: "dark-pattern.appspot.com",
            messagingSenderId: "433737509940",
            appId: "1:433737509940:web:a2ec318aab367de274ee61",
            measurementId: "G-TYQ3HRTVY9"
        };
        // Initialize Firebase
        await firebase.initializeApp(firebaseConfig);
        resolve();
    });
}


