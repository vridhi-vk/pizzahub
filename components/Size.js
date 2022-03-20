import React, { useEffect,useState } from "react";
import styles from '../styles/Size.module.css'

const Size=({size})=>{

    const [inputType,setInputType]=useState("checkbox");

    useEffect(() => {
        if(size.isRadio)
        {
            setInputType("radio")
        }
    })


    return(
        <div className={styles.container}>
            <h1 className={styles.title}>Choose Size</h1>

            <div className={styles.sizes}>
            {size.items.map((item)=>(

                <div className={styles.options}>
                    <input type={inputType} id={item.size} name={item.size}/>
                    <label htmlFor={item.size}>{item.size}</label>

                </div>

            ))}

            </div>

            
            
            </div>


    )

  

}

export default Size