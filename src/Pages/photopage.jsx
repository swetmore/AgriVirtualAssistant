import React from 'react';
import {Helmet} from 'react-helmet'
import Photos from '../Components/photos'

class PhotoPage extends React.Component {
    render() {
        return (
            <div className="Photos">
                <Helmet>
                   <style>{'body {background-color: #bbdefb; }'}</style>
               </Helmet>
                <Photos></Photos>
            </div>
        )
    }
}


export default PhotoPage;