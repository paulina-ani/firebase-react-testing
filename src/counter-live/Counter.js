import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import Typography from "@material-ui/core/Typography";
import PageWrapper from "../components/PageWrapper";
import firebase from "firebase";

const styles = theme => ({
  fab: {
    margin: theme.spacing.unit
  }
});

class Counter extends Component {
  state = {
    counter: 0,
    refs: []
  };

  increase = () => {};

  decrease = () => {};

  reset = () => {};

  render() {
    const { classes } = this.props;
    return (
      <PageWrapper>
        <Typography component="h1" variant="h4">
          Counter
        </Typography>
        <Typography
          style={{ padding: "50px" }}
          component="h1"
          variant="h2"
          align="center"
        >
          {this.state.counter}
        </Typography>
        <Fab
          color="primary"
          aria-label="Add"
          className={classes.fab}
          onClick={this.increase}
        >
          <AddIcon />
        </Fab>
        <Fab
          color="secondary"
          aria-label="Remove"
          className={classes.fab}
          onClick={this.decrease}
        >
          <RemoveIcon />
        </Fab>
        <Fab
          color="default"
          aria-label="Reset"
          className={classes.fab}
          onClick={this.reset}
        >
          Reset
        </Fab>
      </PageWrapper>
    );
  }
}

export default withStyles(styles)(Counter);
