import React from 'react'

const imageArray = [
"/src/assets/slide1.png",
"/src/assets/slide2.png",
"/src/assets/slide3.png",
];
  

export default function Slide(){
    return <div className='w-full select-none'>
        <img src={imageArray[0]} alt="" />
    </div>
}