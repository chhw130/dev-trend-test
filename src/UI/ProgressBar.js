// import styles from "./ProgressBar.module.css";
import styled from "styled-components";

const ProgressBar = (props) => {
  /** 상단 프로그레스바 */
  const barWidth = props.result;

  return (
    <ProgressHeader>
      <ProgressContainer />
      <Progress width={(barWidth / 10) * 100 + "%"} />
    </ProgressHeader>
  );
};

export default ProgressBar;

const ProgressHeader = styled.header`
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
`;

const ProgressContainer = styled.div`
  width: 100%;
  height: 8px;
  background: #c6c6c6;
  position: absolute;
`;

const Progress = styled.div`
  height: 8px;
  background: purple;
  width: ${(props) => props.width};
  position: absolute;
`;
