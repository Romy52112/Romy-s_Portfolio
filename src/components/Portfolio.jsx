import React from 'react';

function Portfolio() {
  const projects = [
    { title: 'Parks Planner', link: 'url-to-deployed-app', repo: 'url-to-github-repo' },
    // Add more projects as needed
  ];

  return (
    <section>
      <h2>Portfolio</h2>
      <div>
        {projects.map((project, index) => (
          <div key={index}>
            <h3>{project.title}</h3>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View App</a>
            <a href={project.repo} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
