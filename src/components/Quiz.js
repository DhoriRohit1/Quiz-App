import React, { useState } from 'react'
import { QuizData } from '../Data/QuizData'
import QuizResult from './QuizResult';
function Quiz() {
    const [currentQuestion,setCurrentQuestion]=useState(0);
    const [score,setScore] = useState(0);
    const [clickedOption,setClickedOption]=useState(0);
    const [showResult,setShowResult]=useState(false);
    
    const changeQuestion = ()=>{
        updateScore();
        if(currentQuestion< QuizData.length-1){
            setCurrentQuestion(currentQuestion+1);
            setClickedOption(0);
        }else{
            setShowResult(true)
        }
    }
    const updateScore=()=>{
        if(clickedOption===QuizData[currentQuestion].answer){
            setScore(score+1);
        }
    }
    const resetAll=()=>{
        setShowResult(false);
        setCurrentQuestion(0);
        setClickedOption(0);
        setScore(0);
    }
  return (
    <div className="container mt-5">
    <p className="display-4 text-center">Quiz App</p>
    <div className="card p-4 shadow-sm">
        {showResult ? (
            <QuizResult score={score} totalScore={QuizData.length} tryAgain={resetAll} />
        ) : (
            <>
                <div className="question mb-4">
                    <h5>
                        <span id="question-number" className="me-2">{currentQuestion + 1}.</span>
                        <span id="question-txt">{QuizData[currentQuestion].question}</span>
                    </h5>
                </div>
                <div className="option-container mb-4">
                    {QuizData[currentQuestion].options.map((option, i) => (
                        <button 
                            className={`btn btn-outline-primary mb-2 w-100 text-start ${clickedOption === i + 1 ? "btn-primary" : ""}`}
                            key={i}
                            onClick={() => setClickedOption(i + 1)}
                        >
                            {option}
                        </button>
                    ))}                
                </div>
                <div className='d-flex justify-content-center'>
                <input 
                    type="button" 
                    value="Next" 
                    id="next-button" 
                    className="btn btn-success w-50 "
                    onClick={changeQuestion} 
                    disabled={clickedOption === 0} 
                />
                </div>
            </>
        )}
    </div>
</div>

  )
}

export default Quiz