import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDir = path.join(process.cwd(), 'posts');

export function getPostSlugs() {
  return fs.readdirSync(postsDir).map(file => file.replace(/\.md$/, ''));
}

export function getPostBySlug(slug) {
  const fullPath = path.join(postsDir, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  return { slug, meta: data, content };
}

export async function getPostData(slug) {
  const { meta, content } = getPostBySlug(slug);
  const processed = await remark().use(html).process(content);
  const contentHtml = processed.toString();

  return {
    slug,
    meta,
    contentHtml,
  };
}

export function getAllPosts() {
  return getPostSlugs().map(slug => {
    const { meta } = getPostBySlug(slug);
    return { slug, meta };
  });
}
