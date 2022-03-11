//step 1 after installation
import { BrowserRouter,Switch, Route } from 'react-router-dom';

//step 2--importing of created external components
import Navbar from './components/Navbar';
import Home from './pages/home/home'
import Create from './pages/create/create'
import Recipe from './pages/recipe/recipe'
import Search from './pages/search/search'


import './App.css'





function App() {
  return (
    <div className="App">

      {/* step 3---create the routes in html-----they display one per page depending on link*/}
      <BrowserRouter>
      <Navbar></Navbar>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/create/'>
          <Create></Create>
        </Route>
        <Route path='/search'>
          <Search></Search>
        </Route>
        <Route path='/recipes/:id'>
          <Recipe></Recipe>
        </Route>
      </Switch>
      </BrowserRouter>
      
    </div>
  );
}

export default App