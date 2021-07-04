import TextField from '@material-ui/core/TextField';
import React from "react";

interface IProps {
    compId: string;
    labelName: string;
    placeHolder: string;
    valueChangeCB: (val: string) => void;
    value: string;
    width: any;
    inputType: "input" | "password" | "number";
    styles?:React.CSSProperties
}

class UCLFieldsetInputComp extends React.Component<IProps> {

    onChangeValue(e: React.ChangeEvent<HTMLInputElement>) {
        const val = e.target.value;
        this.props.valueChangeCB(val);
    }

    render() {
        let styles = {};
        if(this.props.styles){
            styles = this.props.styles
        }
        return (
            <TextField
                style={{ marginTop: "0.5rem", width: this.props.width , ...styles}}
                id={this.props.compId}
                label={this.props.labelName}
                placeholder={this.props.placeHolder}
                defaultValue={this.props.value}
                variant="outlined"
                type={this.props.inputType}
                onChange={this.onChangeValue.bind(this)}
                InputLabelProps={{
                    shrink: true,
                }}
                
            />
        )
    }
}

export default UCLFieldsetInputComp;