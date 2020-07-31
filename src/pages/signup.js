import React from "react";

//MUI stuff
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 0, 3),
    display: "block",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  borderBox: {
    border: "2px solid red",
  },
  login: {
    textDecoration: "none",
    fontStyle: "italic",
    display: "block",
    margin: theme.spacing(2, 0, 0),
  },
}));

const handlesubmit = (e) => {
  e.preventDefault();
  const password = document.querySelector("#password").value;
  const cpassword = document.querySelector("#confirmpassword").value;
  if (password === cpassword) {
    console.log("password is correct");
  } else {
    alert("wrong password");
  }
};

export default function Signup() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h4" className={classes.title}>
        Sign Up
      </Typography>
      <form>
        <Grid container spacing={2}>
          <Grid item sm={6} xs={12}>
            <TextField
              label="First Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item sm={6} xs={12}>
            <TextField
              label="Last Name"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Your Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="password"
              label="Your Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="confirmpassword"
              label="Confirm Your Password"
              type="password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
        {/* <Typography  component="span"> */}
        <Link to="/login" className={classes.login}>
          Already have an account?
        </Link>
        {/* </Typography> */}
        <Button
          type="submit"
          variant="contained"
          className={classes.submit}
          fullWidth
          onClick={handlesubmit}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
}
