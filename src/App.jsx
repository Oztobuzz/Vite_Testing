
import { Route, Routes } from 'react-router-dom';
import Home from './routes/home.component';
import Navbar from './routes/header.component';
import Vehicle from './routes/vehicle.component';
import Mcp from './routes/mcp.component';
import './App.css';
// import CardList from './components/card_list/card_list.component';
// import SearchBox from './components/search_box/search_box.component';

function App(){
  return(
    <Routes>
      <Route path = '/' element = {<Navbar/>}>
      <Route path='worker' element = {<Home/>}></Route>
      <Route path = 'vehicle' element = {<Vehicle/>}></Route>
      <Route path = 'mcp' element = {<Mcp/>}></Route>
      
      </Route>
      
    </Routes>
  )
}

export default App;
