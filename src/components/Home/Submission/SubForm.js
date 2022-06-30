import React from 'react';

const SubForm = () => {
  
  return (
    <div>
     {/* <!-- Button trigger modal --> */}
<button type="button" className='AddBtn'  data-bs-toggle="modal" data-bs-target="#exampleModal1">
 Add New Bill
</button>

{/* <!-- Modal --> */}
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
        <input type="text" class="form-control" id="floatingInput" placeholder="rakibul santo"/>
        <label for="floatingInput">Enter Your Name</label>
     </div>
      <div class="form-floating mb-3">
        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
        <label for="floatingInput">Enter Email address</label>
     </div>
      <div class="form-floating mb-3">
        <input type="tel" class="form-control" id="floatingInput" placeholder="Mobile"/>
        <label for="floatingInput">Enter Phone Number</label>
     </div>
      <div class="form-floating mb-3">
        <input type="number" class="form-control" id="floatingInput" placeholder="Mobile"/>
        <label for="floatingInput">Enter Amount </label>
     </div>
  
      </div>
  {/*Start  Model Footer*/}
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div>
  );
};

export default SubForm;