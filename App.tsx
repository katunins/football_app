import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TeamsListScreen } from './screens/TeamsList.screen';
import { SecondScreen } from './screens/Second.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { store } from './store';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator>
          <Stack.Screen
            name="TeamsList"
            component={TeamsListScreen}
            options={{ title: 'Teams' }}
          />
          <Stack.Screen
            name="Second"
            component={SecondScreen}
            options={{ title: 'Second' }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
