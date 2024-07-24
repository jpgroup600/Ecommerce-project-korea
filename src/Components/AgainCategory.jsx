import React from "react";
import CategoryData from "../JsonData/Category.json";
import Blog from "../assets/images/Blog.svg"

const AgainCategory = () => {
  const data = CategoryData;
  console.log(data)
  return (
    <>
      <div className="container mx-auto mt-12">
        <div className="category-section px-4 flex justify-between">
          <div className="category-heading">
            <h3>Catagory</h3>
          </div>
          <div className="category-btn">
            <a href="">더보기</a>
          </div>
        </div>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 mt-8 gap-6">
          {Array.isArray(data) &&
            data.length > 0 &&
            data.map((items) => (
              <>
                <div className="category-card-section px-4  mx-auto">
                  <img
                    src={items.image}
                    className="mb-3"
                    alt=""
                    style={{ borderRadius: "35px", height: "339px" }}
                  />
                  <h3 className="text-start  mx-5 mb-3 flex gap-3">
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
