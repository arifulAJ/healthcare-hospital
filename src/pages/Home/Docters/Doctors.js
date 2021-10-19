import React, { useEffect, useState } from 'react';

import Handel from '../HandelButton/Handel';
import Expand from './Expand/Expand';

const Doctors = () => {
    const [doctors,setDoctors]=useState([]);
    const [click,setClick]=useState([])
    useEffect(()=>{
        fetch('./Doctor.json')
        .then(res=>res.json())
        .then(data=>setDoctors(data))
    },[]);
    const HandelButton=(doctor)=>{
        setClick(doctor);

    }
  
  

    return (
        <div className="pt-5">
            <h1 style={{textAlign:"center",fontWeight:'bolder'}}>Services of Our Hospital </h1>
        <div className="row row-cols-1 row-cols-md-2  row-cols-lg-3 container text-center mx-auto py-5">
         {   doctors.map(doctor=> <Expand  
         key={doctor.id} doctor={doctor}
         HandelButton={HandelButton}
         >  </Expand>)
         }
        </div>
       {
         <Handel  click={click}></Handel>
          
      }
        </div>
    );
};

export default Doctors;