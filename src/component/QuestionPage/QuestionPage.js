import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./QuestionPage.module.css";
import AnswerBtn from "./AnswerBtn";
import Question from "./Question";

const QuestionPage = ({ data, tendencyData }) => {
  /**진행도 프론트데이터 백엔드데이터 */
  const [progress, setProgress] = useState(0);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);

  /**답변 클릭시 로직 */
  function answerHandler({ target }) {
    const type = target.value;

    /**답변에 대한 데이터 쌓아주기 */
    setProgress((progress) => progress + 1);
    if (type === "front") {
      setFront((front) => front + 1);
    } else {
      setBack((back) => back + 1);
    }

    /** 클릭한 창 닫고 다음 창 display flex해주기 */
    const questionData = target.parentElement.parentNode;
    const questionTest = target.parentElement.parentElement.nextSibling;
    questionData.style.display = "none";
    questionTest.style.display = "flex";
  }

  /**쌓아준 답변데이터 객체로 만들어주기 */
  const newAnswerData = {
    progress: progress,
    front: front,
    back: back,
  };

  /**상위 컴포넌트에 변경된 값 보내주기 */
  useEffect(() => {
    tendencyData(newAnswerData);
    return () => {};
  }, [newAnswerData]);

  return (
    <>
      {/* 뒤로가기 버튼 */}
      <Link to="/">
        <input className={styles.goMainBtn} type="button" value="Go Main" />
      </Link>

      {/* 질문페이지 구현 */}
      <ol className={styles.questionPage}>
        {data.map((d) => {
          return (
            <li className={styles.questionBox} key={d.id}>
              <Question d={d} />
              {/* 응답 버튼 */}
              <div className={styles.lists}>
                {d.answerData.map((a) => {
                  return (
                    <AnswerBtn
                      key={Math.random()}
                      a={a}
                      answerHandler={answerHandler}
                    />
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
    </>
  );
};

export default QuestionPage;
