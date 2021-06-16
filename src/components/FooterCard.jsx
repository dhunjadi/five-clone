import React from 'react'

export default function FooterCard(props) {
    return (
        <div className='footer-card'>
            <p className='card-title'>{props.title}</p>
            <p className='card-street'>{props.street}</p>
            <p className='card-postal'>{props.postal}</p>
            <a className='card-link' href="/">{props.tel}</a>
        </div>
    )
}
