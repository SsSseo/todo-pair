import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPlan } from './redux/moduls/Plans';
import InputText from './components/InputText';
import List from './components/List';

function App() {

  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

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
        <InputText />
        <List />
    </div>
  )
}

export default App