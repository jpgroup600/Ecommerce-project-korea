import React, { useState } from 'react'
import FeakApi from "../JsonData/FeakApi.json"
const SmallCard = () => {

   const data = FeakApi;


  return (
    <>
    <div className="container mx-auto mt-8">
 
        <div className="grid lg:grid-cols-9 md:grid-cols-6 sm:grid-cols-6 grid-cols-3 px-4 gap-4 ">
            {data.map((item,index)=>{
                return(
                    <>   <div  key={index}>
                        <div className="small-card mb-3">
                            <img src={item.image} alt="" />
                            </div>
                            <h3 style={{marginLeft:'-15px'}}>{item.Loaction}</h3>
                    </div>
                 
                    
                    </>
                )
            })
        }


        </div>
    </div>
    </>
  )
}

export default SmallCard