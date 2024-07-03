import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const API = import.meta.env.VITE_API_URL

const WorkoutDetails = () => {
  const [workout, setWorkout] = useState({
    "type": "",
    "durationInMinutes": "",
    "caloriesBurned": 0,
    "date": ""
  })

  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/workouts/${id}`)
      .then((res) => {
        return res.json()
      })
      .then(resJSON => {
        console.log(resJSON)
        setWorkout(resJSON)
      })
      .catch(() => {
        navigate("/notfound")
      })
  }, [id, navigate])

  return (
    <div>
      <h1>WorkoutDetails</h1>
      <p>{workout.type}</p>
      <p>{workout.durationInMinutes}</p>
      <Link to={`workouts/${id}/edit`}>
        <button>Edit</button>
      </Link>
      <button>Delete</button>
    </div>
  )
}

export default WorkoutDetails