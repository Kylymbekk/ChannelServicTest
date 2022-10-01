import React from 'react';
import type {Node} from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import Auth from './Pages/Auth';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './Pages/Home';

const App: () => Node = () => {
  const Stack = createNativeStackNavigator();
  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Auth">
          <Stack.Screen
            name="Auth"
            component={Auth}
            options={{
              title: 'Каналсервис',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
            }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Каналсервис',
              headerStyle: {
                backgroundColor: '#f4511e',
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({});

export default App;
