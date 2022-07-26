import React from 'react'
import '../sass/Announcer.css'

const Announcer = ({xPlayer}) => {
    const currentPlayer = xPlayer ? "X's turn" : "O's turn";

    return (
    <div className='announcer'>
        {currentPlayer}
    </div>
  )
}

export default Announcer