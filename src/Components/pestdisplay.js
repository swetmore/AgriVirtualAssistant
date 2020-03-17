import React from 'react';
import firebase from './firebase';

function PestDisplay() {
    const [pests, setPests] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore();
            const data = await db.collection("data").get();
            setPests(data.docs.map(doc => doc.data()));
        };
        fetchData();
    }, []); 

    return (
        <div>
            <ul>
                {pests.map(pest => (
                    <li key={pest.pestID}>{pest.name}, {pest.solution}</li>
                ))}
            </ul>
        </div>
    );
}

export default PestDisplay;
