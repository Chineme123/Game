import React from 'react';
import { useState } from 'react';
import './sass/App.css'
import Board from './components/Board';
import ScoreBoardx from './components/ScoreBoardx'
import ScoreBoardo from './components/ScoreBoardo';
import ResetButton from './components/ResetButton';
import Announcer from './components/Announcer';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [scores, setScores] = useState({xScore: 0 , oScore: 0})
  const [xPlayer, setXPlayer] = useState(true);
  const [gameOver, setGameOver] = useState(false)

  const WIN_CONDITIONS = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];

  const handleBoxClick = (boxIndex) => {
    const updateBoard = board.map((value, index) => {

      if(index === boxIndex){
        return xPlayer === true ? "X" : "O";
      }else{
        return value;
      }

    })

    const winner = checkWinner(updateBoard);

    if(winner){
      if(winner === "O"){
        let {oScore} = scores;
        oScore += 1
        setScores({...scores, oScore})
      }else{
        if(winner === "X"){
          let {xScore} = scores;
          xScore += 1
          setScores({...scores, xScore})
        }
      }
    }; 

    setBoard(updateBoard);

    setXPlayer(!xPlayer);

    changeBackground();
  }

  let color = null;
  const changeBackground = () => {
    if(xPlayer){
      color = `--blue`
    }else{
      color = `--red`
    }
    const cssTemplateString = `.game-board::before {
      --blue: linear-gradient(90deg, rgba(35, 41, 122, 0.4), rgba(35, 41, 122, 0.6), rgba(35, 41, 122, 0.8), rgba(35, 41, 122, 1));
      --red: linear-gradient(90deg, rgba(150, 0, 24, 1) , rgba(150, 0, 24, 0.8), rgba(150, 0, 24, 0.6), rgba(150, 0, 24, 0.4));
      background: var(${color}); 
      }`;

    const styleTag = document.createElement("style");
    styleTag.innerHTML = cssTemplateString;
    document.head.insertAdjacentElement('beforeend', styleTag);
  }

  const checkWinner = (board) => {
    let draw = 'This match was a Draw'
    for(let i = 0; i < WIN_CONDITIONS.length; i++){
      const [x, y, z] = WIN_CONDITIONS[i];

      if(board[x] && board[x] === board[y] && board[y] === board[z]){
        setGameOver(true)
        return board[x]
      }
    }
  }

  const resetBoard = () => {
    setGameOver(false);
    setBoard(Array(9).fill(null));
  }

  return (
    <div className='game-board'>
      <div className='inner'>
        <ScoreBoardx scores = {scores} xPlayer = {xPlayer}/>
        <Board board = {board} onClick = { gameOver ? resetBoard : handleBoxClick}/>
        <Announcer xPlayer = {xPlayer}/>
        <ResetButton resetBoard = {resetBoard}/>
        <ScoreBoardo scores = {scores} xPlayer = {xPlayer}/>
      </div>
    </div>
  );
}

export default App;
