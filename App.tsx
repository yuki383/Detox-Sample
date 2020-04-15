/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {View, Text, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  StackNavigationProp,
} from '@react-navigation/stack';

declare const global: {HermesInternal: null | {}};

type HomeProps = {
  navigation: StackNavigationProp<Params, 'Home'>;
};

const Home: React.FC<HomeProps> = ({navigation}) => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
      <Button
        testID="HomeToDetailsButton"
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
};

const DetailScreen: React.FC = () => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev - 1);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Detail Screen</Text>
      <View
        style={{padding: 24, alignItems: 'center', justifyContent: 'center'}}>
        <Text testID="Count">{count}</Text>
        <View style={{flexDirection: 'row'}}>
          <Button testID="PlusButton" title="+" onPress={increment} />
          <Button testID="MinusButton" title="-" onPress={decrement} />
        </View>
      </View>
    </View>
  );
};

type Params = {
  Home: undefined;
  Details: undefined;
};

const Stack = createStackNavigator<Params>();

export const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
