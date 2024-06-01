import React from 'react'
import '../sass/ScoreBoard.css'

const ScoreBoard = ({scores, xPlayer}) => {
    const {xScore} = scores;
  return (
    <div className='score-board scx'>
        <span id='x' className = {`score x-score ${!xPlayer && 'inactive'}`}>X - {xScore}</span>
    </div>
  )
}

export default ScoreBoard