// action value
const ADD_PLAN = "ADD_PLAN"

// action creator : action value를 return 하는 함수
// 컴포넌트에서 사용하기 위해 export


// 매개변수의 payload는 App컴포넌트에서 받아온다
export const addPlan = (title, body, nextId) => {
  console.log(title, body, nextId)
  return {
    type: ADD_PLAN,
    payload: {
      id: nextId,
      title,
      body,
      isDone: false
    },
  }
}

// 초기 상태(state)
const initialState = {
  plans: [
    {
      id: 0,
      title: "투두리스트만들기",
      body: "열심히 만들어 보자!",
      isDone: false
    },
    {
      id: 1,
      title: "투두리스트는",
      body: "영어로 To Do List",
      isDone: true
    }
  ]
}



const todoList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PLAN:
      console.log(action)
      return {
        ...state,
        plans: [...state.plans, action.payload],
      }
    default:
      return state
  }
}


export default todoList