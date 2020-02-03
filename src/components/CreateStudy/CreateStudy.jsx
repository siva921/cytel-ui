import React from 'react'
import {
    Button, Modal, Form, Row, Col
} from 'react-bootstrap';

export default function CreateStudy(props) {
    return (
        <Modal size="lg" show={props.show} onHide={props.handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Study</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Form>
                    <Form.Group as={Row} controlId="formStudyName">
                        <Form.Label column sm="2">
                            Study Name
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formEstimatedCompletionDate">
                        <Form.Label column sm="2">
                            Study Start Date
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="date" />
                        </Col>
                        <Form.Label column sm="2">
                            Est Completion Date
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="date" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formProtocolID">
                        <Form.Label column sm="2">
                            Protocol ID
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                        <Form.Label column sm="2">
                            Study Group
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formPhase">
                        <Form.Label column sm="2">
                            Phase
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                        <Form.Label column sm="2">
                            Primary Indication
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formSecondaryIndication">
                        <Form.Label column sm="2">
                            Secondary Indication
                        </Form.Label>
                        <Col sm="4">
                            <Form.Control type="text" />
                        </Col>
                    </Form.Group>
                </Form>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="outline-secondary" onClick={props.handleClose}>
                    Cancel
                </Button>
                <Button variant="outline-primary" onClick={props.handleSubmit}>
                    Save
                </Button>
            </Modal.Footer>

        </Modal>
    )
}
