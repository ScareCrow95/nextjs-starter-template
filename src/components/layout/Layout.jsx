import { ChakraProvider, Flex } from '@chakra-ui/react'
import { observer } from 'mobx-react-lite'
import { darkTheme } from '../theme/dark'
import { lightTheme } from '../theme/light'
import Header from './Header'

const Layout = observer(({ children }) => {
  return (
    <ChakraProvider theme={store.theme === 'light' ? darkTheme : lightTheme}>
      <Flex direction='column'>
        <Header />
        <Flex>{children}</Flex>
      </Flex>
    </ChakraProvider>
  )
})

export default Layout
