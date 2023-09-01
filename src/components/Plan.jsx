import React from 'react'
import styled from "styled-components";
import { useDispatch} from 'react-redux'
import { deletePlan, updatePlan } from '../redux/moduls/Plans';

function Plan({ plan }) {

  const dispatch = useDispatch()

  return (
    <div>
      <StBox key={plan.id} className="list-container">
        <StStateIcon>{plan.isDone ? "💙" : "🧡"}</StStateIcon>
        <StStateList>
          <StPlanTitle>{plan.title}</StPlanTitle>
          <StPlanBody>{plan.body}</StPlanBody>
        </StStateList>

        <StButtonGroup>
          <button onClick={() => { dispatch(updatePlan(plan.id)) }}>
            {plan.isDone ? '취소' : '완료'}
          </button>

          <button
            onClick={() => dispatch(deletePlan(plan.id))}
            className="list-button list-delete-button">
            ✖
          </button>
        </StButtonGroup>
      </StBox>
    </div>
  )
}

const StBox = styled.div`
  width: 90%;
  height: 80px;  
  padding: 10px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StStateIcon = styled.div`
  width : 20px;
  font-size: 15px;
  margin-bottom: 22px;
`

const StStateList = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const StPlanTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
`

const StPlanBody= styled.div`
  font-size: 14px;
`

const StButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  & button {
    border: none;
    background-color: white;
    margin-left: 5px;

    &:hover {
      font-weight: bold;
      cursor: pointer;
    }
  }
`



export default Plan