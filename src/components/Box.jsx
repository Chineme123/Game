import React from 'react'
import '../sass/Box.css'

const Box = ({value, onClick}) => {
    const style = value === "X" ? 'box x' : 'box o';

  return (
    <button className = {style} onClick = {onClick}> <span> {value} </span> </button>
  )
}

export default Box