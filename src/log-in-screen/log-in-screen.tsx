import React from "react";
import './log-in-screen.css';
import UCLFieldsetInputComp from '../components/input-component/ucl-fieldset-input-comp';
import { Button } from "@material-ui/core";

interface IProps {
    onClickSignUp: () => void
}

interface IState {
    emailComp: {
        email: string;
        compKey: number;
    };
    passwordComp: {
        password: string;
        compKey: number;
    },
    componentMounted: boolean
}

class LogInScreen extends React.PureComponent<IProps, IState> {

    intialState: IState = {
        emailComp: { email: "", compKey: 1000 },
        passwordComp: { password: "", compKey: 2000 },
        componentMounted: false
    }


    constructor(props: IProps) {
        super(props);
        this.state = { ...this.intialState };
    }

    componentDidMount() {
        const newState = { ...this.state };
        newState.componentMounted = true;
        this.setState({ ...newState });
    }

    onChangeuserName(val: string) {
        this.setState({ ...this.state, emailComp: { ...this.state.emailComp, email: val } })
    }

    onChangePassword(val: string) {
        this.setState({ ...this.state, passwordComp: { ...this.state.passwordComp, password: val } })
    }
    render() {


        if (this.state.componentMounted) {
            return (
                <div className="login-screen-main-container">
                    <div className="ulib-login-inputs">
                        <UCLFieldsetInputComp width={"80%"} key={this.state.emailComp.compKey} compId={"email"} labelName={"Enter Email"} placeHolder={""}
                            value={this.state.emailComp.email} inputType={"input"} valueChangeCB={this.onChangeuserName.bind(this)} />
                        <UCLFieldsetInputComp width={"80%"} key={this.state.passwordComp.compKey} compId={"password"} labelName={"Password"} placeHolder={""}
                            value={this.state.passwordComp.password} styles={{marginTop:"1rem"}} inputType={"password"} valueChangeCB={this.onChangeuserName.bind(this)}  />
                    </div>
                    <div style={{width:"100%", display:"flex", justifyContent:"center"}}>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            style={{ width:"70%",background: "#4caf50" }}
                        >
                            Log In
                        </Button>
                    </div>
                    <div style={{ display: "flex", }}>
                        <div>  Don't have an account?</div>
                        <div style={{
                            marginLeft: "0.5rem", color: "blue", textDecoration: "underline", cursor: "pointer"
                        }} onClick={() => {
                            this.props.onClickSignUp()
                        }}>Sign Up Now</div>
                    </div>
                </div >
            )
        }
        return null;
    }
}

export default LogInScreen