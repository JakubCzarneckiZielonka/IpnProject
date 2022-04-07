import React from 'react';  
import {StyleSheet, Text, View,Button} from 'react-native';  
import { createBottomTabNavigator, createAppContainer} from 'react-navigation';  
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';  
import Icon from 'react-native-vector-icons/Ionicons';  
class HomeScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>Home Screen</Text>  
        </View>  
    );  
  }  
}  
class ProfileScreen extends React.Component {  
  render() {  
    return (  
        <View style={styles.container}>  
          <Text>To see more content log in or sign up for free</Text>
            <Pressable style={styles.loginButton}>
                <Text style={styles.text}>Log In</Text>
                </Pressable>
            <Pressable style={styles.loginButton}>
                <Text style={styles.text}>Sign Up</Text>
                </Pressable>  
        </View>  
    );  
  }  
}  
class SettingsScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Settings Screen</Text>  
            </View>  
        );  
    }  
}  
class NotificationScreen extends React.Component {  
    render() {  
        return (  
            <View style={styles.container}>  
                <Text>Notification Screen</Text>  
            </View>  
        );  
    }  
}  
const styles = StyleSheet.create({  
    container: {  
        flex: 1,  
        justifyContent: 'center',  
        alignItems: 'center'  
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
        textTransform: 'uppercase'
      },
     loginButton: {
       backgroundColor: '#f69b31',
       color: 'white',
       marginTop: 15,
       height: 35,
       justifyContent: 'center',
       alignItems: 'center',
       width: '70%',
       borderRadius: 10,

     }, 
});  
const TabNavigator = createMaterialBottomTabNavigator(  
    {  
        Home: { screen: HomeScreen,  
            navigationOptions:{  
                tabBarLabel:'Home',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-home'}/>  
                    </View>),  
            }  
        },  
        Profile: { screen: ProfileScreen,  
            navigationOptions:{  
                tabBarLabel:'Profile',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-person'}/>  
                    </View>),  
                activeColor: '#f60c0d',  
                inactiveColor: '#f65a22',  
                barStyle: { backgroundColor: '#f69b31' },  
            }  
        },  
        Settings: { screen: SettingsScreen,  
            navigationOptions:{  
                tabBarLabel:'Settings',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-settings'}/>  
                    </View>),  
                activeColor: '#615af6',  
                inactiveColor: '#46f6d7',  
                barStyle: { backgroundColor: '#67baf6' },  
            }  
        },  
        Notification: {  
            screen: NotificationScreen,  
            navigationOptions:{  
                tabBarLabel:'Notification',  
                tabBarIcon: ({ tintColor }) => (  
                    <View>  
                        <Icon style={[{color: tintColor}]} size={25} name={'ios-notifications'}/>  
                    </View>), 
                    activeColor: '#615af6',  
                    inactiveColor: '#46f6d7',  
                    barStyle: { backgroundColor: '#681080' }, 
            }  
        },  
    },  
    {  
      initialRouteName: "Home",  
      activeColor: '#f0edf6',  
      inactiveColor: '#226557',  
      barStyle: { backgroundColor: '#3BAD87' },  
    },  
);  
  
export default createAppContainer(TabNavigator);  