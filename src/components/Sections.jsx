import React from 'react'
import SectionList from './SectionList'
import Section from './Section'

export default function Sections() {

    function createSection(sectionProps) {
        return (
            <Section
                key={sectionProps.id}
                divID={sectionProps.divID}
                titleClass={sectionProps.titleClass}
                titleTxt={sectionProps.titleTxt}
                headlineClass={sectionProps.headlineClass}
                headlineTxt={sectionProps.headlineTxt}
                paragraphClass={sectionProps.paragraphClass}
                paragraphTxt={sectionProps.paragraphTxt}
                buttonClass={sectionProps.buttonClass}
                buttonTxt={sectionProps.buttonTxt}
            />
        )
    }

    return (
        <div className="sections">
            {SectionList.map(createSection)}
        </div>
    )
}
