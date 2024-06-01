import React from 'react'
import { Slot } from 'expo-router'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { Home, Detail, Add } from './screens/index'
const Stack = createStackNavigator()

export default function Layout() {
  return (
    <Slot>
      {(props: any) => (
        <NavigationContainer {...props}>
          <Stack.Navigator>
            <Stack.Screen name='Home' component={Home} />
            <Stack.Screen name='Detail' component={Detail} />
            <Stack.Screen name='Add' component={Add} />
          </Stack.Navigator>
        </NavigationContainer>
      )}
    </Slot>
  )
}
