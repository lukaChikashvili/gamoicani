import { RotateCcw, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom"
import Confetti from 'react-confetti'


interface WinProps {
  score: number,
  restartGame: () => void
}

const Win: React.FC<WinProps> = ({score, restartGame} ) => {
   
  let navigate = useNavigate();

  const handleRestart = () => {
    restartGame();
  }

  return (
    <div className="win">
       {score > 50 ? <Confetti /> : null}
     <h1 className="win-text" style={{color: score < 50 ? "red" : '#fff'}}>{score < 50 ? "სამწუხაროდ" : "გილოცავთ!"} თქვენ დააგროვეთ <span style={{color: '#0ff'}}>{score}</span> ქულა</h1>
  <div className="but">
      <button className="restart" onClick={handleRestart} ><RotateCcw  /> თავიდან დაწყება</button>
      <button className="restart" onClick={() => navigate('/')}><Settings /> მენიუ</button>
      </div>
    </div>
  )
}

export default Win
