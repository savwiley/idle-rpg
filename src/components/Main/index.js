import React from "react";
import PropTypes from "prop-types";
import { Box, Numbers } from ".//styled";

const Main = (props) => {
  const { count, useClick, click } = props;

  return (
    <Box
      onClick={() => {
        click ? useClick(false) : useClick(true);
      }}
    >
      <Numbers>{count - 1}</Numbers>
    </Box>
  );
};

Main.propTypes = {
  useClick: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  count: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  click: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Main;
