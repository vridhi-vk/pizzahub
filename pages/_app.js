import Layout from '../components/Layout'
import '../styles/globals.css'
import store from '../redux/store'
import {Provider} from "react-redux"

function MyApp({ Component, pageProps }) {
  return(
    <Provider store={store}>
      <meta name="viewport" content="width-device-width,initial-scale=1.0"/>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
    

  )
  
  
}

export default MyApp
