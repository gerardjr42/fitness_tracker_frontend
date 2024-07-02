import React, { useState } from 'react'

const WorkoutNewForm = () => {
  const [workout, setWorkout] = useState({})
  return (
    <div>WorkoutNewForm
      <form>
        <label>Type:</label>
        <input 
        type="text"
        id="type"
        value={workout.type}
        required
        />

        <label>Duration:</label>
        <input 
        type="number"
        id="duration"
        value={workout.durationInMinutes}
        required
        />

        <label>Calories Burned:</label>
        <input 
        type="number"
        id="calories"
        value={workout.caloriesBurned}
        required
        />
        
        <label>Date:</label>
        <input 
        type="text"
        id="date"
        value={workout.date}
        required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutNewForm