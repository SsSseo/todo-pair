import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addPlan } from '../redux/moduls/Plans';

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

    dispatch(addPlan( title, body, nextId ));
    setTitle('')
    setBody('')
    setNextId(nextId + 1)
  }



  return (
    <div>
      <input
        value={title}
        onChange={titleChangeHandler}
        type="text"
        placeholder="제목을 입력하세요" />
      <input
        value={body}
        onChange={bodyChangeHandler}
        type="text"
        placeholder="내용을 입력하세요" />
      <button
        onClick={addButtonHandler}
        className="write-button">
        추가
      </button>
    </div>
  )
}

export default InputText