import React, { useEffect, useState } from 'react';
import Billing from './Billing/Billing';
import './Home.css'


const Home = () => {
  const [bills,setBills] =useState([])
  useEffect(()=>{
    fetch('https://radiant-sea-77260.herokuapp.com/billing-list')
    .then(res=>res.json())
    .then(data=>setBills(data.bills))
  })

  // here sum total paid amount
  let numbers = 0;
  bills.forEach(data=>numbers = numbers + parseInt(data.amount))
  // searrch

  return (
    <div className='home'>
  {/*Navbar  */}
  <div className="navbar ">
    <div className="container ">
      <div><h2>Power Hack</h2></div>
      <div >
        Paid Total : {numbers}
      </div>
    </div>
  </div>
{/* search section */}
  <div className="container">
{/* Billing Table */}
    <Billing/>
   </div>
    
    </div>
  );
};

export default Home;