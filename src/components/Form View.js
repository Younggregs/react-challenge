import React, { useState} from 'react';
import { Button, InputGroup, Form, Row, Col, Table } from 'react-bootstrap';
import { addUser } from '../actions'
import store from '../store'
import SuccessAlert from './sub_components/Success Alert'


export default class FormView extends React.Component {




state = {
     userRegister: [],
     serial_no: 1,
     birthday: '1990-01-01',
     stop: true,
     users: null,
     user_id: 1,
     showTable: true
}



async componentWillMount() {
    
    const that = this
    setTimeout(function(){ 
      const uList = store.getState()
      that.setState({ userRegister: uList.users.reverse() })
     }, 5000);
    
    
}









getAge(){  
    
      var d = new Date()

      var birthday = document.getElementById("birthday").value
      this.setState({ birthday })

      var dt = new Date(birthday)

      var birth_date = dt.getYear()
      var current_date = d.getYear()

      var age =  current_date - birth_date

      this.setState({ age })


}






setFirstname(){
  const firstname = document.getElementById("firstname").value
  this.setState({ firstname })
}

setLastname(){
  const lastname = document.getElementById("lastname").value
  this.setState({ lastname })
}

setAge(){
  const age = document.getElementById("age").value
  this.setState({ age })
}

setHobby(){
  const hobby = document.getElementById("hobby").value
  this.setState({ hobby })
}








updateTable(){

     
    const buffer = {
       'user_id' : this.state.user_id,
       'firstname' : document.getElementById("firstname").value,
       'lastname' : document.getElementById("lastname").value,
       'birthday' : this.state.birthday,
       'age' : document.getElementById("age").value,
       'hobby' : document.getElementById("hobby").value,
    }

    this.setState({ user_id: this.state.user_id + 1})

     store.dispatch(addUser(buffer))
     
     
     const that = this 

     setTimeout(function(){ 
      const uList = store.getState()
      that.setState({ userRegister: uList.users.reverse(), successAlert: true }) 
     }, 5000);




     if(this.state.userRegister){
       this.setState({ showTable: true })
     }

}










render() {

  const that = this

  
  
  function FormRegister() {

  const [validated, setValidated] = useState(false);
  //const users = useSelector(state => state.users, shallowEqual)

  const UserL = () => {
    

    return <Table striped bordered hover>
      <thead>
        <tr>
          <th>User ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Birthday</th>
          <th>Age</th>
          <th>Hobby</th>
        </tr>
      </thead>
    <tbody>
    {that.state.userRegister.map(item => (
      <tr>
        <td>{item.user_id}</td>
        <td>{item.firstname}</td>
        <td>{item.lastname}</td>
        <td>{item.birthday}</td>
        <td>{item.age}</td>
        <td>{item.hobby}</td>
      </tr>
    ))}
    </tbody>
    </Table>
  }


  


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
  
    <Row>

      <Col className="formview" lg={6} md={6} sm={12} xs={12}>
      <div className="form">
      <Form noValidate validated={validated}>
      <Form.Row>

        <Form.Group as={Col} md="6">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            id = "firstname"
            value = {that.state.firstname}
            //onMouseOut={that.setFirstname()}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>

   




        <Form.Group as={Col} md="6">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            id="lastname"
            value = {that.state.lastname}
            //onChange={that.setLastname()}
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Form.Row>








        <Form.Row>
        <Form.Group as={Col} md="6">
          <Form.Label>Birthday</Form.Label>
          <InputGroup>
            <Form.Control
              type="date"
              placeholder="Birthday"
              id="birthday"
              //defaultValue={that.state.birthday}
              //onChange={that.getAge.bind(that)}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a valid birthday.
            </Form.Control.Feedback>
          </InputGroup>
          
        </Form.Group>
      







        <Form.Group as={Col} md="4">
          <Form.Label>Age</Form.Label>
          <Form.Control 
            id="age" 
            type="number" 
            //defaultValue={that.state.age} 
            //onChange={that.setAge.bind(that)}
            required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid age.
          </Form.Control.Feedback>
        </Form.Group>
        </Form.Row>







        <Form.Row>
        <Form.Group as={Col} md="12">
          <Form.Label>Hobby</Form.Label>
          <Form.Control 
            id="hobby" 
            type="text" 
            placeholder="hobby" 
            //onChange={that.setHobby.bind(that)}
            required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid hobby.
          </Form.Control.Feedback>
        </Form.Group>  
        
      </Form.Row>
      <Button type="button" onClick={handleSubmit}>Submit form</Button>
    </Form>
      </div>
      </Col>


      <Col className="formview1" lg={6} md={6} sm={12} xs={12}>
        {that.state.successAlert ? (
          <section>
            <SuccessAlert />

          </section>
        ) : (
          <div/>
        )}
        <h1>Challenge no 1: submit form.</h1>

      <div className="tableview">
          {that.state.showTable ? (
              UserL()
          ) : (
            <div/>
          )}
          
        </div>

        <div className="signature">
          <p>A Gregs Production @2019</p>
        </div>
        </Col>
    </Row>

  );
}





  return(<FormRegister />)
  }
  
}
