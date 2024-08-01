import React from "react";
import CategoryData from "../JsonData/Category.json";
import Blog from "../assets/images/Blog.svg"

const AgainCategory = () => {
  const data = CategoryData;

  return (
    <>
      <div className="container mx-auto mt-12 lg:px-12">
        <div className="category-section 2xl:px-6 xl:px-12 lg:px-5 flex justify-between mb-5 2xl:mb-8 " style={{maxWidth:'1225px',margin:'0 auto'}} >
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
                <div className="category-card-section px-4  mx-auto pt-6">
                  <img
                    src={items.image}
                    className="mb-3"
                    alt=""
                    style={{   width: '291px !',

                      height: '163px',
                      borderRadius: '10px',}}
                
                  />
                  <h3 className="text-start   mb-3 mt-4 flex items-center gap-2">
                  <span><img src={Blog} alt="" /></span>
                    {items.heading}
                  </h3>
                  <h4 className="text-start  mx-5 mb-3">
                 {items.subheading}
                  </h4>
                  <h5 className="text-start  mx-5 mb-3">{items.coupon}</h5>
                </div>
              </>
            ))}
        </div>
      </div>
    </>
  );
};

export default AgainCategory;
