import React from 'react'

export default function Navbar(props) {
    return (
        <nav style={{backgroundColor: props.navBgColor}}>
            <div className="logo">
                <h1 style={{color: props.navTxtColor}}>FAJV</h1>
            </div>
            <div className="links">
            <ul>
                <li style={{color: props.navTxtColor}}>ABOUT</li>
                <li style={{color: props.navTxtColor}}>SERVICES</li>
                <li style={{color: props.navTxtColor}}>WORK</li>
                <li style={{color: props.navTxtColor}}>CAREERS</li>
                <li style={{color: props.navTxtColor}}>BLOG</li>
                <li style={{color: props.navTxtColor}}>CONTACT</li>
            </ul>
            </div>

        </nav>
    )
}
