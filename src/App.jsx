import React from 'react'
import styled from "styled-components";
import InputText from './components/InputText';
import List from './components/List';

function App() {


  return (
    <StWrap>
      <InputText />
      <List />
    </StWrap>
  )
}

const StWrap = styled.div`

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  margin: 0;
  padding: 0;

`

export default App