import React from 'react';
import './App.css';
import SearchBar from '../components/search-bar'
import VideoList from './video-list'
import axios from 'axios'
import VideoDetail from '../components/video-detais';
import Video from '../components/video'


// Nos constantes api provenance themoviedb decoupé en plusieurs sous-api 

const API_END_POINT = "https://api.themoviedb.org/3/"
const POPULAR_MOVIES_URL = "discover/movie?language=fr&sort_by=popularity.desc&include_adult=false&append_to_response=images"
const API_KEY ="api_key=4ad9a0bdd1ad58494fcb90762f2b79ae"
const SEARCH_URL = "search/movie?language=fr&include_adult=false"

class App extends React.Component {
  state={
    movieList:{},
    currentMovie:{}
  }

  // pour un affichage des le chargement on monte notre composant avec des requêtes 

  componentWillMount(){
    axios.get(`${API_END_POINT}${POPULAR_MOVIES_URL}&${API_KEY}`).then(response=>{ // on appele le module axios requête ajax et on lui prend sa reponse
      let movieList=response.data.results.slice(0,6)// on recupére une liste de 6 films a afficher
      console.log(movieList)
      let currentMovie=response.data.results[0] // on récupére le film le plus récent.
      this.setState({movieList, currentMovie}, function(){
        this.applyVideoToCurrentMovie()
      }) // on met a jour le state pour la liste des films et le film populaire
      
    })
  }


  applyVideoToCurrentMovie=()=>{
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}?${API_KEY}&append_to_response=videos&include_adult=false`).then(response=>{
      console.log(response)
      //dans cet appel ajax on utulise la methode get dans l'url des videos populaires, on prend la video
      //correspondant a l'id de la 1ere video {this.state.currentMovie.id} on separe d'un point d'interrogation
      //et on lui applique la clé de l'api et on lui demande d'ajouter a cette reponse la video"append_to-response=videos
      //et qu'il n'inclut pas les films pour adultes "include_adult=false" et on prend la reponse fournit acet appel.
      if(response.data.videos.results[0] && response.data.videos.results[0].key){ // petite condition pour verifier
      const youtubekey = response.data.videos.results[0].key // on cree une const qui sera la clé de notre vidéo
      let newCurrentMovieState= this.state.currentMovie // on cree un nouveau current auquel on va ajouter la vidéo
      newCurrentMovieState.videoId= youtubekey // on ajoute la clé a notre video
      this.setState({currentMovie:newCurrentMovieState})
      } // mise a jour du state avec le nouveau current qui a la video.
    })
  }

    // cette fonction permet de recuperer le movie cliqué et met a jour le state du current movie pour l'affichage de la video
    //avec le this.applyVideoToCurrentMovie
    // cette fonction est flèché pour eviter de binder notre methode.
   onClickList=(movie)=>{
     this.setState({currentMovie : movie}, function(){ // mise a jour du state et appel d'une fonction callback
      this.applyVideoToCurrentMovie()// application de la fonction vidéo
      this.setRecommandations()// application des recommandations
    })
   }

   // fonction pour la barre de recherche 
   onClickSearch=(searchText)=>{
    if(searchText){ //si la barre de recherche est vérifié
      axios.get(`${API_END_POINT}${SEARCH_URL}&${API_KEY}&query=${searchText}`).then(response=>{ // requête ajax
        if(response.data && response.data.results[0]){// s'il y'a pas de reponse vide  et un premier resultat
          if(response.data.results[0].id !== this.state.currentMovie.id){// et si cette reponse est differente du state.currentMovie
            this.setState({currentMovie:response.data.results[0]}, () => {// on met a jour le state avec cette reponse
              this.applyVideoToCurrentMovie();// et on lui applique la video
              this.setRecommandations(); // et les recommandations pour cette video
        })
          }
        }
      })
    }
   }


   // fonction pour les recommandations des videos
   setRecommandations=()=>{
    axios.get(`${API_END_POINT}movie/${this.state.currentMovie.id}/recommendations?${API_KEY}&language=fr`).then(response=>{ //requête ajax
      this.setState({movieList:response.data.results.slice(0,6)})//et on modifie le state avec les recommandations de la video dans le currentMovie
    })
   }

  


  render(){
    // avec l'appel ajax la videoList est retourné 2 fois une fois vide et une fois avec les 6 films
    //pour eviter cela on creer une fonction avec une condition pour qu'elle ne renoie que le tableau avec les 6 elts
    const renderVideoList =()=>{
      if(this.state.movieList.length>=6){
        return <VideoList movieList={this.state.movieList} callback={this.onClickList}/>
      }
    }
    return(
        <div className="App">
          <div className="first-videos">
            <SearchBar callback={this.onClickSearch}/>
            <Video videoId={this.state.currentMovie.videoId}/>
            <VideoDetail title={this.state.currentMovie.title} description={this.state.currentMovie.overview}/>
          </div>
          <div className="second-videos">
             {renderVideoList()}
          </div>
        </div>
    )
      
  }
}

export default App;
