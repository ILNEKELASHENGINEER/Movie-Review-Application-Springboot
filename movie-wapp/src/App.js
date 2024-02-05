import React, { useEffect } from 'react';
import moviesFetch from './ApiService';
import './App.css';
import Layout from './Components/Layout';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/home/home';
import Header from './Components/Header/Header';
import Trailer from './Components/Trailer/Trailer'

function App() {
  const [movies, setMovies] = React.useState([]);
  useEffect(() => {
    moviesFetch.getMovies()
      .then((data) => {
        console.log(data);
        setMovies(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <div className="App">
    <Header/>
    <Routes>
      <Route path='/' element={<Layout/>}>
      <Route path='/' element={<Home movies={movies}/>}></Route>
      <Route path='/Trailer/:ytTrailerId' element = {<Trailer/>}></Route>
      </Route>

    </Routes>
      
    </div>
  );
}

export default App;
