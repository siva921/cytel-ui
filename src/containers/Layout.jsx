import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
    Navbar,
    Form,
    InputGroup,
    FormControl,
    Button,
    Table,
    ListGroup,
} from 'react-bootstrap'

import Header from '../components/Header'
import CreateStudy from '../components/CreateStudy/CreateStudy'

const Layout = () => {
    const studies = useSelector(state => state.studyReducer.studies)
    const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const handleSubmit = () => setShow(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)

    useEffect(() => {
        dispatch({
            type: 'GET_STUDIES',
        })
    }, [dispatch])

    return (
        <div>
            <React.Fragment>
                <Header />
                <div className="flex-container">
                    <div className="aside-left">
                        <ListGroup variant="flush">
                            <ListGroup.Item className="active">
                                Home
                            </ListGroup.Item>
                            <ListGroup.Item>About</ListGroup.Item>
                        </ListGroup>
                    </div>
                    <div className="aside-right">
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
                                    onClick={handleShow}
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
                                {studies.length &&
                                    studies.map((rowData, index) => (
                                        <tr key={index}>
                                            <td>{rowData.study_name}</td>
                                            <td>{rowData.study_start_date}</td>
                                            <td>
                                                {rowData.study_completion_date}
                                            </td>
                                            <td>{rowData.protocol_id}</td>
                                            <td>{rowData.study_group}</td>
                                            <td>{rowData.phase}</td>
                                            <td>
                                                {rowData.primary_indication}
                                            </td>
                                            <td>
                                                {rowData.secondary_indication}
                                            </td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </div>
                </div>

                <CreateStudy
                    handleSubmit={handleSubmit}
                    handleClose={handleClose}
                    show={show}
                />
            </React.Fragment>
        </div>
    )
}

export default Layout
