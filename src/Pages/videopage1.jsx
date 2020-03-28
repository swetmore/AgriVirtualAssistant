import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Cat1 from "../Components/vcategory1";
import Section from "../Components/videosection";

const VideoPage1 = () => {
    return (
        <div>
            <Fragment>
                <Section>
                    Preservation
                    <Cat1/>
                </Section>
            </Fragment>
        </div>
    );
};

export default VideoPage1;
