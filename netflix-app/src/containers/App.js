import React from 'react';
import './App.css';
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'


// Nos api provenance themoviedb
const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&api_key=4ad9a0bdd1ad58494fcb90762f2b79ae"
const API_KEY ="4ad9a0bdd1ad58494fcb90762f2b79ae"

class App extends React.Component {
  state={
    movieList:{},
    currentMovie:{}
  }

  // pour un affichage des le chargement on monte notre composant avec des requêtes 

  componentWillMount(){
    axios.get(`${POPULAR_MOVIES_URL}&${API_KEY}`).then(response=>{ // on appele le module axios requête ajax et on lui prend sa reponse
      this.setState({movieList:response.data.results.slice(0,6)}) // on met a jour le state de la liste des films populaires a afficher 6 films
      console.log(this.state.movieList)
      this.setState({currentMovie:response.data.results[0]})// on met a jour le state pour mettre en avant le film le plus populaire
      console.log(this.state.currentMovie)
    })
  }


  render(){
    return(
        <div className="App">
          <SearchBar/>
          <VideoList/>
        </div>
    )
      
  }
}

export default App;
