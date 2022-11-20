import React, {type PropsWithChildren} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Detail} from '../screens';

type RootStackParamList = {
  Home: undefined;
  Detail: {id: number};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Router: React.FC<PropsWithChildren<{}>> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detail" component={Detail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
