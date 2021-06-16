import { Typography } from '@material-ui/core'
import React from 'react'
import styles from './graphblock.module.scss'

const GraphBlock = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setMobile(true)
        }
    }, [])
    return (
        <div className={styles.graphBlock}>
            <div
                data-aos={mobile ? null : "fade-right"}
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                className={styles.graphTextContent}>
                <Typography variant="h3" className={styles.textContent} color="inherit">
                    <b><span style={{ color: "#8F83F3" }}>Demand for INDA token</span></b> is expected to exceed initial supply<br /> <span style={{ color: "#8F83F3" }}>20X in the first 3 years</span>
                </Typography>
                <div className={styles.descriptionGraph}>
                    <div style={{ display: "flex", alignItems: "center", marginRight: 15 }}>
                        <Typography variant="h4" color="inherit" style={{ color: "#8F83F3", marginRight: 10 }}>
                            •
                </Typography>
                        <Typography variant="body1" style={{ color: "#fff" }}>
                            INDA token initial supply
                </Typography>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <Typography variant="h4" color="inherit" style={{ color: "#FFC2E0", marginRight: 10 }}>
                            •
                    </Typography>
                        <Typography variant="body1" style={{ color: "#fff" }}>
                            Demand of INDA token
                </Typography>
                    </div>
                </div>


            </div>
            <img src={"/Graph.png"} className={styles.onDesctop} style={{ position: "absolute", right: 0, width: "100%" }} />
            <img src={"/Group312.png"} className={styles.onModile} style={{ position: "absolute", right: 0, width: "100%" }} />
        </div>
    )
}

export default GraphBlock
