// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: process.env.REACT_APP_API_KEY,
	authDomain: "chat-mate-58947.firebaseapp.com",
	projectId: "chat-mate-58947",
	storageBucket: "chat-mate-58947.appspot.com",
	messagingSenderId: "892817507130",
	appId: "1:892817507130:web:19cf03f07f15a99b7c8603",
	measurementId: "G-LKV3NE8Q7J",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)

export const provider = new GoogleAuthProvider()