export const useStyles = MUITheme => ({
  inviteModal: {
    width: 600,
    borderRadius: 4,
    margin: "0 auto",
    backgroundColor: MUITheme.palette.background.white,
    boxShadow: "0 16px 24px 2px rgba(0,0,0,0.14), 0 6px 30px 5px rgba(0,0,0,0.12), 0 8px 10px -5px rgba(0,0,0,0.2)",
    "& h4": {
      padding: "10px 22px",
      borderBottomWidth: 1,
      borderBottomStyle: "solid",
      borderBottomColor: MUITheme.palette.border.primary,
      marginBottom: 23,
    },
    [MUITheme.breakpoints.down("xs")]: {
      width: "auto",
      margin: "0 25px",
    },
  },
  popupContent: {
    padding: "0 22px",
    "& > div": {
      "& > div": { width: "100%" },
    },
  },
  btnContainer: { textAlign: "center" },
});
