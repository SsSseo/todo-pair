import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPlan } from '../redux/modules/Plans';
import styled from "styled-components";

function InputText() {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  const [nextId, setNextId] = useState(2);

  //제목 저장
  const titleChangeHandler = (event) => {
    setTitle(event.target.value)
  }

  //내용 저장
  const bodyChangeHandler = (event) => {
    setBody(event.target.value)
  }

  //저장 버튼
  const addButtonHandler = (event) => {
    event.preventDefault();

    if (!title.length || !body.length) {
      return alert('제목 또는 내용을 입력 해 주세요')
    };

    dispatch(addPlan(title, body, nextId));
    setTitle('')
    setBody('')
    setNextId(nextId + 1)
  }



  return (
    <StInputBox>
      <StInputGroup>
        <StInput
          value={title}
          onChange={titleChangeHandler}
          type="text"
          placeholder="제목을 입력하세요" />
        <StInput
          value={body}
          onChange={bodyChangeHandler}
          type="text"
          placeholder="내용을 입력하세요" />
      </StInputGroup>
      
      <StAddButton onClick={addButtonHandler}>
        +
      </StAddButton>
    </StInputBox>
  )
}

const StInputBox = styled.div`
  width: 800px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: 50px 0 30px 0;
  padding: 30px 100px;
  box-shadow: 0 4px 5px -4px rgb(219, 219, 219);

  margin-bottom: 30px;
`
const StInputGroup = styled.div`
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const StInput = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 35px;
  border: none;
  border-radius: 7px;
  padding: 10px;
  resize: none;
  overflow: hidden;
  background-color: rgb(226, 226, 226);
  margin-bottom:10px;

  &:focus {
    outline: none;
  }
`

const StAddButton = styled.button`
  margin-left: auto;
  background-color: rgb(0, 0, 0);
  color: white;
  border: none;
  border-radius: 7px;
  width: 25px;
  height: 25px;
  font-size: 15px;
  margin-bottom:10px;

  &:hover {
    cursor: pointer;
  }
`
export default InputText