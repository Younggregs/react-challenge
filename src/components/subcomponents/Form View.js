import React, { useState} from 'react';
import { Button, Label, InputGroup, Form, Row, Col, Grid, Table } from 'react-bootstrap';




export default class FormView extends React.Component {

  state = {
     userRegister: [],
     serial_no: 1,
  }



  getAge(){
    
      var d = new Date()

      var birthday = document.getElementById("birthday").value
      var dt = new Date(birthday)

      var birth_date = dt.getYear()
      var current_date = d.getYear()

      var age =  current_date - birth_date

      this.setState({ age })

  }


 updateTable(){
     
     const buffer = {
       'serial_no' : this.state.serial_no,
       'firstname' : document.getElementById("firstname").value,
       'lastname' : document.getElementById("lastname").value,
       'birthday' : document.getElementById("birthday").value,
       'age' : document.getElementById("age").value,
       'hobby' : document.getElementById("hobby").value,
     }

     this.setState({ 
       userRegister: this.state.userRegister.concat([buffer]),
       serial_no: this.state.serial_no + 1
     })

     if(this.state.userRegister){
       this.setState({ showTable: true })
     }

  }


render() {

  const that = this

  function FormRegister() {

  const [validated, setValidated] = useState(false);

  const handleSubmit = event => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    if(document.getElementById("hobby").value){
      that.updateTable();
    }
    
   
    
    
  };



  return (
    <Form noValidate validated={validated}>
      <Form.Row>

        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            id = "firstname"
            defaultValue="Firstname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            id="lastname"
            defaultValue="Lastname"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>


        <Form.Group as={Col} md="8" controlId="validationCustomUsername">
          <Form.Label>Birthday</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              placeholder="Birthday"
              id="birthday"
              defaultValue="1990-01-01"
              onChange={that.getAge.bind(that)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid birthday.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Form.Row>


      <Form.Row>
        <Form.Group as={Col} md="4" controlId="validationCustom03">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            id="age" 
            type="number" 
            defaultValue={that.state.age} 
            required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid age.
          </Form.Control.Feedback>
        </Form.Group>
        
        <Form.Group as={Col} md="12" controlId="validationCustom04">
          <Form.Label>Hobby</Form.Label>
          <Form.Control id="hobby" type="text" placeholder="hobby" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid hobby.
          </Form.Control.Feedback>
        </Form.Group>
        
      </Form.Row>
      <Button type="button" onClick={handleSubmit}>Submit form</Button>
    </Form>
  );
}

  return(
    <Row>
      <Col className="formview" lg={6} md={6} sm={12} xs={12}>
      <div className="form">
        <FormRegister />
      </div>
      </Col>


      <Col className="formview1" lg={6} md={6} sm={12} xs={12}>
        <h1>Challenge no 1: submit form.</h1>

      <div className="tableview">
          {this.state.showTable ? (
              <Table striped bordered hover>
            <thead>
              <tr>
                <th>serial_no</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Birthday</th>
                <th>Age</th>
                <th>Hobby</th>
              </tr>
            </thead>
          <tbody>
          {this.state.userRegister.map( item => (
            <tr>
              <td>{item.serial_no}</td>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.birthday}</td>
              <td>{item.age}</td>
              <td>{item.hobby}</td>
            </tr>
          ))}
          </tbody>
          </Table>
          ) : (
            <div/>
          )}
          
        </div>

        <div className="signature">
          <p>A Gregs Production @2019</p>
        </div>
        </Col>
    </Row>
    )
  }
  
}
