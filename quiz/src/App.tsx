import { Route, Routes } from "react-router-dom"
import StartGame from "./StartGame"
import { AudioLines } from "lucide-react"


function App() {


  return (
    <>
      <div className="app">
          <div className="border">
             <Routes>
              <Route path="/" element = {<StartGame />} />
             </Routes>
             
          </div>
          <AudioLines className="audio" />
      </div>
    </>
  )
}

export default App
