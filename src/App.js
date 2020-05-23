import React from "react";
import intro from "./media/Intro.png";
import "./App.css";
import tune from "./media/Up.mp3";

function App() {
  setTimeout(() => {
    window.location.href = "./main";
  }, 4000);

  return (
    <div>
      <img src={intro} alt="" />
      <audio autoPlay>
        <source src={tune} type="audio/mp3" />
      </audio>
    </div>
  );
}

export default App;
