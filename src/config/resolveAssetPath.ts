import { staticFile } from 'remotion';

export const resolveAssetPath = (path: string) => {
  // Evita aplicar staticFile se já estiver resolvido
  if (path.startsWith('/static-')) return path;
  return staticFile(path);
};
