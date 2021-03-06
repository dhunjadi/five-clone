import React from 'react'

export default function Contact() {
    return (
        <div id='contact'>
            <div className="contact-title">
                <h2>Got a project for us? Let's talk.</h2>
            </div>
            <div className="form-container">
                <form>
                    <input type="text" placeholder='Your Name' value-size='40' />
                    <input type='email' placeholder='Email Address' value-size='40' />
                    <input type="tel" placeholder='Phone Number' value-size='40' />
                    <input type="text" placeholder={`Tell us more about your project & scope`} value-size='40' />
                    <div className="checkbox-div">
                        <input type="checkbox" disabled={true} /> <span>I have read and agree with FIVE's <a href='/'>privacy policy</a>.</span>
                    </div>
                    <div className="send-it-btn-div">
                        <span className='send-it-btn-text'>Send it!</span>
                        <span className="send-it-btn-hover"></span>
                    </div>

                </form>
            </div>
        </div>
    )
}
