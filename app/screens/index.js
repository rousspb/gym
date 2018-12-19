import { Navigation } from 'react-native-navigation';

// import FirstTabScreen from './FirstTabScreen';
// import SecondTabScreen from './SecondTabScreen';
// import PushedScreen from './PushedScreen';

import Schedule from './../Schedule';
import Settings from './../Settings';
// import Classes from './../Classes';
// import Users from './../Users/Users.js';
// import User from './../Users/User.js';

// register all screens of the app (including internal ones)
export function registerScreens() {
  Navigation.registerComponent('schedule', () => Schedule);
  Navigation.registerComponent('settings', () => Settings);
  // Navigation.registerComponent('classes', () => Classes);
  // Navigation.registerComponent('users', () => Users);
}
