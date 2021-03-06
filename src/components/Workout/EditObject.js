import React from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
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
    This cpomponent takes an object, excludable fields and creates a way to edit these fields.
    Exclude is an array of keys that should not be editable. They will still be displayed.
    ints is an array of keys that should be limited to number only input.
    */
   componentDidMount = () => {
        this.validateObject(this.props);
   }

    validateObject = (props) => {
        if (!('propObject' in props && 'edit' in props.propObject && typeof props.propObject['edit'] === 'function')) {
            console.error('Object passed to EditObject is lacking an edit function or the parameter propObject is missing. Object will not be rendered.');
            this.setState({error:true});
        }
    }

    // Create a new object with fields that should be converted to input fields
    createEditableObject = () => {
        const obj = {};
        for (const key in this.props.propObject) {
            if (this.props.propObject.hasOwnProperty(key) && typeof this.props.propObject[key] !== 'function' && typeof this.props.propObject[key] !== 'object') {
                if(!('exclude' in this.props) || 'exclude' in this.props && this.props.exclude.indexOf(key) === -1) {
                    obj[key] = this.props.propObject[key];
                }
            }
        }
        return obj;
    }

    // Iterate through object and find displayable fields, a.k.a not functions or other objects.
    // Adds text field for each of them.
    createDisplayFields = () => {
        const display = [];
        for (const key in this.props.propObject) {
            // Check HasOwnProperty to avoid Object.prototype
            // Then, check that the current part of the object that we are evaluating is not a function or object.
            if (this.props.propObject.hasOwnProperty(key) && typeof this.props.propObject[key] !== 'function' && typeof this.props.propObject[key] !== 'object') {
                // Ensure that either exclude list is not provided or this item is not in exclude list.
                if(!('exclude' in this.props) || 'exclude' in this.props && this.props.exclude.indexOf(key) === -1) {
                    // If labels are enabled, add them along with the text.
                    if(this.props['labels']) {
                        display.push(
                        <View key={key+'view'}>
                            <Text key={key+'label'}>{key}</Text>
                            <Text key={key}>{this.props.propObject[key]}</Text>
                        </View>
                        );
                    }
                    else{
                        display.push(<Text key={key}>{this.props.propObject[key]}</Text>);
                    }
                }
            }
        }
        return display;
    }

    // Add input field for every input-able field.
    // If labels are present, add keys as labels!
    createInputFields = () => {
        const inputs = [];
        // Create a new object from the provided object that has removed keys from the exclude-list.
        const editableObject = this.createEditableObject();
        for (const key in editableObject) {
            if (editableObject.hasOwnProperty(key)) {
                // Create name for the state that will be set to save the input
                const stateName = 'edit' + key;
                // Check if this key is in the list of keys that should be int-only.
                if (!('ints' in this.props) || this.props.ints.indexOf(key) === -1) {
                    if (this.props['labels']) {
                        inputs.push(
                            <View key={key+'view'}>
                                <Text key={key+'text'}>{key}</Text>
                                <TextInput key={key} onChangeText={(text) => this.setState({[stateName]:text})} placeholder={'' + editableObject[key]}/>
                            </View>
                        );
                    }
                    else {
                        inputs.push(<TextInput key={key} onChangeText={(text) => this.setState({[stateName]:text})} placeholder={'' + editableObject[key]}/>);
                    }
                }
                // If it is int-only, create specific input field
                else {
                    // Again, check if labels are enabled
                    if (this.props['labels']) {
                        inputs.push(
                            <View key={key+'view'}>
                                <Text key={key+'text'}>{key}</Text>
                                <NumericInput key={key} onChange={(text) => this.setState({[stateName]:text})} placeholder={''+editableObject[key]}/>
                            </View>
                        ); 
                    }
                    else {
                        inputs.push(<NumericInput key={key} onChange={(text) => this.setState({[stateName]:text})} placeholder={'' + editableObject[key]}/>);
                    }
                }
            }
        }
        return inputs;
    }


    // Toggle conditional rendering
    editButton = () => {
        this.setState({edit:true});
    }

    
    saveButton = () => {
        // Copy state to guarantee immutability
        const localState = {...this.state};
        const relevantKeys = [];
        Object.keys(localState).map((key) => {
            if (key.includes('edit') && key !== 'edit') {
                relevantKeys.push(key);
            }
        });
        const editable = {};
        for (const key in relevantKeys) {
            const strippedKey = relevantKeys[key].replace('edit','');
            editable[strippedKey] = this.state[relevantKeys[key]];
            
        }
        this.props.propObject.edit({...editable});
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
                    <Button title='accept' onPress={() => this.saveButton()}></Button>
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
