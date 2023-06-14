import React from "react";
import "./portfolio.css";
import Img1 from "../../assets/1PESO.jpg";
import Img2 from "../../assets/1pound.jpg";
import Img3 from "../../assets/1PONG.png";
import Img4 from "../../assets/1SCREEN.JPG";
import Img5 from "../../assets/ECCOMMERCE.webp";
import Img6 from "../../assets/BOOT.png";

const Portfolio = () => {

  const data=[
    {
      id:1,
      image:Img1,
      title:"Peso-Tax Calculator",
      github:"https://github.com/NTR64/-USD-Tax-Calculator",
      demo:"https://dribbble.com/shots/21284170-Peso-Tax-Calculator"
    },
    {
      id:2,
      image:Img2,
      title:"BMI-Calculator",
      github:"https://github.com/NTR64/My-BMI-calculator",
      demo:"https://dribbble.com/shots/21149069-BMI-Calculator"
    },
    {
      id:3,
      image:Img3,
      title:"Pong",
      github:"https://github.com/NTR64/React-Native-Pong",
      demo:"https://dribbble.com/shots/21131660-Pong"
    },
    {
      id:4,
      image:Img4,
      title:"Custom Instagram theme",
      github:"https://github.com/NTR64/IG-Clone",
      demo:"https://dribbble.com/shots/21088279-Instagram-Custom-theme-concept"
    },
    {
      id:5,
      image:Img5,
      title:"Ecommerce Website.",
      github:"https://github.com/NTR64/The-King-Store",
      demo:"https://dribbble.com/shots/21035356-4-Kings-and-Queens-Ecommerce-Site"
    },
    {
      id:6,
      image:Img6,
      title:"Landing Page",
      github:"https://github.com/NTR64/Green-Tomato-Landing-Page",
      demo:"https://dribbble.com/shots/20877979-Landing-Page-1?added_first_shot=true"
    }
  ]

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Projects</h2>
      <div className="container portfolio__container" data-aos="zoom-in">
        {data.map(({id,image,title,github,demo})=>{
          return(
              <article className="portfolio__item">
              <div className="protfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                >
                  Live Demo
                </a>
              </div>
            </article>
            )
        })}
      </div>
    </section>
  );
};

export default Portfolio;
