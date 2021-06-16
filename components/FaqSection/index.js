import React, {useState} from 'react'
import styles from './faqsection.module.scss'
import { Typography, Button } from '@material-ui/core'
import FaqItem from './FaqItem';
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import general from './data/general'
import indatoken from './data/indatoken'
import commission from './data/commission'
import purchase from './data/purchase';

const FaqSection = () => {
    const [items, setItems] = useState(general)
    const [mobile, setMobile] = React.useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [rowPerPage, setRowPerPage] = useState(3);
    const [upperPageBound, setUpperPageBound] = useState(3);
    const [lowerPageBound, setLowerPageBound] = useState(0);
    const pageBound = 3;

    const inputEl = React.useRef();
    
    const handleClick = (event) => {
      let listid = Number(event.target.id);
      setCurrentPage(listid);
    };
    const btnPrevClick = () => {
      if ((currentPage - 1) % pageBound === 0) {
        setUpperPageBound(upperPageBound - pageBound);
        setLowerPageBound(lowerPageBound - pageBound);
      }
      let listid = currentPage - 1;
      setCurrentPage(listid);
    };
    const btnNextClick = () => {
      if (currentPage + 1 > upperPageBound) {
        setUpperPageBound(upperPageBound + pageBound);
        setLowerPageBound(lowerPageBound + pageBound);
      }
      let listid = currentPage + 1;
      setCurrentPage(listid);
    };
  
    const indexOfLastTodo = currentPage * rowPerPage;
    const indexOfFirstTodo = indexOfLastTodo - rowPerPage;
    const currentRow = items.slice(indexOfFirstTodo, indexOfLastTodo);
  
  
    const renderRow = currentRow.map((item) => {
        return(
            <FaqItem
            title={item.title}
            text={item.text}
            currentRow={currentRow}/>
        )
    });
  
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(items.length / rowPerPage); i++) {
      pageNumbers.push(i);
    }

    React.useEffect(() => {
        if(window.innerWidth < 600){
            setMobile(true)
        }
    }, [])
    return (
        <div className={styles.tokenallocation}>
            <div className={styles.headerPanel}>
                <Typography
                data-aos={mobile ? null : "fade-right"}
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic" variant="h2" color="inherit" 
                className={styles.heading}>
                    FAQ <span style={{ color: "#fff" }}>IndaSwap</span> 
                </Typography>
                <div
                data-aos={mobile ? null : "fade-left"}
                data-aos-delay="50"
                data-aos-duration="1500"
                data-aos-easing="ease-in-out-cubic">
                <Button 
                  ref={inputEl} 
                  onClick={() => {
                    setItems(indatoken)
                    setCurrentPage(1)}}
                  variant="contained" 
                  style={{
                    background: items == indatoken ? "#8F83F3" : "#29253B", 
                    color: "#fff", 
                    marginRight: 10, 
                    borderRadius: 12, 
                    height: 46}}>
                      INDA TOKEN
              </Button>
                <Button 
                  ref={inputEl} 
                  onClick={() => {
                    setItems(commission)
                    setCurrentPage(1)}} 
                  variant="contained" 
                  style={{
                    background: items == commission ? "#8F83F3" : "#29253B", 
                    color: "#fff", 
                    marginRight: 10, 
                    borderRadius: 12, 
                    height: 46}}>
                      COMMISSIONS
                </Button>
                <Button 
                  ref={inputEl} 
                  onClick={() => {
                    setItems(purchase)
                    setCurrentPage(1)}} 
                  variant="contained" 
                  style={{
                    background: items == purchase ? "#8F83F3" : "#29253B", 
                    color: "#fff", 
                    marginRight: 10, 
                    borderRadius: 12, 
                    height: 46}}>
                      PURCHASE
                </Button>
                <Button 
                  ref={inputEl} 
                  onClick={() => {
                    setItems(general)
                    setCurrentPage(1)}} 
                  variant="contained" 
                  style={{
                    background: items == general ? "#8F83F3" : "#29253B", 
                    color: "#fff", 
                    borderRadius: 12, 
                    height: 46}}>
                      General Questions
                </Button>
                </div>
                
            </div>
            <div
            data-aos={mobile ? null : "zoom-out-up"}
            data-aos-delay="50"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out-cubic" style={{marginTop: 50, display: "flex", width: "100%", flexWrap: "wrap", justifyContent: "center"}}>
                {renderRow}
            </div>
            <div>
            <div 
              data-aos={mobile ? null : "zoom-out-up"}
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out-cubic" 
              style={{display: "flex", marginTop: 20}}>
          <div>
            <div style={{marginRight: 5}}>
              {currentPage == 1 ? (
                <IconButton
                  disabled
                  onClick={btnPrevClick}
                  style={{background: "#8F83F3", borderRadius: 12}}
                >
                  <ArrowBackIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={btnPrevClick}
                  style={{background: "#8F83F3", borderRadius: 12, color: "#fff"}}
                >
                  <ArrowBackIcon/>
                </IconButton>
              )}
            </div>
          </div>
          <div>
            <div>
              {currentPage == pageNumbers.length ? (
                <IconButton
                  disabled
                  onClick={btnNextClick}
                  style={{background: "#8F83F3", borderRadius: 12}}
                >
                  <ArrowForwardIcon />
                </IconButton>
              ) : (
                <IconButton
                  onClick={btnNextClick}
                  style={{background: "#8F83F3", borderRadius: 12, color: "#fff"}}
                >
                  <ArrowForwardIcon
                  />
                </IconButton>
              )}
            </div>
          </div>
        </div>
            </div>
        </div>
    )
}

export default FaqSection
