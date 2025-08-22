const params = new URLSearchParams(window.location.search);
const projectId = params.get('id');

fetch('assets/data/projects.json')
  .then((res) => res.json())
  .then((projects) => {
    if (projectId && projects[projectId]) {
      const data = projects[projectId];
      document.getElementById('project-title').textContent = data.title;
      document.getElementById('project-image').src = data.image;
      document.getElementById('project-description').textContent = data.description;
      document.getElementById('project-link').href = data.link;
      document.getElementById('project-challenges').textContent = data.challenges || '—';
      document.getElementById('project-learnings').textContent = data.learnings || '—';

      const processContainer = document.getElementById('project-process');
      if (data.process) {
        const paragraphs = data.process.split(/\.\s+(?=[A-Z])/);
        paragraphs.forEach((p) => {
          const para = document.createElement('p');
          para.textContent = p.trim();
          processContainer.appendChild(para);
        });
      } else {
        processContainer.innerHTML = '<p>—</p>';
      }

      const techList = document.getElementById('project-techs');
      const featuresList = document.getElementById('project-features');

      if (data.techs) {
        data.techs.forEach((tech) => {
          const li = document.createElement('li');
          li.textContent = tech;
          techList.appendChild(li);
        });
      }

      if (data.features) {
        data.features.forEach((f) => {
          const li = document.createElement('li');
          li.textContent = f;
          featuresList.appendChild(li);
        });
      }
    } else {
      document.body.innerHTML = "<div style='padding: 40px; font-size: 1.5rem;'>❌ Project not found. <a href='index.html'>Back to Home</a></div>";
    }
  })
  .catch((err) => {
    console.error('Error loading projects.json:', err);
    document.body.innerHTML = "<div style='padding: 40px; font-size: 1.5rem;'>⚠️ Failed to load project data. <a href='index.html'>Back to Home</a></div>";
  });
