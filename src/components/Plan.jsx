import React from 'react'
import styled from "styled-components";
import { useDispatch } from 'react-redux'
import { Link } from "react-router-dom";
import { deletePlan, updatePlan } from '../redux/modules/Plans';

function Plan({ plan }) {

  const dispatch = useDispatch()

  return (
    <div>
      <StBox key={plan.id}>
        <StStateIcon>{plan.isDone ? "💙" : "🧡"}</StStateIcon>
        <StStateList>
          <StPlanTitle>{plan.title}</StPlanTitle>
          <StPlanBody>{plan.body}</StPlanBody>
        </StStateList>

        <StButtonGroup>
          <StLink to={`/${plan.id}`} key={plan.id} className="no-underline">
            <div> 상세보기🔻 </div>
          </StLink>
          <button onClick={() => { dispatch(updatePlan(plan.id)) }}>
            {plan.isDone ? '취소' : '완료'}
          </button>

          <button
            onClick={() => dispatch(deletePlan(plan.id))}>
            ✖
          </button>
        </StButtonGroup>
      </StBox>
    </div>
  )
}

const StBox = styled.div`
  width: 905;
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
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`
const StPlanTitle = styled.div`
  font-size: 17px;
  font-weight: bold;
`

const StPlanBody = styled.div`
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
    color: #9e9e9e;

    &:hover {
      cursor: pointer;
      color: black;
    }
  }
`

const StLink = styled(Link)`
  text-decoration: none;
  font-size: 14px;
  color: #9e9e9e;

  &:hover {
    cursor: pointer;
    color: black;
  }
`;


export default Plan