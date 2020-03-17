import React from 'react';
import PestSearchForm from '../Components/pestsearchform'
import PestDisplay from '../Components/pestdisplay'

class PestPage extends React.Component {

    render() {
        return (
            <div className="Pest">
                <h5>Pest Search</h5>
                <div>
                    <PestSearchForm pestSearch/>
                </div>
                <PestDisplay></PestDisplay>
            </div>
        );
    }
}

export default PestPage;