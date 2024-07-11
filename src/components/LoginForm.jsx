import React from 'react'
import { useDispatch } from 'react-redux';
import {setFormType} from "../features/formSlice";
import Footer from './Footer';
const LoginForm = () => {
    const dispatch = useDispatch();
    const handleSubmit = () =>{
        dispatch(setFormType({formType: 0}));
    }
    const styleForFooter = {backgroundColor: 'white'};
  return (
    <>
        <div className="form-container">
                <h2>Lets get you started!</h2>
                <div className="form">
                  <form>
                    <div className="form-items">
                      <div className="form-headings">
                        <span style={{ color: "red" }}>*</span>I am:
                      </div>
                      <input
                        type="radio"
                        name="owner"
                        id="iam"
                        value={"Owner"}
                        checked
                      />
                      <label htmlFor="iam">Owner&emsp;</label>
                      <input
                        type="radio"
                        name="owner"
                        id="iam"
                        value={"Owner"}
                      />
                      <label htmlFor="iam">Builder</label>
                    </div>
                    <div className="form-items">
                      <div className="form-headings">
                        <span style={{ color: "red" }}>*</span>Your Name:
                      </div>
                      <input
                        type="text"
                        name="your-name"
                        id="name"
                        value={"Celest"}
                        placeholder="Name"
                      />
                    </div>
                    <div className="form-items">
                      <div className="form-headings">
                        <span style={{ color: "red" }}>*</span>Country:
                      </div>
                      <select name="country" id="country">
                        <option value="India">India</option>
                      </select>
                    </div>
                    <div className="form-items">
                      <div className="form-headings">
                        <span style={{ color: "red" }}>*</span>Phone:
                      </div>
                      <select name="country-code" id="country-code">
                        <option value="+91">+91</option>
                      </select>
                      <input
                        type="text"
                        name="phone-no"
                        id="phone-no"
                        minLength={10}
                        maxLength={10}
                        placeholder="0000000000"
                      />
                    </div>
                    <div className="form-items">
                      <p><b>OR</b></p>
                    </div>
                    <div className="form-items">
                      <div className="form-headings">
                        <span style={{ color: "red" }}>*</span>Email:
                      </div>
                      <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="example@amail.com"
                      />
                    </div>
                  </form>
                </div>
                <Footer handleSubmit={handleSubmit} style = {styleForFooter}/>
              </div>
    </>
  )
}

export default LoginForm;