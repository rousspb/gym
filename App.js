import React, { Component } from 'react'
import { StyleSheet, AppRegistry, View } from 'react-native'
import { NativeRouter, Route, Link, Switch, Redirect } from 'react-router-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';

import Schedule from './app/Schedule/Schedule';
import Settings from './app/Settings';
import Classes from './app/Classes';
import Users from './app/Users/Users.js';
import User from './app/Users/User.js';
import ClassDetails from './app/Schedule/ClassDetails';

export default class App extends Component {
  render() {
    return (
      <NativeRouter>
        <Container>
          <Content>
            <Switch>
              <Route exact path="/" component={Schedule}/>
              <Route path="/settings" component={Settings}/>
              <Route path="/classes" component={Classes}/>
              <Route path="/users" component={Users}/>
              <Route path="/user" component={User}/>
              <Route path="/class" component={ClassDetails}/>
            </Switch>
          </Content>
          <Footer>
            <FooterTab>
              <Button vertical active>
                <Link to="/">
                  <View>
                    <Icon name="apps" />
                    <Text>Schedule</Text>
                  </View>
                </Link>
              </Button>
              <Button vertical>
                <Link to="/settings">
                  <View>
                    <Icon name="settings" />
                    <Text>Settings</Text>
                  </View>
                </Link>
              </Button>
              <Button vertical>
                <Link to="/classes">
                  <View>
                    <Icon name="laptop" />
                    <Text>Groups</Text>
                  </View>
                </Link>
              </Button>
              <Button vertical>
                <Link to="/users">
                  <View>
                    <Icon name="settings" />
                    <Text>Users</Text>
                  </View>
                </Link>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </NativeRouter>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
    padding: 10,
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
})

AppRegistry.registerComponent('Gym', () => App);
