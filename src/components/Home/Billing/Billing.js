import React from 'react';

const Billing = () => {
  const radioData = [
    {id:"1", name:"Putin FM",radio:"66,4"},
    {id:"2", name:"Biden FM",radio:"101,6"},
    {id:"3", name:"Dog FM",radio:"99,4"},
    {id:"4", name:"Ballads FM",radio:"87,1"},
    {id:"5", name:"Maximum FM",radio:"142,4"},
  ]
  
  return (
    <div className='container'>
   <div className="billing-section">
  
  <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">#</th>
      <th scope="col">#</th>
      <th scope="col">#</th>
      <th scope="col">#</th>
      <th scope="col">#</th>
    </tr>
  </thead>
  <tbody>
    {radioData.map(data=>
        <tr key={data.key}>
        <td>{data.radio}</td>
        <td>{data.name}</td>
        <td>{data.radio}</td>
        <td>{data.name}</td>
        <td>{data.radio}</td>
        <td>{data.name}</td>
      </tr>)}
   
  </tbody>
</table>
  
   
   </div>
    </div>
  );
};

export default Billing;