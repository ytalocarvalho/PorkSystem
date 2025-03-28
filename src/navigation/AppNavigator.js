import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import ManagerScreen from '../screens/ManagerScreen';
import OpeningChecklist from '../screens/OpeningChecklist';
import ClosingChecklist from '../screens/ClosingChecklist';
import Notes from '../screens/Notes';
import StockCount from '../screens/StockCount';
import BeerWeight from '../screens/BeerWeight';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#1f1f1f' },
          headerTintColor: '#fff',
          headerTitleStyle: { fontWeight: 'bold' },
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Manager"
          component={ManagerScreen}
          options={{ title: 'Gerente' }}
        />
        <Stack.Screen
          name="OpeningChecklist"
          component={OpeningChecklist}
          options={{ title: 'Checklist de Abertura' }}
        />
        <Stack.Screen
          name="ClosingChecklist"
          component={ClosingChecklist}
          options={{ title: 'Checklist de Fechamento' }}
        />
        <Stack.Screen
          name="StockCount"
          component={StockCount}
          options={{ title: 'Contagem de Estoque' }}
        />
        <Stack.Screen
          name="BeerWeight"
          component={BeerWeight}
          options={{ title: 'Pesagem de Chopp' }}
        />
        <Stack.Screen
          name="Notes"
          component={Notes}
          options={{ title: 'Anotações' }}
        />
        {/* Adicione outras telas conforme necessário */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
