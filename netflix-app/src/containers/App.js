import React from 'react';
import './App.css';
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import VideoDetail from '../components/video-detais';


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
      let movieList=response.data.results.slice(0,6)// on recupére une liste de 6 films a afficher
      let currentMovie=response.data.results[0] // on récupére le film le plus récent.
      this.setState({movieList, currentMovie}) // on met a jour le state pour la liste des films et le film populaire
      console.log(this.state.movieList)
      console.log(this.state.currentMovie)
    })
  }


  render(){
    // avec l'appel ajax la videoList est retourné 2 fois une fois vide et une fois avec les 6 films
    //pour eviter cela on creer une fonction avec une condition pour qu'elle ne renoie que le tableau avec les 6 elts
    const renderVideoList =()=>{
      if(this.state.movieList.length>=6){
        return <VideoList movieList={this.state.movieList}/>
      }
    }
    return(
        <div className="App">
          <SearchBar/>
          {renderVideoList()}
          <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
        </div>
    )
      
  }
}

export default App;
