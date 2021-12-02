import React from "react"
import {
  Alert,
  Box,
  IconButton,
  CloseIcon,
  HStack,
  VStack,
  Text,
  Center,
  NativeBaseProvider,
} from "native-base"
export function Example() {
  return (
    <VStack space={5} maxW="400">
      <Alert w="100%" status="success">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack
            flexShrink={1}
            space={1}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text
                fontSize="md"
                fontWeight="medium"
                _dark={{
                  color: "coolGray.800",
                }}
              >
                Account Created
              </Text>
            </HStack>
            <IconButton
              variant="unstyled"
              icon={<CloseIcon size="3" color="coolGray.600" />}
            />
          </HStack>
          <Box
            pl="6"
            _dark={{
              _text: {
                color: "coolGray.600",
              },
            }}
          >
            Your Account has been Created.Login to Continue
          </Box>
        </VStack>
      </Alert>
      
    </VStack>
  )
}

export default () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Example />
      </Center>
    </NativeBaseProvider>
  )
}
