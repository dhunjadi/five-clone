import React from 'react'
import SectionList from './SectionList'
import Section from './Section'

export default function Sections() {

    function createSection(sectionProps) {
        return (
            <Section
                key={sectionProps.id}
                divID={sectionProps.divID}
                txtContainer={sectionProps.txtContainer}
                titleClass={sectionProps.titleClass}
                titleTxt={sectionProps.titleTxt}
                headlineClass={sectionProps.headlineClass}
                headlineTxt={sectionProps.headlineTxt}
                paragraphClass={sectionProps.paragraphClass}
                paragraphTxt={sectionProps.paragraphTxt}
                buttonClass={sectionProps.buttonClass}
                buttonTxt={sectionProps.buttonTxt}
                imgContainer={sectionProps.imgContainer}
                imgDiv={sectionProps.imgDiv}
                img={sectionProps.img}
                imgURL={sectionProps.imgURL}
                imgBgContainer={sectionProps.imgBgContainer}
                imgBg={sectionProps.imgBg}

            />
        )
    }

    return (
        <div className="sections">
            {SectionList.map(createSection)}
        </div>
    )
}
