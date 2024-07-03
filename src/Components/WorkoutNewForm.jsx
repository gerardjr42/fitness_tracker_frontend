import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL

const WorkoutNewForm = () => {
  const [workout, setWorkout] = useState({
    type: "",
    durationInMinutes: 0,
    caloriesBurned: 0,
    date: ""
  })

  let navigate = useNavigate()

  const handleTextChange = (e) => {
    setWorkout({
      ...workout,
      [e.target.id]: e.target.value})
  }

  const addWorkout = () => {
    fetch(`${API}/workouts`, {
      method: "POST",
      // Don't forget to stringify
      body: JSON.stringify(workout),
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(() => {
      navigate("/workouts")
    })
    .catch((e) => console.error(e))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addWorkout()
    setWorkout({
      type: "", 
      durationInMinutes: 0,
      caloriesBurned: 0,
      date:""})
  }

  return (
    <div>WorkoutNewForm
      <form onSubmit={handleSubmit}>
        <label htmlFor='type'>Type:</label>
        <input 
        type="text"
        id="type"
        value={workout.type}
        onChange={handleTextChange}
        required
        />

        <label htmlFor='durationInMinutes'>Duration:</label>
        <input 
        type="number"
        id="durationInMinutes"
        value={workout.durationInMinutes}
        onChange={handleTextChange}
        required
        />

        <label htmlFor='caloriesBurned'>Calories Burned:</label>
        <input 
        type="number"
        id="caloriesBurned"
        value={workout.caloriesBurned}
        onChange={handleTextChange}
        required
        />
        
        <label htmlFor='date'>Date:</label>
        <input 
        type="text"
        id="date"
        value={workout.date}
        onChange={handleTextChange}
        required
        />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default WorkoutNewForm