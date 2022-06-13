import React from "react";
import CharacterBar from "./components/CharacterBar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar id="sidebar" class="box" />
      <CharacterBar id="characterBar" class="box" />
      <Main id="main" class="box" />
    </div>
  );
}

export default App;
