import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right, List, ListItem, Title } from 'native-base';
import Comment from './Comment';

const comments = [
  {
    id: 1,
    name: 'Armando Gonzalez',
    time: '5:00 pm',
    classId: 1,
    comment: 'LLegaré 15 min tarde.',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/83.jpg'
  },
  {
    id: 2,
    name: 'Alberto Acosta',
    time: '12:00 pm',
    classId: 1,
    comment: 'Ahí nos vemos',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/80.jpg'
  },
  {
    id: 3,
    name: 'Bruno Rodriguez',
    time: '3:49 pm',
    classId: 1,
    comment: 'Ya quiero que empiece',
    avatar: 'https://randomuser.me/api/portraits/thumb/men/81.jpg'
  }
];

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <Header >
          <Left>
            <Button transparent>
              <Icon name='arrow-back' />
            </Button>
          </Left>
          <Body>
            <Title>Info clase</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name='menu' />
            </Button>
          </Right>
        </Header>
        <Content>
          <Card>
            <CardItem>
              <Left>
                <Body>
                  <Text>Body Combat</Text>
                  <Text note>Instructor: Alexa</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Image source={{uri: 'http://www.platinumfitnessaz.com/wp-content/uploads/2016/05/bodycombat.jpg'}} style={{height: 200, width: null, flex: 1}}/>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent>
                  <Icon active name="thumbs-up" />
                  <Text>12 attendes</Text>
                </Button>
              </Left>
              <Body>
                <Button transparent>
                  <Icon active name="chatbubbles" />
                  <Text>3 Comments</Text>
                </Button>
              </Body>
              <Right>
                <Text>5h ago</Text>
              </Right>
            </CardItem>
          </Card>
          <List>
           {comments.map(comment => <Comment key={comment.id} comment={comment} />)}
          </List>
        </Content>
      </Container>
    );
  }
}
