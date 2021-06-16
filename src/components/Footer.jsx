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
                <div className="footer-upright">
                    <div className="footer-title">
                        <p>We deliver results.</p>
                        <div className="footer-socials">
                            <i class="fab fa-facebook-square fa-2x"></i>
                            <i class="fab fa-twitter-square fa-2x"></i>
                            <i class="fab fa-instagram fa-2x"></i>
                            <i class="fab fa-linkedin fa-2x"></i>
                            <i class="fab fa-dribbble fa-2x"></i>
                            <i class="fab fa-github-square fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-down">
                <div className="footer-down-left">
                    <div className="footer-links">
                        <a style={{marginLeft:'0'}} href="/">IMPACT</a>
                        <a href="/">STUDENT INITIATIVES</a>
                        <a href="/">LEGAL</a>
                    </div>
                </div>
                <div className="footer-down-right">
                    <div className="copyright">
                        <p>© 2007–2021 FIVE</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
