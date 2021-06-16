import React from 'react'
import { Button, Typography } from '@material-ui/core'
import styles from "./aboutblock.module.scss"

const AboutBlock = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div
            className={styles.home__hero}
            id="section1"
        >
            <div className={styles.container}>
                <div
                    className={styles.row}
                >
                    <div
                    data-aos={mobile ? null : "fade-right"} 
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out-cubic"
                    className={styles.col}>
                        <div className={styles.home__hero_text}>
                            <h1 className={styles.heading}>
                                <span style={{ color: "#8F83F3" }}>Why</span> IndaSwap?
                                </h1>
                            <p
                                className={styles.home__hero_subtitle}

                            >
                                DeFi builds an alternative for every traditional financial institution, and the total value locked in decentralized platforms has grown from $500-800M to $45B in less than a year
                                </p>
                                <a target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSdlOV-pXx75DK_KVDde0VzpDtssMgtc4ltW9VSeNT2qwfxMYg/viewform">
                                  <Button variant="contained" color="inherit" className={styles.button}>
                                  Join whiteliist
                                    </Button>  
                                </a>
                            
                        </div>
                    </div>
                    <div className={styles.col}>
                        <div className={styles.listBlock}
                        data-aos={mobile ? null : "fade-left"}
                        data-aos-delay="50"
                            data-aos-duration="1500"
                            data-aos-easing="ease-in-out-cubic" >
                            <div
                            className={styles.listItem}
                            >
                                <Typography variant="h3" color="inherit" className={styles.listNumber}>01</Typography>
                                <Typography variant="body1">The only all-in-one DeFi platform with a <b>fiat gateway</b></Typography>
                            </div>
                            <div 
                            className={styles.listItem}
                            >
                                <Typography variant="h3" color="inherit" className={styles.listNumber}>02</Typography>
                                <Typography variant="body1">Head-start operating in <b>180+</b> countries for <b>7+ years</b> with FCA certification </Typography>
                            </div>
                            <div 
                            className={styles.listItem}
                            >
                                <Typography variant="h3" color="inherit" className={styles.listNumber}>03</Typography>
                                <Typography variant="body1">Aggregator business model unites <b>best innovations</b> while saving resources</Typography>
                            </div>
                            <div 
                            className={styles.listItem}
                            >
                                <Typography variant="h3" color="inherit" className={styles.listNumber}>04</Typography>
                                <Typography variant="body1">Loyal clients base with users from Indacoin and <b>100+ partners’</b> platforms</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutBlock
