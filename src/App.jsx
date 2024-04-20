import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="mr-32 ml-32 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        <div>
          <div className="p-5 shadow-lg rounded cursor-pointer">
            <img src="./src/assets/Cutelogo.jpg" alt="Logo" />
          </div>

          <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
            Our Programs
          </h2>
        </div>
        <div>
          <div className="p-5 shadow-lg rounded cursor-pointer">
            <img src="./src/assets/Cutelogo.jpg" alt="Logo" />
          </div>

          <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
            Our Programs
          </h2>
        </div>
        <div>
          <div className="p-5 shadow-lg rounded cursor-pointer">
            <img src="./src/assets/Cutelogo.jpg" alt="Logo" />
          </div>

          <h2 className="mt-4 mb-2 font-bold hover:text-green-400 flex justify-center items-center">
            Our Programs
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;
