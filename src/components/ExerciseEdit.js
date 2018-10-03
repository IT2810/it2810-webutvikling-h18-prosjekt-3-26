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
    // This takes an object as prop

    editButton = () => {
        this.setState({edit:true});
    }

    saveButton = () => {
        this.props.exercise.edit(this.state['editName'],this.state['editWeight'], this.state['editRep']);
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
                <Text>{this.props.exercise.name}</Text>
                <Text>{this.props.exercise.weight}</Text>
                <Text>{this.props.exercise.repetitions}</Text>
                <Button title='edit' onPress={() => this.editButton()}></Button>
            </View>
        );
    }
} 