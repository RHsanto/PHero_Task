import React from 'react';
import Billing from './Billing/Billing';
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
  {/*Navbar  */}
  <div className="navbar ">
    <div className="container ">
      <div><h2>Power Hack</h2></div>
      <div><p>Paid Total :0</p></div>
    </div>
  </div>
   {/* search section */}

   <div className="container ">
    <div className='searchSection d-flex align-items-center  justify-content-between'>
    <div className="searchField">
      <p>Billings</p>
      <input type="search" name="" id="" />
    </div>
    <div className="AddBtn">
    <button>Add New Bill</button>
    </div>
    </div>
   </div>

    <Billing/>
    
    </div>
  );
};

export default Home;