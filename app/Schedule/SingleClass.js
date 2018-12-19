import React, { Component } from 'react';
import { NativeRouter, Route, Link } from 'react-router-native';
import { ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base';

const SingleClass = ({single}) => (
   <ListItem avatar>
     <Left>
       <Thumbnail source={{ uri:  single.url}} />
     </Left>
     <Body>
      <Link to="/class">
        <Text>{single.name}</Text>
      </Link>
        <Text note>Instructor: {single.instructor}</Text>
     </Body>
     <Right>
        <Text>{single.time}</Text>
        <Text note>Room: {single.room}</Text>
     </Right>
   </ListItem>
)

export default SingleClass;
