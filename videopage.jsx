import React, { Fragment } from "react";
import "semantic-ui-css/semantic.min.css";
import "react-multi-carousel/lib/styles.css";
import Cat1 from "../Components/vcategory1";
import Cat2 from "../Components/vcategory2";
import Cat3 from "../Components/vcategory3";
import Section from "../Components/videosection";

const VideoPage = () => {
    return (
        <div>
            <Fragment>
                <Section>
                    First Category
                    <  Cat1 />
                </Section>
                <Section>
                    Second Category
                    <Cat2/>
        </Section>
                <Section>
                    Third Category
                    <Cat3/>
        </Section>
            </Fragment>
        </div>
    );
};

export default VideoPage;