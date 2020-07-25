import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Character from './components/Character';
import styled from 'styled-components';
import {Container, Row } from "reactstrap";


const TextApp = styled.div`
  color: purple;
  font-weight: bold;
  font-size: 30px;
  font-family: cursive;
`;


const App = () => {

  const [page, setPage] = useState([]);

  useEffect(()  => {
      axios.get("https://rickandmortyapi.com/api/character")
      .then(response => {
        console.log('response', response.data.results)
        setPage(response.data.results)
      })
      .catch(error => console.log("Error!", error));
  }, []);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className="App">
      <TextApp>
      <h1 className="Header">Characters</h1>
      <Row>
      {page.map(object => {
        return <Character item = {object}/>
      })}
      </Row>
      </TextApp>
    </Container>
  );
}

export default App;
