import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MaterialIcons } from "@expo/vector-icons";

import Home from "../pages/home";
import Login from "../pages/login";
import Cadastro from "../pages/cadastro";
import Produtos from "../pages/produtos";
import CadastroProduto from "../pages/cadastroProduto";
import Contato from "../pages/contato";
import Perfil from "../pages/perfil";

const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName: any;

            if (route.name === "Home") {
              iconName = "home";
            }

            if (route.name === "Login") {
              iconName = "vpn-key";
            }

            if (route.name === "Cadastro") {
              iconName = "edit";
            }

            if (route.name === "Produtos") {
              iconName = "shopping-cart";
            }

            if (route.name === "Cadastrar Produto") {
              iconName = "add-box";
            }

            if (route.name === "Contato") {
              iconName = "message";
            }

            if (route.name === "Perfil") {
              iconName = "person";
            }

            return (
              <MaterialIcons
                name={iconName}
                size={size}
                color={color}
              />
            );
          },
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "gray",
          headerShown: false
        })}
      >

        <Tab.Screen
          name="Home"
          component={Home}
        />

        <Tab.Screen
          name="Login"
          component={Login}
        />

        <Tab.Screen
          name="Cadastro"
          component={Cadastro}
        />

        <Tab.Screen
          name="Produtos"
          component={Produtos}
        />

        <Tab.Screen
          name="Cadastrar Produto"
          component={CadastroProduto}
        />

        <Tab.Screen
          name="Contato"
          component={Contato}
        />

        <Tab.Screen
          name="Perfil"
          component={Perfil}
        />

      </Tab.Navigator>
    </NavigationContainer>
  );
}
