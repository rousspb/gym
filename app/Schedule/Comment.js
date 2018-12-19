import React, { Component } from 'react';
import { ListItem, Text, Left, Body, Right, Thumbnail } from 'native-base';

const Comment = ({comment}) => (
  <ListItem avatar>
    <Left>
      <Thumbnail source={{ uri: comment.avatar }} />
    </Left>
    <Body>
      <Text>{comment.name}</Text>
      <Text note>{comment.comment}</Text>
    </Body>
    <Right>
      <Text note>{comment.time}</Text>
    </Right>
  </ListItem>
)

export default Comment;
