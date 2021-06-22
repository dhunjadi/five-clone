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
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>ABOUT</span></a></li>
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>SERVICES</span> </a></li>
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>WORK</span> </a></li>
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>CAREERS</span> </a></li>
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>BLOG</span> </a></li>
                    <li > <a href="/"> <span style={{ color: props.navColor.txt }}>CONTACT</span> </a></li>
                </ul>
            </div>

        </nav>
    )
}
