import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import Image from 'next/image'
import Toppings from "./Toppings";
import Sizes from "./Size";
import styles from "../styles/Modal.module.css"
import { useDispatch } from "react-redux";
import { addSinglePizza } from "../redux/cartSlice";


const Modal = ({ show, onClose, children}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const [price, setPrice] = useState(children.price);
  const dispatch = useDispatch();

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const handleClick=(e)=>{
    
    dispatch(addSinglePizza({...children,price}));
    handleCloseClick(e);
  };

  const handleCloseClick = (e) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <a href="#" onClick={handleCloseClick}>
            x
          </a>

        </div>
        <div className={styles.body}>
          <div className={styles.left}>

            <div className={styles.imgContainer}>
              <Image src={children.img_url} objectFit="contain" layout="fill" alt="pizza"/>
            </div>
            
            <div>
              
              {children.toppings.map((topping)=>(
                  
                    <Toppings key={children.id} toppings={topping}/>
                  ))
              }
            </div>
         </div>
         <div className={styles.right}>
            <div>
              <h1 className={styles.title}>{children.name}</h1>
              <div className={styles.price}>
                <span>Rs. {children.price}</span>
              </div>

              <p className={styles.desc}>{children.description}</p>
            </div>
            
            <div>
              
              {children.size.map((size)=>(
                  
                    <Sizes key={children.id} size={size}/>
                  ))
              }
            </div>
         </div>
         </div>
         {/* <div className={styles.addOns}>
           
           
         </div> */}
         <div className={styles.footer}>

              <button onClick={handleClick}>
                  + ADD
                </button>

          </div>
         
          
         
          
          
          
        

      </div>
      

    </div>      
  ) : null;

  if (isBrowser) {
    return ReactDOM.createPortal(
      modalContent,
      document.getElementById("modal-root")
    );
  } else {
    return null;
  }
};

export default Modal;