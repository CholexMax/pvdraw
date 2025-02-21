import { createContext } from "react";
import { useState } from "react";
import { setLocal } from "../hooks/setLocal";
import getFromLocal from "../hooks/getfromLocal";


let toolSeclection=createContext()

let storedData=getFromLocal("selectedTool")
if(storedData)
{
    console.log("data exist")
}
else{
    setLocal("selectedTool",[{isActive:true,selection:"Circle"}])
}

let ToolProvider=(props) => {
    const [tool, settool] = useState(storedData);
    return (
        <toolSeclection.Provider value={{tool,settool}}>
            {props.children}
        </toolSeclection.Provider>
    )
}

export {toolSeclection,ToolProvider}