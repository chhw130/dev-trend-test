import { Link } from "react-router-dom";

const Main = () => {
  return (
    <>
      <div>Main Page</div>
      <Link to="/test">
        <button>Start</button>
      </Link>
    </>
  );
};

export default Main;
