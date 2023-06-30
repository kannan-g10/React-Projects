import { useRouteError } from "react-router-dom";
import error from "../assets/error.png";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div className="error">
      <h1>Oops...</h1>
      <h3>Something went wrong</h3>
      <h2>{err.status + " : " + err.statusText}</h2>
      <img src={error} alt="error" />
    </div>
  );
};

export default Error;
