import React from 'react'
import slideImage1 from '../assets/slide1.png'
import slideImage2 from '../assets/slide2.png'
import slideImage3 from '../assets/slide3.png'


const imageArray = [
slideImage1,
slideImage2,
slideImage3,
];
  

export default function Slide(){
    return <div className='w-full select-none'>
        <img src={imageArray[0]} alt="" />
    </div>
}