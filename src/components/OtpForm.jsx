import React from "react";
import { useDispatch } from "react-redux";
import { setPage } from "../features/pageSlice";
import Footer from "./Footer";

const OtpForm = () => {
  const dispatch = useDispatch();
  const styleForFooter = {backgroundColor: 'white'};
    const handleSubmit = () =>{
        // console.log('Inside handle submit of OtpForm.jsx');
        dispatch(setPage({page:1}));
    }
  return (
    <div className="form-container">
      <h2>Lets get you started!</h2>
      <div className="form">
        <form>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Enter otp sent to <b>0000000000</b>:
            </div>
            <input type="text" name="otp" id="otp" placeholder="0000000000"/>
          </div>
        </form>
      </div>
      <Footer handleSubmit={handleSubmit} style = {styleForFooter}/>
    </div>
  );
};

export default OtpForm;
