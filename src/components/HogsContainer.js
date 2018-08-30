import React from 'react';
import HogCard from './HogCard'
const HogsContainer = ({ hogs }) => {
  const genHogCards = (pigs) => {
    return pigs.map((pig, index) => {
      return <HogCard key={index} hog={pig} />
    })
  }
  return (
    <div>
      {genHogCards(hogs)}
    </div>
  )
}

export default HogsContainer
