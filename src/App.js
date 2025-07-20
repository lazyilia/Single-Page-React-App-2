import { useState } from "react";
import "./styles.css";
const flashcards = [
  {
    question: "What is the capital of Japan?",
    answer: "Tokyo",
  },
  {
    question: "What is the largest planet in our solar system?",
    answer: "Jupiter",
  },
  {
    question: "What language is primarily spoken in Brazil?",
    answer: "Portuguese",
  },
  {
    question: "How many continents are there on Earth?",
    answer: "Seven",
  },
  {
    question: "What is 9 x 7?",
    answer: "63",
  },
  {
    question: "What does HTML stand for?",
    answer: "HyperText Markup Language",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    answer: "Carbon dioxide",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answer: "William Shakespeare",
  },
  {
    question: "In which direction does the sun rise?",
    answer: "East",
  },
  {
    question: "What is the square root of 64?",
    answer: "8",
  },
];

export default function App() {
  return (
    <div className="App">
      {flashcards.map((flashcard, index) => (
        <QuestionBox
          key={index}
          question={flashcard.question}
          answer={flashcard.answer}
        />
      ))}
    </div>
  );
}
function QuestionBox(props) {
  const [show, setShow] = useState(false);
  function handleAnswer() {
    setShow(!show);
  }
  return (
    <div className="card">
      <h2>{props.question}</h2>
      <p>{show ? props.answer : ""}</p>
      <button onClick={handleAnswer}>
        {show ? "Hide Answer" : "Show Answer"}
      </button>
    </div>
  );
}
