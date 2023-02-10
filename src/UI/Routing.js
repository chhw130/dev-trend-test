import ProgressBar from "./ProgressBar";
import QuestionPage from "../component/QuestionPage";

const Routing = (props) => {
  // console.log(props);
  return (
    <>
      <ProgressBar result={props.result} />
      <QuestionPage data={props.data} tendencyData={props.tendencyData} />
    </>
  );
};

export default Routing;
