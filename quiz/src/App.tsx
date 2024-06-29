import { Route, Routes } from "react-router-dom"
import StartGame from "./StartGame"
import { AudioLines } from "lucide-react"
import Game from "./Game"
import Settings from "./Settings"



function App() {


  return (
    <>
      <div className="app">
          <div className="border">
             <Routes>
              <Route path="/" element = {<StartGame />} />
              <Route path="/game" element = {<Game />} />
              <Route path="/rules" element = {<Settings />} />
             
             </Routes>
             
          </div>
          <AudioLines className="audio" />
      </div>
    </>
  )
}

export default App
