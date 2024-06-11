import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import course1 from "../assets/course1.png"; 
import course2 from "../assets/course2.png"; 
import course3 from "../assets/course3.png"; 
import course4 from "../assets/course4.png"; 
import course5 from "../assets/course5.png"; 
import course6 from "../assets/course6.png"; 
import course7 from "../assets/course7.png"; 
import course8 from "../assets/course8.png"; 
import './style.css';

// import required modules
import { Pagination, Navigation } from 'swiper/modules';

const Courses = () => {
  const [swiperRef, setSwiperRef] = useState(null);

  let appendNumber = 8; // Initialize to 8 for 8 slides
  let prependNumber = 1;

  const prepend2 = () => {
    swiperRef.prependSlide([
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
    ]);
  };

  const prepend = () => {
    swiperRef.prependSlide(
      '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
    );
  };

  const append = () => {
    swiperRef.appendSlide(
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
    );
  };

  const append2 = () => {
    swiperRef.appendSlide([
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
      '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
    ]);
  };

  return (
    <div className='courses-container'>
      <div className='text-4xl bold mt-10 text-white'>
        <h2><span className='text-pink'>OUR</span> COURSES</h2>
      </div>
      <Swiper
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={course1} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course3} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course5} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course6} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course7} alt="" /></SwiperSlide>
        <SwiperSlide><img src={course8} alt="" /></SwiperSlide>
      </Swiper>
      <button className='mt-2 px-4 py-2 bg-red-600 rounded hover:bg-pink-700 text-white transition duration-300'>More Courses</button>
    </div>
  )
}

export default Courses;
