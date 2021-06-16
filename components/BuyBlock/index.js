import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './buyblock.module.scss'

const BuyBlock = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div id="section3" className={styles.containerBlock}>
            <div
                data-aos={mobile ? null :"fade-right"}
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                className={styles.leftBlock}
                >
                <Typography variant="h2" color="inherit" style={{ color: "#fff" }}>
                    Become a part of the first <b><span style={{ color: "#8F83F3" }}>Fiat-to-DeFi</span></b> ecosystem
                </Typography>
                <div className={styles.visaBlock}>
                    <img src={"/visa1.svg"} />
                    <img src={"/visa2.svg"} />
                </div>
            </div>
            <div>
                <img data-aos={mobile ? null :"zoom-out"}
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    style={{marginLeft: "-50px"}}
                    src={"/Form.png"} />
            </div>

        </div>
    )
}

export default BuyBlock
