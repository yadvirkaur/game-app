import { HStack, Switch, Text, useColorMode } from '@chakra-ui/react';

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack>
        <Switch
          colorScheme="green"
          isChecked={colorMode === 'dark'}
          onChange={toggleColorMode}
        />
        <Text whiteSpace="nowrap">Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
