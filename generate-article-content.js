const fs = require('fs');
const path = require('path');

const ARTICLE_POSTS_DIR = path.join(__dirname, 'public', 'article-posts');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'article-content.json');

function generateArticleContent() {
    console.log('📝 Bundling article content...');

    if (!fs.existsSync(ARTICLE_POSTS_DIR)) {
        console.warn('⚠️  article-posts directory not found in public/');
        return;
    }

    const files = fs.readdirSync(ARTICLE_POSTS_DIR);
    const articleMap = {};

    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(ARTICLE_POSTS_DIR, file);
            const slug = path.basename(file, '.md');
            const content = fs.readFileSync(filePath, 'utf8');

            // Basic frontmatter extraction
            const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
            const match = content.match(frontMatterRegex);
            const markdownBody = match ? content.replace(frontMatterRegex, "") : content;

            articleMap[slug] = markdownBody;
            console.log(`✅ Bundled: ${slug}`);
        }
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(articleMap, null, 2));
    console.log(`🚀 Article content saved to ${OUTPUT_FILE}`);
}

generateArticleContent();
