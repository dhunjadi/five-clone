import React from 'react'

export default function Section(props) {
    return (
        <div id={props.divID}>
            <div className={props.txtContainer}>
                <div className={props.titleClass}>
                    <h3>{props.titleTxt}</h3>
                </div>
                <div className={props.headlineClass}>
                    <h1>{props.headlineTxt}</h1>
                </div>
                <div className={props.paragraphClass}>
                    <p>{props.paragraphTxt}</p>

                    <div>{props.buttonTxt}</div>
                </div>
            </div>
            <div className={props.imgContainer}>
                <div className={props.imgBgContainer}>
                    <div className={props.imgBg}></div>
                </div>
                <div className={props.imgDiv}>
                    <img className={props.img} src={props.imgURL} alt="img" />
                </div>

            </div>
        </div>
    )
}
