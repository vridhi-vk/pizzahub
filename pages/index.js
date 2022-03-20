import Head from 'next/head'

import PizzaList from '../components/PizzaList'
import styles from '../styles/Home.module.css'



function Home({pizzas}) {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>PizzaHUB</title>
        <meta name="description" content="Best Restaurant in town!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
  
      <PizzaList pizzas={pizzas}/>
    
    
    </div>
  )
}

export async function getStaticProps() {
  // Call an external API endpoint to get data.
  // You can use any data fetching library
  const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
  const data = await res.json()

  return {
    props: {
        pizzas:data
    }
  }
}

export default Home

