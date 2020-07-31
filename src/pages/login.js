import React from "react";
import Link from "react-router-dom/Link";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  title: {
    margin: theme.spacing(3, 0, 3),
    display: "block",
  },
  email: {
    margin: theme.spacing(0, 0, 3),
  },
  password: {
    margin: theme.spacing(1, 0),
  },
  signup: {
    textDecoration: "none",
    fontStyle: "italic",
    margin: theme.spacing(1, 0, 2),
    display: "block",
    float: "right",
  },
}));

export default function Login() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Typography component="h1" variant="h4" className={classes.title}>
        {" "}
        Login
      </Typography>
      <form action="">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              className={classes.email}
              label="Email"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              className={classes.password}
              label="Your Password"
              variant="outlined"
              fullWidth
              required
            />
          </Grid>
        </Grid>
      </form>
      <Link to="/signup" className={classes.signup}>
        Have not yet account
      </Link>
      <Button
        className={classes.button}
        fullWidth
        variant="outlined"
        color="primary"
      >
        Login
      </Button>
    </Container>
  );
}
