import React, { useEffect, useState } from 'react';
import { BiEdit } from 'react-icons/bi';
import { MdDelete } from 'react-icons/md';
import '../Home.css'
const Billing = () => {
  const[editBills,setEditBills]=useState({})
  const[updateName,setUpdateName]=useState("")
  const[updateEmail,setUpdateEmail]=useState("")
  const[updatePhone,setUpdatePhone]=useState("")
  const[updateAmount,setUpdateAmount]=useState("")
  const[bills,setBills]=useState([])

// API fetching
  useEffect(()=>{
fetch('http://localhost:8000/billing-list')
.then(response=>response.json())
.then(data=>setBills(data))
  },[])

 // Here station delete method
 const handleDelete = id =>{
  console.log(id);
 const proceed = window.confirm('Are you sure , you want to delete ?');
 if(proceed){
   const url =`http://localhost:8000/delete-billing/${id}`
   fetch(url,{
       method: 'DELETE'
   })
       .then(res => res.json())
       .then(data =>{
           if(data){
            alert('Deleted successfully')
            const remaining = bills.filter(bill => bill._id !== id)
            setBills(remaining)
           }
       })}

}
  // here use put method for update radio station
   const handleUpdate=(id)=>{
    if(updateName === editBills.name && updateEmail === editBills.email){
        alert("You are no changed table")
    }
    const data = {name:updateName,email:updateEmail,phone:updatePhone,amount:updateAmount }
    const url = `http://localhost:8000/update-billing/${id}`
    fetch(url,{
      method: "PUT",
      headers: {"content-type": "application/json"},
      body:JSON.stringify(data)
 
    })
   .then(res=> res.json())
   .then(data=>{
      console.log(data);
      alert('Billing Table Update Success')
     window.location.reload()
   })
   }

    // here radio station update 
  const handleEdit=(data)=>{
    setEditBills(data);
  }
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
    {bills.map(data=>
        <tr key={data.key}>
        <td className='common-border'>{data?.i}</td>
        <td className='common-border'>{data?.name}</td>
        <td className='common-border'>{data?.email}</td>
        <td className='common-border'>{data?.phone}</td>
        <td className='common-border'>{data?.amount}</td>
        <td className='common-border' >
               {/* here edit button */}
               <button  onClick={()=>handleEdit(data)} 
                 className='btn btn-success' data-bs-toggle="modal" data-bs-target="#exampleModal">
              <span className='d-flex align-items-center gap-2'>  Edit <BiEdit/></span>   </button>        
               <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
           <div class="modal-dialog">
             <div class="modal-content">
               <div class="modal-header">
                 <h5 class="modal-title" id="exampleModalLabel">Edit Billing Table</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
               </div>
               <div class="modal-body">
               <div class="form-floating  m-3">
                 <input type="text" defaultValue={editBills?.name} 
                 class="form-control" id="floatingInput" onChange={e=>setUpdateName(e.target.value)}
                 />
                 <label for="floatingInput">Current Full Name</label>
              </div>
             <div class="form-floating m-3">
                  <input type="email" defaultValue={editBills?.email} 
                   class="form-control" id="floatingInput"  onChange={e=>setUpdateEmail(e.target.value)}
                   />
                 <label for="floatingInput">Current Email address</label>
              </div>
             <div class="form-floating m-3">
                  <input type="tel" defaultValue={editBills?.phone} 
                   class="form-control" id="floatingInput"  onChange={e=>setUpdatePhone(e.target.value)}
                   />
                 <label for="floatingInput">Current Phone</label>

              </div>
             <div class="form-floating m-3">
                  <input type="tel" defaultValue={editBills?.amount} 
                   class="form-control" id="floatingInput"  onChange={e=>setUpdateAmount(e.target.value)}
                   />
                 <label for="floatingInput">Current Amount</label>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              <button type="button" class="btn btn-primary"
               onClick={()=>handleUpdate(editBills?._id)}>Save changes</button>
            </div>
         </div>
            </div>
              </div>
              {/* here delete button */}
              <button onClick={()=>handleDelete(data._id)}
                  className='btn btn-danger ms-4 '>
                    <span className='d-flex align-items-center gap-2'>
                 Delete <MdDelete/></span>
              </button>
          {/* <button className='btn btn-danger ms-2'><MdDelete/> delete</button> */}
        </td>
      </tr>)}
   
  </tbody>
</table>
  
   
   </div>
    </div>
  );
};

export default Billing;