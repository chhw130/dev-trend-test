import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./component/MainPage/Main";
import Routing from "./UI/Routing";
import ResultPage from "./component/ResultPage/ResultPage";

function App() {
  const [result, setResult] = useState(0);
  const [frontResult, setFrontResult] = useState(0);
  const [backResult, setBackResult] = useState(0);

  /** 질문 답변 임의 데이터 */
  const Data = [
    {
      id: 1,
      question: "수업 중 강사님의 수업 코드가 오타투성이다,,, 당신의 생각은??",
      answerData: [
        {
          answer: "오타가 너무 신경 쓰여 집중이 안된다,,,",
          type: "front",
        },
        { answer: "그런거 신경 안쓴다,, 일단 따라가고 보자", type: "back" },
      ],
    },
    {
      id: 2,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/3013d968-6797-4081-b82b-5e5ef9825b61/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-02-10_011908.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T122919Z&X-Amz-Expires=86400&X-Amz-Signature=e2ece313e11ea30e579041063b05f3402f804fff2fdaf64127dde9c1df700a09&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2599%2594%25EB%25A9%25B4%2520%25EC%25BA%25A1%25EC%25B2%2598%25202023-02-10%2520011908.png%22&x-id=GetObject",
      answerData: [
        {
          answer: "i=1",
          type: "front",
        },
        { answer: "i=2", type: "back" },
        { answer: "i=3", type: "back" },
        { answer: "i=4", type: "back" },
      ],
    },
    {
      id: 3,
      question: "주변 사람들의 이목이 집중될 때 당신의 반응은???",
      answerData: [
        {
          answer: "부끄럽고 수치스러워,, 빨리 이 상황을 벗어나고 싶다.",
          type: "front",
        },
        { answer: "이런 관심?? 나쁘지 않아, 오히려 좋아^^", type: "back" },
      ],
    },
    {
      id: 4,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/a226843f-e877-4ec7-a2fc-82085a8c4303/%ED%99%94%EB%A9%B4_%EC%BA%A1%EC%B2%98_2023-02-09_123.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T123114Z&X-Amz-Expires=86400&X-Amz-Signature=cf23c418ffbdb65aea0a5be00c19170fb95aa59699a0513cb1cfcd9b37300ea8&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%22%25ED%2599%2594%25EB%25A9%25B4%2520%25EC%25BA%25A1%25EC%25B2%2598%25202023-02-09%2520123.png%22&x-id=GetObject",
      answerData: [
        {
          answer: "1. HTML",
          type: "front",
        },
        { answer: "2. Python", type: "back" },
        { answer: "3. JavaScript", type: "back" },
        { answer: "4. TypeScript", type: "back" },
      ],
    },
    {
      id: 5,
      question: "빠른 트렌드 변화에 잘 적응해 나갈 자신이 있다.",
      answerData: [
        {
          answer: "너무 빠른 변화는 싫어ㅠㅠ",
          type: "front",
        },
        { answer: "내가 또 트렌드를 잘 따라가지.", type: "back" },
      ],
    },
    {
      id: 6,
      question:
        "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/104b985e-fe8d-4c9e-b970-59c0ed83959b/67bd64435f1f27ee8cdf2661b8faf5c3883b4ca651582a469bf8a3b4bb47502540ccd6bba747cb7a99a0508a844acce91e419d523f40ab3e89adfcb730a76c2fc63152cb1af6281efcc81149f9fbe381c124f2d12fb15b74009dbc1b7832dd9ed8c00966e831546.jfif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20230210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20230210T123332Z&X-Amz-Expires=86400&X-Amz-Signature=9de452dae3b4d4d7afe96f8efd1026a1f5c4ede6dc81f3343762028fd23fb99d&X-Amz-SignedHeaders=host&response-content-disposition=filename%3D%2267bd64435f1f27ee8cdf2661b8faf5c3883b4ca651582a469bf8a3b4bb47502540ccd6bba747cb7a99a0508a844acce91e419d523f40ab3e89adfcb730a76c2fc63152cb1af6281efcc81149f9fbe381c124f2d12fb15b74009dbc1b7832dd9ed8c00966e831546.jfif%22&x-id=GetObject",
      answerData: [
        {
          answer: "1. 조코딩",
          type: "front",
        },
        { answer: "2. 좋코딩", type: "back" },
        { answer: "3. 헬코딩", type: "back" },
        { answer: "4. 코딩애플", type: "back" },
      ],
    },
    {
      id: 7,
      question: "일할 때 많은 사람들과 대화하면서 일하는 것이 좋다.",
      answerData: [
        {
          answer: "많은 사람들과 협의해가면서 일하는 과정자체가 좋다.",
          type: "back",
        },
        {
          answer: "아니다,, 일할때는 최소인원 or 갠플이 좋다.",
          type: "front",
        },
      ],
    },
    {
      id: 8,
      question:
        "2022년 10월 테슬라 사장인 일론 머스크는 “이 회사” 를 인수했다….회사의 이름은?",
      answerData: [
        {
          answer: "1. 트위터",
          type: "front",
        },
        { answer: "2. 우버", type: "back" },
        { answer: "3. 고프로", type: "back" },
        { answer: "2. 에어비엔비", type: "back" },
      ],
    },
    {
      id: 9,
      question: "영화를 만들기 위해 당신이 더 흥미 있는 것은??",
      answerData: [
        {
          answer: "작품을 빛낼 배우",
          type: "front",
        },
        { answer: "영화를 설계하는 작가나 감독", type: "back" },
      ],
    },
    {
      id: 10,
      question:
        "2022년 10월 데이터 센터 화재로 일어난 카카오 서비스 장애 사건… 데이터 센터의 위치는?",
      answerData: [
        {
          answer: "1. 구로",
          type: "front",
        },
        { answer: "2. 판교", type: "back" },
        { answer: "3. 부산", type: "back" },
        { answer: "4. 강남", type: "back" },
      ],
    },
  ];

  /**답변한 데이터(data : 현재까지 답변한 답 수, front : 현재까지 답한 프론트 답, back : 현재까지 답한 백엔드 답) */
  const tendencyData = (data, front, back) => {
    // console.log(`"data" : ${data}, "front" : ${front}, "back" : ${back}`);
    setResult(data);
    setFrontResult(front);
    setBackResult(back);
  };

  console.log(
    `"data" : ${result}, "front" : ${frontResult}, "back" : ${backResult}`
  );

  return (
    /* result(진행도)가 10일때 프로그래스바 & 질문페이지 없애기  */
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

        {/* result(진행도)가 10일때 결과페이지 보여주기  */}
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
