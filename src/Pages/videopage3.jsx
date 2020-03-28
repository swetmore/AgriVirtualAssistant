import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Cat3 from "../Components/vcategory3";
import Section from "../Components/videosection";

const VideoPage3 = () => {
    return (
        <div>
            <Fragment>
                <Section>
                    Agriculture Technique
                    <Cat3/>
                </Section>
            </Fragment>
        </div>
    );
};

export default VideoPage3;