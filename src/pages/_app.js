import { RootStoreProvider } from '../provider/rootStoreProvider'

function MyApp({ Component, pageProps }) {
  return (
    <RootStoreProvider hydrationData={pageProps.hydrationData}>
      <Component {...pageProps} />
    </RootStoreProvider>
  )
}

export default MyApp
