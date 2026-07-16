import React, { useState } from 'react';

function Dashboard({ projects, onBackToPortfolio, onAdd, onUpdate, onDelete }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Unity');
  const [image, setImage] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [liveUrl, setLiveUrl] = useState('');
  const [techInput, setTechInput] = useState('');

  const [editingId, setEditingId] = useState(null);

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('Unity');
    setImage('');
    setGithubUrl('');
    setLiveUrl('');
    setTechInput('');
    setEditingId(null);
  };

  const handleEditClick = (project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setDescription(project.description);
    setCategory(project.category);
    setImage(project.image || '');
    setGithubUrl(project.githubUrl || '');
    setLiveUrl(project.liveUrl || '');
    setTechInput(project.technologies.join(', '));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description) {
      alert('Lütfen en azından Başlık ve Açıklama alanlarını doldurun!');
      return;
    }

    const technologiesArray = techInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t !== '');

    const projectData = {
      title,
      description,
      category,
      image,
      githubUrl,
      liveUrl,
      technologies: technologiesArray,
    };

    if (editingId) {
      onUpdate({ ...projectData, id: editingId });
    } else {
      onAdd(projectData);
    }

    resetForm();
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 font-sans pb-12">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center border-b border-zinc-900">
        <span className="text-xl font-bold text-red-500 tracking-wider">YÖNETİM PANELİ </span>
        <button 
          onClick={onBackToPortfolio}
          className="px-4 py-2 bg-zinc-900 hover:bg-zinc-800 text-white font-semibold rounded-lg transition-all text-sm"
        >
          ← Portfolyoya Dön
        </button>
      </nav>

      <main className="max-w-6xl mx-auto px-6 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        <div className="lg:col-span-1 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6 h-fit">
          <h2 className="text-xl font-bold text-white mb-4">
            {editingId ? 'Proje Düzenle ' : 'Yeni Proje Ekle '}
          </h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Proje Başlığı *</label>
              <input 
                type="text" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                placeholder="Örn: Batak Mobile"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Açıklama *</label>
              <textarea 
                rows="3"
                value={description} 
                onChange={(e) => setDescription(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                placeholder="Projenin detayları..."
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Kategori</label>
                <select 
                  value={category} 
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500"
                >
                  <option value="Unity">Unity</option>
                  <option value="Flutter">Flutter</option>
                  <option value="Web">Web</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Teknolojiler</label>
                <input 
                  type="text" 
                  value={techInput} 
                  onChange={(e) => setTechInput(e.target.value)}
                  className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                  placeholder="C#, Unity, Dart (virgülle ayır)"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Görsel URL</label>
              <input 
                type="text" 
                value={image} 
                onChange={(e) => setImage(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                placeholder="https://images.unsplash.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">GitHub URL</label>
              <input 
                type="text" 
                value={githubUrl} 
                onChange={(e) => setGithubUrl(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-zinc-400 uppercase mb-1">Canlı Demo URL</label>
              <input 
                type="text" 
                value={liveUrl} 
                onChange={(e) => setLiveUrl(e.target.value)}
                className="w-full bg-black border border-zinc-800 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:border-red-500" 
                placeholder="https://..."
              />
            </div>

            <div className="flex gap-2 pt-2">
              <button 
                type="submit" 
                className="flex-1 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-lg text-sm transition-all"
              >
                {editingId ? 'Güncelle' : 'Ekle'}
              </button>
              {editingId && (
                <button 
                  type="button" 
                  onClick={resetForm}
                  className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-2 px-4 rounded-lg text-sm transition-all"
                >
                  İptal
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="lg:col-span-2 bg-zinc-900/60 border border-zinc-800/80 rounded-2xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Kayıtlı Projeler Listesi</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-850 text-xs font-semibold text-zinc-405 uppercase">
                  <th className="py-3 px-2">Proje</th>
                  <th className="py-3 px-2">Kategori</th>
                  <th className="py-3 px-2 text-right">İşlemler</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-800/50 text-sm">
                {projects.map((project) => (
                  <tr key={project.id} className="hover:bg-zinc-800/20 transition-colors">
                    <td className="py-4 px-2">
                      <div className="font-bold text-white">{project.title}</div>
                      <div className="text-xs text-zinc-500 line-clamp-1">{project.description}</div>
                    </td>
                    <td className="py-4 px-2">
                      <span className="bg-black text-red-400 text-xs px-2 py-1 rounded border border-red-500/10">
                        {project.category}
                      </span>
                    </td>
                    <td className="py-4 px-2 text-right space-x-2">
                      <button 
                        onClick={() => handleEditClick(project)}
                        className="text-xs text-red-400 hover:text-red-300 font-semibold transition-colors"
                      >
                        Düzenle
                      </button>
                      <button 
                        onClick={() => onDelete(project.id)}
                        className="text-xs text-zinc-500 hover:text-red-500 font-semibold transition-colors"
                      >
                        Sil
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </main>
    </div>
  );
}

export default Dashboard;