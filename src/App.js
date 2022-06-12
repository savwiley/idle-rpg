import React from "react";
import CharacterBar from "./components/CharacterBar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Sidebar />
      <CharacterBar />
      <Main />
    </div>
  );
}

export default App;
