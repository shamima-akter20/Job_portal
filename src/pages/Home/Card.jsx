import React from 'react'
import BlurText from './BlurText'
const Card = () => {
  const handleAnimationComplete = () => {
    console.log('Animation completed!')
  }
  return (
    <div className="m-50">
      <BlurText
        text="Isn't this so cool?!"
        delay={150}
        animateBy="words"
        direction="top"
        onAnimationComplete={handleAnimationComplete}
        className="text-2xl mb-8"
      />

      <h1 className="text-6xl font-bold">hello hello hello hello</h1>
    </div>
  )
}

export default Card
