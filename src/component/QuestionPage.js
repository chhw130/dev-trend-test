import { useState } from "react";
import styles from "./QuestionPage.module.css";

const QuestionPage = (props) => {
  /**진행도 프론트데이터 백엔드데이터 */
  const [progress, setProgress] = useState(1);
  const [front, setFront] = useState(1);
  const [back, setBack] = useState(1);

  /**답변 클릭시 로직 */
  function answerHandler(e) {
    const type = e.target.value;

    setProgress((progress) => progress + 1);

    /**선택한 버튼의 type에 따라 데이터 상태 바꿔주기 */
    if (type === "front") {
      setFront((front) => front + 1);
    } else {
      setBack((back) => back + 1);
    }

    /**상위 컴포넌트에 값 보내주기 */
    props.tendencyData(progress, front, back);

    const questionData = e.target.parentElement.parentNode;
    const questionTest = e.target.parentElement.parentElement.previousSibling;
    questionData.style.display = "none";
    // questionTest.style.display = "flex";
    console.log(questionTest);
  }

  return (
    /**질문페이지 map으로 만들어주기 */
    <div className={styles.questionPage}>
      {props.data.map((d) => {
        return (
          <div className={styles.questionBox} key={d.id}>
            {d.question.length > 20 ? (
              <img src={d.question} className={styles.questionImg}></img>
            ) : (
              <div className={styles.question}>{d.question}</div>
            )}
            <ol className={styles.lists}>
              {d.answerData.map((a) => {
                return (
                  <button
                    className={styles.answerButton}
                    key={Math.random()}
                    value={a.type}
                    onClick={answerHandler}
                  >
                    {a.answer}
                  </button>
                );
              })}
            </ol>
          </div>
        );
      })}
    </div>
  );
};

export default QuestionPage;
