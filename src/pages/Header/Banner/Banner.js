import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div>
            <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
      <img src="https://www.mbbsinbangladesh.in/wp-content/uploads/2017/11/khwaja-yunis-ali-mc-fees.jpg" class="d-block w-100 slide" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h6>Hospital out look</h6>
        <p>Khwaja Yunuse Ali  Medical Collage & Hospital</p>
      </div>
    </div>
    <div class="carousel-item" data-bs-interval="2000">
      <img src="https://kyanc.edu.bd/admin/Files/WebContentsFiles/20210823102716.png" class="d-block w-100 slide" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h6>Hospital Nursing Room</h6>
        <p>khwaja Yunuse ali Nursing Room and medication Place </p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://www.pennstatehealth.org/sites/default/files/styles/800x600/public/Neurosurgery/Neurosurgery2.jpg?itok=Xd5avzHe" class="d-block w-100 slide" alt="..."/>
      <div class="carousel-caption  d-md-block">
        <h6>Neurosurgeon And Consulates</h6>
        <p>It'S  make this Hospital glories and familiar all over the country </p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
};

export default Banner;