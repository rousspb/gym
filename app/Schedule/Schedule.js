import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { NativeRouter, Route, Link } from 'react-router-native';
import { Container, Header, Content, List, ListItem, Text, Left, Button, Icon, Body, Title, Right, Thumbnail } from 'native-base';
import SingleClass from './SingleClass';

const classes = [
  {
    id: 1,
    name: 'Power Jump',
    instructor: 'Valeria',
    time: '5:00 pm',
    room: 1,
    url: 'https://todoejercicios.net/wp-content/uploads/2015/10/PJ.jpg'
  },
  {
    id: 2,
    name: 'Body Combat',
    instructor: 'Angela',
    time: '6:00 pm',
    room: 1,
    url: 'http://www.platinumfitnessaz.com/wp-content/uploads/2016/05/bodycombat.jpg'
  },
  {
    id: 3,
    name: 'Body Balance',
    instructor: 'Loana',
    time: '6:00 pm',
    room: 2,
    url: 'https://nzglen.files.wordpress.com/2012/04/les0030-quarterlies_bb.jpg'
  },
  {
    id: 4,
    name: 'CX Works',
    instructor: 'Roxana',
    time: '7:00 pm',
    room: 1,
    url: 'http://brittanybendallfitness.com/wp-content/uploads/2017/05/cxworx1jpg.jpg'
  },
  {
    id: 5,
    name: 'Body Stept',
    instructor: 'Valeria',
    time: '8:00 pm',
    room: 2,
    url: 'http://my.atmospherefitness.com.au/Atmosphere/BODYSTEP.jpg'
  }
];
export default class Schedule extends Component {
  render() {
    return (
      <Container>
        <Header >
          <Left>
          </Left>
          <Body>
            <Title>Today</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
         <Content>
           <List>
            {classes.map(single => <SingleClass key={single.id} single={single} />)}
           </List>
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
