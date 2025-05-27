import { TamaguiProvider, Button, YStack } from 'tamagui'
import config from './tamagui.config'

export default function App() {
  return (
    <TamaguiProvider config={config}>
      <YStack flex={1} justifyContent="center" alignItems="center" bg="red">
        <Button theme="dark" color="$white">
          Hello from Tamagui
        </Button>
      </YStack>
    </TamaguiProvider>
  )
}
