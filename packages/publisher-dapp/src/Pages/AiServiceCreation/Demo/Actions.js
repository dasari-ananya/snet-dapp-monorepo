import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import SNETButton from "shared/dist/components/SNETButton";
import { ServiceCreationRoutes } from "../ServiceCreationRouter/Routes";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const Actions = ({ classes }) => {
  const history = useHistory();
  const serviceDetails = useSelector(state => state.aiServiceDetails);
  const { orgUuid, serviceUuid } = useParams();
  const dispatch = useDispatch();

  const handleFinishLater = () => {
    // TODO handleFinishLater
  };

  const handleBack = () => {
    history.push(ServiceCreationRoutes.PROFILE.path.replace(":orgUuid", orgUuid).replace(":serviceUuid", serviceUuid));
  };

  const handleContinue = async () => {
    await dispatch(aiServiceDetailsActions.saveServiceDetails(orgUuid, serviceUuid, serviceDetails));
    history.push(
      ServiceCreationRoutes.PRICING_AND_DISTRIBUTION.path
        .replace(":orgUuid", orgUuid)
        .replace(":serviceUuid", serviceUuid)
    );
  };

  return (
    <div className={classes.buttonsContainer}>
      <SNETButton color="primary" children="finish later" onClick={handleFinishLater} />
      <SNETButton color="primary" children="prvious step" onClick={handleBack} />
      <SNETButton color="primary" variant="contained" children="continue" onClick={handleContinue} />
    </div>
  );
};

export default Actions;