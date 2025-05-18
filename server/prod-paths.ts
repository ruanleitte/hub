import path from 'path';
import { fileURLToPath } from 'url';

// Solução para o problema do import.meta.dirname em produção
export function getProjectPath(...segments: string[]): string {
  // Para ambiente de produção, usamos caminhos relativos ao diretório atual
  if (process.env.NODE_ENV === 'production') {
    return path.resolve(process.cwd(), ...segments);
  }
  
  // Para ambiente de desenvolvimento, continuamos usando import.meta.url
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = path.dirname(__filename);
  return path.resolve(__dirname, '..', ...segments);
}