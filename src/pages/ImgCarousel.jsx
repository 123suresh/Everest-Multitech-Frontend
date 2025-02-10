import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import { FeatureCard } from "@/widgets/cards";

const cardData = [
  {
    name: "First Card",
    title: "Cell Phone Repair",
    description: "We fix all phone issues quickly!",
    image:
      "https://img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/2.jpg/:/cr=t:21.8%25,l:0%25,w:100%25,h:56.39%25/rs=w:600,h:451,cg:true",
  },
  {
    name: "Second Card",
    title: "Laptop Repair",
    description: "Expert laptop diagnostics and repair.",
    image:
      "https://img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/1.jpg/:/cr=t:12.41%25,l:0%25,w:100%25,h:75.19%25/rs=w:600,h:451,cg:true",
  },
  {
    name: "Third Card",
    title: "Tablet Repair",
    description: "Quick and affordable tablet repair service.",
    image: "https://s3-media0.fl.yelpcdn.com/bphoto/PqwGjDAtfSIIClTXhJ0bAA/l.jpg",
  },
  {
    name: "Fourth Card",
    title: "Accessory Sales",
    description: "Get the best phone accessories here!",
    image:
      "https://img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/2.jpg/:/cr=t:21.8%25,l:0%25,w:100%25,h:56.39%25/rs=w:600,h:451,cg:true",
  },
];

const ImageCarousel = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination]}
      slidesPerView={3}
      spaceBetween={20}
      autoplay={{ delay: 2000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      loop={true}
    >
      {cardData.map((card, index) => (
        <SwiperSlide key={index}>
          <FeatureCard
            key={card.title}
            title={card.title}
            description={card.description}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ImageCarousel;
