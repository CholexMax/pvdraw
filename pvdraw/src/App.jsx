import DrawingStyle from "./components/DrawingStyle"
import ToolContainer from "./components/ToolContainer"

function App() {

  return (
    <>
    <ToolContainer/>
    <div className="w-[200px] h-72  overflow-y-scroll" style={
      {
        scrollbarWidth:"thin"
      }
    }>
    <DrawingStyle/>
    </div>
    </>
  )
}

export default App
