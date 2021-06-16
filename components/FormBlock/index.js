import { Typography } from '@material-ui/core'
import React from 'react'
import { Button } from '@material-ui/core';
import styles from './formblock.module.scss'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import axios from 'axios'

const FormBlock = () => {
    const [mobile, setMobile] = React.useState(false);
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [success, setSuccess] = React.useState(false);
    const [inputVal, setInput] = React.useState({});
    const [errors, setErrors] = React.useState({});
    const [phone, setPhone] = React.useState("");
    React.useEffect(() => {
        if (window.innerWidth < 600) {
            setMobile(true)
        }
    }, [])
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    
    function handleChange(event) {
        let input = inputVal;
        input[event.target.name] = event.target.value;
        setInput(input);
      }
        
      function handleSubmit(event) {
        event.preventDefault();
      
        if(validate()){

      
            const user = {
                        name: inputVal["name"],
                        email: inputVal["email"],
                        phone: inputVal["phone"]
                    }
            const headers = {
                        "Accept": "application/json",
                        "Access-Control-Allow-Origin": "*",
                        "X-Requested-With": "XMLHttpRequest",
                        "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
                        "Access-Control-Allow-Headers": "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With"
                    }
                    axios.post(`/api/newclient`, { user }, { headers })
                        .then(res => {
                            console.log(res);
                            console.log(res.data);
                        })
                    setSuccess(true)
                    handleClickOpen()
                    
      
        }
      }
      
      function validate(){
          let input = inputVal;
          let errors = {};
          let isValid = true;
      
          if (!input["name"]) {
            isValid = false;
            errors["name"] = "Please enter your Name.";
          }

          if (typeof input["name"] !== "undefined") {
              
            var pattern = new RegExp(/^[a-zA-Z\-]+$/i);
            if (!pattern.test(input["name"])) {
              isValid = false;
              errors["name"] = "Please enter valid Name ";
            }
          }
      
          if (!input["email"]) {
            isValid = false;
            errors["email"] = "Please enter your Email Address.";
          }
      
          if (typeof input["email"] !== "undefined") {
              
            var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
            if (!pattern.test(input["email"])) {
              isValid = false;
              errors["email"] = "Please enter valid Email Address.";
            }
          }
      
          if (!input["phone"]) {
            isValid = false;
            errors["phone"] = "Please enter your Phone.";
          }

          if (typeof input["phone"] !== "undefined") {
              
            var pattern = new RegExp(/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/i);
            if (!pattern.test(input["phone"])) {
              isValid = false;
              errors["phone"] = "Please enter valid Phone.";
            }
          }
      
          setErrors(errors);
      
          return isValid;
      }
    return (
        <span id="section5">
            <div className={styles.formBlock}>
                <div className={styles.formHeading}>
                    <Typography
                        data-aos={mobile ? null : "zoom-out-up"}
                        data-aos-delay="50"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out-cubic" variant="h4" color="inherit" className={styles.headingText}>
                        Be the first to <b>get exclusive bonuses</b> and early access to IndaSwap
                </Typography>
                </div>
                <div data-aos={mobile ? null : "zoom-out-up"}
                    data-aos-delay="50"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out-cubic" className={styles.formBlock}>
                    <form
                        onSubmit={handleSubmit}
                        style={{ width: "100%", display: "flex", justifyContent: "space-around" }}>
                                <div className={styles.formItem}
                            style={{ width: "100%", marginRight: 20, position: "relative" }}>
                                    <label><Typography variant="body1" style={{ color: "#fff" }}>Your Name</Typography></label>
                            <input autoComplete="on" name="name" className={styles.input} onChange={handleChange} />
                            
                            {errors.name ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -25 }}>{errors.name}</Typography> : null}
                        </div>
                        
                        <div
                            className={styles.formItem}
                            style={{ width: "100%", marginRight: 20, position: "relative" }}>
                            <label><Typography variant="body1" style={{ color: "#fff" }}>Your Email</Typography></label>
                            <input autoComplete="on" name="email" className={styles.input} onChange={handleChange} />
                            {errors.email ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -25 }}>{errors.email}</Typography> : null}
                        
                        </div>
                        <div className={styles.formItem}
                            style={{ width: "100%", marginRight: 20, position: 'relative' }}>
                            <label><Typography variant="body1" style={{ color: "#fff" }}>Your Phone</Typography></label>
                            <input autoComplete="on" name="phone" className={styles.input} onChange={handleChange} />
                            {errors.phone ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -25 }}>{errors.phone}</Typography> : null}
                        
                        </div>
                        <div style={{ display: "flex", alignItems: "center" }}>
                            <Button type="submit" variant="contained" color="inherit" style={{ textTransform: "capitalize", color: "#8F83F3", background: "#FFF", borderRadius: 11, width: 185, height: 50 }}>
                                <b>Submit</b>
                            </Button>

                        </div>
                    </form>

                </div>
            </div>
            <div className={styles.onMobile}>
                <Button onClick={handleClickOpen} variant="contained" color="inherit" style={{ textTransform: "capitalize", color: "#fff", background: "#8F83F3", borderRadius: 11, width: 200, height: 65 }}>
                    <Typography variant="h6">
                        <b>Submit</b>
                    </Typography>
                </Button>
                <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <div style={{ background: "#8F83F3", maxWidth: 400 }}>
                    {success ?
                        <DialogContent style={{width: 400, height: 552, display: "flex", flexDirection: "column", alignItems: 'center'}}>
                            <div className={styles.formBlocks} style={{ height: 450, display: "flex" ,justifyContent: "center",
                        alignItems: "center", flexDirection: "column"}}>
                    <div>
                        <img src="success.png" style={{marginBottom: 20}}/>
                    </div>
                    <Typography
                                        variant="h4" color="inherit" style={{color: "#fff"}} className={styles.headingText}>
                                        Thank You!
                </Typography>
                </div>
                <Button onClick={() => {
                    handleClose();
                    setSuccess(false)
                }} variant="outlined" color="inherit" style={{ textTransform: "capitalize", color: "#fff", borderRadius: 11, width: 150, height: 50 }}>
                                                <b>Close</b>
                                            </Button>
                        </DialogContent>
                        :
                        <DialogContent>
                            <div className={styles.formBlocks}>
                                <div className={styles.formHeading}>
                                    <Typography
                                        variant="h4" color="inherit" className={styles.headingText}>
                                        Be the first to <b>get exclusive bonuses</b> and early access to IndaSwap
                </Typography>
                                </div>
                                <div className={styles.formBlock} style={{ display: "block" }}>
                                    <form
                                        onSubmit={handleSubmit}
                                        style={{ width: "100%", display: "block" }}>
                                        <div className={styles.formItemMob}
                                            style={{ width: "100%", marginBottom: 20, position: "relative" }}>
                                            <label><Typography variant="body1" style={{ color: "#fff" }}>Your Name</Typography></label>
                                            <input autoComplete="on" name="name" className={styles.input} onChange={handleChange} />
                                            {errors.name ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -20 }}>{errors.name}</Typography> : null}
                        
                                        </div>
                                        <div
                                            className={styles.formItemMob}
                                            style={{ width: "100%", marginBottom: 20, position: "relative" }}>
                                            <label><Typography variant="body1" style={{ color: "#fff" }}>Your email</Typography></label>
                                            <input autoComplete="on" name="email" className={styles.input} onChange={handleChange} />
                                            {errors.email ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -20 }}>{errors.email}</Typography> : null}
                        
                                        </div>
                                        <div
                                            className={styles.formItemMob}
                                            style={{ width: "100%", background: "rgba(87, 76, 180, 0.2)", position: "relative" }}>
                                            <label><Typography variant="body1" style={{ color: "#fff" }}>Your Phone</Typography></label>
                                            <input autoComplete="on" name="phone" className={styles.input} onChange={handleChange} />
                                            {errors.phone ? <Typography variant="body1" color="inherit" style={{ color: "red", position: "absolute", bottom: -20 }}>{errors.phone}</Typography> : null}
                        
                                        </div>
                                        <div style={{display: "flex", justifyContent: "space-around"}}>
                                            <Button type="submit" onClick={handleSubmit} variant="contained" color="inherit" style={{ marginBottom: 15, textTransform: "capitalize", color: "#8F83F3", background: "#FFF", borderRadius: 11, width: 150, height: 50 }}>
                                                <b>Submit</b>
                                            </Button>
                                            <Button onClick={handleClose} variant="outlined" color="inherit" style={{ textTransform: "capitalize", color: "#fff", borderRadius: 11, width: 150, height: 50 }}>
                                                <b>Close</b>
                                            </Button>
                                        </div>

                                    </form>
                                </div>
                            </div>
                        </DialogContent>
                    }
                    
                        
                        {/* <DialogActions style={{ marginBottom: 15 }}>
                            <Button onClick={handleClose} variant="outlined" color="inherit" style={{ textTransform: "capitalize", color: "#fff", borderRadius: 11, width: 185, height: 50 }}>
                                <b>Cancel</b>
                            </Button>
                            <Button type="submit" onClick={handleClose} variant="contained" color="inherit" style={{ marginBottom: 15, textTransform: "capitalize", color: "#8F83F3", background: "#FFF", borderRadius: 11, width: 185, height: 50 }}>
                                <b>Submit</b>
                            </Button>
                        </DialogActions> */}
                    </div>
                </Dialog>
            </div>
        </span>
    )
}

export default FormBlock
