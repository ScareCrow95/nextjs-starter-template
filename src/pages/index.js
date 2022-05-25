import { observer } from 'mobx-react-lite'
import { useUIStore } from '../provider/rootStoreProvider'
import { Box, Text, Center, Flex, Image, Circle, Icon } from '@chakra-ui/react'

export default observer(() => {
  const store = useUIStore()
  return (
    <Flex
      style={{ cursor: 'pointer' }}
      onClick={() => {
        store.counter = store.counter + 1
      }}>
      hello {store.counter}
    </Flex>
  )
})

export async function getServerSideProps(context) {
  return {
    props: {
      hydrationData: { ui: 2 },
    },
  }
}
