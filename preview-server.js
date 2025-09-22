import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startPreviewServer() {
  const app = express();
  
  // Middleware para logs
  app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
    next();
  });
  
  // Servir arquivos estáticos da pasta dist
  app.use('/rea-website', express.static(path.join(__dirname, 'dist')));
  
  // Redirect root para a base URL
  app.get('/', (req, res) => {
    res.redirect('/rea-website/');
  });
  
  // Fallback para SPA (Single Page Application)
  app.use((req, res) => {
    if (req.path.startsWith('/rea-website')) {
      res.sendFile(path.join(__dirname, 'dist', 'index.html'));
    } else {
      res.status(404).send('Not found');
    }
  });
  
  const server = app.listen(4173, '0.0.0.0', () => {
    console.log(`Preview server running at http://0.0.0.0:4173/rea-website/`);
    console.log(`Server started successfully!`);
  });
  
  return server;
}

startPreviewServer();