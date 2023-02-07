import React, { useEffect, useState } from "react";
// import img2 from "../sliderImg/img1off.avif";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Pagination, Navigation  , Autoplay} from "swiper";

function OfferBanner() {
  const [data,setData] = useState([]);

  useEffect(()=>{
     fetch("http://localhost:3004/trending").then((res)=>res.json())
     .then((data)=>setData(data))
  })

  return (
    <>
      {/* <div className="afterProductGrid">
        <img src="../sliderImg/img1off.avif" alt="Not found" />
      </div> */}

      <div className="trendingSection">
        <h2><span >---------------</span> Trending<span >---------------</span></h2>

        <div className="trendingSlider">
          <Swiper
            slidesPerView={6}
            spaceBetween={30}
            slidesPerGroup={1}
            loop={true}
            loopFillGroupWithBlank={true}
            autoplay={true}
            navigation={true}
            modules={[Pagination, Navigation , Autoplay]}
            className="mySwiper"
          >

            {
                data.map((elem , idx)=>{
                    return <>
                    <SwiperSlide className="testingClas" key={idx+12}>
                <img src={elem.image} alt="not found" />
            </SwiperSlide>
                    </>
                })
            }

          </Swiper>
        </div>
      </div>
    </>
  );
}

export default OfferBanner;
