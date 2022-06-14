import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { Box } from ".//styled";

const Main = (props) => {
  const { auto, spend } = props;
  //count = 0 will have to change when we allow saving progress
  const [count, setCount] = useState(0);

  /**
   * could use the useEffect as the interval itself, only renders once every second BUT only spends once.
   * two useEffects??
   */

  //auto increment
  useEffect(() => {
    setCount(count - spend);

    const addCount = () => {
      setCount(count + auto);
    }

    setInterval(addCount, 1000);
  });


  return(
    <Box 
      onClick={() => {
        setCount(count + 1);
      }}
    >
      {count}

    </Box>
  )
};

Main.propTypes = {
  auto: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  spend: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
};

export default Main;