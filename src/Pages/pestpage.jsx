import React from 'react';
import {Helmet} from 'react-helmet'
import PestTable from '../Components/searchtable'
class PestPage extends React.Component {

    render() {
        return (
            <div className="Pest">
                <Helmet>
                   <style>{'body {background-color: #bbdefb; }'}</style>
               </Helmet>
                <PestTable></PestTable>
            </div>
        );
    }
}

export default PestPage;
