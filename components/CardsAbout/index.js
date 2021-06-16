import React from 'react'
import { Typography } from "@material-ui/core"
import styles from "./cardsabout.module.scss"

const CardsAbout = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div className={styles.mainBlock}>
            <div className={styles.cardsAbout}>
            <div data-aos={mobile ? null : "flip-left"}
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
                className={styles.cardsFirst}>
                <Typography variant="h3" color="inherit" style={{ color: '#fff' }}>How do we prevent bulk sales?</Typography>
                <Typography variant="body1" color="inherit" style={{ color: '#fff' }}>Indacoin clients - store INDA on the balance to buy crypto with 0% fees
                <br />
                    <br />
IndaSwap users - get extra crypto by staking INDA with up to 300% APY
<br />
                    <br />
Partners - obliged to store tokens by the partnership agreement
</Typography>
            </div>
            <div
                data-aos={mobile ? null : "flip-left"}
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
                className={styles.cardsBlocksSecond}>
                <div
                className={styles.cardSecond}
                    style={{ background: "#3A364E", position: "relative" }}>
                    <Typography variant="h3" color="inherit" style={{ color: '#fff' }}>{">60%"}</Typography>
                    <Typography variant="body1" color="inherit" style={{ color: '#fff' }}>Of Indacoin clients are interested in DeFi</Typography>
                    <Typography variant="h1" color="inherit" style={{ color: '#fff', position: "absolute", top: -20, left: 0, fontSize: 140, opacity: 0.1}}>
                       <b>{"60%"}</b> 
                    </Typography>
                </div>
                <div
                className={styles.cardSecond}
                    style={{ background: "#B483F3", position: "relative" }}>
                    <Typography variant="h3" color="inherit" style={{ color: '#fff' }}>{">1M"}</Typography>
                    <Typography variant="body1" color="inherit" style={{ color: '#fff' }}>Number of users we plan to engage with 0 marketing costs</Typography>
                    <Typography variant="h1" color="inherit" style={{ color: '#fff', position: "absolute", top: -20, left: 0, fontSize: 140, opacity: 0.2}}>
                       <b>{"+1M"}</b> 
                    </Typography>
                </div>
            </div>
            <div
                data-aos={mobile ? null : "flip-left"}
                data-aos-delay="50"
                data-aos-duration="2000"
                data-aos-easing="ease-in-out-cubic"
                className={styles.cardsBlocksThird}>
                <div
                className={styles.cardSecond}
                    style={{ background: "#8F83F3", position: "relative" }}
                    >
                    <Typography variant="h3" color="inherit" style={{ color: '#fff' }}>{">40%"}</Typography>
                    <Typography variant="body1" color="inherit" style={{ color: '#fff' }}>Customers that IndaSwap can get from partners' traffic</Typography>
                    <Typography variant="h1" color="inherit" style={{ color: '#fff', position: "absolute", top: -20, left: 0, fontSize: 140, opacity: 0.2, right: 0}}>
                       <b>{"40%"}</b> 
                    </Typography>
                </div>
                <div
                className={styles.lastCard}>
                    <Typography variant="body1" color="inherit" style={{ color: '#fff' }}>
                        INDA is a core element of both the Indacoin loyalty program and IndaSwap therefore the demand is guaranteed by numerous daily operations.
<br />
                        <br />
Based on our business model and steadily increasing INDA utility we expect the demand to exceed the initial token supply 20X in the first 3 years.
                    </Typography>
                </div>
            </div>
        </div>
        </div>
            
        
    )
}

export default CardsAbout
