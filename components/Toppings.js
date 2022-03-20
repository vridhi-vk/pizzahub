import React, { useEffect,useState } from "react";
import styles from '../styles/Toppings.module.css'

const Toppings=({toppings})=>{

    const [inputType,setInputType]=useState("checkbox");

    useEffect(() => {
        if(toppings.isRadio)
        {
            setInputType("radio")
        }
    })


    return(
        <div className={styles.container}>
            <h1 className={styles.title}> Toppings </h1>

            <div className={styles.toppings}>
            {toppings.items.map((topping)=>(

                <div className={styles.options}>
                    <input type={inputType} id={topping.name} name={topping.name}/>
                    <label htmlFor={topping.name}>{topping.name}</label>

                </div>

            ))}

            </div>

            
            
            </div>


    )

  

}

export default Toppings