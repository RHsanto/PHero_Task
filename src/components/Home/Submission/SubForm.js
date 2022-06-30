import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const SubForm = () => {
  const { register, handleSubmit ,reset} = useForm();
  const onSubmit = data => {
    console.log(data);
    axios.post('http://localhost:8000/add-billing',data)
    .then(res =>{
      console.log(res);
      if(res.data.insertedId){
        alert('Radio Station Add Successfully');
      reset()

      }
    })
  
};
  
  return (
    <div>
     {/* <!-- Button trigger modal --> */}
<button type="button" className='AddBtn'  data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Add New Bill
</button>

{/* <!-- Modal --> */}
<form onSubmit={handleSubmit(onSubmit)}>
<div class="modal fade text-dark" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel1" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel1">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
{/*Start  Model Body*/}
<div class="modal-body">
      <div class="form-floating mb-3">
        <input type="text" {...register("name", { required: true })} class="form-control" id="floatingInput" placeholder="rakibul santo"/>
        <label for="floatingInput">Enter Your Name</label>
     </div>
      <div class="form-floating mb-3">
        <input type="email" {...register("email", { required: true })} class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Enter Email address</label>
     </div>
      <div class="form-floating mb-3">
        <input type="tel" {...register("phone", { required: true })} class="form-control" id="floatingInput" placeholder="Mobile"/>
        <label for="floatingInput">Enter Phone Number</label>
     </div>
      <div class="form-floating mb-3">
        <input type="number" {...register("amount", { required: true })} class="form-control" id="floatingInput" placeholder="Mobile"/>
        <label for="floatingInput">Enter Amount </label>
     </div>
  
      </div>
     
  {/*Start  Model Footer*/}
      <div class="modal-footer">
      <button data-bs-dismiss="modal" className= ' btn btn-success px-5 py-2' type="submit" >Submit</button>
      </div>
    </div>
  </div>

</div>
</form>


    </div>
  );
};

export default SubForm;