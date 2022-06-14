import React, { useState } from "react";
import CharacterBar from "./components/CharacterBar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [buff, setBuff] = useState(0);
  const [remove, setRemove] = useState(0);



  return (
    <div>
      <Sidebar useBuff={setBuff} useRemove={setRemove} />
      <CharacterBar />
      <Main auto={buff} spend={remove} />
    </div>
  );
}

export default App;
