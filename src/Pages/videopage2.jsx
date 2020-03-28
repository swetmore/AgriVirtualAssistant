import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Cat2 from "../Components/vcategory2";
import Section from "../Components/videosection";

const VideoPage2 = () => {
    return (
        <div>
            <Fragment>
                <Section>
                    Productivity
                    <  Cat2 />
                </Section>
            </Fragment>
        </div>
    );
};

export default VideoPage2;
