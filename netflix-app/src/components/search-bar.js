import React, {Component} from 'react'
import '../containers/App.css'

class SearchBar extends Component {

    state={
        searchText:"",
        placeHolder:"Tapez votre film..."
    }
    handleChange =(e)=>{
        this.setState({searchText:e.currentTarget.value})
    }
    handleClick=(e)=>{
       this.props.callback(this.state.searchText)
    }

    render(){
        return(
            <div className="search">
                <input onChange={this.handleChange} placeholder={this.state.placeHolder}/>
                <button onClick={this.handleClick}><strong>Rechercher</strong></button>
            </div>
        )
    }
}
export default SearchBar