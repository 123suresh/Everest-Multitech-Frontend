import React from "react";
import {
  Card,
  Typography
} from "@material-tailwind/react";
import { PageTitle } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, contactData } from "@/data";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {RepairSlidingImg} from '../everestdata/RepairData';
import { Box } from "@mui/material";
import {servicesData} from "../everestdata/servicesData"
import {EmailTemp} from "../components/email/EmailTemp";

export function Home() {
  return (
    <>
      <div className="relative flex h-[80vh] content-center items-center justify-center">
        <video
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/img/RepairVideo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

        {/* Content */}
        <div className="max-w-8xl container relative mx-auto z-20">
          <div className="flex flex-wrap items-center justify-center">
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              {/* Centered Image */}
              {/* <div className="flex justify-center">
                <img
                  src="/img/everest_logo1.png"
                  alt="Everest Multi Tech"
                  className="max-w-full h-auto"
                  width="270px"
                  height="auto"
                />
              </div> */}

              {/* Text Content */}
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Welcome to
              </Typography>
              <Typography
                variant="h1"
                color="white"
                className="mb-6 font-black text-5xl md:text-6xl lg:text-7xl"
              >
                EVEREST MULTI TECH
              </Typography>
              <Typography
                variant="h4"
                color="white"
                className="mb-6 font-bold text-2xl md:text-3xl lg:text-4xl"
              >
                Repair and Printing
              </Typography>
              <Typography variant="lead" color="white" className="opacity-80 text-lg md:text-xl">
                Everest Multi Tech is the answer to all your technology issues. From cracked screens to broken charging ports, a malfunctioning game console to broken printers, we will service it all and get you back up and running!
              </Typography>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section className="-mt-32 bg-white px-2.5 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="relative w-full min-h-[300px] z-30"> {/* Increased z-index */}
            <Swiper
              modules={[Autoplay, Pagination]}
              slidesPerView={1}
              spaceBetween={20}
              autoplay={{ delay: 2000, disableOnInteraction: false }}
              pagination={{ clickable: true }}
              loop={true}
              breakpoints={{
                640: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="w-full h-full"
            >
          {RepairSlidingImg.map(({ title, description, image }) => (
            <SwiperSlide key={title}>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <FeatureCard title={title} description={description} image={image} />
              </Box>
            </SwiperSlide>
          ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Rest of the code remains unchanged */}

      <section className="px-2.5 pt-20 pb-48 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle section="Our Services" heading="Here are our Services">
            At  Everest Multi Tech Co LLC, we are your one-stop shop for a wide range of services 
            designed to meet your personal and business needs. Whether you need custom printing, 
            phone repairs, IT support, or remittance services, we’ve got you covered. Explore our 
            full list of offerings below, and trust us to deliver the highest quality service 
            every time.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {servicesData.map(({ img, name, position, link }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                link={link}
                // socials={
                //   <div className="flex items-center gap-2">
                //     {socials.map(({ color, name }) => (
                //       <IconButton key={name} color={color} variant="text">
                //         <i className={`fa-brands text-xl fa-${name}`} />
                //       </IconButton>
                //     ))}
                //   </div>
                // }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Co-Working Section */}
      <section className="relative bg-white px-2.5">
        <div className="container mx-auto">
          <PageTitle heading="Reviews">
            At Everest Multi Tech, customer satisfaction is our top priority. We take pride in delivering exceptional service,
            ensuring that every repair, printing, and shipping need is met with precision and care. Our commitment to quality,
            efficiency, and reliability makes us the go-to choice for customers seeking expert solutions.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description, name, date }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 hover:shadow-lg transition-shadow duration-300 p-4"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h4" color="blue-gray" className="mb-2 pt-3 pb-3">
                  {title}
                </Typography>
                <Typography variant="h5" className="font-normal text-blue-gray-500 pt-3 pb-3">
                  {description}
                </Typography>
                <Typography variant="h5" className="font-normal text-blue-gray-500 pt-3 pb-3">
                  {name} - {date}
                </Typography>
                {/* <Button variant="text" className="p-0 hover:bg-transparent text-base pt-3 pb-3" style={{ color: "#ff6000" }}>
                  Read full review <ArrowForwardIosIcon fontSize="small" />
                </Button> */}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gray-50 px-2.5">
        <div className="container mx-auto">
          <PageTitle section="Contact Us" heading="Wants to contact us?">
            Complete this form and we will get back to you as soon as possible.
            <br/>
            Phone Number: <strong>(614) 282-7012</strong>
          </PageTitle>
          {/* <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex flex-col gap-8 md:flex-row">
              <Input variant="outlined" size="lg" label="Full Name" className="flex-1" />
              <Input variant="outlined" size="lg" label="Email Address" className="flex-1" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form> */}
          <Box sx={{width:"100%", display: "flex", justifyContent: "center", alignItems: "center", py:"30px"}}><EmailTemp/></Box>
        </div>
      </section>
      
    </>
  );
}

export default Home;