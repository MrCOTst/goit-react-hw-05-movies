// import { useState, useEffect } from 'react';
// import {
//   NotificationContainer,
//   NotificationManager,
// } from 'react-notifications';
// import 'react-notifications/lib/notifications.css';

import './styles.css';
// import Modal from './Modal';
// import Searchbar from './Searchbar';
// import { ThreeDots } from 'react-loader-spinner';
// import ImageGallery from './ImageGallery';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Movies from './pages/Movies';
import MovieDetails from './pages/MovieDetails';
import { Container, Header, Link } from './App.styled';
// import Search from './Search';
import NotFound from './pages/NotFound';


export default function App () {
  return(
    <Container>
    <Header>
    <nav>
    <Link to="/" end>Home</Link>
    <Link to="/movies">Movies</Link>
    </nav>
    </Header>
     <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/movies" element={<Movies/>}></Route>
    <Route path="/movies/:id" element={<MovieDetails/>}></Route>
    {/* <Route path="/movies/search" element={<Search/>}></Route> */}
    
     
    <Route path="*" element={<NotFound />}></Route>
    </Routes>
    

    </Container>
  )
}