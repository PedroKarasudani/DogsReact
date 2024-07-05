# Configuração inicial 

npm create vite@latest .
npm install react-router-dom prop-types vite-plugin-svgr

Modificar o vite.config.js : adicionar 
  import svgr from 'vite-plugin-svgr';
  plugins: [react(), svgr()],
