import React from 'react'

export default function Navbar(props) {

    let scroll = window.pageYOffset
    const nav = document.getElementById('navbar')

    window.addEventListener('scroll', ()=>{
        let scrolled = window.pageYOffset

        if(scrolled > scroll){
            document.getElementById('navbar').style.top='-100px'
        } else {
            document.getElementById('navbar').style.top='0px'
        }
        scroll = window.pageYOffset
    })


    return (
        <nav id='navbar' style={{ backgroundColor: props.navColor.bg }}>
            <div className="logo">
                <h1 style={{ color: props.navColor.txt }}>FAJV</h1>
            </div>
            <div className="links">
                <ul>
                    <li style={{ color: props.navColor.txt }}> <a href="/">ABOUT</a></li>
                    <li style={{ color: props.navColor.txt }}> <a href="/">SERVICES</a></li>
                    <li style={{ color: props.navColor.txt }}> <a href="/">WORK</a></li>
                    <li style={{ color: props.navColor.txt }}>CAREERS</li>
                    <li style={{ color: props.navColor.txt }}>BLOG</li>
                    <li style={{ color: props.navColor.txt }}>CONTACT</li>
                </ul>
            </div>

        </nav>
    )
}
