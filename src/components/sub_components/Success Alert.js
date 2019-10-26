import React, { useState} from 'react';
import { Toast, Row, Col, } from 'react-bootstrap';

export default function SuccessAlert() {
    const [show, setShow] = useState(true);
  
    return (
      <Row>
        <Col>
          <Toast onClose={() => setShow(false)} show={show} delay={5000} autohide>
            <Toast.Header>
              <strong className="mr-auto">Enye challenge</strong>
              <small>Just Now</small>
            </Toast.Header>
            <Toast.Body>Successfully Registered!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    );
  }
