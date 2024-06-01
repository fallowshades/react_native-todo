import React, { useState } from 'react'
import { View, TextInput, Button } from 'react-native'
import { useRouter, useLocalSearchParams } from 'expo-router'
export default function Add() {
  const [text, setText] = useState('')
  const router = useRouter()
  const { setTodos } = useLocalSearchParams()

  const addTodo = () => {
    if (setTodos) {
      setTodos((prevTodos) => [...prevTodos, text])
    }
    router.back()
  }
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder='Enter todo'
        style={{
          height: 40,
          borderColor: 'gray',
          borderWidth: 1,
          marginBottom: 10,
        }}
      />
      <Button title='Add' onPress={addTodo} />
    </View>
  )
}
