import React from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
  Button,
  IconButton,
  Input,
  Textarea,
  Checkbox,
} from "@material-tailwind/react";
import { FingerPrintIcon, UsersIcon } from "@heroicons/react/24/solid";
import { PageTitle, Footer } from "@/widgets/layout";
import { FeatureCard, TeamCard } from "@/widgets/cards";
import { featuresData, teamData, contactData } from "@/data";
import ImageCarousel from "./ImgCarousel";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Autoplay, Pagination } from "swiper/modules";

export function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative flex h-screen content-center items-center justify-center pt-16 pb-32" style={{ backgroundColor: "#ff6000" }}>
        <div className="absolute top-0 h-full w-full bg-cover bg-center" />
        <div className="absolute top-0 h-full w-full  bg-cover bg-center" />
        <div className="max-w-8xl container relative mx-auto">
          <div className="flex flex-wrap items-center justify-center"> {/* Added justify-center */}
            <div className="ml-auto mr-auto w-full px-4 text-center lg:w-8/12">
              {/* Centered Image */}
              <div className="flex justify-center mb-6"> {/* Added flex and justify-center */}
                <img
                  src='//img1.wsimg.com/isteam/ip/7fe5675c-56c8-4e1d-baba-1474b5263ce5/blob-8e4d79e.png/:/rs=h:127,cg:true,m/qt=q:95'
                  alt="Everest Multi Tech"
                  className="max-w-full h-auto" // Ensures the image is responsive
                  width="230px"
                />
              </div>

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
      <section className="-mt-32 bg-white px-4 pb-20 pt-4">
        <div className="container mx-auto">
          <div className="relative w-full min-h-[300px]">
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
              {featuresData.map(({ color, title, icon, description }) => (
                <SwiperSlide key={title}>
                  <FeatureCard
                    key={title}
                    color={color}
                    title={title}
                    icon={React.createElement(icon, {
                      className: "w-5 h-5 text-white",
                    })}
                    description={description}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-2 pt-20 pb-48 bg-gray-50">
        <div className="container mx-auto">
          <PageTitle section="Our Services" heading="Here are our Services">
            As a certified vendor for cell phone, laptop, computer, gaming device repairs, and flex/printing services,
            we pride ourselves on delivering exceptional customer service. Our commitment to quality ensures that every
            repair meets the highest standards, guaranteeing customer satisfaction. We are known for our quick, reliable,
            and responsible service, backed by a guarantee on every repair we perform. Trust us to restore your devices and
            meet all your printing needs with precision and care.
          </PageTitle>
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                socials={
                  <div className="flex items-center gap-2">
                    {socials.map(({ color, name }) => (
                      <IconButton key={name} color={color} variant="text">
                        <i className={`fa-brands text-xl fa-${name}`} />
                      </IconButton>
                    ))}
                  </div>
                }
              />
            ))}
          </div>
        </div>
      </section>

      {/* Co-Working Section */}
      <section className="relative bg-white py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Co-Working" heading="Build something">
            Put the potentially record low maximum sea ice extent tihs year down
            to low ice. According to the National Oceanic and Atmospheric
            Administration, Ted, Scambos.
          </PageTitle>
          <div className="mx-auto mt-20 mb-48 grid max-w-5xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-3">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mx-auto mb-6 grid h-14 w-14 place-items-center rounded-full bg-blue-gray-900 shadow-lg shadow-gray-500/20">
                  {React.createElement(icon, {
                    className: "w-5 h-5 text-white",
                  })}
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative bg-gray-50 py-24 px-4">
        <div className="container mx-auto">
          <PageTitle section="Contact Us" heading="Want to work with us?">
            Complete this form and we will get back to you in 24 hours.
          </PageTitle>
          <form className="mx-auto w-full mt-12 lg:w-5/12">
            <div className="mb-8 flex flex-col gap-8 md:flex-row">
              <Input variant="outlined" size="lg" label="Full Name" className="flex-1" />
              <Input variant="outlined" size="lg" label="Email Address" className="flex-1" />
            </div>
            <Textarea variant="outlined" size="lg" label="Message" rows={8} />
            <Checkbox
              label={
                <Typography
                  variant="small"
                  color="gray"
                  className="flex items-center font-normal"
                >
                  I agree the
                  <a
                    href="#"
                    className="font-medium transition-colors hover:text-gray-900"
                  >
                    &nbsp;Terms and Conditions
                  </a>
                </Typography>
              }
              containerProps={{ className: "-ml-2.5" }}
            />
            <Button variant="gradient" size="lg" className="mt-8" fullWidth>
              Send Message
            </Button>
          </form>
        </div>
      </section>

      {/* Footer Section */}
      <div className="bg-white">
        <Footer />
      </div>
    </>
  );
}

export default Home;