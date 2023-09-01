import React from 'react'
import styled from "styled-components";
import { useSelector } from 'react-redux'

function List() {

  const plans = useSelector(state => state.plans.plans)

  return (
    <StListContainer>
      {
        plans.map((plan) => {
          return (
            <StBox key={plan.id} className="list-container">
              <div className="check-icon">{plan.isDone ? "💙" : "🧡"}</div>
              <div className="list-plan">
                <div className="list-title">{plan.title}</div>
                <div className="list-content">{plan.body}</div>
              </div>
              <div>

                {/* isDone의 상태에 따라 버튼 다르게 나오기 */}
                {plan.isDone
                  ? <button
                    onClick={''}
                    className="list-button list-working-button"
                    data-tooltip="🧡">
                    취소
                  </button>
                  : <button
                    onClick={''}
                    className="list-button list-done-button"
                    data-tooltip="💙">
                    완료
                  </button>}

                <button
                  onClick={''}
                  className="list-button list-delete-button">
                  ✖
                </button>
              </div>
            </StBox>
          )
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