import {
  Button,
  Grid,
  IconButton,
  makeStyles,
  Snackbar,
} from "@material-ui/core";
import axios from "axios";
import React from "react";
const useStyles = makeStyles((theme) => ({
  fullWidth: {
    width: "100%",
  },
  close: {
    padding: theme.spacing(0.5),
  },
  successSnackbar:{
    backgroundColor:'#4caf50',
    color:'white',
  },
  failureSnackbar:{
    backgroundColor:'#f44336',
    color:'white'
  }
}));
const ContactFooter = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [messageInfo, setMessageInfo] = React.useState("");
  const [snackbarBg,setSnackbarBg] = React.useState(classes.successSnackbar);
  const sendData = (event) => {
    event.preventDefault();
    const form = document.forms["contact-form"];
    axios({
      method: "post",
      url:
        "https://script.google.com/macros/s/AKfycbxArX0fbEzto0E4B1WawLFC2XvfNSHFzV7Io_nsGjA1LK3DJSiyDzX4imMEunbbTh3b/exec",
      data: new FormData(form),
      headers: { "Content-Type": "multipart/form-data" },
    })
      .then(function (response) {
        setSnackbarBg(classes.successSnackbar);
        setMessageInfo("I got your message... !");
        setOpen(true);
      })
      .catch(function (response) {
        setSnackbarBg(classes.failureSnackbar);
        setMessageInfo("Oops something wrong...!")
        setOpen(true);
      });
    form.reset();
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const handleExited = () => {
    setMessageInfo(undefined);
  };

  return (
    <>
      <Grid item xs={12} md={4} className="">
        <div className="small my-2">Or just write me a letter here_</div>
        <form
          className="footer-contact-form"
          onSubmit={sendData}
          name="contact-form"
        >
          <input
            type="text"
            placeholder="Your Name"
            name="name"
            className={`${classes.fullWidth} my-1`}
          />
          <input
            type="email"
            placeholder="Your e-mail"
            name="email"
            className={`${classes.fullWidth} my-1`}
          />
          <textarea
            placeholder="Type the message here"
            name="message"
            className={`${classes.fullWidth} my-1`}
          />
          <button type="submit" className={`${classes.fullWidth} my-1 p-2`}>
            Send
          </button>
        </form>
      </Grid>
      <Snackbar
      id="contact-snakebar"
        key={messageInfo ? messageInfo.key : undefined}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        ContentProps={{
          "aria-describedby": "message-id",
          className: snackbarBg
        }}
        style={{width:"80%"}}
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        onExited={handleExited}
        message={messageInfo}
        action={
          <>
            <IconButton
              aria-label="close"
              color="inherit"
              className={classes.close}
              onClick={handleClose}
            >
              <i className="fa fa-close"></i>
            </IconButton>
          </>
        }
      />
    </>
  );
};
export default ContactFooter;
