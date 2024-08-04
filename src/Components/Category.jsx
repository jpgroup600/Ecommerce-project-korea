import React from "react";
import CategoryData from "../JsonData/Category.json";
import Blog from "../assets/images/Blog.svg"

const Category = () => {
  const data = CategoryData;

  return (
    <>
      <div className="container mx-auto mt-12 lg:px-12">
        <div className="category-section 2xl:px-2 xl:px-6 lg:px-0 flex justify-between mb-5 2xl:mb-8 " style={{maxWidth:'1225px',margin:'0 auto'}} >
          <div className="category-heading" >
            <h3>Catagory</h3>
          </div>
          <div className="category-btn" >
            <a href="">더보기</a>
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
    </>
  );
};

export default Category;
