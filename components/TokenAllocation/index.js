import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './tokenallocation.module.scss'
import { Button } from '@material-ui/core'

const TokenAllocation = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setMobile(true)
        }
    }, [])
    return (
        <>
            <div className={styles.tokenallocation} id="section2">
                <Typography
                    data-aos={mobile ? null : "fade-right"}
                    data-aos-delay="50"
                    data-aos-duration="1500"
                    data-aos-easing="ease-in-out-cubic" variant="h2" color="inherit"
                    className={styles.heading}>
                    Token <span style={{ color: "#fff" }}>Allocation</span>
                </Typography>
                <div className={styles.contentBlock}>
                    <div
                        data-aos={mobile ? null : "fade-right"}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                    >

                        <div style={{ position: "relative" }}>
                            <div
                                className={styles.leftBlock}>
                            </div>

                            <img style={{ position: "absolute", top: 0, left: 0 }} className={styles.roundImg} src={"/Group18.png"} />
                        </div>
                    </div>
                    <div
                        data-aos={mobile ? null : "fade-left"}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic"
                        className={styles.listContent}>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#8F83F3", fontSize: '1.25rem' }}>
                                Dex 41% <span style={{ color: "#C0BECF" }}>-  Liqiuidity on AMM protocols</span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#9648FA", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#9648FA", fontSize: '1.25rem' }}>

                                Core team 7% <span style={{ color: "#C0BECF" }}>- Locked for 1 year</span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#86BBFF", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#86BBFF", fontSize: '1.25rem' }}>

                                Marketing 4% <span style={{ color: "#C0BECF" }}>-  Brand awareness & community building </span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#FEB7DA", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#FEB7DA", fontSize: '1.25rem' }}>

                                Partners/Advisors 3% <span style={{ color: "#C0BECF" }}>- Locked for 1 year</span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#F38383", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#F38383", fontSize: '1.25rem' }}>
                                Farming rewards 20% <span style={{ color: "#C0BECF" }}>- Farming rewards</span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#F3AB83", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#F3AB83", fontSize: '1.25rem' }}>
                                CEX liquidity reserve 7% <span style={{ color: "#C0BECF" }}>- Investors and whales</span>
                            </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="h3" color="inherit" style={{ color: "#BCE489", marginRight: 20 }}>
                                •
                        </Typography>
                            <Typography variant="h5" color="inherit" style={{ color: "#BCE489", fontSize: '1.25rem' }}>
                                Public sale / Community 18% <span style={{ color: "#C0BECF" }}>- Clients’ base and crypto communities</span>
                            </Typography>
                        </div>
                    </div>
                </div>
                <div
                data-aos={mobile ? null : "fade-up"}
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                style={{width: "100%", display: "flex", justifyContent: "center", marginTop: 80}}>
                    <a href="./INDASWAP.Tokenomics.pdf" download>
                        <Button variant="contained" color="primary" style={{ background: "#8F83F3", borderRadius: 11, width: 250, height: 50 }}>
                            Read Full Tokenomics
                        </Button> 
                    </a>
                </div>

            </div>

        </>
    )
}

export default TokenAllocation
