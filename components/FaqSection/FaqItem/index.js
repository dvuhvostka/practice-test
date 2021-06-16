import React from 'react'
import { Typography, Button } from '@material-ui/core'

const FaqItem = ({
    title,
    text,
    currentRow
}) => {
    const [open, setOpen] = React.useState(false)

    React.useEffect(() => {
        setOpen(false)
    }, [currentRow])
    
    return (
        <div style={{marginRight: 10, marginTop: 15}}>
            <div style={{width: 390, height: "auto", background: "#3A364E", padding: 25, borderRadius: 10, alignItems: "center"}}>
                    <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", height: 50}}>
                        <Typography
                 variant="h6" color="inherit" style={{color: "#fff"}}>
                    {title}
                </Typography>
                {open ? 
                <img style={{cursor: "pointer"}} onClick={() => setOpen(!open)} src={"/close.png"} /> :
                <img style={{cursor: "pointer"}} onClick={() => setOpen(!open)} src={"/open.png"} />}
                    </div>
                {
                    open &&
                    <Typography
                 variant="body1" color="inherit" style={{color: "#fff", marginTop: 20, background: "#3A364E"}} dangerouslySetInnerHTML={ { __html: text } }>
                    {/* <div dangerouslySetInnerHTML={ { __html: text } }></div> */}
                </Typography>
                }
                
                </div>
        </div>
    )
}

export default FaqItem
