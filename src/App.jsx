import React, { useState, useEffect } from 'react';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';
import { initialProjects } from './constants/initialProjects';

function App() {
  const [projects, setProjects] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);


  useEffect(() => {
    const storedProjects = localStorage.getItem('my_portfolio_projects');
    if (storedProjects) {
      setProjects(JSON.parse(storedProjects));
    } else {
      localStorage.setItem('my_portfolio_projects', JSON.stringify(initialProjects));
      setProjects(initialProjects);
    }
  }, []);

  // Yardımcı Fonksiyon  Değişiklikleri hem state'e hem LocalStorage'a kaydet
  const saveProjects = (updatedList) => {
    setProjects(updatedList);
    localStorage.setItem('my_portfolio_projects', JSON.stringify(updatedList));
  };

  //  CREATE 
  const handleAddProject = (newProject) => {
    const updated = [...projects, { ...newProject, id: Date.now().toString() }];
    saveProjects(updated);
  };

  //  UPDATE 
  const handleUpdateProject = (updatedProject) => {
    const updated = projects.map((p) => (p.id === updatedProject.id ? updatedProject : p));
    saveProjects(updated);
  };

  //  DELETE 
  const handleDeleteProject = (id) => {
    if (window.confirm('Bu projeyi silmek istediğine emin misin?')) {
      const updated = projects.filter((p) => p.id !== id);
      saveProjects(updated);
    }
  };

  return (
    <div>
      {isAdmin ? (
        <Dashboard 
          projects={projects} 
          onBackToPortfolio={() => setIsAdmin(false)} 
          onAdd={handleAddProject}
          onUpdate={handleUpdateProject}
          onDelete={handleDeleteProject}
        />
      ) : (
        <Portfolio 
          projects={projects} 
          onAdminClick={() => setIsAdmin(true)} 
        />
      )}
    </div>
  );
}

export default App;