import { lazy } from 'react';
import css from './App.module.css';
import Layout from '../Layout/Layout'
import { Route, Routes } from 'react-router-dom';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'))
const MoviesPage = lazy(() => import('../../pages/MoviesPage/MoviesPage'))
const MovieDetailsPage = lazy(() => import('../../pages/MovieDetailsPage/MovieDetailsPage'))
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage/NotFoundPage'))
const MovieCast = lazy(() => import('../MovieCast/MovieCast'))
const MovieReviews = lazy(() => import('../MovieReviews/MovieReviews'))

export default function App() {

  return (
    <>
    <Layout>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/movies' element={<MoviesPage/>}/>
        <Route path='/movies/:movieId' element={<MovieDetailsPage/>}>
          <Route path='/movies/:movieId/cast' element={<MovieCast/>}/>
          <Route path='/movies/:movieId/reviews' element={<MovieReviews/>}/>
        </Route>
        <Route path='*' element={<NotFoundPage/>}/>
      </Routes>
    </Layout>
    </>
  )
}

