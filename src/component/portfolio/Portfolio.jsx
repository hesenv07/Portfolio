import React from "react";
import "./portfolio.css";
import IMG1 from  "../../assets/prograz.png";
import IMG2 from  "../../assets/Weather.png";
import IMG3 from  "../../assets/todo.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Prog.az (Javascript,Bootstrap)",
    github: "https://github.com/hesenv07/Prog.az.git",
    demo: "http://prograz.com.tr.ht/",
  },
  {
    id: 2,
    image: IMG2,
    title: "Weather App (React, Fetch API)",
    github: "https://github.com/hesenv07/Wheather-React-app",
    demo: "https://hesenv07.github.io/Wheather-React-app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "Todo List (React,Tailwind CSS)",
    github: "https://github.com/hesenv07/todo-app",
    demo: "https://hesenv07.github.io/todo-app/",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio_item">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Github
                </a>
                <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

