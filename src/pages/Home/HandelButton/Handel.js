import React from 'react';


const Handel = (props) => {

    const {img,name,trietment}=props.click;
   
    return (

        <div>
      
           
<div class="card mb-3">
  <img src={img} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Doctor {name}</h5>
    <p class="card-text">{trietment}</p>
    <p class="card-text"><small class="text-muted">Last updated 3 days ago</small></p>
  </div></div>
        </div>
    );
};

export default Handel;