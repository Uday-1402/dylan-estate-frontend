import React from 'react';
import { useDispatch } from 'react-redux';
import { setPage } from '../features/pageSlice';

const Navbar = () => {
    const dispatch = useDispatch();
    const changePage = ()=>{
        dispatch(setPage({page: 1}));
    }
  return (
    <>
        <header>
          <div className="img-container">
            <img src="logo.png" alt="Dylan Estate" />
          </div>
          <nav>
            <div onClick={changePage}>PROPERTIES</div>
            <div>MY DASHBOARD/ACTIVITY</div>
            <div>LIST YOUR PROPERTY</div>
            <div>CONTACT US</div>
            <div>MORE</div>
            <div>🔍</div>
            <div>👤</div>
          </nav>
        </header>
    </>
  )
}

export default Navbar