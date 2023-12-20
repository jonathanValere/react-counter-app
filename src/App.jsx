import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <Header />
      <main className="container">
        <div>
          <div className="operation">
            {counter ? (
              <Button sign="-" counter={counter} setCounter={setCounter} />
            ) : null}
          </div>
          <p>{counter}</p>
          <div className="operation">
            {counter < 10 ? (
              <Button sign="+" counter={counter} setCounter={setCounter} />
            ) : null}
          </div>
        </div>
        <Button
          className="reset"
          sign="Reset"
          counter={counter}
          setCounter={setCounter}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
