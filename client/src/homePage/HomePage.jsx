import React from 'react'
import Banner from '../components/Banner'
import Courses from '../components/Courses'
import About from '../components/About'
import Trainers from '../components/Trainers'
import Schedule from '../components/Schedule'
import Membership from '../components/Membership'
import Reviews from '../components/Reviews'
const HomePage = () => {
  return (
    <>
    <div>
    <Banner/>
    </div>
    <div>
      <Courses/>
    </div>
    <div>
      <About/>
    </div>
    <div>
      <Trainers/>
    </div>
    <div>
      <Schedule/>
    </div>
    <div>
      <Membership/>
    </div>
    <div>
      <Reviews/>
    </div>
    </>
    
  )
}

export default HomePage
