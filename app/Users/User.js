import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Left, Button, Icon, Body, Title, Right, Text } from 'native-base';

export default class User extends Component {
  state = {
    instructor: false
  }

  send = () => {
    alert('sending data ...');
  }

  render() {
    return (
      <Container style={styles.container}>
        <Header >
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Add a user</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>First Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Last Name</Label>
              <Input />
            </Item>
            <Item floatingLabel>
              <Label>Type</Label>
              <Input />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
            <Button block success style={styles.buttonSend} onPress={this.send}>
              <Text>Send</Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: -20,
    padding: 20,
    width: '100%'
  },
  buttonSend: {
    marginTop: 50
  }
})

AppRegistry.registerComponent('Gym', () => User);
