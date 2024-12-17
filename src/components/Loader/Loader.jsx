import { Hearts } from "react-loader-spinner";
import "./Loader.module.css";

export default function Loader() {
  return (
    <div className="loader">
      <Hearts
        height="180"
        width="180"
        color="#F76D6D"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
