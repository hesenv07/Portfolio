import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>

      <div className="container services_container">
       
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service_head">
            <h3>Web Development</h3>
          </div>

          <ul className="service_list">
          <li>
              <BiCheck className="service_list-icon" />
              <p>
              Testing to identify bugs and technical issues before and after deploying.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Coding of responsive, fast, semantic and SEO compatible websites
              </p>
            </li>
            
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Documenting bug reports, tickets, and any code changes.
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Using modern development tools like React, Typescript</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                To make the site more secure with different npm packages and 2nd
                party technologies
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Bringing mock-ups to life using HTML, CSS, JavaScript.</p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Coding designs designed in programs such as Adobe XD, Figma</p>
            </li>
          </ul>
        </article>
     {/* SEO */}
     <article className="service">
          <div className="service_head">
            <h3>SEO</h3>
          </div>

          <ul className="service_list">
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Developing optimization strategies that increase the company's
                website search engine result ranking
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Especially skilled in data analysis using tools like Knime
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Broad knowledge of HTML, CSS, and JavaScript
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
                Taking responsibility for on-page optimization for search engine
                marketing
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>
              Strong communication, collaboration, and leadership skills
              </p>
            </li>
            <li>
              <BiCheck className="service_list-icon" />
              <p>Writing informational and reader-friendly reports</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  );
};

export default Services;

