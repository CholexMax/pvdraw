import React from 'react'
import { useRef } from 'react'
import { useContext } from 'react'
import { toolSeclection } from '../contexts/Tool'

export default function Canvas() {
  const {tool}=useContext(toolSeclection)
  const canvasRef=useRef(null)
  const draw=() => {
   if(tool[0].selection==="Circle")
    {
      let ctx=canvasRef.current.getContext("2d")
      ctx.fillStyle = 'blue'; // Set fill color
      ctx.fillRect(50, 25, 200, 100); // Draw the rectangle
      console.log("called ");
      
    }
  }
  return (
    <canvas width="1200" ref={canvasRef} height="700" onClick={draw} style={{zIndex:1,backgroundColor:"red",cursor:"crosshair"} }></canvas>
  )
}
