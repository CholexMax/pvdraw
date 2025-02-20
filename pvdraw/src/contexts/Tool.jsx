import { createContext } from "react";

let toolSeclection=createContext()
localStorage.setItem("selectedTool",JSON.stringify([{isActive:true,selction:"Rectangle"}]))

let toolProvider=(props) => {
    const [tool, settool] = useState(JSON.parse(localStorage.getItem("selectedTool")));
    return (
        <toolSeclection.Provider value={{tool,settool}}>
            {props.children}
        </toolSeclection.Provider>
    )
}

export {toolSeclection,toolProvider}