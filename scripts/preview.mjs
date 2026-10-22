// Local QA only. Cloudflare Pages serves out/ directly without this process.
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('out');
const port = Number(process.env.PORT || 3000);
const types = {
  '.html': 'text/html; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg',
  '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2',
};
try { await stat(resolve(root, 'index.html')); }
catch { console.error('Static export missing. Run npm run build first.'); process.exit(1); }

createServer(async (request, response) => {
  if (!['GET', 'HEAD'].includes(request.method)) {
    response.writeHead(405, { Allow: 'GET, HEAD' }); response.end(); return;
  }
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, `.${pathname}`);
    if (file !== root && !file.startsWith(root + sep)) {
      response.writeHead(403); response.end(); return;
    }
    let selected;
    for (const candidate of [file, resolve(file, 'index.html'), `${file}.html`]) {
      try { if ((await stat(candidate)).isFile()) { selected = candidate; break; } } catch {}
    }
    const status = selected ? 200 : 404;
    selected ||= resolve(root, '404.html');
    const content = await readFile(selected);
    const type = selected === resolve(root, 'opengraph-image') ? 'image/png' : types[extname(selected)] || 'application/octet-stream';
    response.writeHead(status, { 'Content-Type': type, 'Content-Length': content.length });
    response.end(request.method === 'HEAD' ? undefined : content);
  } catch { response.writeHead(400); response.end('Bad request'); }
}).listen(port, '127.0.0.1', () => console.log(`Static preview: http://127.0.0.1:${port}`));
