import React from 'react'
import './reslist.css'
import '../Nav/nav.css'

const ResNavList = () => {
    return (
        <div className='resContainer' >
            <div className="resContainerInner">
                <div className="resList">
                    <ul>
                        {/* <li>HOME</li>
                        <li>ABOUT US</li>
                        <li>OUR SYSTEM</li> */}
                        <li><a href="tel:+966560024315" style={{textDecoration:'none', color:'black'}}>+966560024315</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ResNavList
