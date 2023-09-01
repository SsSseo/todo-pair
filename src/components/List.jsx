import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux'
import Plan from './Plan';


function List() {

  const plans = useSelector(state => state.plans.plans)


  return (
    <StListContainer>
      <StStateList>
        <StStateName>▼  Working</StStateName>
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
      </StStateList>
      <StStateList>
        <StStateName>▼  Done</StStateName>
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
      </StStateList>

    </StListContainer>
  )

}
const StListContainer = styled.div`
  width: 1000px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`

const StStateList = styled.div`
  width: 49%;
`

const StStateName = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`

export default List