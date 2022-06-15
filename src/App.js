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
    setCount(count + 1);
    console.log(`click ${count}`);
  }, [click]);

  useEffect(() => {
    if (remove > 0) {
      setCount(count - remove);
      setRemove(0);
      console.log("remove");
      console.log(`new buff ${buff}`);
     }
  }, [remove]);

    //auto increment
   useEffect(() => {
    autoClick();
   }, [buff]);

   const autoClick = () => {
    setInterval(() => {
      setCount(count => count + buff);
      console.log(count);
      console.log(`buff ${buff}`);
    }, 1000);
   }

   //clearInterval every time new buff is applied


  return (
    <div>
      <Sidebar useBuff={setBuff} useRemove={setRemove} />
      <CharacterBar />
      <Main count={count} useClick={setClick} click={click} />
    </div>
  );
}

export default App;
