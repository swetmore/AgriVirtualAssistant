import React from 'react';
import { Link } from "react-router-dom"

const VideoPage = () => {
    return (
        <div>
            <h5>
                <Link to="/">Home    </Link>
                <Link to="/weatherpage">Weather    </Link>
                <Link to="/pestpage">Search Pests    </Link>
            </h5>
            <h5>Videos</h5>
        </div>
    )
}

export default VideoPage;