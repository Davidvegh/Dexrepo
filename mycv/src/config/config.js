/* import { initializeApp } from "firebase/app";
import {getDatabase, ref, set, push} from 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyAEbcM15nsDK-wCydhOltTUHHbFiRHuSVw",
  authDomain: "mycv-b2433.firebaseapp.com",
  projectId: "mycv-b2433",
  storageBucket: "mycv-b2433.appspot.com",
  messagingSenderId: "776129602323",
  appId: "1:776129602323:web:a05d592ddfd9948d2fb0e6"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app)

const createData = (data) => {
    const dataRef = ref(database, 'main')
    const pushRef = push(dataRef)
    set(pushRef, data)
}

createData({
    type: 'dex'
}) */