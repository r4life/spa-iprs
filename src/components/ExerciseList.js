import React from 'react'

import exercise from '../assets/json/exercises.json';
import ExerciseCard from './ExerciseCard.js';

const ExerciseList = () => {

  const dummyText = (
    exercise.map((exercise, index) => (
      <ExerciseCard key={index} exercise={exercise}/>
    ))
  )

  return (
    <div>
      {dummyText}
    </div>
  )
}

export default ExerciseList