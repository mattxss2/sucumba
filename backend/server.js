import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
import multer from 'multer';
import { fileURLToPath } from 'url';
import fs from 'fs';

dotenv.config();

const app = express();
const PORT = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middlewares
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Conexão com o Banco de Dados
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('✅ Cozinha conectada ao estoque (MongoDB)!'))
  .catch((err) => console.error('❌ Erro de conexão com o estoque:', err));

// --- Schema e Modelo do Material ---
const materialSchema = new mongoose.Schema({
  nome: { type: String, required: true, trim: true },
  tipo: { type: String, required: true, trim: true },
  description: { type: String, default: '' },
  imagens: [{ type: String, required: true }],
  videoUrl: { type: String, default: '' }
});
const Material = mongoose.model('Material', materialSchema);

// --- Configuração do Multer ---
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname),
});

const upload = multer({ 
    storage: storage,
    limits: { fileSize: 100 * 1024 * 1024 } // Limite de 100MB por ficheiro
}).fields([
    { name: 'imagens', maxCount: 10 },
    { name: 'videoFile', maxCount: 1 }
]);

// --- Rota da API ---
const router = express.Router();

// --- Middleware para apanhar erros do Multer ---
const handleUpload = (req, res, next) => {
    upload(req, res, function (err) {
        if (err instanceof multer.MulterError) {
            console.error("Erro do Multer:", err);
            return res.status(400).json({ message: `Erro de Upload: ${err.message}` });
        } else if (err) {
            console.error("Erro Desconhecido no Upload:", err);
            return res.status(500).json({ message: `Erro desconhecido no upload: ${err.message}` });
        }
        next();
    });
};

router.get('/materiais', async (req, res) => {
  const materiais = await Material.find().sort({ nome: 1 });
  res.json(materiais);
});

// Rota GET por ID agora está completa
router.get('/materiais/:id', async (req, res) => {
  try {
    const material = await Material.findById(req.params.id);
    if (!material) {
      return res.status(404).json({ message: 'Material não encontrado' });
    }
    res.json(material);
  } catch (error) {
    console.error(`Erro ao buscar material com ID ${req.params.id}:`, error);
    res.status(500).json({ message: 'Erro interno ao buscar o material.' });
  }
});

// A rota POST agora tem mais logging para depuração
router.post('/materiais', handleUpload, async (req, res) => {
  console.log('--- A processar novo material ---');
  try {
    if (!req.files) {
        console.error('Erro: req.files não está definido. O upload falhou antes da rota.');
        return res.status(400).json({ message: 'Nenhum ficheiro foi recebido. Verifique a configuração do upload.' });
    }
    console.log('Ficheiros recebidos:', Object.keys(req.files));
    console.log('Corpo do pedido:', req.body);

    const imagens = req.files['imagens'];
    const videoFile = req.files['videoFile'] ? req.files['videoFile'][0] : null;

    if (!imagens || imagens.length === 0) {
      console.log('Validação falhou: Nenhuma imagem enviada.');
      return res.status(400).json({ message: 'Nenhuma imagem foi enviada.' });
    }
    const caminhosDasImagens = imagens.map(file => `/uploads/${file.filename}`);
    console.log('Caminhos das imagens:', caminhosDasImagens);
    
    let videoFinalUrl = '';
    if (req.body.videoUrl) {
        videoFinalUrl = req.body.videoUrl;
        console.log('URL de vídeo do YouTube fornecida:', videoFinalUrl);
    } else if (videoFile) {
        videoFinalUrl = `/uploads/${videoFile.filename}`;
        console.log('Ficheiro de vídeo local fornecido:', videoFinalUrl);
    }

    const novoMaterial = new Material({
      nome: req.body.nome,
      tipo: req.body.tipo,
      description: req.body.description,
      imagens: caminhosDasImagens,
      videoUrl: videoFinalUrl,
    });
    
    console.log('A guardar novo material no banco de dados...');
    await novoMaterial.save();
    console.log('Material guardado com sucesso!');
    res.status(201).json(novoMaterial);
  } catch (error) {
    console.error('Erro CRÍTICO ao adicionar material:', error);
    res.status(500).json({ message: 'Erro interno ao salvar o material.', error: error.message });
  }
});

router.delete('/materiais/:id', async (req, res) => {
    try {
        const material = await Material.findById(req.params.id);
        if (!material) {
            return res.status(404).json({ message: "Material não encontrado para apagar." });
        }
        
        const deleteFile = (fileUrl) => {
            if (fileUrl && fileUrl.startsWith('/uploads/')) {
                const filename = path.basename(fileUrl);
                const filePath = path.join(__dirname, 'uploads', filename);
                if (fs.existsSync(filePath)) {
                    fs.unlink(filePath, (err) => {
                        if (err) console.error(`Falha ao apagar ficheiro: ${filePath}`, err);
                    });
                }
            }
        };
        
        material.imagens.forEach(deleteFile);
        deleteFile(material.videoUrl);

        await Material.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Material apagado com sucesso!' });
    } catch (error) {
        console.error('Erro ao apagar material:', error);
        res.status(500).json({ message: 'Erro interno ao apagar o material.', error: error.message });
    }
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`🚀 Cozinha (Backend) aberta na porta http://localhost:${PORT}`);
});

