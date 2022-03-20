import Image from "next/dist/client/image"
 // This function gets called at build time on server-side.
  // It won't be called on client-side, so you can even do
  // direct database queries.
  
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

  const Pizza=({pizzas})=>{
    if(!pizzas)
        return(
            <h1>Bye.</h1>
        )
    else

      return(
          
        <ul>
           {pizzas.map(pizza=>(
            
            <div key={pizza.id}>
                <Image src={pizza.img_url}  width={200} height={160}></Image>
                <h1>{pizza.name}</h1>
                <li>{pizza.description}</li>
            </div>
           ))}
        </ul>
       
      ) 

  }

export default Pizza

