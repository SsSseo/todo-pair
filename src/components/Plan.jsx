import React from 'react'
import styled from "styled-components";
import { useDispatch} from 'react-redux'
import { deletePlan, updatePlan } from '../redux/moduls/Plans';

function Plan({ plan }) {

  const dispatch = useDispatch()

  return (
    <div>
      <StBox key={plan.id} className="list-container">
        <div>{plan.isDone ? "💙" : "🧡"}</div>
        <div>
          <div>{plan.title}</div>
          <div>{plan.body}</div>
        </div>

        <div>
          {/* isDone의 상태에 따라 버튼 다르게 나오기 */}
          <button onClick={() => { dispatch(updatePlan(plan.id)) }}>
            {plan.isDone ? 'Working' : 'Done'}
          </button>

          <button
            onClick={() => dispatch(deletePlan(plan.id))}
            className="list-button list-delete-button">
            ✖
          </button>
        </div>
      </StBox>
    </div>
  )
}

const StBox = styled.div`
  width: 180px;
  height: 180px;  
  border: 1px solid green;
  padding: 2px;
`

export default Plan