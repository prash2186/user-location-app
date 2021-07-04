import React from "react";
import LogInScreen from "../log-in-screen/log-in-screen";
import SignUpScreen from '../sign-up-screen/sign-up-screen';

interface IState {
    getPage: "USER" | "LOG-IN" | "SIGN-UP"
}

class MainPageWrapper extends React.Component<{}, IState> {

    constructor(props: {}) {
        super(props);
        this.state = {
            getPage: "LOG-IN"
        }
    }

    getSignUpScreen() {
        if (this.state.getPage === "SIGN-UP") {
            return (
                <SignUpScreen onClickLogIn={() => {
                    this.setState({ ...this.state, getPage: "LOG-IN" })
                }} />
            )
        }
        return null
    }

    getLogInScreen() {
        if (this.state.getPage === "LOG-IN") {
            return (<LogInScreen onClickSignUp={() => {
                this.setState({ ...this.state, getPage: "SIGN-UP" });
            }} />)
        }
        return null;
    }

    getUserScreen() {
        return null;
    }

    render() {
        return (
            <>
                {this.getLogInScreen()}
                {this.getSignUpScreen()}
                {this.getUserScreen()}
            </>
        )
    }
}

export default MainPageWrapper