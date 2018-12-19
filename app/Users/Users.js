import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link, Redirect } from 'react-router-native';
import { Container, Header, Content, List, ListItem, Text, Left, Button, Icon, Body, Title, Right } from 'native-base';

import UserInfo from './UserInfo';
import User from './User.js';
const users = [
  {
    id: 1,
    firtName: 'Alexa',
    lastName: 'Gonzalez',
    type: 1
  },
  {
    id: 2,
    firtName: 'Rocio',
    lastName: 'Baena',
    type: 2
  },
  {
    id: 3,
    firtName: 'Francisco',
    lastName: 'Gonzalez',
    type: 2
  },
  {
    id: 4,
    firtName: 'Angel',
    lastName: 'Perez',
    type: 2
  },
  {
    id: 5,
    firtName: 'Beatriz',
    lastName: 'Ortiz',
    type: 2
  }
];
export default class Users extends Component {
  state = {
    jumpToUser: false
  }

  send = () => {
    this.setState({
      jumpToUser: true
    })
  }

  render() {
    if (this.state.jumpToUser) {
      return <Redirect to="/User"/>
    }
    return (
        <Container style={styles.container}>
          <Header >
            <Left>
            </Left>
            <Body>
              <Title>Users list</Title>
            </Body>
            <Right>
              <Button transparent>
                <Icon name='menu' />
              </Button>
            </Right>
          </Header>
          <Content>
            <List>
              {users.map( user => <UserInfo key={user.id} user={user} />)}
            </List>
              <Button block onPress={this.send}>
                <Text>Add user</Text>
              </Button>
          </Content>
        </Container>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
