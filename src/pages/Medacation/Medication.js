import React from 'react';
import './medaction.css'


const Medication = () => {
    return (
       <div className='bag'>
            <div>
            <h1 style={{textAlign:"center",fontWeight:"bolder",paddingTop:"20px"}}>Medication in the hospital</h1>
            <p style={{fontWeight:"bolder",textAlign:"center"}}> when the people are getting chick .they needed to observe by doctor </p>
        </div>
        <div className="card mb-3 container mx-auto text-center py-5 my-5" style={{maxWidth: "740px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH58XLciWisc0OEvy8vdso03PhsIr8OwjS_g&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 " >
      <div className="card-body">
        <h5 className="card-title">Doctor checkup her</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        <div className="card mb-3 container mx-auto text-center  py-5 my-5" style={{maxWidth: "740px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ1IfVV0q4zvy7TUf0nMMAhKpMujKbGRi3OQ&usqp=CAU" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 " >
      <div className="card-body">
        <h5 className="card-title">Pharmacist cheek the store</h5>
        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>
        <div className="card mb-3 container mx-auto text-center  py-5 my-5" style={{maxWidth: "740px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://www.eadiehill.com/wp-content/uploads/2018/06/nurse-gives-a-senior-woman-the-medicine_9841759_xxl-300x200.jpg" className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8 " >
      <div className="card-body">
        <h5 className="card-title">Nurse take care of here</h5>
        <p className="card-text">do not take any medicine unless it has been prescribed for you and given to you by hospital staff.</p>
        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

       </div>
    );
};

export default Medication;