import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import styles from "./header.module.scss"
import { Link, animateScroll as scroll } from "react-scroll";
import IconButton from '@material-ui/core/IconButton';
import classnames from "classnames";
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';

const Header = () => {
    const [sidebar, setSidebar] = React.useState(false);

    return (
        <div className={styles.header}>
            <div style={{ paddingLeft:35 }}>
                <img
                src={"/Logo.svg"}
                />
            </div>
            <div className={styles.navMenu}>
                <div>
                    <a style={{ fontSize:'1.5rem' }} href="https://indaswap.com"> 
                        <Typography
                            variant="body1"
                            color="inherit"
                            className={styles.navItemLeft}
                            style={{ color:"#8F83F3 !important", fontWeight:700}}
                        >
                            Buy DeFi Tokens
                        </Typography>
                    </a>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="section3"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1200}> 
                        <Typography variant="body1" color="inherit" className={styles.navItem}>
                            IndaSwap
                        </Typography>
                    </Link>
                </div>
                <div>
                    <Link
                    activeClass="active"
                    to="section1"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    >
                        <Typography variant="body1" color="inherit" className={styles.navItem}>
                            About
                        </Typography>
                    </Link>
                </div>
                <div>
                    <Link
                    activeClass="active"
                    to="section2"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={1300}>
                        <Typography variant="body1" color="inherit" className={styles.navItem}>
                            Token Allocation
                     </Typography>
                    </Link>
                </div>
                <div>
                    <Link
                        activeClass="active"
                        to="section4"
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={1700}> 
                        <Typography variant="body1" color="inherit" className={styles.navItem}>
                            Roadmap
                        </Typography>
                    </Link>
                </div>
            </div>
            
            <div className={styles.menuIcon}>
                <IconButton onClick={() => setSidebar(!sidebar)} style={{background: "#8F83F3", borderRadius: 12}}>
                    <MenuIcon style={{color: "#fff"}}/>
                </IconButton>
            </div>
            <div className={classnames(styles.sidebar, sidebar ? styles.active : null)}>
                <IconButton onClick={() => setSidebar(false)} style={{background: "#8F83F3", borderRadius: 12, position: "absolute", right: 10, top: 10, zIndex: 9999}}>
                    <ClearIcon style={{color: "#fff"}}/>
                </IconButton>
                <div className={styles.mobilenav}>
                    <ul className={styles.menu}>
                        <li>
                            <a href="https://indaswap.com" > 
                                <Typography
                                    variant="h5"
                                    color="inherit"
                                    className={styles.navItemLeft}
                                    style={{color:"#8F83F3 !important", fontWeight:700}}
                                >
                                    Buy DeFi Tokens
                                </Typography>
                            </a>
                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section3"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1200}
                                onClick={() => setSidebar(!sidebar)}> 
                                <Typography variant="h5" color="inherit" className={styles.navItemLeft}>
                                    IndaSwap
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section1"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => setSidebar(!sidebar)}
                            >
                                <Typography variant="h5" color="inherit" className={styles.navItemLeft}>
                                    About
                                </Typography>
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="section2"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={1300}
                            onClick={() => setSidebar(!sidebar)}>
                                <Typography variant="h5" color="inherit" className={styles.navItemLeft}>
                                    Token Allocation
                                </Typography>
                            </Link>

                        </li>
                        <li>
                            <Link
                                activeClass="active"
                                to="section4"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={1700}
                                onClick={() => setSidebar(!sidebar)}> 
                                <Typography variant="h5" color="inherit" className={styles.navItemLeft}>
                                    Roadmap
                                </Typography>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header
