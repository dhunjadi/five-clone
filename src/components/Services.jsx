import React from 'react'

export default function Services() {
    return (
        <div id='services' className='animate__animated animate__fadeInUp'>
            <div className="work-div">
                <div className='work-div-hover'></div>
                <span>See all work</span>
                
            </div>
            <div className="services-txt">
                <h2>Our services</h2>
                <p>Our teams partner with clients to define problems, create solutions, design products, and build businesses that are scalable and profitable. Our end-to-end process and integrated teams are why we deliver high-performing results for every client.</p>
            </div>

            <ol>
                <li> <span>01</span> Product Discovery</li>
                <li> <span>02</span> Design</li>
                <li> <span>03</span> Development</li>
                <li> <span>04</span> Growth Marketing</li>
            </ol>
            <div className="learn-more">
                <div className="learn-more-hover"></div>
                <span>Learn more about our services</span>
            </div>

        </div>
    )
}
