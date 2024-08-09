import React from "react";
import Gropu from "../assets/images/Group 26285.svg";
import Vector from "../assets/images/Vectore.svg"
import CategoryData from "../JsonData/Category.json";
import Blog from "../assets/images/Blog.svg"

const Desktop17 = () => {
 
  const data = CategoryData.slice(0,4);
  return (
    <>
      <div className="container mx-auto  2xl:px-12">
        <div className="  brand-section">
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="brand-left py-5">
              <div className="brand-title">
                <h1>[Brand] Title</h1>
                <p>Bla Bla Bla Bla</p>
                <h4 className="flex items-center gap-2 blog-left">
                  <img src={Blog} alt="" />
                  2Days left</h4>
                <h5>Product Info</h5>
              </div>
              <img src={Gropu} alt="" className="mt-8 mb-9" />
              <div className="brand-left-button ">
                <button className="flex">More
                <img src={Vector} alt="" className="mt-1" />
                </button>
              </div>
            </div>
            <div className="mt-8 border pt-3 brand-right">
              <table>
                <tr>
                  <th className="pb-3">Campagin</th>
                  <th className="pb-3">07.11 (수) ~ 07.21 (토)</th>
                </tr>
                <tr>
                  <td className="pb-3">Enroll</td>
                  <td className="pb-3">07.23 (토)</td>
                </tr>
                
                <tr>
                  <td className="pb-3">Deadline</td>
                  <td className="pb-3">07.24 (일) ~ 07.31 (월)</td>
                </tr>
               
                <tr>
                  <td className="pb-3">Result</td>
                  <td className="pb-3">08.02 (토)</td>
                </tr>
                <tr>
                  <td className="pb-3"> Current Enroll</td>
                  <td className="pb-3">지원 51 / 모집 1</td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b"></td>
                </tr>
                <tr>
                  <td className="pt-3 pb-3 px-1">
                    <p>Info</p></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b"></td>
                </tr>
                <tr> 
                  <td className="pt-3 pb-3 px-1">
                    <p>how to register</p></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b" style={{borderCollapse:'collapse'}}></td>
                </tr>
                <tr>
                  <td className="pt-3 pb-3 px-1">
                    <p>Misson</p></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b"></td>
                </tr>
                <tr>
                  <td className="pt-3 pb-3 px-1">
                    <p>Keyword</p></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b"></td>
                </tr>
                <tr>
                  <td className="pt-3 pb-3 px-1">
                    <p>Aditional Info</p></td>
                </tr>
                <tr>
                  <td colSpan={2} className="border-b"></td>
                </tr>
                <tr>
                  <td colSpan={2}>
                  <button>Register</button>
                  </td>
                </tr>
                <tr>
                  <td colSpan={2}>
                  <button className="event-btn">Event <br /> Banner</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>

          {/* chines */}
          <div className="chines-text mb-5 flex gap-12" style={{width:'1220px',display:'flex',flexDirection:'column'}}>
        <div className="chines-heading">
          <h2>제공 내역</h2>
        </div>
        <div className="chines-headings" >
          <h2 className="mb-8">        명륜진사갈비 40,000원 이용권</h2>
          <p>[참고사항]</p>
          <p>※ 전국 명륜진사갈비에서 사용 가능한 이용권입니다.</p>
          <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
          <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합니다.</p>
          <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니다.</p>
          <p className="mb-9" >※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
          <p style={{color:'#FF0000'}}>★ '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
          <div className="border-b bottom-border"></div>
        </div>
        {/* 02 */}
        <div className="chines-heading">
          <h2>제공 내역</h2>
        </div>
        <div className="chines-headings" >
          <h2 className="mb-8">방문 및 예약안내</h2>
          <p>[영업시간 및 방문 안내]</p>
          <p>※장찾기(클릭)</p>
          <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
          <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합니다.</p>
          <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니다.</p>
          <p className="mb-9" >※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
          <p style={{color:'#FF0000'}}>★ '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
          <div className="border-b bottom-border"></div>
        </div>

        {/* 03 */}
        <div className="chines-heading">
          <h2>제공 내역</h2>
        </div>
        <div className="chines-headings" >
          <h2 className="mb-8">방문 및 예약안내</h2>
          <p>[영업시간 및 방문 안내]</p>
          <p>※장찾기(클릭)</p>
          <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
          <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합니다.</p>
          <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니다.</p>
          <p className="mb-9" >※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
          <p style={{color:'#FF0000'}}>★ '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
          <div className="border-b bottom-border"></div>
        </div>

         {/* 03 */}
         <div className="chines-heading">
          <h2>제공 내역</h2>
        </div>
        <div className="chines-headings" >
          <h2 className="mb-8">방문 및 예약안내</h2>
          <p>[영업시간 및 방문 안내]</p>
          <p>※장찾기(클릭)</p>
          <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
          <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합니다.</p>
          <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니다.</p>
          <p className="mb-9" >※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
          <p style={{color:'#FF0000'}}>★ '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
          <div className="border-b bottom-border"></div>
        </div>


         {/* 03 */}
         <div className="chines-heading">
          <h2>제공 내역</h2>
        </div>
        <div className="chines-headings" >
          <h2 className="mb-8">방문 및 예약안내</h2>
          <p>[영업시간 및 방문 안내]</p>
          <p>※장찾기(클릭)</p>
          <p>※ 명륜진사갈비 홈페이지에서 확인 가능</p>
          <p>※ 모바일 이용권으로 제공되며 이용금액 내에서 자유롭게 이용 가능합니다.</p>
          <p>※ 잔액은 환불되지 않습니다. 이용금액 외 추가주문은 결제 부탁드립니다.</p>
          <p className="mb-9" >※ 점심 특선 메뉴나 기타 메뉴만 사용 시 이용권 정상 이용 불가합니다.</p>
          <p style={{color:'#FF0000'}}>★ '잠실아시아선수촌점, 서충주기업도시점'은 체험 불가 매장입니다.</p>
          <div className="border-b bottom-border"></div>
        </div>
      
        </div> 

        


        

        </div>
      </div>

   


    {/* category */}
    <div style={{background:'#D9D9D9'}} className="py-3 ">
    <div className="container mx-auto mt-12 lg:px-12 pb-3">
        <div className="category-section 2xl:px-2 xl:px-6 lg:px-0 flex justify-between mb-5 2xl:mb-8 " style={{maxWidth:'1225px',margin:'0 auto'}} >
          <div className="category-heading" >
            <h3>Catagory</h3>
          </div>
         
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 sm:grid-cols-2 mt-8 " style={{maxWidth:'1225px',margin:'0 auto'}}>
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((items) => (
              <>
            
        <div className="category-card-section mx-auto pt-6 ">
                <div className="lg:px-2 2xl:px-0">
                  <img src={items.image} alt="" className="mb-3" style={{borderRadius:'10px',width:'291px',height:'163px'}}/>
                </div>
              <div className="mx-3">
              <h3 className="text-start   mb-3 mt-4 flex items-center gap-2">
                  <span><img src={Blog} alt="" /></span>
                    {items.heading}
                  </h3>
                  <h4 className="text-start  mx-5">
                 {items.subheading}
                  </h4>
                  <h5 className="text-start  mx-5 mb-3">{items.coupon}</h5>
              </div>
            </div>

              </>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default Desktop17;
