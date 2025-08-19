
function Result({userAnswers,questionBank,restartQuiz}){
// console.log(questionBank,userAnswers);

    function getScore(){
        let finalScore = 0;
        userAnswers.forEach((answer,index)=>{
            if(answer === questionBank[index].answer){
                finalScore++;
            }
        });
        return finalScore;

    }
    const score = getScore();

    // Restart Quiz function
    // we are going to set the values of all states default they were in the beginning
    return <div>

        <h2>Quiz Finished</h2>
        <p>Your Score: {score}/{questionBank.length}</p>
        <button className="restart-btn" onClick={restartQuiz}>Restart Quiz</button>

    </div>
    
}

export default Result;
/*
restart quiz functionality
1. using props passing component from component 
in Result comp score{useranswer:questionbank}
2.Result
create score to calculate the amount of correct answers
create getscore function
initially score will be 0 in final score
loop through each answer
*/
