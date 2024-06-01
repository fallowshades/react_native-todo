import React, { useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, Button } from 'react-native'
import { useRouter } from 'expo-router'

export default function Home() {
  const [todos, setTodos] = useState<string[]>([])
  const router = useRouter()

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              router.push({ pathname: 'Detail', params: { todo: item } })
            }
          >
            <Text>{item}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button
        title='Add Todo'
        onPress={() =>
          router.push({
            pathname: 'screens/Add',
            params: { setTodos },
          })
        }
      />
    </View>
  )
}
