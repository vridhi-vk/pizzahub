import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'



const PizzaList=({pizzas})=>{
    return(
        <div className={styles.container}>
            <h1 className={styles.title}> Today&apos;s Menu </h1>

            <div className={styles.wrapper}>

                    {pizzas.map((pizza) => (
                            <PizzaCard key={pizzas.id} pizza={pizza}/>    
        
                    
                    ))}
            </div>

        </div>
    )
}


export default PizzaList