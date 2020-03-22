import React from 'react';
import { Link } from 'react-router';
import config from './config';
import SimpleSlider from './SimpleSlider';
import VidService from './VidService';

let vidService = new VidService(config.vidService.endpointUrl);

export default class SimpleSliderContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            videoData: []
        };
    }

    componentDidMount() {
        vidService.getData().then(videoData =>
            this.setState({
                videoData
            })
        );
    }

    render() {
        return <div className="row">
            <div className="col-md-12">
                <div className="container-title">Videos</div>
                <SimpleSlider videoData={this.state.videoData}></SimpleSlider>
            </div>
        </div>;
    }
}