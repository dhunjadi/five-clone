import React from 'react'
import FooterCard from './FooterCard'
import CardList from './FooterCardList'

export default function Footer() {

    function createFooterCard(cardProps) {
        return (
            <FooterCard
                key={cardProps.key}
                title={cardProps.title}
                street={cardProps.street}
                postal={cardProps.postal}
                tel={cardProps.tel}
            />
        )
    }

    return (
        <div id='footer'>
            <div className="footer-up">
                <div className="footer-up-left">
                    {CardList.map(createFooterCard)}
                </div>
                <div className="footer-up-right">
                    <div className="footer-title">
                        <p>We deliver results.</p>
                        <div className="footer-socials">
                            <i className="fab fa-facebook-square fa-2x"></i>
                            <i className="fab fa-twitter-square fa-2x"></i>
                            <i className="fab fa-instagram fa-2x"></i>
                            <i className="fab fa-linkedin fa-2x"></i>
                            <i className="fab fa-dribbble fa-2x"></i>
                            <i className="fab fa-github-square fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <div className="footer-down-left">
                    <div className="footer-links">
                        <a style={{marginLeft:'0'}} href="/"> <span>IMPACT</span> </a>
                        <a href="/"> <span>STUDENT INITIATIVES</span> </a>
                        <a href="/"> <span>LEGAL</span> </a>
                    </div>
                </div>
                <div className="footer-down-right">
                    <div className="copyright">
                        <p style={{marginRight:'0px'}}>© 2007–2021 FIVE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
