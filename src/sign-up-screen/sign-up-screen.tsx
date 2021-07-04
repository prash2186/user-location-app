import { Button } from "@material-ui/core";
import React from "react";
import UCLFieldsetInputComp from "../components/input-component/ucl-fieldset-input-comp";
import './sign-up-screen.css';

interface IProps {
    onClickLogIn: () => void
}

interface IState {
    fNameComp: {
        fName: string;
        compKey: any
    };
    lNameComp: {
        lName: string;
        compKey: any
    };
    emailComp: {
        email: string;
        compKey: number;
    };
    passwordComp: {
        password: string;
        compKey: number;
    },
    cnfrmPassworComp: {
        cnfrmPassword: string,
        compKey: number
    }
}

class SignUpScreen extends React.Component<IProps, IState> {

    intialState: IState = {
        fNameComp: {
            compKey: 1000,
            fName: ""
        },
        lNameComp: {
            compKey: 2000,
            lName: ""
        },
        emailComp: {
            email: "",
            compKey: 3000
        },
        passwordComp: {
            password: "",
            compKey: 4000
        },
        cnfrmPassworComp: {
            cnfrmPassword: "",
            compKey: 5000
        }

    }

    constructor(props: IProps) {
        super(props);

        this.state = { ...this.intialState }
    }

    onChangeFirstname() {

    }

    onChangeLastName() {

    }

    onChangeEmail() {

    }

    onChangePassword() {

    }

    onChangeCnfrmPassword() {

    }

    render() {
        return (
            <div className="sign-up-screen-main-container">
                <div className={"user-fName-lName-container"}>
                    <UCLFieldsetInputComp width={"48%"} key={this.state.fNameComp.compKey} compId={"fName"} labelName={"First Name"} placeHolder={""}
                        value={this.state.fNameComp.fName} inputType={"input"} valueChangeCB={this.onChangeFirstname.bind(this)} />
                    <UCLFieldsetInputComp width={"48%"} styles={{ marginLeft: "0.5rem" }} key={this.state.lNameComp.compKey} compId={"lName"} labelName={"Last Name"} placeHolder={""}
                        value={this.state.lNameComp.lName} inputType={"input"} valueChangeCB={this.onChangeLastName.bind(this)} />
                </div>
                <UCLFieldsetInputComp width={"88%"} key={this.state.emailComp.compKey} compId={"email"} labelName={"Enter Email"} placeHolder={""}
                    value={this.state.emailComp.email} styles={{ marginTop: "1rem" }} inputType={"input"} valueChangeCB={this.onChangeEmail.bind(this)} />
                <UCLFieldsetInputComp width={"88%"} key={this.state.passwordComp.compKey} compId={"password"} labelName={"Password"} placeHolder={""}
                    value={this.state.passwordComp.password} styles={{ marginTop: "1rem" }} inputType={"password"} valueChangeCB={this.onChangePassword.bind(this)} />
                <UCLFieldsetInputComp width={"88%"} key={this.state.cnfrmPassworComp.compKey} compId={"cnfrm_password"} labelName={"Confirm Password"} placeHolder={""}
                    value={this.state.cnfrmPassworComp.cnfrmPassword} styles={{ marginTop: "1rem" }} inputType={"input"} valueChangeCB={this.onChangeCnfrmPassword.bind(this)} />
                <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "1rem" }}>
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        style={{ width: "88%", }}
                    >
                        Sign Up
                    </Button>
                </div>
                <div style={{ display: "flex", marginTop: "1rem" }}>
                    <div style={{
                        color: "blue", textDecoration: "underline", cursor: "pointer"
                    }} onClick={() => {
                        this.props.onClickLogIn()
                    }}>Log In</div>
                </div>

            </div>
        )
    }
}

export default SignUpScreen;