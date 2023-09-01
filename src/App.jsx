import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlan } from './redux/moduls/Plans';

function App() {

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

  const dispatch = useDispatch()

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
        onClick={() => {
          dispatch(addPlan(title, body))
        }}
        className="write-button">
        추가
      </button>
    </div>
  )
}

export default App