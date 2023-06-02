import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyC0k63O8R37whiqn9z0X9QaMDlOMJJVqXE",
  authDomain: "entregareactbenja.firebaseapp.com",
  projectId: "entregareactbenja",
  storageBucket: "entregareactbenja.appspot.com",
  messagingSenderId: "315217587380",
  appId: "1:315217587380:web:0c5c09507765006aa8fbe1"
};


const app = initializeApp(firebaseConfig);

export const initfirebase = () => app 