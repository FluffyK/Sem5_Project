import React, { useState } from "react"
import "./Recover.css"
import axios from 'axios'

export default function Recover() {
  const [emailValue, setEmailValue] = useState(null)
  const [questionValue, setQuestionValue] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    const recoverData = {
      email: emailValue,
      question: questionValue
    }
    axios.post("https://localhost:4000/user/recover", recoverData)
      .then(res => {
        console.log(res.data)
      })
  }
  return (
    <div class="limiter">
      <div class="container-login100">
        <div class="wrap-login100 p-l-55 p-r-55 p-t-65 p-b-50">
          <form class="login100-form validate-form" onSubmit={handleSubmit}>
            <span class="login100-form-title p-b-33">Recover password</span>

            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz">
              <input
                class="input100"
                type="email"
                name="email"
                placeholder="Email"
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>
            <div
              class="wrap-input100 validate-input"
              data-validate="Valid email is required: ex@abc.xyz">
              <input
                class="input100"
                type="text"
                placeholder="Question"
                value={questionValue}
                onChange={e => setQuestionValue(e.target.value)}
              />
              <span class="focus-input100-1"></span>
              <span class="focus-input100-2"></span>
            </div>
            <div class="container-login100-form-btn m-t-20">
						<button type="submit" class="login100-form-btn">
							Submit
						</button>
					</div>
          </form>
        </div>
      </div>
    </div>
  )
}
