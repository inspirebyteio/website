const fs = require('fs');
const path = require('path');

const BLOG_POSTS_DIR = path.join(__dirname, 'public', 'blog-posts');
const OUTPUT_FILE = path.join(__dirname, 'src', 'data', 'blog-content.json');

function generateBlogContent() {
    console.log('📝 Bundling blog content...');

    if (!fs.existsSync(BLOG_POSTS_DIR)) {
        console.warn('⚠️  blog-posts directory not found in public/');
        return;
    }

    const files = fs.readdirSync(BLOG_POSTS_DIR);
    const blogMap = {};

    files.forEach(file => {
        if (file.endsWith('.md')) {
            const filePath = path.join(BLOG_POSTS_DIR, file);
            const slug = path.basename(file, '.md');
            const content = fs.readFileSync(filePath, 'utf8');

            // Basic frontmatter extraction
            const frontMatterRegex = /^---\s*\n([\s\S]*?)\n---\s*\n/;
            const match = content.match(frontMatterRegex);
            const markdownBody = match ? content.replace(frontMatterRegex, "") : content;

            blogMap[slug] = markdownBody;
            console.log(`✅ Bundled: ${slug}`);
        }
    });

    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(blogMap, null, 2));
    console.log(`🚀 Blog content saved to ${OUTPUT_FILE}`);
}

generateBlogContent();
