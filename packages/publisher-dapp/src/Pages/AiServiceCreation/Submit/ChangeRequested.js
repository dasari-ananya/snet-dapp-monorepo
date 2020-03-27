import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import BlockIcon from "@material-ui/icons/Block";
import { useDispatch, useSelector } from "react-redux";
import { withStyles } from "@material-ui/core";

import { useStyles } from "./styles";
import AlertBox, { alertTypes } from "shared/dist/components/AlertBox";
import SNETButton from "shared/dist/components/SNETButton";
import SNETTextarea from "shared/dist/components/SNETTextarea";
import { aiServiceDetailsActions } from "../../../Services/Redux/actionCreators";

const ChangeRequested = ({ classes, onContinueToEdit, onSubmitComment, alert }) => {
  const comments = useSelector(state => state.aiServiceDetails.comments);
  const dispatch = useDispatch();

  const handleCommentChange = e => {
    dispatch(aiServiceDetailsActions.setServiceProviderComment(e.target.value));
  };

  return (
    <div className={classes.launchServiceContainer}>
      <Grid item sx={12} sm={12} md={12} lg={12} className={classes.box}>
        <Typography variant="h6">Review Process</Typography>
        <Typography className={classes.reviewProcessDescription}>
          After you submitted your service, SingularityNet curation team will review your service. This process could
          take a few days. After the review you will be notified if your service as has been accepted or if additional
          information is required. You will be able to review and respond to the feedback from the team here.
        </Typography>
        <div className={classes.changesReqAlertContainer}>
          <AlertBox
            type={alertTypes.WARNING}
            header="Additional information required"
            icon={BlockIcon}
            message="We need additional details to process and approve your service.
             Please review the comments below and update your service. Once done, you can resubmit for approval."
          />
        </div>

        <div className={classes.changeReqTextarea}>
          <Typography variant="h6">Reviews Comment</Typography>
          <Typography>{comments.SERVICE_APPROVER || "No comments Provided"}</Typography>

          <Typography variant="h6">Message to Reviewers</Typography>
          <SNETTextarea
            label="Text Input"
            rowCount={8}
            value={comments.SERVICE_PROVIDER}
            onChange={handleCommentChange}
          />
        </div>

        <div className={classes.changesReqAlertContainer}>
          <AlertBox type={alert.type} children={alert.children} message={alert.message} />
        </div>

        <div className={classes.changeReqBtnContainer}>
          <SNETButton color="primary" variant="outlined" children="Reply" onClick={onSubmitComment} />
          <SNETButton color="primary" variant="contained" children="Go back to edit" onClick={onContinueToEdit} />
        </div>
      </Grid>
    </div>
  );
};

export default withStyles(useStyles)(ChangeRequested);