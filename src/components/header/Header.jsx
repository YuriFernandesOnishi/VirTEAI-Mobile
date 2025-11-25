import React from "react";
import { Pressable } from 'react-native';
import { useNavigation } from 'expo-router';

import { Navegacao, Menu, Logo } from "./styles";

export default function Header() {
  const navigation = useNavigation();

  return(
      <Navegacao>
        <Logo source={require('../../assets/images/virteailogo.png')}/>
        <Pressable accessibilityRole="button" accessibilityLabel="Abrir menu" onPress={() => navigation.toggleDrawer?.()}>
          <Menu source={require('../../assets/images/menu.png')}/>
        </Pressable>
      </Navegacao>
  )
};