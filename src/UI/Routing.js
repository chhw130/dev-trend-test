import ProgressBar from "./ProgressBar";
import QuestionPage from "../component/QuestionPage/QuestionPage";

const Routing = ({ result, data, tendencyData }) => {
  return (
    <>
      <QuestionPage data={data} tendencyData={tendencyData} />
      <ProgressBar result={result} data={data} />
    </>
  );
};

export default Routing;
