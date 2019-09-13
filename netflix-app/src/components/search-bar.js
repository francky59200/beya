import React, {Component} from 'react'

class SearchBar extends Component {

    state={
        searchText:"",
        placeHolder:"Tapez votre film..."
    }
    handleChange =(e)=>{
        this.setState({searchText:e.currentTarget.value})
    }

    render(){
        return(
            <div className="search">
                <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>
                <button>Rechercher</button>
            </div>
        )
    }
}
export default SearchBar