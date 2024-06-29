import { useEffect, useRef, useState } from "react";
import { questions } from "./data";
import { useNavigate } from "react-router-dom";

const Game = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [correctAnswerIndex, setCorrectAnswerIndex] = useState<number | null>(null);
  const [next, setNext] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const navigate = useNavigate();
  const [score, setScore] = useState(0);

  useEffect(() => {
   
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.load(); 
      audioRef.current.play();
    }
  }, [currentQuestionIndex]);




  const checkAnswer = (answer: boolean, index: number) => {
    if (answer === true && audioRef.current) {
      setNext(true);
      audioRef.current.pause();
      setCorrectAnswerIndex(index);
      setScore((prev) => (prev + 10));
    } else {
      navigate("/");
    }
  };

  const goToNextQuestion = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0; 
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
    setCorrectAnswerIndex(null); 
    setNext(false);
     
  };

  return (
    <div>
      <div className="boxContainer">
        <div className="box box1"></div>
        <div className="box box2"></div>
        <div className="box box3"></div>
        <div className="box box4"></div>
        <div className="box box5"></div>
      </div>

      {questions.length > 0 && (
        <>
          {next && currentQuestionIndex < questions.length - 1 && (
            <button className="next-button" onClick={goToNextQuestion}>
              შემდეგი
            </button>
          )}

          <p className="score">ქულა: {score}</p>
          <audio controls autoPlay ref={audioRef}>
            <source src={questions[currentQuestionIndex].voice} type="audio/mp3" />
          </audio>
          <div className="images">
            {questions[currentQuestionIndex].answers.map((value, i) => (
              <img
                key={i}
                src={value.img}
                onClick={() => checkAnswer(value.correct, i)}
                style={{ border: correctAnswerIndex === i ? "2px solid green" : "none" }}
                alt={`answer ${i}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Game;
