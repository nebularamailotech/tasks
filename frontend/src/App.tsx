import { Route, Routes } from 'react-router-dom'
import Homepage from './pages/Homepage'
import About from './pages/about'
import RecipeDetail from './pages/recipeDetail'
import DetailCard from './components/detailCard'
import RecipeList from './pages/recipeList'

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/recipes/:id' element={<RecipeDetail />} />
      <Route path='/contact/' element={<About />} />
      <Route path='/recipes/' element={<RecipeList />} />
      <Route path='/about/' element={<About />} />

    </Routes>
    </>
  )
}

export default App
