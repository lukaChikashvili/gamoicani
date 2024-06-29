import { motion } from 'framer-motion'
import { Settings2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom'

const Settings = () => {

  let navigate = useNavigate();
  return (
    <div className='settings'>
        <motion.h1 className='win-text' initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: 'spring', duration: 1, delay: 0.9}}>წესები</motion.h1>

                <motion.p className='rules' initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: 'spring', duration: 1, delay: 1.2}}>გამოიცანი ადამიანი ხმის მიხედვით. შენი მიზანია დააგროვო 50 ქულაზე მეტი</motion.p>

                <motion.button initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: 'spring', duration: 1, delay: 1.4}} className="restart" onClick={() => navigate('/')}><Settings2 /> მენიუ</motion.button>
    </div>
  )
}

export default Settings
