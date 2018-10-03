import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import NumericInput from './NumericInput';

export default class EditObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
            error: false,
        }
    }
    /* 
    This takes an object and excludable fields and creates a way to edit these fields.
    */
   componentDidMount = () => {
        this.validateObject(this.props);
   }

    validateObject = (props) => {
        if (!('propObject' in props && 'edit' in props.propObject && typeof props.propObject['edit'] === 'function')) {
            console.error('Object passed to EditObject is lacking an edit function or the parameter propObject is missing');
            this.setState({error:true});
        }
    }

    createEditableObject = () => {
        const obj = {};
        for (const key in this.props.propObject) {
            if (this.props.propObject.hasOwnProperty(key) && typeof this.props.propObject[key] !== 'function' && typeof this.props.propObject[key] !== 'object') {
                if(!('exclude' in this.props) || 'exclude' in this.props && key !== this.props.exclude) {
                    obj[key] = this.props.propObject[key];
                }
            }
        }
        return obj;
    }

    createDisplayFields = () => {
        const display = [];
        for (const key in this.props.propObject) {
            if (this.props.propObject.hasOwnProperty(key) && typeof this.props.propObject[key] !== 'function' && typeof this.props.propObject[key] !== 'object') {
                display.push(<Text key={key}>{this.props.propObject[key]}</Text>);
            }
        }
        return display;
    }

    createInputFields = () => {
        const inputs = [];
        const editableObject = this.createEditableObject();
        for (const key in editableObject) {
            if (editableObject.hasOwnProperty(key)) {
                const stateName = 'edit' + key;
                inputs.push(<TextInput key={key} onChangeText={(text) => this.setState({[stateName]:text})} placeholder={'' + editableObject[key]}/>);
            }
        }
        return inputs;
    }

    editButton = () => {
        this.setState({edit:true});
    }

    saveButton = () => {
        const localState = Object.assign(this.state);
        const relevantKeys = [];
        Object.keys(localState).map((key) => {
            if (key.includes('edit')) {
                relevantKeys.push(key);
            }
        });
        const editable = {};
        console.log(relevantKeys);
        for (const key in relevantKeys) {
            editable[key] = this.state[key];
            
        }
        console.log('editable ', editable);
        this.props.propObject.edit(...editable);
        this.setState({edit:false});
    }
    
    render() {
        if (this.state.error) {
            return false;
        }
        if (this.state.edit) {
            return (
                <View>
                    {this.createInputFields()}
                    {/*<TextInput 
                        onChangeText={(text) => this.setState({editName:text})}
                        placeholder={''}
                    />
                    <NumericInput onChange={(text) => this.setState({editWeight:text})} startNumber={0}/>
                    <NumericInput onChange={(text) => this.setState({editRep:text})} startNumber={0}/>*/}
                    <Button title='save' onPress={() => this.saveButton()}></Button>
                </View>
            );
        }
        return (
            <View>
                {this.createDisplayFields()}
                <Button title='edit' onPress={() => this.editButton()}></Button>
            </View>
        );
    }
} 