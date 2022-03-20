import styles from "../styles/Navbar.module.css"
import Image from 'next/image'
// import {FaPhoneAlt} from 'react-icons/fa'
import Link from 'next/link'
import {FiShoppingCart} from 'react-icons/fi'

const Navbar=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/logo.png" alt="logo" width="100px" height="96px"/>
                
                <div className={styles.texts}>
                <div className={styles.text}>
                    PIZZA HUB
                </div>
                <div className={styles.text}>
                    Best Pizzas in Town
                </div>
            </div>
        </div>
        <div className={styles.item}>
            <ul className={styles.list}>
                <li className={styles.listItem}>
                <Link href='/' passHref>
                    Home
                </Link>
                </li>
                <li className={styles.listItem}>Menu</li>
                <li className={styles.listItem}>Contact</li>
                <li className={styles.listItem}>About</li>
            </ul>
        </div>
        <Link href="/cart" passHref>
            <div className={styles.item}>
                <div className={styles.cart}>
                    <FiShoppingCart style={{ fontSize: '40px'}}/>
                    <div className={styles.counter}>2</div>
                </div>
                
            </div> 
        </Link>
          

            
         

        </div>
    )
}
export default Navbar