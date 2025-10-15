import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AnimatedPage from '../components/AnimatedPage';

const API_URL = 'http://localhost:8080';

// Função para extrair o ID de um vídeo do YouTube
function getYouTubeEmbedUrl(url) {
    if (!url || !url.includes('youtube.com') && !url.includes('youtu.be')) return null;
    let videoId = null;
    try {
        const urlObj = new URL(url);
        if (urlObj.hostname === 'youtu.be') {
            videoId = urlObj.pathname.slice(1);
        } else if (urlObj.hostname.includes('youtube.com')) {
            videoId = urlObj.searchParams.get('v');
        }
        return videoId ? `https://www.youtube.com/embed/${videoId}` : null;
    } catch (error) {
        return null;
    }
}

// Componente para renderizar o vídeo
const VideoPlayer = ({ videoUrl }) => {
    // 1. Verifica se é um link do YouTube
    const embedUrl = getYouTubeEmbedUrl(videoUrl);
    if (embedUrl) {
        return (
            <div className="responsive-iframe-container">
                <iframe 
                    src={embedUrl} 
                    title="Vídeo do Material no YouTube"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                ></iframe>
            </div>
        );
    }
    // 2. Verifica se é um ficheiro local (upload)
    if (videoUrl.startsWith('/uploads/')) {
        return (
            <video width="100%" controls style={{ borderRadius: '8px', maxHeight: '500px' }}>
                <source src={`${API_URL}${videoUrl}`} type="video/mp4" />
                O seu navegador não suporta a tag de vídeo.
            </video>
        );
    }
    // 3. Se não for nenhum dos dois, não renderiza nada
    return null;
};

function StoneDetailPage() {
  const { id } = useParams();
  const [material, setMaterial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/api/materiais/${id}`)
      .then(res => res.json())
      .then(data => {
        setMaterial(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar detalhes do material:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <main className="main-content"><p style={{textAlign: 'center'}}>A carregar detalhes...</p></main>;
  }

  if (!material) {
    return <main className="main-content"><h1>Material não encontrado</h1></main>;
  }

  return (
    <AnimatedPage>
      <main className="main-content">
        <p className="stone-detail-type">{material.tipo}</p>
        <h1 className="stone-detail-title">{material.nome}</h1>

        {material.description && (
          <p className="stone-detail-description">{material.description}</p>
        )}
        
        {/* Renderiza o vídeo apenas se houver um videoUrl */}
        {material.videoUrl && (
            <div className="video-container">
                <h2>Vídeo do Material</h2>
                <VideoPlayer videoUrl={material.videoUrl} />
            </div>
        )}

        <div className="stone-detail-gallery">
            <h2>Galeria de Imagens</h2>
            <div className="gallery-grid-container">
              {material.imagens.map((imagemUrl, index) => (
                <img 
                  key={index}
                  src={`${API_URL}${imagemUrl}`} 
                  alt={`${material.nome} - Imagem ${index + 1}`}
                />
              ))}
            </div>
        </div>
      </main>
    </AnimatedPage>
  );
}

export default StoneDetailPage;

