import React from 'react'
import { Button, Grid } from "@material-ui/core"
import styles from "./mainsection.module.scss"
import { Link, animateScroll as scroll } from "react-scroll";

const MainSection = () => {
    const [mobile, setMobile] = React.useState(false);
    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setMobile(true)
        }
    }, [])
    return (
        <div
            className={styles.home__hero}
            style={{
                position: "relative",
                marginBottom: 100
            }}

        >
            <div className={styles.container}>
                <div
                    className={styles.row}
                    style={{
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: "space-between"
                    }}
                >
                    <Grid
                        data-aos={mobile ? null : "fade-right"}
                        data-aos-delay="50"
                        data-aos-duration="2000"
                        data-aos-easing="ease-in-out-cubic"
                        className={styles.col}>
                        <div lg={6} xs={12} className={styles.home__hero_text}>
                            <h1 className={styles.heading} style={{ maxWidth: 480 }}>
                                <span style={{ color: "#8F83F3" }}>DeFi</span> <br />
                                <span style={{ color: "#8F83F3" }}>aggregator</span> for every financial need
                                </h1>
                            <p
                                className={styles.home__hero_subtitle}

                            >
                                IndaSwap bridges the gap between the mainstream audience and modern crypto ecosystems, making DeFi as easy and available as online shopping.
                                </p>
                            <a
                                // activeClass="active"
                                href="https://indaswap.com"
                            >
                                <Button variant="contained" color="inherit" style={{ background: "#8F83F3", borderRadius: 11, width: 185, height: 50 }}>
                                    Get started
                                </Button>
                            </a>
                        </div>
                    </Grid>
                    <Grid 
                        className={styles.col}>
                        <div lg={6} xs={12} className={styles.home__hero_img}>
                            <img data-aos={mobile ? null : "zoom-out-up"}
                                data-aos-delay="50"
                                data-aos-duration="2000"
                                data-aos-easing="ease-in-out-cubic"
                                className={styles.home__hero_img_img} src={"/Picture.png"} />
                        </div>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default MainSection
