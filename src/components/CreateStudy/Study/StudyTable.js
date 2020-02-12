import React from 'react'
import { useSelector } from 'react-redux'
import {
    Navbar,
    Form,
    InputGroup,
    FormControl,
    Button,
    Table,
} from 'react-bootstrap'

export default function StudyTable(props) {
    const studies = useSelector(state => state.studyReducer.studies)
    return (
        <React.Fragment>
            <Navbar className="bg-light justify-content-between searchBar">
                <Form inline>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text id="basic-addon1">
                                Study Name
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                            placeholder="Enter Study Name"
                            aria-label="Username"
                        />
                    </InputGroup>
                </Form>
                <Form inline>
                    <Button
                        variant="outline-primary"
                        onClick={props.handleShow}
                    >
                        Create Study
                    </Button>
                </Form>
            </Navbar>

            <Table responsive bordered>
                <thead>
                    <tr>
                        <th>Study Name</th>
                        <th>Study Start Date</th>
                        <th>Study Completion Date</th>
                        <th>Protocol ID</th>
                        <th>Study Group</th>
                        <th>Phase</th>
                        <th>Primary Indication</th>
                        <th>Secondary Indication</th>
                    </tr>
                </thead>
                <tbody>
                    {studies.map((rowData, index) => (
                        <tr key={index}>
                            <td>{rowData.study_name}</td>
                            <td>{rowData.study_start_date}</td>
                            <td>{rowData.study_completion_date}</td>
                            <td>{rowData.protocol_id}</td>
                            <td>{rowData.study_group}</td>
                            <td>{rowData.phase}</td>
                            <td>{rowData.primary_indication}</td>
                            <td>{rowData.secondary_indication}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </React.Fragment>
    )
}
