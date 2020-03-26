import * as React from 'react';
import firebase from './firebase';
import { FilteredVTable, GivenVTable } from 'react-virtualized-table'
import 'material-design-icons/iconfont/material-icons.css'
import 'react-virtualized-table/dist/style.css'

class PestTable extends React.Component {
    constructor() {
        super();
        this.state = {
            res: []
        };
    }
    componentDidMount() {
        this.getPests().then(result => this.setState({
            res: result,
            height: 100
        }))
    }
    getPests = async () => {
        let rows = [];
        const db = firebase.firestore();
        const data = await db.collection("data").get();
        data.docs.map(doc => (
            rows.push({
                name: doc.data().pest_name,
                solution: doc.data().pest_solutions,
                symptoms: doc.data().pest_symptoms,
                photo: doc.data().pest_photo
            })
        ))
        return rows;
    };
    render() {
        const columns = GivenVTable.columns()
            .addSortableColumnFor('name')
            .addColumnFor('symptoms')
            .addColumnFor('solution')
            .addColumnFor('photo')
            .result

        return (
            <div >
               <h1>Pest Search</h1> 
                <FilteredVTable
                height ={500}
                    items={this.state.res}
                    columns={columns} 
                    stickyHead = {true}
                    rowHeight = {300}
                    />
            </div>
        );
    }
}

export default PestTable;