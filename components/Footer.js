import styles from "../styles/Footer.module.css"
import Image from 'next/image'

const Footer=()=>{
    return(
        <div className={styles.container}>
            <div className={styles.item}>
                <Image src="/images/pizza-1.jpg" objectFit ="cover" alt="logo" layout="fill"/>
            </div>
            <div className={styles.item}>
    
                <div className={styles.card}>
                    <h2 className={styles.motto}>
                        Pizza made with<br/>home - ground<br/> ingredients!!
                    </h2>
                </div>
                <div className={styles.card}>

                    <h1 className={styles.title}>We bake for pizza lovers at</h1>
                    <p className={styles.text}>
                    No 3, Aramanne Nagar, New BEL Rd,
                    Devasandra Layout, Bengaluru, Karnataka 560024<br/>
                    080-234-678-421
                    </p>
                    <p className={styles.text}>
                    No 3, Aramanne Nagar, New BEL Rd,
                    Devasandra Layout, Bengaluru, Karnataka 560024<br/>
                    080-234-678-421
                    </p>
                    <p className={styles.text}>
                    No 3, Aramanne Nagar, New BEL Rd,
                    Devasandra Layout, Bengaluru, Karnataka 560024<br/>
                    080-234-678-421
                    </p>
                    <p className={styles.text}>
                    No 3, Aramanne Nagar, New BEL Rd,
                    Devasandra Layout, Bengaluru, Karnataka 560024<br/>
                    080-234-678-421
                    </p>
                    

                </div>
                <div className={styles.card}>
                    <h1 className={styles.title}>
                        We serve with love from
                    </h1>
                        <p className={styles.text}>
                          MONDAY-FRIDAY<br/>
                           10:00 am- 10:00 pm
                        </p>
                        <p className={styles.text}>
                          SATURDAY-SUNDAY<br/>
                          12:00 pm- 11:00 pm
                        </p>
                        
                </div>

            </div>

        </div>
    )
}
export default Footer