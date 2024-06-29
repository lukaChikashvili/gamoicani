import { LogOut, Play, Settings } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'


const StartGame = () => {
    let navigate = useNavigate();
  return (
    <div className="start">
        <motion.h1 initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.5}}
        className="title">გამოიცანი ხმა</motion.h1>

        <div className="buttons">
            <motion.button initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.7}}
            onClick={() => navigate('/game')}><Play />თამაში</motion.button>
            <motion.button initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.8}}
            onClick={() => navigate('/rules')}><Settings />წესები</motion.button>
            <motion.button initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.9}}
            onClick={() => navigate('/')}><LogOut />გასვლა</motion.button>
        </div>
    </div>
  )
}

export default StartGame
