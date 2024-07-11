import React, { useEffect, useState } from "react";

const PropertyDetail = () => {
  const [bgColor,setBgColor] = useState("white");
  const [color,setColor] = useState("black");
  const handleClick = () => {
    if(bgColor === 'white'){
      setBgColor('blue');
      setColor('white');
    }else{
      setBgColor('white');
      setColor('black');
    }
  }
  useEffect(() => {},[bgColor]);
  return (
    <div className="form-container" style={{ width: "100%" }}>
      <h2 style={{height:"10%",padding:"20px"}}>Lets get you started!</h2>
      <div className="form">
        <form>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Property for:
            </div>
            <input
              type="radio"
              name="propfor"
              id="rent"
              value={"Rent"}
              checked
            />
            <label htmlFor="rent">Rent&emsp;</label>
            <input type="radio" name="propfor" id="sale" value={"Sale"} />
            <label htmlFor="sale">Sale</label>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Property Type:
            </div>
            <input
              type="radio"
              name="proptype"
              id="residential"
              value={"residential"}
              checked
            />
            <label htmlFor="residential">Residential&emsp;</label>
            <input
              type="radio"
              name="proptype"
              id="commercial"
              value={"commercial"}
            />
            <label htmlFor="commercial">Commercial&emsp;</label>
            <input
              type="radio"
              name="proptype"
              id="landplot"
              value={"landplot"}
            />
            <label htmlFor="landplot">Land/Plot</label>
          </div>
          <div
            className="form-items"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <div className="form-headings">
                <span style={{ color: "red" }}>*</span>Built up Area:
              </div>
              <input
                type="text"
                name="built-area"
                id="name"
                value={"580"}
                placeholder="Name"
              />
            </div>
            <div>
              <div className="form-headings">
                <span style={{ color: "red" }}>*</span>Carpet Area:
              </div>
              <input
                type="text"
                name="carpet-area"
                id="name"
                value={"500"}
                placeholder="Name"
              />
            </div>
          </div>
          <div
            className="form-items"
            style={{ display: "flex", justifyContent: "space-between" }}
          >
            <div>
              <div className="form-headings">
                <span style={{ color: "red" }}>*</span>Property on Floor:
              </div>
              <input
                type="text"
                name="proponfloor"
                id="proponfloor"
                value={"2"}
              />
            </div>

            <div>
              <div className="form-headings">
                <span style={{ color: "red" }}>*</span>Total Floors:
              </div>
              <input type="text" name="totfloor" id="totfloor" value={"5"} />
            </div>

            <div>
              <div className="form-headings">
                <span style={{ color: "red" }}>*</span>Property Facing:
              </div>
              <select name="propface" id="propface">
                <option value="East">East</option>
                <option value="West">West</option>
                <option value="North">North</option>
                <option value="South">South</option>
              </select>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Property Age:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>Less than 1 year</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>1 - 3 years</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>3 - 5 years</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>Greater than 5 years</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>BHK Type:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>1</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>2</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>3</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>4</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Bathrooms/Toilets:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>1</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>2</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>3</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>4</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Balcony:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>0</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>1</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>2</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>3</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Tenant Preference:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>Any</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>Family</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>Bachelor{`(Man)`}</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>Bachelor{`(Woman)`}</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Availability:
            </div>
            <div style = {{display:"flex",justifyContent:"space-between"}}>
              <div style={{backgroundColor:bgColor,color:color,padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}} onClick = {handleClick}>Immediate</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>15 days</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>1 month</div>
              <div style={{backgroundColor:'white',color:'black',padding: '5px',border:'1px solid grey',borderRadius:'10px',cursor:'pointer'}}>2 months</div>
            </div>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Property Description:
            </div>
            <textarea name="propdesc" id="propdesc" rows={8} cols={100} placeholder="Enter description" style={{padding:'5px'}}></textarea>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PropertyDetail;
