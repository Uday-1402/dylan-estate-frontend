import React,{useState,useEffect} from 'react'

const FeatureAmenities = () => {
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
      <div className="form">
        <form>
          <h2>General Features</h2>
          <br />
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Non Veg Allowed:
            </div>
            <input
              type="radio"
              name="nonveg"
              id="yes"
              value={"allowed"}
              checked
            />
            <label htmlFor="yes">Yes&emsp;</label>
            <input type="radio" name="nonveg" id="no" value={"notallowed"} />
            <label htmlFor="no">No</label>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Pets Allowed:
            </div>
            <input
              type="radio"
              name="pets"
              id="petsyes"
              value={"allowed"}
              checked
            />
            <label htmlFor="petsyes">Yes&emsp;</label>
            <input type="radio" name="pets" id="petsno" value={"notallowed"} />
            <label htmlFor="petsno">No</label>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Electricity:
            </div>
            <input
              type="radio"
              name="electricity"
              id="frequent"
              value={"frequent"}
            />
            <label htmlFor="frequent">Frequent Powercut&emsp;</label>
            <input type="radio" name="electricity" id="nocut" value={"nocut"} checked/>
            <label htmlFor="nocut">Rare/No cut</label>
          </div>
          <div className="form-items">
            <div className="form-headings">
              <span style={{ color: "red" }}>*</span>Water Supply:
            </div>
            <input
              type="radio"
              name="water"
              id="mcp"
              value={"municipalcorp"}
              checked
            />
            <label htmlFor="mcp">Municipal Corporation&emsp;</label>
            <input
              type="radio"
              name="water"
              id="borewell"
              value={"borewell"}
            />
            <label htmlFor="borewell">Borewell&emsp;</label>
            <input type="radio" name="water" id="both" value={"both"} />
            <label htmlFor="both">Both</label>
          </div>
          
          <hr /><br />
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
  )
}

export default FeatureAmenities