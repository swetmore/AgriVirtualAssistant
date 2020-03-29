import React from "react";
import firebase from './firebase';
import MaterialTable from "material-table";

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
            })
        ))
        return rows;
    };
    render()
    {
const TableExample = () => {
    return (
      <MaterialTable
        title="Pests"
        columns={[
            {title: "Name", field: "name"},
            {title: "Symptoms", field: "symptoms"},
            {title: "Solution", field: "solution"}
        ]}
     
        data={this.state.res}

        options={{
          filtering: true
        }}
      />
    );
  };
        return (
            <div>
        <TableExample />
            </div>
        );
    }
}

export default PestTable;
