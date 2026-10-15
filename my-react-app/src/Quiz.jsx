import React from 'react'
import { useState } from 'react'

const questions =[
  {
    id:1,
    question:"What is React ?",
    option:[
      "A JavaScript library",
      "A database",
      "A programming language",
      "An operating system"
    ],
    answer:"A Javascript library"
  },
  {
    id:2,
    quesiton:"Which hook is used to manage state is a functional component?",
    option:[
      "useEffect ",
      "useState",
      "useRef",
      "useMemo"
    ],
    answer:"useState"
  },
{
 id:3 ,
 quesiton:"Which method is commonly used to render a list a React ",
 option:[
  "filter()",
  "reduce()",
  "map()",
  "find()"
 ],
answer:"map()"
},
{
  id:4,
  qusestion:"What is JSX",
  option:[
    "A database query language ",
    "A syntax extension for Javascript",
    "A Css framework",
    "A backend language"
  ],
  answer:"A syntax extension for JavaScript"
},
{
id:5,
quesiton:"Which hook is commonly used for side effects in React?",
option:[
  "useState",
  "useEffect",
  "useContext",
  "useReducer"
],
answer:"useEffect"
},
{
id:6,
quesiton:"Which JavaScript method creates a new array containing elements that pass a condition?",
option:[
  "map()",
  "filter()",
  "forEach()",
  "push()"
],
anwser:"filter()"

},
{
    id: 7,
    question: "What is a prop in React?",
    options: [
      "A way to pass data to a component",
      "A CSS property",
      "A database",
      "A JavaScript loop"
    ],
    answer: "A way to pass data to a component"
  },

  {
    id: 8,
    question: "Which operator is commonly used to create a copy of an array or object?",
    options: [
      "Spread operator (...)",
      "Modulo operator (%)",
      "Equality operator (==)",
      "Logical NOT (!)"
    ],
    answer: "Spread operator (...)"
  },

  {
    id: 9,
    question: "Which hook is used to access context values in a functional component?",
    options: [
      "useRef",
      "useMemo",
      "useContext",
      "useEffect"
    ],
    answer: "useContext"
  },

  {
    id: 10,
    question: "Which method is useful for calculating a single value from an array?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    answer: "reduce()"
  }

]
const App = () => {

const [currentQuestion,setCurrentQuestion]=useState(0)
const[selectAnswer,setSelectAnswer]=useState("")
const [score,setScore] =useState(0)
const[showResult,setShowResult] =useState(false)

const question =questions[currentQuestion]

const handleAnswer =(option)=>{
setSelectAnswer(option)

}

const handleNext=(option)=>{

if(selectAnswer===quesiton.answer){
  setScore(score+1)
}
if(currentQuestion===question.length-1){
  setShowResult(true)
}else{
  setCurrentQuestion(currentQuestion+1)
  setSelectedAnswer("")
}


}
const handleRestart =()=>{
setCurrentQuesiton(0)
setSelectAnswer("")
setScore("")
setShowResult(false)

}
if(showResult){
  return(
    <div>
<h1>Quiz Completed</h1>
<h2>Your Score:{score}/{quesiton.length}</h2>

<button onClick={handleRestart}>Restart Quiz</button>
    </div>
  )
}
return(

<div>
  <h1>Quiz App</h1>
  <p>Quesiton{quesiton.id} of {quesitons.length}</p>
  <h2>{question.quesiton}</h2>

{quesiton.options.map((option)=>{

<button key={option} onClick={()=>handleAnswer(options)}>{option}</button>


})}
<button onClick={handleNext} disabled={!selectAnswer}>Next</button>

<p>Score:{score}</p>
</div>


)
}

export default App
