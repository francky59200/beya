import Rebase from 're-base' // on importe le Rebase c'est une librairie qui permet de faciliter l'integration de firebase dans un projet react
import firebase from 'firebase/app' // on import firebase on lui passe le chemin pour optimiser l'app
import 'firebase/database' // on importe juste une partie de la bibliotheque firebase

const firebaseApp = firebase.initializeApp({ 
    apiKey: "AIzaSyDEDCzzk3NU5Mhp3NnXb-r8L9RXiyZ8RKM",
    authDomain: "chatbox-app-2065f.firebaseapp.com",
    databaseURL: "https://chatbox-app-2065f.firebaseio.com"
})

const base = Rebase.createClass(firebase.database()) // oncree une class pour linker firebase avec database pour gerer la base de donnée

export { firebaseApp } // on initialise l'application

export default base

// la apiKey c'est la clé de notre application qui va être modifié dans les autorisations de firebase
// authDomain correspond aux adresse de ma base de données pour qu'il puisse savoir ou aller pour se connecter