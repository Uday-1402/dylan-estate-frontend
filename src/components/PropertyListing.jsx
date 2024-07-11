import React, { useEffect, useState } from "react";
import "./propertyListing.css";
import Footer from "./Footer";
import PropertyDetail from "./PropertyDetail";
import { useDispatch, useSelector } from "react-redux";
import { setDetailsFormType } from "../features/detailsFormSlice";
import FormSubmitModal from "./FormSubmitModal";
import LocationDetail from "./LocationDetail";
import FeatureAmenities from "./FeatureAmenities";
import PriceDetail from "./PriceDetail";
import PropertyImages from "./PropertyImages";

const PropertyListing = () => {
  const [comp, setComp] = useState(<PropertyDetail />);
  const { detailsFormType } = useSelector((state) => state.detailsFormType);
  const dispatch = useDispatch();
  const handleSubmit = () => {
    dispatch(setDetailsFormType({ detailsFormType: detailsFormType + 1 }));
  };

  useEffect(() => {
    switch(detailsFormType){
        case 1:
            setComp(<LocationDetail/>);
            break;
        case 2:
            setComp(<FeatureAmenities/>);
            break;
        case 3:
            setComp(<PriceDetail/>);
            break;
        case 4:
            setComp(<PropertyImages/>);
            break;
        case 5:
            setComp(<FormSubmitModal/>);
            break;
        default:
            setComp(<PropertyDetail/>);
            break;
    }
  },[detailsFormType]);
  return (
    <>
      <div className="property-detail-container">
        <div className="forms-container">
          <div className="tab">
            <div>Property Details</div>
            <div>Location Details</div>
            <div>Features & Amenities</div>
            <div>Price Details</div>
            <div>Property Images</div>
          </div>
          <div className="forms">
            {comp}
          </div>
          <Footer handleSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
};

export default PropertyListing;
