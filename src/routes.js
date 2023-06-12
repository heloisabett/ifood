import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import Home from './screens/Home';
import Busca from './screens/Busca';
import Perfil from './screens/Perfil';
import Pedidos from './screens/Pedidos';
import Perfil from './screens/Perfil';
import Pagamentos from './screens/Pagamentos';

const Bottomtab = createBottomTabNavigator();
const PerfilStack = createStackNavigator();

function PerfilRoutes() {
  return (
    <PerfilStack.Navigator>
      <PerfilStack.Screen name="Perfil" component={Perfil} />
      <PerfilStack.Screen name="Pagamentos" component={Pagamentos} />
    </PerfilStack.Navigator>
  );
} 

export default function Routes() {
    return (
      <NavigationContainer>
        <BottomTab.Navigator 
          screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'black',
          }}
        >
          <BottomTab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarLabel: 'Home',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="home" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Busca"
            component={Busca}
            options={{
              tabBarLabel: 'Busca',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="search" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="Pedidos"
            component={Pedidos}
            options={{
              tabBarLabel: 'Pedidos',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="assignment" color={color} size={26} />
              ),
            }}
          />
          <BottomTab.Screen
            name="PerfilRoutes"
            component={PerfilRoutes}
            options={{
              tabBarLabel: 'Perfil',
              tabBarIcon: ({ color }) => (
                <MaterialIcons name="person" color={color} size={26} />
              ),
            }}
          />
        </BottomTab.Navigator>
      </NavigationContainer>
    );
  }