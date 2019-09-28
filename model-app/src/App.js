import React, { Component } from 'react'
import './App.css'

class App extends Component {

  state= {
    value:''
  }

  handleChange=(e)=>{
    e.preventDefault()
    this.setState({value: e.currentTarget.value})
  }

  handleAdd=(e)=>{
    e.preventDefault()
    let value= [ ...this.state.value]
    value.push(this.state.value)

    }

    

  render () {
    
    return (
      <div className="formulaire">
        <form onSubmit={this.handleAdd}>
          <label>
            <p>Name:</p>
            <input value={this.state.value} onChange={this.handleChange}/>
          </label>
          {
            this.state.value !== ''? ( <button>Add</button> ): null
            //this.state.value !== "" && ( <button>Add</button> )
            //if(this.state.value !== "") { button = <button>Add</button> }
             
            }
        </form>
        
      </div>
    )
  }
}

export default App

