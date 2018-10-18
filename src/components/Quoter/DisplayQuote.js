import React, { Component } from 'react';
import jsonquotes from "../../../assets/quotes.json";
import { FlatList, View, Text } from 'react-native';
//import { Font } from 'expo';

const text = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].text;
const author = jsonquotes[Math.floor(Math.random()*jsonquotes.length)].from;
const dataz = text + " - " + author;



class DisplayQuote extends React.Component{
 /*   componentDidMount(){
          Font.loadAsync({
            'MontSerratLight': require('../../../assets/fonts/MontSerratLight.otf')
          });
        }*/

    render() {
        return(
            
            <View style={{display: "flex",flex:1, alignContent: "flex-end", alignItems: "center", justifyContent:"center"}}>
                <Text style={{color: 'black',fontStyle:'italic' ,textAlign:"center"}}>
                   {dataz}
                </Text>
            </View>
        )
    }
}
export default DisplayQuote;
