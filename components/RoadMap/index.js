import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './roadmap.module.scss'

const RoadMap = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div className={styles.roadMap} id="section4">
            <div data-aos={mobile ? null : "fade-right"}
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic">
                <Typography variant="h2" color="inherit" style={{ color: "#fff", marginBottom: 50 }}>
                    Road<spam style={{ color: "#8F83F3" }}>map</spam>
                </Typography>
            </div>
            <div className={styles.cardMainBlock} style={{ display: "flex", justifyContent: "center" }}>
                <div className={styles.cardBlock}
                    data-aos={mobile ? null : "flip-left"}
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic">
                    <div>
                        <Typography variant="h5" style={{ color: "#fff", marginBottom: 50 }}>
                            2020
                        </Typography>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q4
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Project idea and research
                        </Typography>
                        </div>
                    </div>
                    <img src="./checkMark.svg" style={{ position: "absolute", bottom: 25, right: 25}}/>

                </div>
                <div>

                </div>
                <div>

                </div>
                <div data-aos={mobile ? null : "flip-left"}
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic"
                    className={styles.cardBlock}>
                    <div>
                        <Typography variant="h5" style={{ color: "#fff", marginBottom: 50 }}>
                            2021
                    </Typography>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q1
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Go-To-Market strategy planning
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q2
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Beta Fiat-DeFi gateway, IndaSwap, IndaSwap launch
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q3
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                SEPA, SWIFT integration to IndaSwap
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q4
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                V 1.0 IndaSwap, IndaSwap release + IndaSwap NFT release
                        </Typography>
                        </div>
                    </div>

                    <img src="./checkMark.svg" style={{ position: "absolute", bottom: 25, right: 25}}/>
                </div>
                <div>

                </div>
                <div>

                </div>
                <div data-aos={mobile ? null : "flip-left"}
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic" className={styles.cardBlock} >
                    <div>
                        <Typography variant="h5" style={{ color: "#fff", marginBottom: 50 }}>
                            2022
                    </Typography>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q1
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Duochain Fiat-DeFi gateway
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q2
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Alpha Open protocol IIO (Initial IndaSwap offering)
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q3
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                Launch 3 successfull IIO
                        </Typography>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
                            <Typography variant="body2" color="inherit" style={{ color: "#8F83F3", marginRight: 20 }}>
                                Q4
                        </Typography>
                            <Typography variant="body2" color="inherit" style={{ color: "#fff" }}>
                                V 1.1 IndaSwap release, Triochain IndaSwap release
                        </Typography>
                        </div>
                    </div>
                    <img src="./greyMark.png" style={{ position: "absolute", bottom: 25, right: 25}}/>

                </div>


            </div>
            <div
                data-aos={mobile ? null : "fade-up"}
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out-cubic"
                style={{ marginTop: 80 }}
                className={styles.roadImg}>
                <img src={"/Group372.png"} style={{width: "100%"}}/>
            </div>
        </div>
    )
}

export default RoadMap
