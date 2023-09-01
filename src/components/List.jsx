import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux'
import Plan from './Plan';


function List() {

  const plans = useSelector(state => state.plans.plans)


  return (
    <StListContainer>
      <span>Working</span>
      {
        plans.map((plan) => {
          if (!plan.isDone) {
            return (
              <Plan
                key={plan.id}
                plan={plan} />
            )
          }
        })
      }
      <span>Done</span>
      {
        plans.map((plan) => {
          if (plan.isDone) {
            return (
              <Plan
                key={plan.id}
                plan={plan} />
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

export default List