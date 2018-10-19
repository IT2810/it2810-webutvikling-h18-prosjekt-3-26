import React from 'react';
import { TextInput } from 'react-native';

export default class NumericInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
        }
    }

    /*
    This limits the input to numbers only, 
    both by which keyboard is shown
    and by filtering out any non-digits.
    */

    componentDidMount() {
        if ('placeholder' in this.props) {
            this.setState({number:this.props.placeholder});
        }
    }

    onChanged = (text) => {
        text = text.replace(/\D/g,'');
        this.setState({number:text})
    }

    componentDidUpdate(prevProps) {
        if ('onChange' in this.props && this.props.onChange === prevProps.onChange) {
            this.props.onChange(this.state.number);
        }
    }

    render() {
        return (
            <TextInput 
                keyboardType = 'numeric'
                onChangeText = {(text)=> this.onChanged(text)}
                value = {'' + this.state.number}
            /> 
        );
    }
}