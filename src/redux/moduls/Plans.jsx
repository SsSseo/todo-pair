// action value
const ADD_PLAN = "ADD_PLAN"
const DELETE_PLAN = "DELETE_PLAN"
const UPDATE_PLAN = "UPDATE_PLAN"

// action creator : action value를 return 하는 함수
// 매개변수의 payload는 App컴포넌트에서 받아온다

export const addPlan = (title, body, nextId) => {
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

export const deletePlan = (id) => {
  return {
    type: DELETE_PLAN,
    payload: id,
  }
}

export const updatePlan = (id) => {
  return {
    type: UPDATE_PLAN,
    payload: id,
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
      return {
        ...state,
        plans: [...state.plans, action.payload],
      }
    case DELETE_PLAN:
      return {
        ...state,
        plans: state.plans.filter(plan => plan.id !== action.payload)
      }
    case UPDATE_PLAN:
      return {
        ...state,
        plans: state.plans.map(plan => {
          if(plan.id === action.payload) {
            return {
              ...plan,
              isDone: !plan.isDone
            }
          } else {
            return plan
          }
        })
      }
    default:
      return state
  }
}


export default todoList