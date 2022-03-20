import styles from "../styles/Cart.module.css";
import Image from "next/image";
import {useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { addMultiplePizza } from "../redux/cartSlice";


const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(0);
  const dispatch = useDispatch();
  
  const handleClick=(e)=>{

    setPrice(5);
    dispatch(addMultiplePizza({...price}));
    setQuantity(e.target.value);

  };
  
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tr className={styles.trTitle}>
            <th>Product</th>
            <th>Name</th>
            <th>Extras</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          {cart.pizzas.map((pizza)=>(
            <tr className={styles.tr} key={pizza.id}>
            <td>
              <div className={styles.imgContainer}>
                <Image
                  src={pizza.img_url}
                  layout="fill"
                  objectFit="cover"
                  alt=""
                />
              </div>
            </td>
            <td>
              <span className={styles.name}>{pizza.name}</span>
            </td>
            <td>
              <span className={styles.extras}>
                Double ingredient, spicy sauce
              </span>
            </td>
            <td>
              <span className={styles.price}>Rs {pizza.price}</span>
            </td>
          
            <td >
              <input
                onChange={handleClick}
                type="number"
                defaultValue={1}
                className={styles.quantity}
                
              />
            </td>
            <td>
              <span className={styles.total}>{pizza.price*quantity}</span>
            </td>
          </tr>
          ))}
          
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>CART TOTAL</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>Rs {cart.total}
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Discount:</b>Rs 0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>Rs 00.00
          </div>
          <button className={styles.button}>CHECKOUT NOW!</button>
        </div>
      </div>
    </div>
  );
};

export default Cart;