import React, { useState, useEffect } from "react";
import CharacterBar from "./components/CharacterBar";
import Main from "./components/Main";
import Sidebar from "./components/Sidebar";

function App() {
  const [buff, setBuff] = useState(0);
  const [buffChanger, setBuffChanger] = useState(0);
  const [auto, setAuto] = useState();
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
    console.log(`buff ${buff}`);
    console.log(`buff changer ${buffChanger}`);
     if (buffChanger === buff) {
       autoClick();
     } else {
       clearInterval(auto);
       console.log("else");
       //autoClick();
       setBuffChanger(buff);
       autoClick();
     }
     console.log(auto);
   }, [buff]);

   const autoClick = () => {
    let intervalID = setInterval(() => {
      setCount(count => count + buff);
      console.log(count);
    }, 1000);
    console.log(`buff again ${buff}`);
    return setAuto(intervalID);
   };

   //clearInterval every time new buff is applied
   // https://stackoverflow.com/questions/64406295/clearinterval-not-stopping-my-counter-in-useeffect


  return (
    <div>
      <Sidebar useBuff={setBuff} useRemove={setRemove} />
      <CharacterBar />
      <Main count={count} useClick={setClick} click={click} />
    </div>
  );
}

export default App;
