import React from 'react';



const Expand = (props) => {
 
    const {testImg,testName,testDetails}=props.doctor
    return (
        <div className="container mx-auto my-2">
            <div className="card" style={{width:'18rem'}} >
  <img style={{height:'250px'}} src={testImg} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{testName}</h5>
    <p className="card-text">{testDetails}</p>
 <button onClick={()=>props.HandelButton(props.doctor)} className="btn btn-primary">For the Consultant</button>
  </div>
</div>
        </div>
    );
};

export default Expand;