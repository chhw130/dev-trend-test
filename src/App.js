import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/Main";
import Routing from "./UI/Routing";
import ResultPage from "./component/ResultPage";

function App() {
  const [result, setResult] = useState(0);
  const [frontResult, setFrontResult] = useState(0);
  const [backResult, setBackResult] = useState(0);

  /** 질문 답변 임의 데이터 */
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
      question:
        "https://img2.quasarzone.com/editor/2022/01/26/23418c3a40943f6dd3c51249c0edd9bd.png",
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

  /**답변한 데이터(data : 현재까지 답변한 답 수, front : 현재까지 답한 프론트 답, back : 현재까지 답한 백엔드 답) */
  const tendencyData = (data, front, back) => {
    console.log(`"data" : ${data}, "front" : ${front}, "back" : ${back}`);
    setResult(data);
    setFrontResult(front);
    setBackResult(back);
  };

  return (
    // <>
    //   {/* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */}
    // {result === 10 ? (
    //   false
    // ) : (
    //   <>
    //     <ProgressBar result={result} />
    //     <QuestionPage data={Data} tendencyData={tendencyData} />
    //   </>
    // )}

    //   {/* result(진행도)가 10일이고 front답 수와 back답 수에 따른 페이지 보여주기  */}
    //   {result === 10 && frontResult > 5 ? (
    //     <div>front!!!!</div>
    //   ) : result === 10 && backResult > 5 ? (
    //     <div>backEnd!!!!!</div>
    //   ) : result === 10 ? (
    //     <div>none</div>
    //   ) : (
    //     false
    //   )}
    // </>

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {result === 10 ? (
          false
        ) : (
          <Route
            path="/test"
            element={
              <Routing
                result={result}
                data={Data}
                tendencyData={tendencyData}
              />
            }
          />
        )}

        {/* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */}
        {result === 10 ? (
          <Route path="/test" element={<ResultPage />} />
        ) : (
          false
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
