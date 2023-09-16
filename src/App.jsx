import "./App.css";
import { FetchFromAPI } from "./Fetchfromapi";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import animationData from "./assets/lmIjbJgocb.json";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    FetchFromAPI().then((response) => {
      var quote = response.data.content;
      setData(quote);
    });
  }, []);

  return (
    <>
      <div className="container">
        <Lottie className="background" animationData={animationData} loop={true} />
        <h1>{data}</h1>
      </div>
    </>
  );
}

export default App;
