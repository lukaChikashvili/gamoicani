import { LogOut, Play, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom";


const StartGame = () => {
    let navigate = useNavigate();
  return (
    <div className="start">
        <h1 className="title">გამოიცანი ხმა</h1>

        <div className="buttons">
            <button onClick={() => navigate('/game')}><Play />თამაში</button>
            <button onClick={() => navigate('/rules')}><Settings />წესები</button>
            <button onClick={() => navigate('/')}><LogOut />გასვლა</button>
        </div>
    </div>
  )
}

export default StartGame
