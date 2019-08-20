import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import firebase from "firebase";

const styles = theme => ({
  main: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },

  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },

  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.pallete.secondary.main
  },

  form: {
    width: "100%",
    marginTop: theme.spacing.unit
  },

  submit: {
    marginTop: theme.spacing.unit * 3
  }
});

class Sign extends Component {
  state = {
    email: "",
    password: ""
  };

  handleChange = event => {};

  handleSubmit = event => {};

  render() {
    const { classes } = this.props;
    const title = this.props.isSignUp ? "Sign up" : "Sign in";

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {title}
          </Typography>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Adres email</InputLabel>
            <Input
              id="email"
              name="email"
              autoCopmlete="email"
              autoFocus
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </FormControl>
          <Button
            type="submit"
            fullWidthvariant="contained"
            color="primary"
            className={classes.submit}
          >
            {title}
          </Button>
        </Paper>
      </main>
    );
  }
}

export default withStyles(styles)(Sign);
