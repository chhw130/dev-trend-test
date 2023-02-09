import { useState } from "react";
import QuestionPage from "./component/QuestionPage";
import ProgressBar from "./UI/ProgressBar";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Main from "./component/Main";
// import styles from "./App.module.css";

function App() {
  const [result, setResult] = useState(0);
  const [frontResult, setFrontResult] = useState(0);
  const [backResult, setBackResult] = useState(0);

  const tendencyData = (data, front, back) => {
    console.log(`"data" : ${data}, "front" : ${front}, "back" : ${back}`);
    setResult(data);
    setFrontResult(front);
    setBackResult(back);
  };

  const Data = [
    {
      id: 1,
      question: "question1",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 2,
      question: "question2",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 3,
      question: "question3",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 4,
      question: "question4",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 5,
      question: "question5",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 6,
      question: "question6",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 7,
      question: "question7",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 8,
      question: "question8",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 9,
      question: "question9",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
    {
      id: 10,
      question: "question10",
      answerData: [
        {
          answer: "answer1",
          type: "front",
        },
        { answer: "answer2", type: "back" },
      ],
    },
  ];
  console.log(result);

  return (
    <>
      {result === 10 ? (
        false
      ) : (
        <>
          <ProgressBar result={result} />
          <QuestionPage data={Data} tendencyData={tendencyData} />
        </>
      )}

      {result === 10 && frontResult > 5 ? (
        <div>front!!!!</div>
      ) : result === 10 && backResult > 5 ? (
        <div>backEnd!!!!!</div>
      ) : result === 10 ? (
        <div>none</div>
      ) : (
        false
      )}
    </>
  );
}

export default App;
