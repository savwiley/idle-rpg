import React, { useState, /*useEffect*/ } from "react";
//import Increment from "./Increment";
import { Box } from ".//styled";

const Main = () => {
  //count = 0 will have to change when we allow saving progress
  const [count, setCount] = useState(0);


  return(
    <Box 
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}

    </Box>
  )
}

export default Main;