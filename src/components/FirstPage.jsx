import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import LoginForm from "./LoginForm";
import OtpForm from "./OtpForm";

const FirstPage = () => {
    const {formType} = useSelector(state=>state.formType);
    console.log("abcd");
  useEffect(()=>{
    // console.log(formType);
  },[formType]);
  return (
    <>
      <div className="container">
        <div className="headline">
          <h1>Sell or Rent your Property For Free.</h1>
          <p>
            Whether you're ready to sell or looking for answers, we'll guide you
            with data and expertise specific to your needs.
          </p>
        </div>
        <div className="steps-and-form">
          <div className="steps">
            <h3>Upload your property in 4 simple steps</h3>
            <ul type="none">
              <li>
                ✅ Add your properties <b>Basic Details.</b>
              </li>
              <li>
                ✅ Add property <b>Location.</b>
              </li>
              <li>
                ✅ Add property <b>Features and Amenities.</b>
              </li>
              <li>
                ✅ Add <b>Price Details.</b>
              </li>
              <li>
                ✅ Add your <b>Best Property Shots.</b>
              </li>
            </ul>
          </div>
          {formType ? <LoginForm /> : <OtpForm />}
        </div>
      </div>
    </>
  );
};

export default FirstPage;
