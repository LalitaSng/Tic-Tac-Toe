import logo from './logo.svg';
import './App.css';
import {useState} from 'react'
import {getwinner} from './util'

function App() {
  const [winner,setwinner]=useState()
  const[currentPlayer,setCurrentPlayer]=useState("x")
  const[board,setBoardState]=useState([[" "," "," "],[" "," "," "],[" "," "," "]])
  const Change=(row,col)=>{
    if(board[row][col]!==" ") return;
    // console.log(row,col)
    setBoardState((prev)=>{
      const newState=[...prev]
      newState[row][col]=currentPlayer
      const winner = getwinner(board,row,col,currentPlayer)
      if(winner) setwinner(winner)
      return newState
    });

    setCurrentPlayer((prev)=>{
      return prev==="x"?"o":"x"
    });

  }

  return (
    <div className="App">
      {!winner &&<div>Current Player : {currentPlayer}</div>}
      {winner &&<div>
        Game Over
        <div>Winner : {winner}</div>
      </div>}
    <div className="board">
      <div className="row">
        <div className="col" onClick={()=>Change(0,0)}>{board[0][0]}</div>
        <div className="col" onClick={()=>Change(0,1)}>{board[0][1]}</div>
        <div className="col" onClick={()=>Change(0,2)}>{board[0][2]}</div>
      </div>
      <div className="row">
        <div className="col" onClick={()=>Change(1,0)}>{board[1][0]}</div>
        <div className="col" onClick={()=>Change(1,1)}>{board[1][1]}</div>
        <div className="col" onClick={()=>Change(1,2)}>{board[1][2]}</div>
      </div>
      <div className="row">
        <div className="col" onClick={()=>Change(2,0)}>{board[2][0]}</div>
        <div className="col" onClick={()=>Change(2,1)}>{board[2][1]}</div>
        <div className="col" onClick={()=>Change(2,2)}>{board[2][2]}</div>
      </div>
    </div>
    </div>
  )
}

export default App;
