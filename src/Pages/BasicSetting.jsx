import React, { useState } from "react";
import Plus from "../assets/images/plus.svg"
import {NavLink} from "react-router-dom"


const BasicSetting = () => {
  const [activeSocial, setActiveSocial] = useState(null);

  // Handler for click events
  const handleClick = (social) => {
    setActiveSocial(social);
  };

  const InputItems={
    width:'514px',background:"transparent ",border:"1px solid #ccc"
  }


  const basicInfo ={
    marginTop:'170px'
  }
  
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


        
       
        <div className="form-data">
        <div className="grid lg:grid-cols-2">
              <div className="form-input-group" >
                <label>Campaign time (Reivewer time / At least 1week)</label>
               <input type="date" style={{width:'514px '}}/>
              </div>
 

              <div className="form-input-group" >
                <label style={{visibility:'hidden'}}>Campaign time (Reivewer time / At least 1week)</label>
               <input type="date" className="date" style={InputItems}/>
              </div>
            </div>

            <div className="grid lg:grid-cols-2">
              <div className="form-input-group mt-12" >
                <label>Expericence & Review Due</label>
               <input type="date" style={InputItems}/>
              </div>
 

              <div className="form-input-group mt-12" >
                <label style={{visibility:'hidden'}}>Campaign time (Reivewer time / At least 1week)</label>
               <input type="date" className="date" style={InputItems}/>
              </div>
            </div>
    

            <div className="grid lg:grid-cols-2">
              <div className="form-input-group mt-12" >
                <label>How many members</label>
               <div className="member-input">
                <span>-</span>
                <p>1</p>
                <span>+</span>
               </div>
               <span className="mt-2">range of 1~100</span>
              </div>
 

              <div className="form-input-group mt-12" >
                <label >(Optional) Points to give out</label>
               <div className="zero-input">
                <p>0</p>
                <strong>p</strong>
               </div>
              </div>
            </div>



        </div>



{/* baisc setting */}


<div className="basic-setting-one flex items-center gap-2" style={basicInfo}>
              <div className="one">
                <span> 2</span>
              </div>
              <div className="basic-setting-headin">
                <h1>Basic settings</h1>
              </div>
              <div className="last-basic ">
                <p>필</p>
                <p>수</p>
              </div>

            </div>
            
            
            {/* basic */}
            <div className="basic-info-capian-type mt-12">
                <p>Campaign type</p>
              </div>


{/* Visit */}

    <div className="grid lg:grid-cols-2">
      <NavLink>
    <div className="visti">
      <h4>Visit</h4>
      <p>Visit and reivew</p>
    </div>
    </NavLink>

    <div className="ship">
      <h4>Ship</h4>
      <p>Get shipping and review</p>
    </div>
    </div>

    {/* Drop */}
    <div className="drop">
      <div className="Main-image">
        <p>Main image (Max 5)</p>
      </div>
      <div className="drag-drop">
       <div className="drag-drop-heading">
       <h2>Drag to upload</h2>
       <p>600x520px, 10mb이하, jpg/png 권장</p>
       </div>
       <div className="upload">
        <img src={Plus} alt="" />
       </div>
      </div>
    </div>

    {/* Adress to visit */}
    <div className="Adress_to_visit">
      <div className="address_to_visit_para">
        <p>Adress to visit</p>
      </div>
      <div className="address-one mt-3 px-5">
        <p className="주소설정">주소 설정</p>
        <p className="주소검색">주소 검색</p>
      </div>
    </div>

    {/* 나머지 주소 입력 */}

    <div className="last-container mt-2">
      <p>나머지 주소 입력</p>
    </div>


    {/* Chanel */}
    <div className="chanel-social">
      <h3>Chanel</h3>
      <div className="grid lg:grid-cols-5 mt-6 ">
      <div className="youtube">Youtube</div>
      <div className="insta">instagram</div>
      <div className="insta">Blog</div>
      <div className="insta">Web</div>
      <div className="insta">Etc</div>
      </div>
    </div>

    {/* <div className="chanel-social mb-12 pb-12">
      <h3>Chanel</h3>
      <div className="grid lg:grid-cols-5 mt-6">
        <div
          className={`youtube ${activeSocial === "youtube" ? "active" : ""}`}
          onClick={() => handleClick("youtube")}
        >
          Youtube
        </div>
        <div
          className={`insta ${activeSocial === "instagram" ? "active" : ""}`}
          onClick={() => handleClick("instagram")}
        >
          Instagram
        </div>
        <div
          className={`insta ${activeSocial === "blog" ? "active" : ""}`}
          onClick={() => handleClick("blog")}
        >
          Blog
        </div>
        <div
          className={`insta ${activeSocial === "web" ? "active" : ""}`}
          onClick={() => handleClick("web")}
        >
          Web
        </div>
        <div
          className={`insta ${activeSocial === "etc" ? "active" : ""}`}
          onClick={() => handleClick("etc")}
        >
          Etc
        </div>
      </div>
    </div> */}

{/* End */}

          </div>
        </div>
        <div className="2xl:px-12  mt-10 mb-12" style={{paddingBottom:'90px'}}>
      <div className="grid lg:grid-cols-2 mb-12" >
        <div className="bottom-btn-one ">
          <p>캠페인 미리보기</p>
        </div>
        <div className="bottom-btn-two">
          <p>캠페인 등록하기</p>
        </div>
      </div>
        </div>
      </div>
    </>
  );
};

export default BasicSetting;
