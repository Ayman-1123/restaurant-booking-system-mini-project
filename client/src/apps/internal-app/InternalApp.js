import React from 'react'
import styles from './InternalApp.module.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Settings from './containers/Settings';
import NavBar from './containers/NavBar';
import Home from './containers/Home';
import About from './containers/About';
import Menu from './containers/Menu';
import TablesPage from './pages/booking/TablesPage';
import BookingPage from './pages/booking/BookingPage';
import Strength from './containers/Strength';

const InternalApp = () => {

  return (
    <div className={styles.InternalApp}>
      <div className={styles.NavBar}>
        <NavBar/>
      </div>
      <div className={styles.View}>
        <Routes>
          <Route path='*' element={<Navigate replace to='/home'/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/menu' element={<Menu/>}/>
          <Route path='/strength' element={<Strength/>}/>
          <Route path='/settings' element={<Settings/>}/>
          <Route path='/booking'>
            <Route path='/booking' element={<BookingPage/>}/>
            <Route path='/booking/tables' element={<TablesPage/>}/>
          </Route>
        </Routes>
      </div>
    </div>
  )
}

export default InternalApp;