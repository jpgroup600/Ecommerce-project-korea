import React from "react";

const BasicSetting = () => {
  return (
    <>
      <div className="container mt-5 basic-campian-section 2xl:px-12 lg:px-5">
        <div className=" 2xl:px-12">
          <div className="basic-setting 2xl:px-12 lg:px-0">
            <h2>Campagin</h2>
            <button className="bring-prev">Bring prev campaign</button>
            <button className="reset">reset</button>
          </div>
          <div className="basic-setting-main-page">
            <div className="basic-setting-one flex items-center gap-3">
              <div className="one">
                <span> 1</span>
              </div>
              <div className="basic-setting-headin">
                <h1>Basic settings</h1>
              </div>
              <div className="last-basic ">
                <p>필</p>
                <p>수</p>
              </div>
            </div>

            <div className="form-data ">
              <div className="form-input-group">
                <label>Campaign Name(30letter)</label>
                <input type="text" placeholder="campaign name" />
              </div>
            </div>


            <div className="form-data ">
              <div className="form-input-group">
                <label>Service</label>
               <textarea name="" id="" rows={10}></textarea>
              </div>
            </div>


        <div className="grid lg:grid-cols-2">
       
        <div className="form-data">
              <div className="form-input-group" style={{width:'514px'}}>
                <label>Campaign time (Reivewer time / At least 1week)</label>
               <input type="date"/>
              </div>
            </div>
    

        </div>


          </div>
        </div>
      </div>
    </>
  );
};

export default BasicSetting;
