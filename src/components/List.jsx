import React from 'react'
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import { deletePlan, updatePlan } from '../redux/moduls/Plans';


function List() {
  const dispatch = useDispatch();
  const plans = useSelector(state => state.plans.plans)


  return (
    <StListContainer>
      <span>Working</span>
      {
        plans.map((plan) => {
          if (!plan.isDone) {
            return (
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
            )
          }
        })
      }
      <span>Done</span>
      {
        plans.map((plan) => {
          if (plan.isDone) {
            return (
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
            )
          }
        })
      }

    </StListContainer>
  )

}
const StListContainer = styled.div`
  padding: 0 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StBox = styled.div`
  width: 180px;
  height: 180px;  
  border: 1px solid green;
  padding: 2px;
`

export default List