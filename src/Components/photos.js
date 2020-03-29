import React from 'react';
import firebase from './firebase';
import Gallery from 'react-grid-gallery';

class Photos extends React.Component {
    constructor() {
        super();
        this.state = {
            res: []
        };
    }
    componentDidMount() {
        this.getPhotos().then(result => this.setState({
            res: result,
        }))
    }
    getPhotos = async () => {
        let photos = [];
        const db = firebase.firestore();
        const data = await db.collection("data").get();
        data.docs.map(doc => (
            photos.push({
                src: doc.data().pest_photo,
                thumbnail: doc.data().pest_photo,
                thumbnailWidth: 300,
                thumbnailHeight: 200,
                caption: doc.data().pest_name
            })
        ))
        return photos;
    };
    render() {
        return (
            <div>
                <h1>Pest Photos</h1>
               <Gallery 
               images={this.state.res} 
               showLightboxThumbnails={true}
               />
            </div>
        );
        
    }
}

export default Photos;
