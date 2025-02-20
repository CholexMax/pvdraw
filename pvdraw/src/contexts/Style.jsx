import { createContext, useState } from "react";

let Styles=createContext()


let StyleProvider=(props) => {
    let [style,setStyle]=useState([{strokeColour:"blue",backgroundColor:"yellow",fill:"somthing",strokeWidth:20,opacity:"0"}])
    return (
        <Styles.Provider value={{style,setStyle}}>
            {props.children}
        </Styles.Provider>
    )
}

export {Styles,StyleProvider}