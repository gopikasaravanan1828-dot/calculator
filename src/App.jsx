
import { useState } from "react";

export default function App() {
  const [display, setDisplay] = useState("0");

  const buttons = [
    "AC", "DEL", "%", "/",
    "7", "8", "9", "*",
    "4", "5", "6", "-",
    "1", "2", "3", "+",
    "0", ".", "="
  ];

  const handleClick = (value) => {
    if (value === "AC") {
      setDisplay("0");
    } else if (value === "DEL") {
      setDisplay(display.length > 1 ? display.slice(0, -1) : "0");
    } else if (value === "=") {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch {
        setDisplay("Error");
      }
    } else if (value === "%") {
      try {
        setDisplay(String(eval(display) / 100));
      } catch {
        setDisplay("Error");
      }
    } else {
      setDisplay(display === "0" || display === "Error" ? value : display + value);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-700">
      <div className="bg-gray-900 p-6 rounded-3xl shadow-2xl w-80">

        <h1 className="text-white text-2xl font-bold text-center mb-5">
          Calculator
        </h1>

        <div className="bg-gray-800 text-white text-right text-3xl p-5 rounded-xl mb-5 overflow-x-auto">
          {display}
        </div>

        <div className="grid grid-cols-4 gap-3">
          {buttons.map((button) => (
            <button
              key={button}
              onClick={() => handleClick(button)}
              className={`p-4 rounded-xl text-xl font-semibold transition duration-200 hover:scale-105
                ${
                  button === "AC" || button === "DEL" || button === "%"
                    ? "bg-gray-500 text-white hover:bg-gray-400"
                    : button === "="
                    ? "bg-green-500 text-white hover:bg-green-400"
                    : ["+", "-", "*", "/"].includes(button)
                    ? "bg-orange-500 text-white hover:bg-orange-400"
                    : "bg-gray-700 text-white hover:bg-gray-600"
                }`}
            >
              {button}
            </button>
          ))}
        </div>

      </div>
    </div>
  );
}
