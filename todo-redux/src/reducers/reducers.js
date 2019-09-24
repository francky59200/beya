import { combineReducers } from 'redux';
import UsersReducers from './reducers_users'
const rootReducer = combineReducers({
 users: UsersReducers // ici on a map le retour de notre reducer dans une variable user et cette variable est le state
});

export default rootReducer;

//*******************combineReducers*********************** */

// elle permet de transformer la fonction reducers_users qui contient des objets differents en
//une seule fonction regroupé dans un objet d'etat unique ce qui permet de recuperer l'etat qui
//est ici users etat qu'on recupere dans le mapStateToProps dans user_list

// le reducers.js est un fichier de configuration de reducers ou on va venir associé le retour de nos reducers ici le tableau
//du composant reducers_users a une variable et cette variable sera le state de notre application