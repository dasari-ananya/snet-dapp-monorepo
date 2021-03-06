import React from "react";

import SNETButton from "shared/dist/components/SNETButton";

import { useStyles } from "./styles";

const Button = ({ details, handleClick, autoRenewal, disableUserStakeActions }) => {
  const classes = useStyles();

  if ((details, handleClick)) {
    return (
      <div className={classes.btnContainer}>
        {details.map(button => (
          <SNETButton
            key={button.text}
            color={button.color}
            variant={button.variant}
            children={button.text}
            onClick={_e => handleClick(button.action, autoRenewal)}
            disabled={disableUserStakeActions}
          />
        ))}
      </div>
    );
  }

  return null;
};

export default Button;
