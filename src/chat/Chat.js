import React, { Component } from "react";
import Typography from "@material-ui/core/Typography";
import PageWrapper from "../components/PageWrapper";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import firebase from "fireabse";
import textField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2
  }
});

class Chat extends Component {
  state = {
    messages: [],
    currentMessage: "",
    email: ""
  };

  handleChange = event => {};

  handleSubmit = event => {};

  render() {
    const { classes } = this.props;

    return (
      <PageWrapper>
        <Typography component="h1" variant="h4">
          Chat
        </Typography>
        {this.state.messages.slice(-5).map(message => {
          return (
            <Paper key={message.id} className={classes.root} elevation={1}>
              <Typography component="p">{message.email}</Typography>
              <Typography variant="h6" component="h6">
                <b>{message.text}</b>
              </Typography>
            </Paper>
          );
        })}
        <form onSubmit={this.handleSubmit}>
          <TextField
            value={this.state.currentMessage}
            onChange={this.handleChange}
            margin="normal"
          />
          <Button
            style={{ marginTop: "10px" }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Wyślij
          </Button>
        </form>
      </PageWrapper>
    );
  }
}

export default withStyles(styles)(Chat);
