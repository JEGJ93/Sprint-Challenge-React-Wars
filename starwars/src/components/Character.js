// Write your Character component here
import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    CardText,
    Col
  } from "reactstrap";
 




const Character = props => {
    console.log(props)

    
    

    return (
        
        <Col xs="6" md="5" xl="6">
      <Card>
        <CardHeader>Card Number: {props.item.id}</CardHeader>
        <CardBody>
          <CardText>Name: {props.item.name}</CardText>
          <img src = {props.item.image}/>
          <CardText>Status: {props.item.status}</CardText>
          <CardText>Species: {props.item.species}</CardText>
        </CardBody>
      </Card>
    </Col>
    
    
    )
};



export default Character;
