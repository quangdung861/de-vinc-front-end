import React from 'react'
import { Wraper } from './styles'
import bgTemplate from "client/assets/images/bg-template.png"

const BannerBlock = ({ title, describe, textBtn, image } ) => {
    const bannerImage = image || bgTemplate

    return (
        <Wraper $image={bannerImage}>
            <div className="banner-container">
                <div className="banner-content">
                    
                    <div className="banner-content-left">
                        <div className="title-banner">{title}</div>
                        <div className="describe-banner">{describe}</div>
                        <div className="--btn-default btn-custom">
                            {textBtn}
                        </div>
                    </div>
                    <div className="banner-content-right"></div>
                </div>
            </div>
        </Wraper>
    )
}

export default BannerBlock