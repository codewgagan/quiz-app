import React, { useState } from 'react';

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
        ];

        // using useState Hook
        // var optionSelected = "None";

        const [optionSelected, setOptionSelected] = useState("None");


        function handleSubmitOption (option){
            console.log(option);
            setOptionSelected(option);
        }

    return (
    <div>
        <h2>Question 1</h2> {/* Heading */}

        {/* to show the question UI */}
        <p className="question">{questionBank[0].question}</p>

        {/* to show the question option UI */}
        {questionBank[0].options.map((option)=>
        <button className="option" key={option} onClick={()=>handleSubmitOption(option)}>
        
        {" "}
        {option}{" "}
        </button>
        )}

        {/* selecting and displaying selected option on screen */}
        <p>option selected: {optionSelected}</p>

        <div className="nav-buttons">
            <button> Previous </button>
            <button> Next </button>
        </div>
    </div>
    );
}

export default Quiz;