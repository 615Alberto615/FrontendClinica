
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/FrontendClinica/', // Cambia esto a tu repositorio
  plugins: [react()],
  build: {
    outDir: 'dist' 
    //hbjhbj
    // Cambia esto si tu directorio de salida es diferente
  }
});
