import React from 'react'

export default function Section(props) {
    return (
        <div id={props.divID}>
            <div className={props.titleClass}>
                <h3>{props.titleTxt}</h3>
            </div>
            <div className={props.headlineClass}>
                <h1>{props.headlineTxt}</h1>
            </div>
            <div className={props.paragraphClass}>
                <p>{props.paragraphTxt}</p>
            </div>
            <div className={props.buttonClass}>
                <span>{props.buttonTxt}</span>
            </div>
        </div>
    )
}
