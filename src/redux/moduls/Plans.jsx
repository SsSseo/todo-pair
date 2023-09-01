// action value
const ADD_PLAN = "ADD_PLAN"

// action creator : action value를 return 하는 함수
// 컴포넌트에서 사용하기 위해 export


// 매개변수의 payload는 App컴포넌트에서 받아온다
export const addPlan = (title, body) => {
  return {
    type: ADD_PLAN,
    payload: {
      id: 0,
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
      console.log(state)
      return {
        ...state,
        plans: state.plans.concat({
          id: action.payload.id,
          title: action.payload.title,
          body: action.payload.body,
          isDone: false
        }),
      }
    default:
      return state
  }
}

// action 객체라는 것은 action payload 만큼 처리하는 것이다
// 예) payload가 3이다. 3만큼 plus

export default todoList