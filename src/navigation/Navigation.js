import React, { Fragment, Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import { NavLink } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import firebase from "firebase";
import SignOutButton from "../auth/SignOut";

const styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    linkContainer: {
        "& a": {
            textDecoration: "none",
            color: "black"
        }
    }
}

class Navigation extends Component {
    state = {
        user = null
    }

    componentDidMount() {

    }

    render () {
        return (
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Toolbar className={classes.linkContainer}>
                        <Fragment>
                            <NavLink to="/counter">
                                <Button color="inherit">Counter</Button>
                            </NavLink>
                            <NavLink to="/counter-live">
                                <Button color="inherit">Counter live</Button>
                            </NavLink>
                            <NavLink to="/chat" color="inherit">Chat</NavLink>
                        </Fragment>
                        <Typography variant="h6" className={classes.grow}>
                            {this.state.user ? this.state.user.email : ""}
                        </Typography>
                        {
                            this.state.user ? (
                                <Fragment>
                                    <NavLink to="/profile">
                                        <Button color="inherit">Profile</Button>
                                    </NavLink>
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <NavLink to ="/sign-in">
                                        <Button color="inherit"> Sign in</Button>
                                    </NavLink>
                                    <NavLink to="/sign-up">
                                        <Button color="inherit">Sign up</Button>
                                    </NavLink>
                                </Fragment>
                            )
                        }
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default withStyles(styles)(Navigation);