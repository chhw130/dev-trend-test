import styles from "./AnswerBtn.module.css";

const AnswerBtn = (props) => {
  return (
    <button
      className={styles.answerButton}
      key={Math.random()}
      value={props.a.type}
      onClick={props.answerHandler}
    >
      {props.a.answer}
    </button>
  );
};

export default AnswerBtn;
