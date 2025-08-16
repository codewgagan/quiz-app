function Quiz(){
        const questionBank = [
            {question: "What is the capital of India?"},
            {options: ["Mumbai", "Delhi", "Bangalore"]},
            {answer: "Delhi"}
        ]
    return <div>

        <h2>Question</h2>

        <div>{questionBank[0].question}</div>
        <p>{questionBank[0].options}</p>
        <button>{}</button>
        </div>
}

export default Quiz;