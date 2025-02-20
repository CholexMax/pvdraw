import React, { useState } from 'react'
import Heading from './Heading'
import { useRef } from 'react'

export default function OpacitySlider() {


  let [intial,setIntial]=useState(0)
  const elementRef=useRef(null)
  const rangeRef=useRef(null)
  let activate=(e) => 
    { 
      setIntial(e.target.value)
      console.log("event staed eiher change or click");
      let activateOnmousemove=() => {
        let totalpercentageMove=intial/100*100
        elementRef.current.style.left=`${totalpercentageMove}px`
        console.log("mouse is moved");
      }
      rangeRef.current.addEventListener("mousemove",activateOnmousemove)
    }
  return (
    <div className='grid p-2'>
        <div>
    <Heading headingDescription="Opacity"/>
        </div>
        <div>
            <input ref={rangeRef} type="range" value={intial} step={10}  min={0} max={100} onChange={activate}   onClick={activate}/>
            <div>
                <p className='relative left-[0px]' ref={elementRef}>
                  {intial}
                </p>
              </div>
        </div>
    </div>
  )
}
