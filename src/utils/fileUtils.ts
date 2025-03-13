import fs from 'fs';    
export function getFilesInDirectory(directory: string): string[] {
  return fs.readdirSync(directory);
}