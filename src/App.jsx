import { useEffect } from 'react'
import './App.css'

//Import our local host API and save it to APU variable
const API = import.meta.env.VITE_API_URL

function App() {

  //Fetch our API
  useEffect(() => {
    fetch(`${API}/workouts`)
      .then((res) => {
        return res.json()
      })
      .then(resJSON => console.log(resJSON))
  }, [])

  return (
    <>
    </>
  )
}

export default App
