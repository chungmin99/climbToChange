import React from 'react'

import Main from './Main/Main'
import Mission from './Mission/Mission'
//import Profile from './Profile/Profile'
import Policies from './Policies/Policies'
//import Leaderboard from './Leaderboard/Leaderboard'
import Leaderboard from './Profile/leaderboard'

import { 
    createAppContainer, 
    createStackNavigator, 
    createDrawerNavigator
} from 'react-navigation'

const Stack = {
    Main: { screen: Main },
    Mission: { screen: Mission },
//    Profile: { screen: Profile },
    Policies: { screen: Policies },
    Leaderboard: { screen: Leaderboard }
};

const DrawerRoutes = {
    'Main Page':{
        name: 'MainStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'Main' })
    },
    'Mission Statement':{
        name: 'MissionStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'Mission' })
    },
//    'My Profile':{
//        name: 'ProfileStack',
//        screen: createStackNavigator(Stack, { initialRouteName: 'Profile' })
//    },
    'Important Policies':{
        name: 'PoliciesStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'Policies' })
    },
    'Leaderboard':{
        name: 'LeaderboardStack',
        screen: createStackNavigator(Stack, { initialRouteName: 'Leaderboard' })
    }
};

const TabsNavigator = createStackNavigator({
    Drawer: {
        name: 'Drawer',
        screen: createDrawerNavigator(
            DrawerRoutes
        )
    }},
    {
        headerMode: 'none'
    }
)

const Tabs = createAppContainer(TabsNavigator);

export default Tabs
