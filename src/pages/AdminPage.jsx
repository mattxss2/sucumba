import React, { useState, useEffect } from 'react';
import AnimatedPage from '../components/AnimatedPage';

const API_URL = 'http://localhost:8080';
const ADMIN_PASSWORD = 'Cotopb00@';

function AdminPage() {
    // --- ESTADOS DE AUTENTICAÇÃO ---
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    // --- ESTADOS DE GESTÃO DE DADOS ---
    const [materiais, setMateriais] = useState([]);
    const [nome, setNome] = useState('');
    const [tipo, setTipo] = useState('Quartzito');
    const [description, setDescription] = useState('');
    const [videoUrl, setVideoUrl] = useState('');
    const [videoFile, setVideoFile] = useState(null);
    const [videoSource, setVideoSource] = useState('url');
    
    const [imageInputs, setImageInputs] = useState([{ id: 1, file: null }]);
    const [feedback, setFeedback] = useState('');

    // --- LÓGICA DE LOGIN E API (AGORA COMPLETA) ---

    const handleLogin = (e) => {
        e.preventDefault();
        if (password === ADMIN_PASSWORD) setIsAuthenticated(true);
        else setLoginError('Senha incorreta.');
    };

    const fetchMateriais = async () => {
        try {
            const response = await fetch(`${API_URL}/api/materiais`);
            if (!response.ok) throw new Error('Falha ao buscar dados');
            const data = await response.json();
            setMateriais(Array.isArray(data) ? data : []);
        } catch (error) {
            console.error('Erro ao buscar materiais:', error);
            setFeedback('Falha ao carregar a lista de materiais.');
        }
    };

    useEffect(() => {
        if (isAuthenticated) fetchMateriais();
    }, [isAuthenticated]);
    
    const getErrorMessage = async (response) => {
        try {
            const errorData = await response.json();
            return errorData.message || 'Ocorreu um erro desconhecido.';
        } catch {
            return response.statusText || 'Erro na comunicação com o servidor.';
        }
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Tem a certeza de que deseja apagar este material?')) return;
        setFeedback('A apagar...');
        try {
            const response = await fetch(`${API_URL}/api/materiais/${id}`, { method: 'DELETE' });
            if (!response.ok) throw new Error(await getErrorMessage(response));
            setFeedback('Material apagado com sucesso!');
            fetchMateriais();
        } catch (error) {
            console.error('Erro ao apagar:', error);
            setFeedback(`Erro ao apagar: ${error.message}`);
        }
    };

    const handleAddImageField = () => {
        setImageInputs([...imageInputs, { id: Date.now(), file: null }]);
    };

    const handleImageFileChange = (id, selectedFile) => {
        const updatedInputs = imageInputs.map(input => 
            input.id === id ? { ...input, file: selectedFile } : input
        );
        setImageInputs(updatedInputs);
    };

    const handleRemoveImageField = (id) => {
        if (imageInputs.length > 1) {
            setImageInputs(imageInputs.filter(input => input.id !== id));
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const allImages = imageInputs.map(input => input.file).filter(file => file);

        if (allImages.length === 0) {
            setFeedback('Por favor, selecione pelo menos uma imagem.');
            return;
        }
        setFeedback('A enviar...');

        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('tipo', tipo);
        formData.append('description', description);

        for (const file of allImages) {
            formData.append('imagens', file);
        }
        
        if (videoSource === 'upload' && videoFile) {
            formData.append('videoFile', videoFile);
        } else if (videoSource === 'url') {
            formData.append('videoUrl', videoUrl);
        }

        try {
            const response = await fetch(`${API_URL}/api/materiais`, { method: 'POST', body: formData });
            if (!response.ok) throw new Error(await getErrorMessage(response));
            
            setFeedback('Material adicionado com sucesso!');
            fetchMateriais();

            // Limpa o formulário de forma segura
            setNome(''); 
            setTipo('Quartzito'); 
            setDescription(''); 
            setVideoUrl(''); 
            setVideoFile(null); 
            setImageInputs([{ id: 1, file: null }]);
            e.target.reset(); // Limpa visualmente os campos de ficheiro
        } catch (error) {
            console.error("Erro detalhado no envio:", error);
            setFeedback(`Erro ao adicionar: ${error.message}`);
        }
    };
    
    // --- RENDERIZAÇÃO ---
    if (!isAuthenticated) {
        return ( <main className="main-content" style={{ textAlign: 'center' }}>
                <h1>Acesso Restrito ao Painel</h1>
                <form onSubmit={handleLogin} style={{ marginTop: '2rem' }}>
                    <input type="password" placeholder="Digite a senha" value={password} onChange={(e) => setPassword(e.target.value)} style={{ padding: '10px', marginRight: '10px', fontSize: '1rem' }}/>
                    <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer' }}>Entrar</button>
                    {loginError && <p style={{ color: 'red', marginTop: '1rem' }}>{loginError}</p>}
                </form>
            </main> );
    }

    return ( <AnimatedPage><main className="main-content">
                <h1>Painel de Administração</h1>
                <form onSubmit={handleSubmit} style={{ margin: '2rem 0 3rem 0', background: '#f9f9f9', padding: '1.5rem', borderRadius: '8px', border: '1px solid #ddd' }}>
                    <h2>Adicionar Novo Material</h2>
                    <div style={{ marginBottom: '1rem' }}><label>Tipo do Material:</label><select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}><option value="Quartzito">Quartzito</option><option value="Granito">Granito</option><option value="Mármore">Mármore</option><option value="Outro">Outro</option></select></div>
                    <div style={{ marginBottom: '1rem' }}><label>Nome do Material:</label><input type="text" value={nome} onChange={(e) => setNome(e.target.value)} required style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '5px' }} /></div>
                    <div style={{ marginBottom: '1rem' }}><label>Descrição:</label><textarea value={description} onChange={(e) => setDescription(e.target.value)} rows="4" placeholder="Fale sobre as características, aplicações, etc." style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '5px' }} /></div>
                    
                    <div style={{ marginBottom: '1rem' }}><label>Fonte do Vídeo:</label><select value={videoSource} onChange={(e) => setVideoSource(e.target.value)} style={{ width: '100%', padding: '8px', marginTop: '5px' }}><option value="url">Link do YouTube</option><option value="upload">Upload de Ficheiro (MP4)</option></select></div>
                    {videoSource === 'url' ? (<div style={{ marginBottom: '1-childd' }}><label>Link do Vídeo (YouTube):</label><input type="url" value={videoUrl} onChange={(e) => setVideoUrl(e.target.value)} placeholder="https://www.youtube.com/watch?v=..." style={{ width: '100%', padding: '8px', boxSizing: 'border-box', marginTop: '5px' }} /></div>) : (<div style={{ marginBottom: '1rem' }}><label>Ficheiro de Vídeo (MP4):</label><input type="file" onChange={(e) => setVideoFile(e.target.files[0])} accept="video/mp4" style={{ marginTop: '5px' }} /></div>)}

                    <div style={{ marginBottom: '1.5rem', border: '1px solid #ccc', padding: '1rem', borderRadius: '4px' }}>
                        <label style={{ fontWeight: 'bold' }}>Imagens do Material:</label>
                        {imageInputs.map((input, index) => (
                            <div key={input.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                                <input type="file" onChange={(e) => handleImageFileChange(input.id, e.target.files[0])} accept="image/*" required={index === 0} style={{ marginTop: '5px', flexGrow: 1 }} />
                                {imageInputs.length > 1 && <button type="button" onClick={() => handleRemoveImageField(input.id)} style={{ marginLeft: '10px', background: '#e74c3c', color: 'white', border: 'none', padding: '5px 10px', cursor: 'pointer', borderRadius: '4px' }}>X</button>}
                            </div>
                        ))}
                        <button type="button" onClick={handleAddImageField} style={{ padding: '8px 12px', cursor: 'pointer', background: '#5cb85c', color: 'white', border: 'none', borderRadius: '4px', marginTop: '10px' }}>
                            + Adicionar Mais Imagem
                        </button>
                    </div>
                    
                    <button type="submit" style={{ padding: '10px 15px', cursor: 'pointer', background: '#2c3e5c', color: 'white', border: 'none' }}>Adicionar Material</button>
                    {feedback && <p style={{ marginTop: '1rem' }}>{feedback}</p>}
                </form>
                <div><h2>Materiais na Coleção</h2><table style={{ width: '100%', borderCollapse: 'collapse' }}><thead><tr><th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Imagem</th><th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Nome</th><th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Ação</th></tr></thead>
                        <tbody>{materiais.map(item => (<tr key={item._id}><td style={{ border: '1px solid #ddd', padding: '8px' }}><img src={item.imagens && item.imagens.length > 0 ? `${API_URL}${item.imagens[0]}` : 'https://placehold.co/400x300?text=Sem+Imagem'} alt={item.nome} width="100"/></td><td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.nome}</td><td style={{ border: '1px solid #ddd', padding: '8px' }}><button onClick={() => handleDelete(item._id)} style={{ background: '#e74c3c', color: 'white', border: 'none', padding: '8px', cursor: 'pointer' }}>Apagar</button></td></tr>))}</tbody>
                    </table></div></main></AnimatedPage> );
}

export default AdminPage;

