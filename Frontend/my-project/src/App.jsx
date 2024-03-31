import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const getApi = async () => {
    const data = await fetch("/products");
    const responseData = await data.json();
    setData(responseData);
    console.log(responseData);
  };
  useEffect(() => {
    getApi();
  }, []);
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => {
          return (
            <div key={item?._id} className="w-52 h-52 shadow-md border">
              <p>{item?.title}</p>
              <img
                src={item?.images[0]}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
          );
        })}
    </>
  );
}

export default App;
