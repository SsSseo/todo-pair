import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import styled from "styled-components";



function Detail({}) {
    const plans = useSelector((state) => state.plans.plans);

    const params = useParams();
    const navigate = useNavigate();

    const formData = plans.find((item) => {
      return item.id === parseInt(params.id);
    })

    console.log(formData)
     return (
    <>
    <StContainer>
      <StBox>
      <StFirst>
      <div>ID: {formData.id} </div>
      <StButton onClick={() => navigate("/")}>이전으로</StButton>
      </StFirst>
      <h1>{formData.title}</h1>
      <h3>{formData.body}</h3>
      </StBox>
    </StContainer>
    </>
  )
}

export default Detail

const StContainer = styled.div`
  width: 100%;
  height: 100vh;
  border: 2px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
`
const StBox = styled.div `
  width: 600px;
  height: 400px;
  border: 2px solid #eee;
  padding: 30px;
`
const StFirst = styled.div `
  display: flex;
  justify-content: space-between;
  margin: 10px;

`
const StButton = styled.button`
border: 1px solid ${({ borderColor }) => borderColor};
height: 40px;
width: 120px;
background-color: #fff;
border-radius: 12px;
cursor: pointer;
`;