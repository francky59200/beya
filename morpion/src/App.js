import React from 'react';

import './App.css';

function Square(props){ // fonction composant dépourvu de state qui est géré par le composant parent (Board)
  // au clic du bouton il appele son parent qui lui renvoit la methode onClick avec le state mis a jour.
    return (
      <button className="square" 
      onClick={()=>props.onClick()}>
        {props.value}
      </button>
    );
  
}

class Board extends React.Component {// composant parent qui gére le state et renvoie les props aux composant enfant
  constructor(props){
    super(props);
    this.state={
      squares: Array(9).fill(null),// on cree un tableau de 9 squares
      xIsNesxt: true // on attribut la valeur par defaut au 1er clic 'X'
    }
  }

  handleClick(i){
    const squares= this.state.squares.slice();// on fait une copie du tableau pour le setState
    if(calculateWinner(squares) || squares[i]){// on compare le return de la fonction si elle est true on arrete le jeu
      return;
    }
    squares[i]= this.state.xIsNesxt ?'X' : 'O';// sinon on continue le tour suivant avec une condition ternaire 
    this.setState({squares: squares,
                  xIsNesxt: !this.state.xIsNesxt});// et on met a jour le state
  }

  renderSquare(i) {
    return <Square 
           value={this.state.squares[i]}// la value du state apres mise a jour grace au setState dans la methode handleClick
           onClick={()=>this.handleClick(i)} />;// la methode que le parent envoie a l'enfant lors du clic
  }

  render() {
    let status;
    const winner= calculateWinner(this.state.squares);// ici on gére l'affichage du nom du gagnant si le calculateWinner renvoie square[a];
    if (winner){
      status='le gagnant est ' + winner; // alors il y'a un gagnant
    }
    else{
      status='le prochain joueur est ' + (this.state.xIsNesxt ? 'X' : 'O');// sinon on recommence une condition pour contuinuer le jeu
    }

    return (
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  render() {
    return (
      <div className="game">
        <div className="game-board">
          <Board />
        </div>
        <div className="game-info">
        </div>
      </div>
    );
  }
}

function calculateWinner(squares) {
  const lines = [// les differentes combinaisons du tableau
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {// on fait une boucle sur ces combinaisons
    const [a, b, c] = lines[i];// on recupére une ligne
    if (squares[a] === squares[b] && squares[a] === squares[c]) {// et on fait une condition qui renvoit true c'est a dire le gagnant.
      return squares[a];
    }
  }
  return null; // sinon false
}

export default Game;