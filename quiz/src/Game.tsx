
import { questions } from "./data"

const Game = () => {
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
          <audio controls autoPlay >
             <source src = {questions[0].voice} type="audio/mp3" />
          </audio>
         <div className="images">
            {questions[0].answers.map((value) => (
               <img src = {value.img} />
            ))}
          </div>
          </>
      )}
    </div>
  )
}

export default Game
