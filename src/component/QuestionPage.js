import { useState } from "react";
import styles from "./QuestionPage.module.css";

const QuestionPage = ({ data, tendencyData }) => {
  const [progress, setProgress] = useState(1);
  const [front, setFront] = useState(0);
  const [back, setBack] = useState(0);
  // const [display, setDisplay] = useState(true);

  //버튼 클릭시 로직
  function answerHandler(e) {
    const type = e.target.value;
    setProgress((progress) => progress + 1);

    if (type === "front") {
      setFront((front) => front + 1);
    } else {
      setBack((back) => back + 1);
    }

    tendencyData(progress, front, back);

    const questionData = e.target.parentElement.parentElement;
    questionData.style.display = "none";
  }

  return (
    <div className={styles.questionPage}>
      {data.map((d) => {
        return (
          <div
            className={styles.questionBox}
            // className={display ? styles.pageFlex : styles.pageNone}
            key={d.id}
          >
            <div className={styles.question}>{d.question}</div>
            <ol>
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
