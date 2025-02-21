import Canvas from "./components/Canvas"
import DrawingStyle from "./components/DrawingStyle"
import ToolContainer from "./components/ToolContainer"
import { DrawingDataProvider } from "./contexts/Drawing"
import { StyleProvider } from "./contexts/Style"
import { ToolProvider } from "./contexts/Tool"


function App() {
  
  return (
    <ToolProvider>
    <div className="relative">
    <StyleProvider>
  <DrawingDataProvider>
  <Canvas />
   </DrawingDataProvider>
   <ToolContainer />
    <div
      className="w-[200px] h-72 overflow-y-scroll"
      style={{
        scrollbarWidth: "thin",
        zIndex: 2,
        backgroundColor: "#f8f8f8", // Optional for visibility
        padding: "10px",
      }}
    >
      <DrawingStyle />
    </div>
    </StyleProvider>
  </div>
  </ToolProvider>
  )
}

export default App
