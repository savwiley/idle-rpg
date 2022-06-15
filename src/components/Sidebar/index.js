import React from "react";
import PropTypes from "prop-types";
import { Box } from ".//styled";

const Sidebar = (props) => {
  const { useBuff, useRemove } = props;

  return (
    <Box>
      <button 
        onClick={() => {
          useBuff(buff => buff + 1);
          useRemove(10);
        }}
      >
        Spend 10
      </button>
    </Box>
  )
};

Sidebar.propTypes = {
  useBuff: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  useRemove: PropTypes.PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
};

export default Sidebar;