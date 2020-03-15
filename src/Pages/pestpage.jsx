import React from 'react';
import { Link } from "react-router-dom"
// import Dropdown from 'react-bootstrap/Dropdown'
// import ButtonToolbar from 'react-bootstrap/ButtonTollbar'
import { Dropdown, ButtonToolbar, DropdownButton, SplitButton } from 'react-bootstrap'
import PestSearchForm from '../Components/pestsearchform'
class PestPage extends React.Component {

    render() {
        return (
            <div className="Pest">
                <h5>Pest Search</h5>
                <div className="row justify-content-center">

                    <PestSearchForm pestSearch />
                    {

                        <ButtonToolbar>
                            {[DropdownButton].map((DropdownType, idx) => (
                                <DropdownType
                                    size="sm"
                                    variant="primary"
                                    title="Search By"
                                    id={`dropdown-button-drop-${idx}`}
                                    key={idx}
                                >
                                    <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2">Symptom</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="3">Picture</Dropdown.Item>

                                </DropdownType>
                            ))}
                        </ButtonToolbar>}
                </div>
            </div>
        );
    }
}

export default PestPage;