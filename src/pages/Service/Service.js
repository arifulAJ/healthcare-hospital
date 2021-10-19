import React from 'react';
import './Service.css'

const Service = () => {
    return (
       <div>
            <div className="py-5 my-5 hed">
            <h1 style={{fontFamily:'sans-serif',textAlign:"center",fontWeight:'bolder',paddingTop:'1px'}}>Well come to our Hospital </h1>
            <p style={{fontWeight:'bolder',textAlign:'center',paddingTop:'20px'}}>We are provide best service .and also our Hospital reputation is well . it is familiar all over the country . and also we are committed  to give our best</p>
        </div>
        <h2  style={{fontFamily:'sans-serif',textAlign:"center",fontWeight:'bolder',color:"tomato"}}>Describe about the services</h2>
        <div className="row row-cols-1 row-cols-md-2 g-4 container mx-auto">
  <div className="col">
    <div className="card">
      <img src="https://3.imimg.com/data3/GQ/EM/MY-8963348/ambulance-services-500x500.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">For the emergency </h5>
        <p className="card-text">An emergency medical service aggregation platform in Bangladesh located in Dhaka. Book an ambulance here to get the fastest response.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.hicnepal.com/wp-content/uploads/2018/09/service-hospital.jpg" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">All kind of treatment provide here</h5>
        <p className="card-text">The basic services that hospitals offer include:
short-term hospitalization.
emergency room services.
general and specialty surgical services.
x ray/radiology services.
laboratory services.
blood services.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img src="https://www.eehealth.org/-/media/images/modules/locations/edwardplainfieldcancer.jpg?h=594&w=881&hash=62A3EFBA2073673040FAA122AC75A7C9" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Cancer center</h5>
        <p className="card-text">Your Cancer Hospital stock images are ready. Download all free or royalty-free photos and images. Use them in commercial designs under lifetime, ...
.</p>
      </div>
    </div>
  </div>
  <div className="col">
    <div className="card">
      <img style={{height:"350px"}} src="https://media.istockphoto.com/vectors/world-blood-donor-day-concept-vector-id476051348?k=20&m=476051348&s=612x612&w=0&h=9K4BdTargeEQCtoSVueHcOzDDRkVO0xEcc7rN4C9CUk=" className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">All type of blood is available here  </h5>
        <p className="card-text">The best selection of Royalty Free Blood Donation Poster Vector Art, Graphics and Stock Illustrations. Download 2200+ Royalty Free Blood Donation Poster ...</p>
      </div>
    </div>
  </div>
</div>

       </div>
    );
};

export default Service;