import React from "react";
import "./testimonials.css";
import Avtr1 from "../../assets/nucamp.png";
import Avtr2 from "../../assets/react2.png";
import Avtr3 from "../../assets/bootstrap4.svg";
import Avtr4 from "../../assets/node.png";
// import Swiper core and required modules
import {Pagination} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
  const data = [
    {
      avater: Avtr1,
      name: "Where did I get my education from?",
      review:
        " Nucamp's curriculum covers front-end and back-end web development, mobile development for iOS and Android, and software development with Java and C#. The program is broken down into three phases, each lasting several weeks, with classes held on weekends and evenings to accommodate students who work or have other commitments during the day. ",
    },
    {
      avater: Avtr2,
      name: "React Skills",
      review:
        " I have certifications in the #1 Javascript library for building websites. I have mastery in the advanced aspects such as JavaScript ES6, functional components using React Hooks and I can develop state-aware applications using the latest redux toolkit.",
    },
    {
      avater: Avtr3,
      name: "Bootstrap experience",
      review:
        "In this course I have learned how to build websites that can be developed once for all screen sizes using the Bootstrap library. I used grids and responsive design, Bootstrap CSS and JavaScript components.",
    },
    {
      avater: Avtr4,
      name: "Education in Node Package Manager",
      review:
        " I know how to store data in the back-end and integrate it with a website and mobile application. I also know how to authenticate users and apply the fundamentals of cybersecurity. NodeJS is the server-side foundation and MongoDB the database engine, both open-source and free to use.",
    }
  ];

  return (
    <section id="testimonials" data-aos="zoom-in">
      <h5>Certifications</h5>
      <h2>Education</h2>
      <Swiper className="container testimonials__container"
            modules={[Pagination]}
            spaceBetween={20}
            slidesPerView={2}
            pagination={{ clickable: true }}
            autoplay={{ delay: 30000, disableOnInteraction: false }}
      >
        {data.map(({avater,name,review},index)=>{
          return(
            <SwiperSlide key={index} className="testimonial">
            <div className="client__avatar" data-aos="zoom-in">
              <img src={avater} alt="client image" />
            </div>
            <h5 className="client__name">{name}</h5>
            <small className="client__review">{review}</small>
          </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
