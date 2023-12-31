import React, { Component } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './SignupLogin.css'
export default class Login extends Component {
  render() {
    return (
      <div className='authcard'>
        <form >
        <h3>Sign In</h3>

        <div>
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div >
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="mb-3">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" onClick={"/home-screen"}>
          <a href="/home-screen">Login</a>
            
          </button>
        </div>
        <p className="forgot-password text-right">
          Dont't have an account?  <a href="/sign-up">Signup</a>
        </p>
      </form>
      </div>
      
    )
  }
}
