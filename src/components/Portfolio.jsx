import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Javascript Fundamentals Quiz', 
      link: 'https://romy52112.github.io/js_code_quiz/', 
      repo: 'https://github.com/Romy52112/js_code_quiz', 
      description: 'A quiz game that tests your knowledge of Javascript fundamentals.', 
      image: '/code quiz.png', 
    },

    { title: 'Weather App', 
      link: 'https://romy52112.github.io/Weather-of-the-day', 
      repo: 'https://github.com/Romy52112/Weather-of-the-day', 
      description: 'A weather app that displays the current weather and a 5-day forecast.', 
      image: '/weather of the day.png', 
    },

    { title: 'Parks Planner', 
      link: 'https://adamh1223.github.io/parks-planner/', 
      repo: 'https://github.com/adamh1223/parks-planner', 
      description: 'A website that allows users to search for national parks and bookmark their favorites.', 
      image: '/parks planner.png', 
    },

    { title: 'Employee Tracker App', 
      link: '', 
      repo: 'https://github.com/Romy52112/Employee_Tracker_App', 
      description: 'A command-line application that allows users to manage a company\'s employee database.', 
      image: '/employee tracker.png', 
    },

    { title: 'MVC Tech Blog Challenge',
      link: 'https://mvc-tech-chalenge-eacbb274e204.herokuapp.com/',
      repo: 'https://github.com/Romy52112/MVC_Tech_Blog_Challenge',
      description: 'A full-stack application that allows users to create, read, update, and delete blog posts.',
      image: '/MVC challenge.png',
    },
    
    { title: 'Health Quest App',
      link: 'https://group4-second-project-315fcf72f19c.herokuapp.com/',
      repo: 'https://github.com/Jenina52112/HealthQuest-App',
      description: 'Health Quest is a RESTful API-based web app that aims to provide users with a place to learn and implement good health practices into their routines.Health Quest uses Node.js and Express.js to create a RESTful API, Handlebars.js as the template engine, and MySQL and the Sequelize ORM for the database. User authentication via express-session and cookies protects sensitive user information within a user account.',
      image: '/Health quest app.png',
    },
    { title: 'Meow Market',
      link: 'https://group-fivemeowmarket-c7eee0758978.herokuapp.com/',
      repo: 'https://github.com/eepitsporsche/meow_market',
      description: 'Meow Market is a full-stack web application that allows users to buy and sell cat-related products. It uses React for the frontend, Node.js and Express.js for the backend, and MongoDB as the database.',
      image: '/meow market.png',
    },

  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="grid-container">
        {projects.map((project, index) => (
          <div className= "grid-item" key={index}>
            <h3>{project.title}</h3>
            <img className= "image" src={project.image} />
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View App</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
