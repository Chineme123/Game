import React from 'react'
import '../sass/ScoreBoard.css'

const ScoreBoard = ({scores, xPlayer}) => {
    const {oScore} = scores;
  return (
    <div className='score-board sco'>
        <span id='o' className = {`score o-score ${xPlayer && 'inactive'}`}>O  - {oScore}</span>
    </div>
  )
}

export default ScoreBoard