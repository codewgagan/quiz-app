import React, { useState } from 'react';
// import Result from './components/results'
import Result from './results';

function Quiz(){
        const questionBank = [
            {question: "What is the capital of India?",
            options: ["Mumbai", "Delhi", "Bangalore"],
            answer: "Delhi"
        },
        {
            question: "Which is the scripting Language?",
            options: ["Python", "JavaScript", "GoLang"],
            answer: "JavaScript"
        },
        {
            question: "What is the capital of USA?",
            options: ["New York", "Washington DC", "Los Angeles"],
            answer: "Washington DC"
        },
        ];

        // using useState Hook
        // var optionSelected = "None";

        // const [optionSelected, setOptionSelected] = useState("None");  
        const initialAnsewers = [null, null, null];

        const [userAnswers, setUserAnswers] = useState(initialAnsewers);

        //represnt a current question using numbers
        const [currentQuestion, setCurrentQuestion] = useState(0);

        // Code to check whether quiz is finished and UI changes after quiz completion
        const [isQuizFinished, setIsQuizFinished] = useState(false);

        const selectedAnswer = userAnswers[currentQuestion];//null, option
        function handleSelectOption (option){
            // console.log(option);
            // setOptionSelected(option);
            //storing new answers of users used spread method
            const userNewAnswers = [...userAnswers];
            //that new answers will be for current question with selcted option
            userNewAnswers[currentQuestion] = option;

            //function 
            setUserAnswers(userNewAnswers);
        }

//function go to next
function goToNext(){
    if(currentQuestion === questionBank.length -1){
        setIsQuizFinished(true);
    } else{
            setCurrentQuestion(currentQuestion + 1);
        }
    // setCurrentQuestion(currentQuestion + 1);
}

//function go to prev
function goToPrev(){
    if(currentQuestion>0){
        setCurrentQuestion(currentQuestion - 1);
    }
}

    function restartQuiz(){
        setUserAnswers (initialAnsewers);
        setCurrentQuestion(0);
        setIsQuizFinished(false);

    }

    if(isQuizFinished){
        return <Result userAnswers={userAnswers} questionBank={questionBank} restartQuiz={restartQuiz}/>;//props
    }

    return (
    <div>
        <h2>Question {currentQuestion + 1 }</h2> {/* Heading */}

        {/* to show the question UI */}
        <p className="question">{questionBank[currentQuestion].question}</p>

        {/* to show the question option UI */}
        {questionBank[currentQuestion].options.map((option)=>
        <button className={"option" + (selectedAnswer === option ? " selected" : "")} key={option} onClick={()=>handleSelectOption(option)}>
        
        {option}
        </button>
        )}

        {/* selecting and displaying selected option on screen */}
        {/* <p>option selected: {optionSelected}</p> */}

        <div className="nav-buttons">
            <button onClick={goToPrev} disabled={currentQuestion === 0}> Previous </button>
            <button onClick={goToNext} disabled={!selectedAnswer}> {currentQuestion === questionBank.length -1 ? "Finish Quiz" : "Next"}</button>
            
        </div>
    </div>
    );
}

export default Quiz;