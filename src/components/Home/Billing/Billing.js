import React from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import '../Home.css'
const Billing = () => {
  const radioData = [
    {id:"1554646", paid:"2500", phone:"01887403752", name:"Rakibul Hasan",email:"santodon176@gmail.com"},
    {id:"1464622", paid:"1500", phone:"01887403752", name:"Rakibul Santo",email:"rakibulhasan176@gmail.com"},
    {id:"3546656", paid:"3500", phone:"01887403752", name:"Dog Asad",email:"thekawsarhossain11@gmail"},
    {id:"4632562", paid:"1253", phone:"01887403752", name:"Ballads FM",email:"monirulfahad11@gmail.com"},
    {id:"5649688", paid:"5201", phone:"01887403752", name:"Maximum  Abu",email:"abubakkar111@gmail.com"},
    {id:"1554646", paid:"2500", phone:"01887403752", name:"Rakibul Hasan",email:"santodon176@gmail.com"},
    {id:"1464622", paid:"1500", phone:"01887403752", name:"Rakibul Santo",email:"rakibulhasan176@gmail.com"},
    {id:"3546656", paid:"3500", phone:"01887403752", name:"Dog Asad",email:"thekawsarhossain11@gmail"},
    {id:"4632562", paid:"1253", phone:"01887403752", name:"Ballads FM",email:"monirulfahad11@gmail.com"},
    {id:"5649688", paid:"5201", phone:"01887403752", name:"Maximum  Abu",email:"abubakkar111@gmail.com"},
  ]
  
  return (
    <div className='container'>
<div className="billing-table mt-5">
  <table class="table table-hover">
  <thead>
    <tr className='common-border bg-secondary text-light'>
      <th className='common-border' scope="col">Billing ID</th>
      <th className='common-border' scope="col">Full Name</th>
      <th className='common-border' scope="col">Email</th>
      <th className='common-border' scope="col">Phone</th>
      <th className='common-border' scope="col">Paid Amount</th>
      <th className='common-border' scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {radioData.map(data=>
        <tr key={data.key}>
        <td className='common-border'>{data.id}</td>
        <td className='common-border'>{data.name}</td>
        <td className='common-border'>{data.email}</td>
        <td className='common-border'>{data.phone}</td>
        <td className='common-border'>{data.paid}</td>
        <td className='common-border' >
          <button className='btn btn-success'><BiEdit/> edit</button>
          <button className='btn btn-danger ms-2'><MdDelete/> delete</button>
        </td>
      </tr>)}
   
  </tbody>
</table>
  
   
   </div>
    </div>
  );
};

export default Billing;