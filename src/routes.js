import { createStackNavigator } from 'react-navigation'
import ToDoList from '@/containers/todo/ToDoList'
import Home from '@/pages/Home'

export default createStackNavigator({
  Home: {
    screen: Home
  },
  ToDoList: {
    screen: ToDoList
  }
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#192a56'
    },
    headerTitleStyle: {
      color: 'white'
    },
    headerTintColor: 'white'
  }
})