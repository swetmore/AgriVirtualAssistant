import React from 'react'
import { Dropdown, ButtonToolbar, DropdownButton } from 'react-bootstrap'
class Form extends React.Component {
    render() {
        return (
            <form>
                <input type='text' name="search value" placeholder="Search..."/>
                <ButtonToolbar>
                            {[DropdownButton].map((DropdownType, idx) => (
                                <DropdownType
                                    size="sm"
                                    variant="primary"
                                    title="Search By"
                                    id={`dropdown-button-drop-${idx}`}
                                    key={idx}>
                                    <Dropdown.Item eventKey="1">Name</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="2">Symptom</Dropdown.Item>
                                    <Dropdown.Divider />
                                    <Dropdown.Item eventKey="3">Picture</Dropdown.Item>
                                </DropdownType>
                            ))}
                        </ButtonToolbar>
            </form>
        );
    }
}

export default Form;