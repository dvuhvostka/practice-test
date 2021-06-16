import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './cardblock.module.scss'

const CardBlock = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div
        className={styles.cardBlock}
        id="section3">
                <div
            data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        className={styles.cardItem}>
                <img src={"/Icon1.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Buy DeFi tokens with bank cards in 30 minutes</Typography>
            </div>
            <div data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            className={styles.cardItem}>
                <img src={"/Icon2.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Trade 100+ cryptocurrencies</Typography>
            </div>
            <div data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            className={styles.cardItem}>
                <img src={"/Icon3.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Stake crypto with up to 300 APY</Typography>
            </div>
            <div data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            className={styles.cardItem}>
                <img src={"/Icon4.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Issue and pay invoices in dozens of currencies</Typography>
            </div>
            <div data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            className={styles.cardItem} >
                <img src={"/Icon5.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Provide liquidity and farm tokens</Typography>
            </div>
            <div data-aos={mobile ? null : "zoom-in"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic"
            className={styles.cardItem}>
                <img src={"/Icon6.png"} style={{marginRight: 10}} />
                <Typography color="inherit" style={{ color: "#fff" }}>Borrow and lend funds in seconds</Typography>
            </div>
            
        </div>
    )
}

export default CardBlock
