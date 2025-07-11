import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { TeamsListScreen } from './screens/TeamsList.screen';
import { TeamDetailScreen } from './screens/TeamDetail.screen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux'
import { store } from './store';

function App() {

  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Provider store={store}>
        <View style={styles.container}>
          <Stack.Navigator screenOptions={{
            contentStyle: { backgroundColor: 'white', padding: 8 },
          }}>
            <Stack.Screen
              name="TeamsList"
              component={TeamsListScreen}
              options={{ title: 'Teams list' }}
            />
            <Stack.Screen
              name="TeamDetail"
              component={TeamDetailScreen}
              options={{ title: 'Second' }}
            />
          </Stack.Navigator>
        </View>
      </Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

export default App;
