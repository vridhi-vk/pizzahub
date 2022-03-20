export async function getStaticProps() {
    // Call an external API endpoint to get data.
    // You can use any data fetching library
    const res = await fetch('https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68')
    const data = await res.json()
  
    // By returning { props: { data } }, the Blog component
    // will receive `data` as a prop at build time
    return {
      props: {
          pizzas:data
      }
    }
  }