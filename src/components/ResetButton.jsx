import React from 'react'
import '../sass/ResetButton.css'

const ResetButton = ({resetBoard}) => {
  return (
    <button className='reset-button' onClick = {resetBoard}>
      Reset Game 
    </button>
  )
}

export default ResetButton