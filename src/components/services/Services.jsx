import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services" data-aos="zoom-in">
      <h5>What services do I offer?</h5>
      <h2>Services</h2>
      <div className="container services__container" data-aos="zoom-in">
        <article className="service">
          <div className="service__head">
            <h3>Bootstrap 5</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
       I can create custom Bootstrap themes for any client or business
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can create clean UI designs for web applications or mobile apps.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can make a visually appealing landing pages for marketing campaigns.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can make an easy-to-use interface for online shopping.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
           I can offer maintenance services to clients enhancements to their apps.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>React</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
            I have experience with making seamless webpages for any occasion.
            </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Make UI that is desktop and mobile friendly.             
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can apply my knowledge to react native.              
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Use logic to build math-based apps.
            </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              My main talent with React are single page applications.
              </p>
            </li>
          </ul>
        </article>
        {/* END OF WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Firebase</h3>
          </div>
          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p>
                I can handle server-side logic.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can manage data using databases such as MySQL and PostgreSQL. 
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              I can build APIs that allow client-side applications to interact with the server-side.
              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
              Implement testing and debugging              </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p>
             I also deploy and manage servers              </p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  );
};

export default Services;
