import { combineReducers } from 'redux';
import UsersReducers from './reducers_users'
const rootReducer = combineReducers({
 users: UsersReducers
});

export default rootReducer;

//*******************combineReducers*********************** */

// elle permet de transformer la fonction reducers_users qui contient des objets differents en
//une seule fonction regroupé dans un objet d'etat unique ce qui permet de recuperer l'etat qui
//est ici users etat qu'on recupere dans le mapStateToProps dans user_list