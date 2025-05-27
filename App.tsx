import React, { useState } from 'react'
import { TamaguiProvider, Input, Button, Text, YStack } from 'tamagui'
import config from './tamagui.config'

import { useUserStore } from './src/store/useUserStore'

export default function App() {
  const [inputValue, setInputValue] = useState('')
  const count = useUserStore((state) => state.count)
  const increment = useUserStore((state) => state.increment)
  const decrement = useUserStore((state)=>state.decrement)

  return (
    <TamaguiProvider config={config}>
      <YStack f={1} jc="center" ai="center" gap="$4">

        <Text fontSize="$8" color="white">
          {count}
        </Text>
       
        <Button onPress={increment}>
          Increment  XX
        </Button>

         <Button onPress={decrement}>
          Decement
        </Button>

      
      </YStack>
    </TamaguiProvider>
  )
}
