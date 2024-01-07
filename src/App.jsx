import { useState } from "react";
export default function App() {
   const [advice, setAdvice]= useState("Don't try to impress everyone");
   const [count,setCount] = useState(0)
  async function getAdvice() {
    let response = await fetch("https://api.adviceslip.com/advice");
    let data = await response.json()
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice)
    setCount((prev) => prev + 1)
  }
  return (
    <div
      className="h-screen flex flex-col justify-center items-center"
      style={{ backgroundColor: "#EBDE00"}}
    >
      <h1 className="text-4xl m-2 font-semibold">{advice}</h1>
      <p className="m-2">
        You have read <strong>{count}</strong> piece of advices
      </p>

      <button onClick={getAdvice}
        type="button"
        className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
      >
        Get Advice
      </button>
    </div>
  );
}
