import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';



function Detail({}) {
    const plans = useSelector((state) => state.plans.plans);

    const params = useParams();
    const navigate = useNavigate();

    const formData = plans.find((item) => {
      return item.id === parseInt(params.id);
    })

    console.log(formData)
    return (
    <div>
      <div>ID: {formData.id} </div>
      <button onClick={() => navigate("/")}>이전으로</button>
      <div>{formData.title}</div>
      <div>{formData.body}</div>
    </div>
  )
}

export default Detail