import React from 'react';
import { Text, ListItem } from 'native-base';

const UserInfo = ({user}) => (
  <ListItem>
    <Text>{user.firtName} {user.lastName}</Text>
  </ListItem>
)

export default UserInfo;
