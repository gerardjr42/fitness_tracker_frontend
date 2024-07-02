import { useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

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
    <div>
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path='/' element={ <Home /> } />
            <Route path='/workouts' element={< Index />} />
            <Route path='/workouts/:id' element={ <Show />} />
            <Route path='/workouts/:id/edit' element={ <Edit />} />
            <Route path='/workouts/new' element={ <New />} />
            {/* Use "*" to indicate any unknown routes will be redircted to our 404 page */}
            <Route path='*' element={ <FourOFour />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
