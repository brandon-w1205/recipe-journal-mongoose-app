// Hi, just ting this out, no s

import './App.css';
import { 
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

// Partials
import NavBar from './components/partials/NavBar'

// Routes
import Home from './components/routes/Home'
import Recipe from './components/routes/Recipe'
import NewRecipe from './components/routes/NewRecipe'
import Recipes from './components/routes/Recipes'
import EditRecipe from './components/routes/EditRecipe'
import EditComment from './components/routes/EditComment'
import DeleteComment from './components/routes/DeleteComment'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />

        <Routes>

          <Route 
            path='/'
            element={<Home />} 
          />
          <Route 
            path='/recipes' 
            element={<Recipes />} 
          />
          <Route 
            path='/recipes/new' 
            element={<NewRecipe />} 
          />
          <Route 
            path='/recipes/:id' 
            element={<Recipe />} 
          />
          <Route 
            path='/recipes/:id/edit' 
            element={<EditRecipe />} 
          />
          
        </Routes>
      </Router>
    </div>
  );
}

export default App;