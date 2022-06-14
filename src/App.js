import React, { useState, useEffect } from "react";
import CharacterBar from "./components/CharacterBar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [buff, setBuff] = useState(0);
  const [remove, setRemove] = useState(0);
  const [click, setClick] = useState(false);
  //count = 0 will have to change when we allow saving progress
  const [count, setCount] = useState(0);

   useEffect(() => {
    //clicking
    //click number will change to variable
     if (click) {
       setCount(count + 1);
       setClick(false);
       console.log("click");
     }

   //remove increment
     if (remove > 0) {
      setCount(count - remove);
      setRemove(0);
      console.log("remove");
     }

    //auto increment
    //how to only set the increment once
     if (buff > 0) {
      setInterval(() => {
        setCount(count + buff);
        console.log(count);
      }, 1000);
      console.log(`buff is ${buff}`);
     }
   });



  return (
    <div>
      <Sidebar useBuff={setBuff} useRemove={setRemove} />
      <CharacterBar />
      <Main count={count} useClick={setClick} />
    </div>
  );
}

export default App;
