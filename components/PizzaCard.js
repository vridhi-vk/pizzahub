import styles from "../styles/PizzaCard.module.css"
import Image from 'next/image'
import React, {useState } from "react";
import Modal from "./Modal";

import {FaStar} from 'react-icons/fa'
import {FiShoppingCart} from 'react-icons/fi'

const PizzaCard=({pizza})=>{
    const [showModal, setShowModal] = useState(false);
    return(
        <div className={styles.container}>
            <Image className={styles.img} src={pizza.img_url} width="100%" height="200px"/>
            <h1 className={styles.name}>{pizza.name}<span><FaStar color="var(--gold)"/> {pizza.rating}</span></h1>
            <span className={styles.price}>Rs. {pizza.price}</span>
            <p className={styles.desc}>{pizza.description}</p>
            <p className={styles.type}>{pizza.isVeg}</p>
            
                <button onClick={() => setShowModal(true)} className={styles.button}>
                    <FiShoppingCart style={{color:'white', fontSize: '20px',marginRight:'20px'}}/><span>ADD TO CART</span>
                    </button>
                <Modal  show={showModal}onClose={() => setShowModal(false)} children={pizza}>
                </Modal>

            
            
            
        </div>
    )
}
export default PizzaCard