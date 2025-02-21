import ToolIcon from "./Tool";
import { toolSeclection } from "../contexts/Tool";
import { useContext, useEffect, useState } from "react";
import { setLocal } from "../hooks/setLocal";

export default function ToolContainer() {

  const {tool,settool}=useContext(toolSeclection)
  useEffect(
  () => {
  let currentElement=[]
  toolsElement.forEach(
    (currentTool) => {
     if(currentTool.name===tool[0].selection)
     {
      currentTool.isActive=tool[0].isActive
      currentElement.push(currentTool)
     }
     else{
      currentElement.push(currentTool)
     }
     }
     )
    setToolElement(currentElement)
    },[tool]   
  )

  const toolIconsAssets = [
    {
      name: "Rectangle",
      icon: "https://cdn-icons-png.flaticon.com/128/9369/9369800.png",
      isActive:false
    },
    {
      name: "Circle",
      icon: "https://cdn-icons-png.flaticon.com/128/136/136889.png",
      isActive:false
    },
    {
      name: "Line",
      icon: "https://cdn-icons-png.flaticon.com/128/18927/18927778.png",
      isActive:false
    },
    {
      name: "Brush",
      icon: "https://cdn-icons-png.flaticon.com/128/5197/5197917.png",
      isActive:false
    },
    {
      name: "Eraser",
      icon: "https://cdn-icons-png.flaticon.com/128/3550/3550091.png",
      isActive:false
    },
    {
      name: "Text",
      icon: "https://cdn-icons-png.flaticon.com/128/3856/3856192.png",
      isActive:false
    },
    {
      name: "Polygon",
      icon: "https://cdn-icons-png.flaticon.com/128/18166/18166726.png",
      isActive:false
    },
    {
      name: "Selection",
      icon: "https://cdn-icons-png.flaticon.com/128/9515/9515002.png",
      isActive:false
    },
    {
      name: "Pen",
      icon: "https://cdn-icons-png.flaticon.com/128/833/833281.png",
      isActive:false
    },
    {
      name: "Fill",
      icon: "https://cdn-icons-png.flaticon.com/128/5879/5879769.png",
      isActive:false
    },
  ];

  let [toolsElement,setToolElement]=useState(toolIconsAssets)
  
  let detect=(e) => {
    let updatedToolsElement=[]
    toolsElement.forEach((tool) =>
    {
    if(tool.name===e.target.id)
    {
      tool.isActive=true
      updatedToolsElement.push(tool)
    }
    else if(tool.isActive){
      tool.isActive=false
      updatedToolsElement.push(tool)
    }
  else{
    updatedToolsElement.push(tool)
  }
    }
)
    setToolElement(updatedToolsElement)
    let currentState=[{isActive:true,selection:e.target.id}]
    settool(currentState)
    setLocal("selectedTool",currentState)
  }
  return (
    <div className="flex justify-center p-2">
        <div className="flex items-center rounded-2xl justify-center p-2 gap-2 bg-gray-100">
        {
          toolsElement.map(
            (toolinfo,index) => <ToolIcon src={toolinfo.icon} description="icon-image" key={index} detect={detect} id={toolinfo.name} isActive={toolinfo.isActive}/> 
          )
        }
        </div>
    </div>
  )
}
