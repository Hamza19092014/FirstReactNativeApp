import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer }
import { createStackNavigator }
import MainScreen from './screens/MainScreen';

const Stack =  createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
       <StackNavigator>
        <Stack.screen name="Main" component={MainScreen}></Stack.screen>
       </StackNavigator> 
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
