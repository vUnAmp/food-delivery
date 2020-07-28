import React from 'react'
import './footer.scss'

const d = new Date()
const year = d.getFullYear()
function Footer() {
    return (
        <div className="footer_wrap">
           
           <h3>&copy;{year} WeLoveRice  </h3> 
        </div>
    )
}

export default Footer
