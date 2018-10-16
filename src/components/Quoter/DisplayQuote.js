import React, { Component } from 'react';
import jsonquotes from "../../../assets/quotes.json";
import { FlatList, View, Text } from 'react-native';

const text = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].text;
const author = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].from;
const data = text + "-" + author;

class DisplayQuote extends React.Component{
    render() {
        return(
            <View>
            <FlatList 
            data={data}
            renderItem={({item})=><Text>{item}</Text>
            }
            />
            </View>
        )
    }
}
export default DisplayQuote;