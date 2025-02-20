import { createContext, useState } from "react";
import drawingData from './Drawing';

let DrawingData=createContext(localStorage.setItem("drawingData",JSON.stringify([])))


export default DrawingData

let DrawingDataProvider=(props) => 
{  
  let [drawingData,setDrawingData]=useState(JSON.parse(localStorage.getItem("drawingData")))
    return (
        <DrawingData.Provider value={{drawingData,setDrawingData}}>
            {props.children}
        </DrawingData.Provider>
    )
}

export {DrawingDataProvider}