import { useState } from "react";
import "./assets/sass/App.scss";
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
