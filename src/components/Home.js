import React, { useState} from 'react';
import { Button, Label, InputGroup, Form, Row, Col, Grid } from 'react-bootstrap';
import FormView from './subcomponents/Form View'

export default class Home extends React.Component {


render() {

  return(
    <section>
        <FormView />
    </section>
    )
  }
  
}
