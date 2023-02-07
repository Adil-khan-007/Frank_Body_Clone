import React, { useEffect, useState } from 'react';
import './popularcat.css';
function PopularCategorySection() {
    const [data,setData] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:3004/popular").then((res)=>res.json())
        .then((data)=>setData(data))
     })

    return (
        <>
            <div className="popular_cat">
                <div className="headings">
                    <h2>Popular Categories</h2>
                    <p>When The Going Gets Tough, The Tough Get Category.</p>
                </div>

                <div className="grid_system">
                    {
                      data.map((el)=>{
                         return <div key={el.id}>
                            <img src={el.image} alt="Not Found" />
                            <h3>{el.title}</h3>
                          </div>
                        })
                    }
                </div>
            </div>
        </>
    );
}

export default PopularCategorySection;