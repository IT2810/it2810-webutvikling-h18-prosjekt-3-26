import React, { Component } from 'react';
import jsonquotes from "../../../assets/quotes.json";
import { FlatList, View, Text } from 'react-native';

const text = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].text;
const author = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].from;
const dataz = text + " - " + author;


class DisplayQuote extends React.Component{
    render() {
        return(
            <View style={{display:"flex",justifyContent:"center",}}>
                <Text style={{color: 'white'}}>
                   {dataz}
                </Text>
            </View>
        )
    }
}
export default DisplayQuote;
