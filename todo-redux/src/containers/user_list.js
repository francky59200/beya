import React, { Component } from 'react'
import '../App.css'
import { connect } from 'react-redux'
import { selectUser } from '../actions/actions'
import { bindActionCreators } from 'redux'

class UserList extends Component {
    render() {
        return (
            <div className="list">
                <h2>TodoList Redux</h2>
                <ul className="col-md-3">
                    {this.props.myUser.map((user)=>{ // on boucle les elements de notre reducers avec la props myUser
                        return (
                            <li className="list-group-item" key={user.id} onClick={()=>this.props.selectUser(user)}>
                            {user.name}</li>
                        )
                    })
                    }
                </ul>
                
            </div>
        )
    }
}

// cette fonction permet de faire le lien entre notre reducers et react il nous permet d'afficher notre state
// reçu state.users qui provient de reducers.js on lui attribut la props myUser
//mapStateToProps permet de mettre a jour le store (redux) avec le nouveau state
// chaque fois que le state change il est appelé
// ensuite on le connecte au store connect(mapStateToProps)

function mapStateToProps(state){ // le lien entre notre reducer et react se fait a travers mapStateToProps
    return {
        myUser: state.users
    }
}

function mapDispatchToProps(dispatch){
    bindActionCreators({selectUser:selectUser},dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList)