import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import './App.css'
import NavBar from './Components/NavBar'
import Edit from './Pages/Edit'
import FourOFour from './Pages/FourOFour'
import Home from './Pages/Home'
import Index from './Pages/Index'
import New from './Pages/New'
import Show from './Pages/Show'

function App() {

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
