import React, { useState } from 'react';
import { timelineEvents } from '../constants/initialProjects';

function Portfolio({ projects, onAdminClick }) {
  const [selectedCategory, setSelectedCategory] = useState('Hepsi');

  const categories = ['Hepsi', ...new Set(projects.map(p => p.category))];

  const filteredProjects = selectedCategory === 'Hepsi'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  // Yetenek ve Teknolojiler Verisi
  const skills = [
    {
      title: "Oyun Geliştirme",
      icon: "🎮",
      techs: ["Unity", "C#", "2D Pixel Art", "Modüler UI / Loading Screens"]
    },
    {
      title: "Mobil Uygulama",
      icon: "📱",
      techs: ["Flutter", "Dart", "Cross-Platform", "Mobile Game Mechanics"]
    },
    {
      title: "Frontend Web",
      icon: "🌐",
      techs: ["ReactJS", "Vite", "Tailwind CSS", "HTML5 & CSS3"]
    },
    {
      title: "Backend & Veritabanı",
      icon: "🗄️",
      techs: ["PostgreSQL", "Valentina", "Çok Katmanlı Mimari", "OOP (C++, Java, C#)"]
    },
    {
      title: "Araçlar & Metodolojiler",
      icon: "🤝",
      techs: ["Git & GitHub", "Takım Koordinasyonu", "Sprint / Agile Mantığı", "Hackathon Prototipleme"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans pb-24">
      
      {/* 1. Üst Menü / Navbar */}
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center border-b border-zinc-900">
        <span className="text-xl font-bold text-red-500 tracking-wider">DEV.PORTFOLIO</span>
        <button 
          onClick={onAdminClick}
          className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-red-500 font-semibold rounded-lg transition-all text-sm border border-red-500/20 shadow-sm shadow-red-500/5"
        >
          Yönetim Paneli 
        </button>
      </nav>

      {/* 2. Hero (Profil Fotoğrafı & Tanıtım) */}
      <header className="max-w-4xl mx-auto text-center px-6 pt-16 pb-12 flex flex-col items-center">
        
        {/* Profil Fotoğrafı Dairesi */}
        <div className="w-64 h-64 rounded-full border-4 border-red-500/30 p-1 mb-6 relative group">
          <div className="absolute inset-0 rounded-full bg-red-500/20 blur group-hover:blur-md transition-all"></div>
          <div className="w-full h-full rounded-full overflow-hidden bg-zinc-900 relative z-10 flex items-center justify-center border border-red-500">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSf7qjK4QzpXfylvPQZrQ-ZYCu1Ey-RUPFBirTNvRssGw&s"
              alt="Profil"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Merhaba, Ben <span className="text-red-500">Yusuf Büyüktaş</span>
        </h1>
        <p className="text-base md:text-lg text-zinc-400 leading-relaxed max-w-2xl mx-auto">
          Software Engineering Student | Unity Game Developer | C# & Java Spring Boot | Technical Artist. Ürettiğim işleri ve yolculuğumu aşağıda inceleyebilirsin.
        </p>
      </header>

      {/* 3. YETENEKLER & TECH STACK BÖLÜMÜ (Yeni Eklenen Kısım) */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-center text-white mb-10 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-zinc-800"></span>
          Teknik Yetkinliklerim
          <span className="w-8 h-px bg-zinc-800"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/60 hover:border-red-500/30 transition-all duration-350 flex flex-col justify-between"
            >
              <div>
                <div className="text-3xl mb-3">{skill.icon}</div>
                <h3 className="text-sm font-bold text-white mb-4 tracking-wide border-b border-zinc-800 pb-2">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.techs.map((tech, tIndex) => (
                    <li key={tIndex} className="text-xs text-zinc-400 flex items-center gap-1.5">
                      <span className="w-1 h-1 bg-red-500 rounded-full"></span>
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Projeler Bölümü */}
      <section className="max-w-6xl mx-auto px-6 py-12 border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-center text-white mb-8 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-zinc-800"></span>
          Projelerim
          <span className="w-8 h-px bg-zinc-800"></span>
        </h2>

        {/* Kategori Filtreleri */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                  : 'bg-zinc-900 hover:bg-zinc-800 text-zinc-400 border border-zinc-850'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Proje Kartları Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              className="bg-zinc-900/60 rounded-xl border border-zinc-800/80 overflow-hidden flex flex-col hover:border-red-500/30 transition-all duration-300 shadow-xl"
            >
              <div className="h-44 overflow-hidden bg-black relative">
                <img 
                  src={project.image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600"} 
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 hover:opacity-85 transition-opacity"
                />
                <span className="absolute top-3 right-3 bg-black text-red-400 text-[10px] px-2.5 py-1 rounded border border-red-500/20 font-bold uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-xs text-zinc-400 mb-4 line-clamp-3 leading-relaxed">{project.description}</p>
                </div>

                <div>
                  <div className="flex flex-wrap gap-1 mb-4">
                    {project.technologies.map(tech => (
                      <span key={tech} className="bg-black text-zinc-400 text-[10px] px-2 py-0.5 rounded border border-zinc-800">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 border-t border-zinc-800/80 pt-3 text-xs">
                    {project.githubUrl && (
                      <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-400 font-medium transition-colors">
                        GitHub ↗
                      </a>
                    )}
                    {project.liveUrl && (
                      <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-red-400 font-medium transition-colors">
                        Canlı Demo ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Kırmızı Devre Temalı Zaman Çizgisi (Timeline) */}
      <section className="max-w-4xl mx-auto px-6 py-12 border-t border-zinc-900">
        <h2 className="text-2xl font-bold text-center text-white mb-16 flex items-center justify-center gap-2">
          <span className="w-8 h-px bg-zinc-800"></span>
          Yolculuğum
          <span className="w-8 h-px bg-zinc-800"></span>
        </h2>

        {/* Devre Yolu Zaman Çizgisi Alanı */}
        <div className="relative">
          
          {/* Neon Kırmızı Devre Hattı (Dikey Ana Hat) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-zinc-800">
            {/* Akan Işık / Enerji Efekti (Kırmızı) */}
            <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_8px_#ef4444]"></div>
          </div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={event.id} className="relative flex items-center justify-between md:flex-row flex-col">
                  
                  {/* SOL BLOK */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right text-left' : 'md:order-last text-left'}`}>
                    <div className="bg-zinc-900/40 p-5 rounded-xl border border-zinc-800/80 hover:border-red-500/20 transition-all shadow-md relative">
                      <span className="text-xs font-bold text-red-500 tracking-wider block mb-1">{event.date}</span>
                      <h3 className="text-base font-bold text-white mb-2">{event.title}</h3>
                      <p className="text-xs text-zinc-400 leading-relaxed">{event.description}</p>
                      
                      {/* Yatay Devre Çizgisi (Kırmızı) */}
                      <div className={`hidden md:block absolute top-1/2 w-8 h-[2px] bg-red-500/30 ${
                        isEven 
                          ? '-right-8 border-r border-t border-red-400/50' 
                          : '-left-8 border-l border-t border-red-400/50'
                      }`}></div>
                    </div>
                  </div>

                  {/* MERKEZ: Devre Düğümü (Microchip Node - Kırmızı) */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-md bg-zinc-900 border-2 border-red-500 flex items-center justify-center z-10 shadow-[0_0_10px_rgba(239,68,68,0.3)] rotate-45">
                    <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></div>
                  </div>

                  {/* BOŞ BLOK */}
                  <div className="hidden md:block w-[45%]"></div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

    </div>
  );
}

export default Portfolio;