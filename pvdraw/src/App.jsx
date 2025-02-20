import Canvas from "./components/Canvas"
import DrawingStyle from "./components/DrawingStyle"
import ToolContainer from "./components/ToolContainer"
import { DrawingDataProvider } from "./contexts/Drawing"
import { StyleProvider } from "./contexts/Style"
import { toolProvider } from "./contexts/Tool"


function App() {
  
  return (
    <toolProvider>
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
  </toolProvider>
  )
}

export default App
