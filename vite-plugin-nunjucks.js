import nunjucks from 'nunjucks';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default function vitePluginNunjucks() {
  const templatesDir = path.resolve(__dirname, 'src/templates');
  
  // Configure Nunjucks environment
  const env = nunjucks.configure(templatesDir, {
    autoescape: true,
    watch: false
  });

  return {
    name: 'vite-plugin-nunjucks-custom',
    
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        const filename = path.basename(ctx.filename);
        
        // Map HTML files to their corresponding Nunjucks templates
        const templateMap = {
          'index.html': 'index.njk',
          'about.html': 'about.njk',
          'contact.html': 'contact.njk'
        };
        
        const templateFile = templateMap[filename];
        
        if (templateFile) {
          try {
            // Render the Nunjucks template
            const rendered = env.render(templateFile, {
              activePage: filename.replace('.html', '')
            });
            return rendered;
          } catch (error) {
            console.error(`Error rendering ${templateFile}:`, error);
            return html;
          }
        }
        
        return html;
      }
    },
    
    handleHotUpdate({ file, server }) {
      if (file.endsWith('.njk')) {
        console.log(`Nunjucks template ${path.basename(file)} changed, reloading...`);
        server.ws.send({
          type: 'full-reload',
          path: '*'
        });
      }
    }
  };
}
