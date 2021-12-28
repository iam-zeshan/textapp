import React from 'react'

export const Footer = () => {
    let footerStyle = {
        position: "absolute",
        width: "100%"
    }
    
    return (
        <footer className='bg-dark text-light' style={footerStyle}>
           <p className='text-center py-3'>&copy; Zeshan Haider web developer</p>
        </footer>
    )
}
