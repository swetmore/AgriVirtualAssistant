import React from 'react';
import { Link } from "react-router-dom"

const MainPage = () => {
    return (
        <div>
            <h2>Main Page</h2>
            <h4><Link to="/weatherpage">Weather Forecast</Link></h4>
            <h4><Link to="/videopage">Videos</Link></h4>
            <h4><Link to="/pestpage">Search Pests</Link></h4>
        </div>
    )
}

export default MainPage;