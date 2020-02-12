import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { ListGroup } from 'react-bootstrap'
import StudyTable from '../components/CreateStudy/Study/StudyTable'
import Header from '../components/Header'
import CreateStudy from '../components/CreateStudy/CreateStudy'

const Layout = () => {
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
                        <StudyTable handleShow={handleShow} />
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
