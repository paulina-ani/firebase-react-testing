import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import PageWrapper from "../components/PageWrapper";
import avatarPlaceHolder from "../assets/avatar-placeholder.jpg";
import Fab from "@material-ui/core/Fab";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ImageIcon from "@material-ui/icons/Image";
import firebase from "firebase";

const styles = () => ({
  bigAvatar: {
    width: 60,
    heght: 60,
    margin: "0 auto"
  }
});

class Profile extends Component {
  state = {
    counter: 0,
    avatarUrl: "",
    user: null,
    file: null
  };

  handleOnInputFileChange = event => {};

  handleRemove = () => {};

  handleAdd = () => {};

  getAVatarUrl = () => {};

  render() {
    const { classes } = this.props;
    return (
      <PageWrapper>
        <Typography component="h1" variant="h4">
          Profile
        </Typography>
        <div style={{ margin: "20px" }}>
          <Avatar
            scr={
              this.state.avatarUrl ? this.state.avatarUrl : avatarPlaceHolder
            }
            className={classes.bigAvatar}
          />
          <div style={{ margin: "20px" }}>
            <input
              accept="image/*"
              className={classes.input}
              style={{ display: "none" }}
              id="raised-button-file"
              multiple
              type="file"
              onChange={this.handleOnInputFileChange}
            />
            <label htmlFor="raised-button-file">
              <Fab size="small" color="default" component="span">
                <ImageIcon />
              </Fab>
            </label>
            {this.state.file && `${this.state.file.name}`}
            <Fab
              size="small"
              color="primary"
              component="span"
              onClick={this.handleAdd}
            >
              <AddIcon />
            </Fab>
            <Fab
              size="small"
              color="secondary"
              component="span"
              onclick={this.handleRemove}
            >
              <RemoveIcon />
            </Fab>
          </div>
        </div>
        <Typography component="h3" variant="h6">
          Email
        </Typography>
        <Typography component="h3" variant="h6">
          User Id
        </Typography>
        <div style={{ margin: "20px" }}>
          <Fab
            size="small"
            color="primary"
            aria-label="Edit"
            className={classes.fab}
          >
            <EditIcon />
          </Fab>
        </div>
      </PageWrapper>
    );
  }
}

export default withStyles(styles)(Profile);
