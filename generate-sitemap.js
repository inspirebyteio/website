const fs = require('fs');
const path = require('path');

// Configuration
const BASE_URL = 'https://inspirebyte.io';
const PUBLIC_DIR = path.resolve(__dirname, 'public');
const DATA_DIR = path.resolve(__dirname, 'src/data');
const SITEMAP_PATH = path.join(PUBLIC_DIR, 'sitemap.xml');

// Static Routes
const staticRoutes = [
    { path: '/', priority: '1.0' },
    { path: '/about', priority: '0.8' },
    { path: '/services', priority: '0.9' },
    { path: '/team', priority: '0.6' },
    { path: '/projects', priority: '0.8' },
    { path: '/faq', priority: '0.5' },
    { path: '/contact', priority: '0.9' },
    { path: '/privacy', priority: '0.3' }
];

function generateSitemap() {
    console.log('🚀 Generating sitemap...');

    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';

    // Add Static Routes
    staticRoutes.forEach(route => {
        xml += `  <url>\n`;
        xml += `    <loc>${BASE_URL}${route.path}</loc>\n`;
        xml += `    <priority>${route.priority}</priority>\n`;
        xml += `  </url>\n`;
    });

    // Add Dynamic Service Routes
    try {
        const serviceDataPath = path.join(DATA_DIR, 'service.json');
        if (fs.existsSync(serviceDataPath)) {
            const services = JSON.parse(fs.readFileSync(serviceDataPath, 'utf8'));
            services.forEach(service => {
                xml += `  <url>\n`;
                xml += `    <loc>${BASE_URL}/services/${service.link}</loc>\n`;
                xml += `    <priority>0.7</priority>\n`;
                xml += `  </url>\n`;
            });
        }
    } catch (error) {
        console.error('❌ Error reading service.json:', error.message);
    }

    // Add Dynamic Article Routes
    try {
        const articleDataPath = path.join(DATA_DIR, 'articles.json');
        if (fs.existsSync(articleDataPath)) {
            const articles = JSON.parse(fs.readFileSync(articleDataPath, 'utf8'));
            articles.forEach(article => {
                xml += `  <url>\n`;
                xml += `    <loc>${BASE_URL}/article/${article.slug}</loc>\n`;
                xml += `    <priority>0.8</priority>\n`;
                xml += `  </url>\n`;
            });
        }
    } catch (error) {
        console.error('❌ Error reading articles.json:', error.message);
    }

    xml += '</urlset>';

    fs.writeFileSync(SITEMAP_PATH, xml);
    console.log(`✅ Sitemap successfully saved to ${SITEMAP_PATH}`);
}

generateSitemap();
