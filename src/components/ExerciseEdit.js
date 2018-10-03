import React from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import NumericInput from './NumericInput';

export default class EditObject extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false,
        }
    }
    /* 
    This takes an object and excludable fields and creates a way to edit these fields.
    */

    createEditableObject = () => {
        const obj = {};
        for (const key in this.props.propObject) {
            if (this.props.propObject.hasOwnProperty(key) && 'exclude' in this.props &&  !(key in this.props.exclude)) {
                obj[key] = this.props.propObject.key;
            }
        }
    }

    createDisplayFields = () => {
        const display = [];
        console.log('propObject: ',JSON.stringify(this.props.propObject));
        for (const key in this.props.propObject) {
            if (this.props.propObject.hasOwnProperty(key)) {
                console.log('key: ',key);
                display.push(<Text key={key}>{this.props.propObject.key}</Text>);
            }
        }
        console.log(display);
        return display;
    }

    editButton = () => {
        this.setState({edit:true});
    }

    saveButton = (editable) => {
        this.props.propObject.edit(...editable);
        this.setState({edit:false});
    }
    
    render() {
        if (this.state.edit) {
            console.log('conditional render props ',this.props);
            return (
                <View>
                    <TextInput 
                        onChangeText={(text) => this.setState({editName:text})}
                        placeholder={this.props.exercise.name}
                    />
                    <NumericInput onChange={(text) => this.setState({editWeight:text})} startNumber={this.props.exercise.weight}/>
                    <NumericInput onChange={(text) => this.setState({editRep:text})} startNumber={this.props.exercise.repetitions}/>
                    <Button title='save' onPress={() => this.saveButton()}></Button>
                </View>
            );
        }
        console.log('default render props ',this.props);
        return (
            <View>
                {this.createDisplayFields()}
                <Button title='edit' onPress={() => this.editButton()}></Button>
            </View>
        );
    }
} 