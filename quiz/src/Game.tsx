import { useEffect, useRef, useState } from "react";
import { questions } from "./data";
import { shuffleArray } from "./shuffle";
import Win from "./Win";
import { motion } from 'framer-motion'

const Game = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);


  useEffect(() => {
   
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); 
      audioRef.current.play();
    }
  }, [currentQuestionIndex]);


  useEffect(() => {
    shuffleArray(questions)
  }, []);


  const checkAnswer = (answer: boolean, index: number) => {
    if (answer === true && audioRef.current ) {
      
      audioRef.current.pause();
      setCorrectAnswerIndex(index);
      setScore((prev) => (prev + 10));
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0; 
      }
      setTimeout(() => {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
        setCorrectAnswerIndex(null); 

        
       
      }, 3000);
      
      if(currentQuestionIndex >= questions.length - 1) {
         setShowResult(true);
      }
       
      
    }else {

       setShowResult(true)
    }
  };

  
  const restartGame = () => {
    setCurrentQuestionIndex(0);
    setCorrectAnswerIndex(null);
    setScore(0);
    setShowResult(false);
  };

  return (
    <div>
      
      <motion.div initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.7}} className="boxContainer" style={{display: showResult ? "none" : "flex"}}>
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
      </motion.div>


      {showResult ? (
        <Win score={score} restartGame = {restartGame} />
      ) : (
        questions.length > 0 && (
          <>
            <motion.p initial = {{opacity: 0, translateY: 6}}
                   animate = {{opacity: 1, translateY: 0}}
                   transition = {{type: 'spring', duration: 1, delay: 0.7}} className="score">ქულა: {score}</motion.p>
            <audio controls autoPlay ref={audioRef}>
              <source src={questions[currentQuestionIndex].voice} type="audio/mp3" />
            </audio>
            <div className="images">
              {questions[currentQuestionIndex].answers.map((value, i) => (
                <motion.img initial = {{opacity: 0}}
                animate = {{opacity: 1}}
                transition = {{type: 'spring', duration: 1, delay: 0.9}}
                  key={i}
                  src={value.img}
                  onClick={() => checkAnswer(value.correct, i)}
                  style={{
                    border: correctAnswerIndex === i ? "2px solid green" : "2px solid #0ff",
                    pointerEvents: correctAnswerIndex !== null && correctAnswerIndex !== i ? "none" : "auto",
                  }}
                  alt={`answer ${i}`}
                />
              ))}
            </div>
          </>
        )
      )}
    </div>
  );
};

export default Game;
